/**
 * /api/ai-chat — AI 질답 기능의 서버 프록시 (Vercel Serverless Function)
 *
 * Google Gemini API(무료 등급 제공)를 사용한다. GEMINI_API_KEY는 여기(서버)에서만
 * 읽고 브라우저에는 절대 내려보내지 않는다. Vercel 프로젝트 설정 > Environment
 * Variables 에 GEMINI_API_KEY를 등록해야 동작한다 (https://aistudio.google.com/apikey
 * 에서 무료로 발급 가능).
 *
 * 로그인 여부는 브라우저가 보낸 Supabase access token을 Supabase Auth API에
 * 그대로 검증 요청해서 확인한다 (service_role 키를 서버에 두지 않기 위함 — supabase-config.js와
 * 동일한 원칙).
 */

var SUPABASE_URL = 'https://nmdymclyzceayufspkus.supabase.co';
var SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_ewPNrSkIym4gIpIyUUsFJw_l1PySPTq';
var GEMINI_MODEL = 'gemini-3.6-flash';

var SYSTEM_PROMPT = [
  '너는 "Sociology-whole"이라는 한국 대학 사회학과 학생용 학습 플랫폼의 AI 학습 도우미다.',
  '사회학 개념, 이론가, 이론, 시험 대비를 돕는 것이 목적이며 항상 한국어로 답한다.',
  '핵심을 먼저 말하고, 필요하면 짧은 예시를 덧붙이는 방식으로 대학 강의 수준에 맞게 간결히 답한다.',
  '학설 간 견해 차이가 있는 주제는 어느 한쪽으로 단정하지 말고 그 차이를 알려준다.',
  '사회학 학습과 무관한 요청(코딩, 개인 신상 상담, 시사와 무관한 잡담 등)에는 이 기능의 용도를 짧게 안내하고 정중히 답변을 사양한다.',
].join(' ');

function getUser(accessToken) {
  if (!accessToken) return Promise.resolve(null);
  return fetch(SUPABASE_URL + '/auth/v1/user', {
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: 'Bearer ' + accessToken,
    },
  })
    .then(function (res) {
      if (!res.ok) return null;
      return res.json().catch(function () { return null; });
    })
    .then(function (data) {
      return data && data.id ? data : null;
    })
    .catch(function () {
      return null;
    });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }

  var authHeader = req.headers.authorization || '';
  var accessToken = authHeader.replace(/^Bearer\s+/i, '');
  var user = await getUser(accessToken);
  if (!user) {
    res.status(401).json({ error: 'login_required' });
    return;
  }

  var apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('[ai-chat] GEMINI_API_KEY가 설정되지 않았습니다.');
    res.status(500).json({ error: 'ai_not_configured' });
    return;
  }

  var body = req.body || {};
  var message = typeof body.message === 'string' ? body.message.trim() : '';
  if (!message) {
    res.status(400).json({ error: 'empty_message' });
    return;
  }
  if (message.length > 2000) {
    res.status(400).json({ error: 'message_too_long' });
    return;
  }

  var rawHistory = Array.isArray(body.history) ? body.history : [];
  var history = rawHistory
    .filter(function (m) {
      return m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string';
    })
    .slice(-8)
    .map(function (m) {
      return { role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content.slice(0, 2000) }] };
    });

  var contents = history.concat([{ role: 'user', parts: [{ text: message }] }]);

  try {
    var url = 'https://generativelanguage.googleapis.com/v1beta/models/' + GEMINI_MODEL + ':generateContent';
    var aiRes = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: contents,
        generationConfig: { maxOutputTokens: 700 },
      }),
    });

    var data = await aiRes.json();

    if (!aiRes.ok) {
      console.error('[ai-chat] Gemini API 오류:', data);
      res.status(502).json({ error: 'ai_upstream_error' });
      return;
    }

    var candidate = data.candidates && data.candidates[0];
    var parts = candidate && candidate.content && candidate.content.parts;
    var text = Array.isArray(parts)
      ? parts.filter(function (p) { return typeof p.text === 'string'; }).map(function (p) { return p.text; }).join('\n')
      : '';

    res.status(200).json({ reply: text || '답변을 생성하지 못했습니다. 다시 시도해주세요.' });
  } catch (e) {
    console.error('[ai-chat] 요청 처리 실패:', e);
    res.status(500).json({ error: 'server_error' });
  }
};
