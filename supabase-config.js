/**
 * Supabase 연결 정보 (정적 사이트용)
 *
 * ⚠️ 이 파일에는 "공개용(publishable) 키"만 넣는다.
 *    - Supabase publishable key는 브라우저 노출을 전제로 설계된 공개 키다.
 *      (Next.js의 NEXT_PUBLIC_* 값도 빌드 결과물에 그대로 박힌다.)
 *    - 실제 데이터 보호는 키 은닉이 아니라 RLS 정책이 담당한다.
 *
 * 🚫 절대 넣지 말 것:
 *    - service_role key / secret key (sb_secret_...)
 *    - ANTHROPIC_API_KEY 등 서버 전용 API 시크릿
 *    - DB 비밀번호, 액세스 토큰
 *    위 값들이 필요하면 브라우저가 아니라 서버(Edge Function 등)에서 사용해야 한다.
 *
 * 같은 값이 루트 .env.local 에도 들어있다 (git 무시됨, 향후 Next.js/배포용).
 */
window.SW_SUPABASE_CONFIG = {
  url: 'https://nmdymclyzceayufspkus.supabase.co',
  publishableKey: 'sb_publishable_ewPNrSkIym4gIpIyUUsFJw_l1PySPTq',
};
