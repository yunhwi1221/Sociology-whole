/**
 * 로그인 버튼 + 로그인/회원가입 모달 UI
 *
 * 헤더 슬롯과 모달 마크업을 JS로 주입하므로, 각 HTML 페이지는
 * auth.css + supabase-js + supabase-config.js + auth.js + auth-ui.js
 * 만 불러오면 된다. (index.html / glossary.html 공용)
 *
 * 상태는 전부 SW_AUTH.subscribe()에서 받아온다.
 */
(function () {
  'use strict';

  var VIEW_LOGIN = 'login';
  var VIEW_SIGNUP = 'signup';

  var els = {}; // 자주 쓰는 DOM 참조
  var currentView = VIEW_LOGIN;
  var lastFocused = null;
  var submitting = false;

  // ── 헤더 슬롯 ────────────────────────────────────────────────

  function buildSlot() {
    var header = document.querySelector('.header-inner');
    if (!header) return null;

    var slot = document.createElement('div');
    slot.className = 'sw-auth-slot';

    // 헤더의 마지막 자식 = 항상 우측 상단.
    // .nav-links는 모바일에서 display:none 이므로 슬롯은 nav 바깥에 둬야
    // 375/768/1440 전 구간에서 보인다.
    header.appendChild(slot);
    return slot;
  }

  /* 헤더 CTA — 비로그인이면 "시작하기", 로그인하면 "마이페이지"로 바뀐다.
     원래 라벨과 링크를 기억해 뒀다가 로그아웃 시 그대로 되돌린다. */
  function renderCta(user) {
    var cta = document.querySelector('.header-inner .nav-cta');
    if (!cta) return;

    if (!cta.dataset.swOriginalText) {
      cta.dataset.swOriginalText = cta.textContent.trim();
      cta.dataset.swOriginalHref = cta.getAttribute('href') || '#';
    }

    if (user) {
      cta.textContent = '마이페이지';
      cta.setAttribute('href', 'mypage.html');
    } else {
      cta.textContent = cta.dataset.swOriginalText;
      cta.setAttribute('href', cta.dataset.swOriginalHref);
    }
  }

  function renderSlot(user) {
    renderCta(user);
    if (!els.slot) return;
    els.slot.textContent = '';

    if (user) {
      // 로그인 상태에서는 이름만 보여준다.
      // 로그아웃은 헤더에 두지 않고 마이페이지(mypage.html)에서만 한다.
      var name = document.createElement('span');
      name.className = 'sw-auth-username';
      name.textContent = user.name + '님';
      els.slot.appendChild(name);
    } else {
      var login = document.createElement('button');
      login.type = 'button';
      login.className = 'sw-auth-btn sw-auth-btn--login';
      login.textContent = '로그인';
      login.addEventListener('click', function () {
        openModal(VIEW_LOGIN, login);
      });
      els.slot.appendChild(login);
    }
  }

  // ── 모달 ─────────────────────────────────────────────────────

  var MODAL_HTML = [
    '<div class="sw-auth-backdrop" data-sw-close></div>',
    '<div class="sw-auth-dialog" role="dialog" aria-modal="true" aria-labelledby="sw-auth-title">',
    '  <button type="button" class="sw-auth-close" data-sw-close aria-label="닫기">&times;</button>',
    '  <h2 class="sw-auth-title" id="sw-auth-title">로그인</h2>',
    '  <p class="sw-auth-sub" id="sw-auth-sub">Sociology-whole 계정으로 계속하기</p>',
    '  <p class="sw-auth-error" id="sw-auth-error" role="alert" hidden></p>',
    '  <form class="sw-auth-form" id="sw-auth-form" novalidate>',
    '    <label class="sw-auth-field" id="sw-auth-name-field">',
    '      <span>사용자 이름</span>',
    '      <input type="text" id="sw-auth-name" name="name" autocomplete="name" placeholder="예: 홍길동">',
    '    </label>',
    '    <label class="sw-auth-field">',
    '      <span>이메일</span>',
    '      <input type="email" id="sw-auth-email" name="email" autocomplete="email" placeholder="you@example.com">',
    '    </label>',
    '    <label class="sw-auth-field">',
    '      <span>비밀번호</span>',
    '      <input type="password" id="sw-auth-password" name="password" placeholder="6자 이상">',
    '    </label>',
    '    <button type="submit" class="sw-auth-btn sw-auth-btn--primary" id="sw-auth-submit">로그인</button>',
    '  </form>',
    '  <div class="sw-auth-switch">',
    '    <span id="sw-auth-switch-text">아직 계정이 없으신가요?</span>',
    '    <button type="button" class="sw-auth-link" id="sw-auth-switch-btn">회원가입</button>',
    '  </div>',
    '</div>',
  ].join('');

  function buildModal() {
    var modal = document.createElement('div');
    modal.className = 'sw-auth-modal';
    modal.id = 'sw-auth-modal';
    modal.hidden = true;
    modal.innerHTML = MODAL_HTML;
    document.body.appendChild(modal);

    els.modal = modal;
    els.title = modal.querySelector('#sw-auth-title');
    els.sub = modal.querySelector('#sw-auth-sub');
    els.error = modal.querySelector('#sw-auth-error');
    els.form = modal.querySelector('#sw-auth-form');
    els.nameField = modal.querySelector('#sw-auth-name-field');
    els.name = modal.querySelector('#sw-auth-name');
    els.email = modal.querySelector('#sw-auth-email');
    els.password = modal.querySelector('#sw-auth-password');
    els.submit = modal.querySelector('#sw-auth-submit');
    els.switchText = modal.querySelector('#sw-auth-switch-text');
    els.switchBtn = modal.querySelector('#sw-auth-switch-btn');

    var closers = modal.querySelectorAll('[data-sw-close]');
    for (var i = 0; i < closers.length; i++) {
      closers[i].addEventListener('click', closeModal);
    }
    els.switchBtn.addEventListener('click', function () {
      setView(currentView === VIEW_LOGIN ? VIEW_SIGNUP : VIEW_LOGIN);
    });
    els.form.addEventListener('submit', handleSubmit);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
  }

  function setView(view) {
    currentView = view;
    showError('');

    var isSignup = view === VIEW_SIGNUP;
    els.title.textContent = isSignup ? '회원가입' : '로그인';
    els.sub.textContent = isSignup
      ? '이메일로 간단하게 시작할 수 있어요.'
      : 'Sociology-whole 계정으로 계속하기';
    els.nameField.hidden = !isSignup;
    els.name.required = isSignup;
    els.submit.textContent = isSignup ? '회원가입' : '로그인';
    els.password.setAttribute('autocomplete', isSignup ? 'new-password' : 'current-password');
    els.switchText.textContent = isSignup ? '이미 계정이 있으신가요?' : '아직 계정이 없으신가요?';
    els.switchBtn.textContent = isSignup ? '로그인' : '회원가입';

    var first = isSignup ? els.name : els.email;
    if (!els.modal.hidden) first.focus();
  }

  function openModal(view, trigger) {
    lastFocused = trigger || document.activeElement;
    els.modal.hidden = false;
    document.body.classList.add('sw-auth-locked');
    els.form.reset();
    setView(view || VIEW_LOGIN);
    (view === VIEW_SIGNUP ? els.name : els.email).focus();
  }

  function closeModal() {
    if (submitting) return;
    els.modal.hidden = true;
    document.body.classList.remove('sw-auth-locked');
    els.form.reset();
    showError('');
    if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
    lastFocused = null;
  }

  function showError(msg) {
    els.error.textContent = msg || '';
    els.error.hidden = !msg;
  }

  function setSubmitting(on) {
    submitting = on;
    els.submit.disabled = on;
    els.submit.textContent = on
      ? '처리 중…'
      : currentView === VIEW_SIGNUP
        ? '회원가입'
        : '로그인';
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    var name = els.name.value.trim();
    var email = els.email.value.trim();
    var password = els.password.value;
    var isSignup = currentView === VIEW_SIGNUP;

    // 서버에 보내기 전 최소한의 확인 — 문구는 오류 매핑과 동일하게 맞춘다.
    if (isSignup && !name) {
      showError('사용자 이름을 입력해주세요.');
      els.name.focus();
      return;
    }
    if (!email || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      showError(window.SW_AUTH.messages.INVALID_EMAIL);
      els.email.focus();
      return;
    }
    if (!password) {
      showError(window.SW_AUTH.messages.WEAK_PASSWORD);
      els.password.focus();
      return;
    }

    showError('');
    setSubmitting(true);

    var task = isSignup
      ? window.SW_AUTH.signUp(name, email, password)
      : window.SW_AUTH.signIn(email, password);

    task.then(function (res) {
      setSubmitting(false);
      if (res.ok) {
        closeModal(); // 헤더는 subscribe 콜백이 알아서 갱신
      } else {
        showError(res.error);
      }
    });
  }

  // ── 시작 ─────────────────────────────────────────────────────

  function start() {
    if (!window.SW_AUTH) {
      console.error('[auth-ui] auth.js가 먼저 로드되어야 합니다.');
      return;
    }
    els.slot = buildSlot();
    if (!els.slot) return; // 헤더가 없는 페이지면 아무것도 하지 않는다

    buildModal();
    window.SW_AUTH.subscribe(renderSlot);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
