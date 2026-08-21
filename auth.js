/**
 * SW_AUTH — 사이트 공통 인증 상태 (Auth Context 역할)
 *
 * 빌드 도구 없는 정적 사이트용 바닐라 구현.
 * 다른 기능(예: 추후 북마크)은 Supabase Auth를 직접 호출하지 말고
 * window.SW_AUTH 를 통해 현재 사용자 정보를 가져온다.
 *
 *   await SW_AUTH.ready;              // 최초 세션 복원 완료 대기
 *   SW_AUTH.isLoggedIn();             // boolean
 *   SW_AUTH.getUser();                // { id, email, name } | null
 *   SW_AUTH.subscribe(fn);            // 구독 즉시 1회 + 변경 시마다 호출. unsubscribe 반환
 *   SW_AUTH.signIn(email, password);  // -> { ok, error }
 *   SW_AUTH.signUp(name, email, pw);  // -> { ok, error }
 *   SW_AUTH.signOut();                // -> { ok, error }
 *   SW_AUTH.client                    // 원본 Supabase 클라이언트 (DB 쿼리용)
 *
 * 비밀번호는 Supabase Auth에 그대로 위임한다. 여기서 저장하거나 해싱하지 않는다.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'sw-auth';

  // ── 한국어 오류 메시지 ────────────────────────────────────────
  // Supabase 원문 오류는 절대 사용자에게 노출하지 않는다.
  var MSG = {
    INVALID_CREDENTIALS: '이메일 또는 비밀번호가 올바르지 않습니다.',
    EMAIL_TAKEN: '이미 가입된 이메일입니다. 로그인을 이용해주세요.',
    INVALID_EMAIL: '올바른 이메일 주소를 입력해주세요.',
    WEAK_PASSWORD: '비밀번호 조건을 확인해주세요.',
    GENERIC: '일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
    NEEDS_CONFIRM: '가입은 되었지만 이메일 인증이 필요한 설정입니다. 메일함을 확인해주세요.',
    NOT_READY: '인증 서비스를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.',
  };

  /** Supabase 오류를 한국어 문구로 변환. error.code 우선, message는 폴백. */
  function mapAuthError(error) {
    if (!error) return MSG.GENERIC;

    var code = String(error.code || error.error_code || '').toLowerCase();
    var msg = String(error.message || '').toLowerCase();

    if (code === 'invalid_credentials' || msg.indexOf('invalid login credentials') !== -1) {
      return MSG.INVALID_CREDENTIALS;
    }
    if (
      code === 'user_already_exists' ||
      code === 'email_exists' ||
      msg.indexOf('already registered') !== -1 ||
      msg.indexOf('already been registered') !== -1 ||
      msg.indexOf('user already exists') !== -1
    ) {
      return MSG.EMAIL_TAKEN;
    }
    if (
      code === 'email_address_invalid' ||
      msg.indexOf('unable to validate email') !== -1 ||
      msg.indexOf('invalid email') !== -1 ||
      (code === 'validation_failed' && msg.indexOf('email') !== -1)
    ) {
      return MSG.INVALID_EMAIL;
    }
    if (
      code === 'weak_password' ||
      msg.indexOf('password should be at least') !== -1 ||
      msg.indexOf('password is too short') !== -1 ||
      (msg.indexOf('password') !== -1 && msg.indexOf('characters') !== -1)
    ) {
      return MSG.WEAK_PASSWORD;
    }
    return MSG.GENERIC;
  }

  // ── 내부 상태 ────────────────────────────────────────────────
  var client = null;
  var currentUser = null; // { id, email, name } | null
  var listeners = [];
  var resolveReady;
  var ready = new Promise(function (resolve) {
    resolveReady = resolve;
  });

  /** Supabase user 객체 → 앱에서 쓰는 얇은 형태로 정규화 */
  function toAppUser(user) {
    if (!user) return null;
    var meta = user.user_metadata || {};
    var email = user.email || '';
    var name = meta.name || meta.full_name || meta.user_name || '';
    if (!name) name = email ? email.split('@')[0] : '사용자';
    return { id: user.id, email: email, name: name };
  }

  function snapshot() {
    return currentUser ? { id: currentUser.id, email: currentUser.email, name: currentUser.name } : null;
  }

  function setUser(user) {
    currentUser = toAppUser(user);
    for (var i = 0; i < listeners.length; i++) {
      try {
        listeners[i](snapshot());
      } catch (e) {
        console.error('[SW_AUTH] 구독자 오류:', e);
      }
    }
  }

  // ── 초기화 ───────────────────────────────────────────────────
  function init() {
    var cfg = window.SW_SUPABASE_CONFIG;
    var lib = window.supabase;

    if (!lib || typeof lib.createClient !== 'function') {
      console.error('[SW_AUTH] supabase-js를 불러오지 못했습니다.');
      resolveReady(null);
      return;
    }
    if (!cfg || !cfg.url || !cfg.publishableKey) {
      console.error('[SW_AUTH] supabase-config.js 설정이 없습니다.');
      resolveReady(null);
      return;
    }

    client = lib.createClient(cfg.url, cfg.publishableKey, {
      auth: {
        persistSession: true, // 새로고침 후 세션 유지 (localStorage)
        autoRefreshToken: true,
        detectSessionInUrl: false, // 이메일/비밀번호만 쓰므로 URL 파싱 불필요
        storageKey: STORAGE_KEY,
      },
    });

    // 세션 변화를 하나의 창구에서 관리
    client.auth.onAuthStateChange(function (_event, session) {
      setUser(session ? session.user : null);
    });

    client.auth
      .getSession()
      .then(function (res) {
        setUser(res && res.data && res.data.session ? res.data.session.user : null);
      })
      .catch(function (e) {
        console.error('[SW_AUTH] 세션 복원 실패:', e);
        setUser(null);
      })
      .then(function () {
        resolveReady(snapshot());
      });
  }

  // ── 공개 API ─────────────────────────────────────────────────
  function signIn(email, password) {
    if (!client) return Promise.resolve({ ok: false, error: MSG.NOT_READY });
    return client.auth
      .signInWithPassword({ email: String(email || '').trim(), password: password })
      .then(function (res) {
        if (res.error) return { ok: false, error: mapAuthError(res.error) };
        return { ok: true, error: null };
      })
      .catch(function (e) {
        console.error('[SW_AUTH] signIn 실패:', e);
        return { ok: false, error: MSG.GENERIC };
      });
  }

  function signUp(name, email, password) {
    if (!client) return Promise.resolve({ ok: false, error: MSG.NOT_READY });
    var cleanName = String(name || '').trim();
    return client.auth
      .signUp({
        email: String(email || '').trim(),
        password: password,
        // 사용자 이름은 별도 테이블 없이 Auth user metadata에 저장한다.
        options: { data: { name: cleanName } },
      })
      .then(function (res) {
        if (res.error) return { ok: false, error: mapAuthError(res.error) };

        var data = res.data || {};

        // Confirm email이 켜져 있으면 Supabase는 중복 가입에 오류 대신
        // identities가 빈 가짜 user를 돌려준다 (계정 존재 여부 노출 방지).
        if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
          return { ok: false, error: MSG.EMAIL_TAKEN };
        }

        // 세션이 없으면 = 이메일 인증 대기 상태. 조용히 넘어가지 않고 원인을 알린다.
        if (!data.session) {
          return { ok: false, error: MSG.NEEDS_CONFIRM };
        }

        return { ok: true, error: null };
      })
      .catch(function (e) {
        console.error('[SW_AUTH] signUp 실패:', e);
        return { ok: false, error: MSG.GENERIC };
      });
  }

  function signOut() {
    if (!client) return Promise.resolve({ ok: false, error: MSG.NOT_READY });
    return client.auth
      .signOut()
      .then(function (res) {
        if (res && res.error) return { ok: false, error: mapAuthError(res.error) };
        return { ok: true, error: null };
      })
      .catch(function (e) {
        console.error('[SW_AUTH] signOut 실패:', e);
        return { ok: false, error: MSG.GENERIC };
      });
  }

  window.SW_AUTH = {
    ready: ready,
    messages: MSG,

    isLoggedIn: function () {
      return currentUser !== null;
    },
    getUser: snapshot,
    subscribe: function (fn) {
      if (typeof fn !== 'function') return function () {};
      listeners.push(fn);
      fn(snapshot()); // 구독 즉시 현재 상태 전달
      return function unsubscribe() {
        var i = listeners.indexOf(fn);
        if (i !== -1) listeners.splice(i, 1);
      };
    },

    signIn: signIn,
    signUp: signUp,
    signOut: signOut,

    get client() {
      return client;
    },
  };

  init();
})();
