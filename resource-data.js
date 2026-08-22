/* resource-data.js — 자료실 "전체 탐색" 탭의 공개 자료 샘플
 *
 * archive-PRD_1.md 5장 데이터 모델(Material)을 그대로 따른다.
 * 업로더는 UI에 노출하지 않는 원칙(4.2 익명 처리)이라 owner 관련 필드를 아예 두지 않았다.
 * 실제 서비스에서는 Supabase 의 materials 테이블에서 visibility='public' 인 행을 읽어오게 되고,
 * 그때 이 파일은 통째로 걷어내면 된다.
 *
 * 내가 올린 자료(내 자료 탭)는 이 파일이 아니라 localStorage 에 쌓인다.
 * 두 출처를 같은 목록에 섞어야 하므로 필드 이름을 일부러 동일하게 맞췄다.
 *
 * file:// 로 직접 열어도 동작해야 하므로 ESM/fetch 없이 전역 하나만 노출한다. ES5로 작성.
 */
var RESOURCE_DATA = (function () {
  'use strict';

  /* 태그는 업로더가 자유 입력하는 값이라(PRD 4.2) 고정 목록이 아니다.
     필터 칩은 실제 자료에 붙은 태그를 훑어서 만들되, 자주 쓰이는 순서를 잡아주기 위해
     아래 순서를 우선 적용한다. 목록에 없는 태그는 뒤에 가나다순으로 붙는다. */
  var tagOrder = [
    '사회학개론',
    '사회조사방법론',
    '사회학이론',
    '요약노트',
    '족보',
    '발표자료',
    '통계',
    '논문',
  ];

  var materials = [
    {
      id: 'pub-intro-summary',
      type: 'text',
      title: '사회학개론 중간고사 핵심 정리 (1~6주차)',
      tags: ['사회학개론', '요약노트'],
      bookmark_count: 42,
      created_at: '2026-08-14',
      text_content:
        '1주차 — 사회학적 상상력\n' +
        '개인의 문제(personal trouble)와 사회구조의 문제(public issue)를 구분하는 것이 출발점이다. ' +
        '한 사람의 실직은 개인의 문제지만, 실업률이 20%라면 그것은 구조의 문제다.\n\n' +
        '2주차 — 사회학의 성립\n' +
        '산업화·도시화·시민혁명이라는 세 가지 충격이 "사회는 어떻게 유지되는가"라는 질문을 낳았다. ' +
        '콩트가 이름을 붙였고, 뒤르켐이 고유한 연구 대상(사회적 사실)을 확보해 학문으로 세웠다.\n\n' +
        '3주차 — 기능주의\n' +
        '사회를 각 부분이 맞물려 균형을 유지하는 체계로 본다. 뒤르켐 → 파슨스(AGIL) → 머튼(중범위 이론).\n' +
        '시험 포인트: 명시적 기능과 잠재적 기능의 사례 구분, 역기능 개념이 나온 배경.\n\n' +
        '4주차 — 갈등론\n' +
        '자원이 한정된 사회에서 집단 간 이해가 충돌한다고 본다. 마르크스의 토대-상부구조, 잉여가치, 계급투쟁.\n' +
        '시험 포인트: 기능주의와 갈등론이 "같은 현상(예: 교육)"을 어떻게 다르게 설명하는지 비교 서술.\n\n' +
        '5주차 — 상징적 상호작용론\n' +
        '거시가 아니라 대면 상황에서 의미가 만들어지는 과정을 본다. 미드의 자아, 고프먼의 인상관리.\n\n' +
        '6주차 — 문화와 사회화\n' +
        '문화는 학습되는 것이며 사회화는 평생에 걸쳐 일어난다. 1차 사회화(가족)와 2차 사회화(학교·직장), 재사회화.',
    },
    {
      id: 'pub-method-cheatsheet',
      type: 'text',
      title: '사회조사방법론 개념 비교표 (양적 vs 질적)',
      tags: ['사회조사방법론', '요약노트'],
      bookmark_count: 37,
      created_at: '2026-08-11',
      text_content:
        '목적\n' +
        '- 양적: 변수 간 관계를 수치로 확인하고 일반화한다.\n' +
        '- 질적: 행위자가 상황에 부여하는 의미를 깊이 이해한다.\n\n' +
        '자료 수집\n' +
        '- 양적: 구조화된 설문, 실험, 기존 통계 2차 분석.\n' +
        '- 질적: 심층면접, 참여관찰, 문헌·기록 분석.\n\n' +
        '표본\n' +
        '- 양적: 확률표집(단순무작위·층화·집락). 대표성이 핵심.\n' +
        '- 질적: 목적표집·눈덩이표집. 정보의 풍부함이 핵심.\n\n' +
        '신뢰도와 타당도\n' +
        '- 신뢰도: 같은 조건에서 반복했을 때 같은 결과가 나오는가.\n' +
        '- 타당도: 재려던 것을 실제로 재고 있는가.\n' +
        '- 자주 나오는 함정: 신뢰도가 높아도 타당도는 낮을 수 있다(정확히 빗나간 저울).\n\n' +
        '윤리\n' +
        '고지에 입각한 동의, 익명성과 비밀 보장, 연구로 인한 해악 최소화. IRB 심의 대상 여부 확인.',
    },
    {
      id: 'pub-durkheim-suicide',
      type: 'file',
      title: '뒤르켐 『자살론』 발제문',
      tags: ['사회학이론', '발표자료'],
      bookmark_count: 28,
      created_at: '2026-08-09',
      file_name: 'durkheim-suicide-presentation.pdf',
      file_size: 842000,
      file_type: 'application/pdf',
    },
    {
      id: 'pub-theory-midterm',
      type: 'file',
      title: '사회학이론 기출 모음 (2023~2025)',
      tags: ['사회학이론', '족보'],
      bookmark_count: 61,
      created_at: '2026-08-06',
      file_name: 'theory-past-exams.pdf',
      file_size: 2140000,
      file_type: 'application/pdf',
    },
    {
      id: 'pub-spss-guide',
      type: 'text',
      title: 'SPSS 기초 — 빈도분석부터 교차분석까지',
      tags: ['사회조사방법론', '통계'],
      bookmark_count: 24,
      created_at: '2026-08-03',
      text_content:
        '데이터 불러오기\n' +
        '파일 > 열기 > 데이터에서 .sav 또는 .xlsx 를 선택한다. 엑셀을 불러올 때는 첫 행을 변수명으로 읽을지 반드시 확인한다.\n\n' +
        '변수 보기 탭 정리\n' +
        '- 측정 수준(척도/순서/명목)을 먼저 맞춰야 이후 메뉴에서 적절한 분석이 열린다.\n' +
        '- 결측값은 9, 99 처럼 실제 값과 헷갈리지 않는 코드를 쓰고 결측값 칸에 등록한다.\n\n' +
        '빈도분석\n' +
        '분석 > 기술통계량 > 빈도분석. 명목·순서 변수의 분포를 먼저 훑어 이상값과 결측을 잡아낸다.\n\n' +
        '교차분석과 카이제곱\n' +
        '분석 > 기술통계량 > 교차분석. 행에 독립변수, 열에 종속변수를 넣고 통계량에서 카이제곱을 체크한다.\n' +
        '셀 옵션에서 기대빈도와 행 % 를 함께 띄워야 해석이 쉽다. 기대빈도 5 미만 셀이 20% 를 넘으면 카이제곱 해석에 주의.\n\n' +
        '보고서에 쓸 때\n' +
        'χ²(자유도, N=사례수) = 값, p = 유의확률 형식으로 적고, 표와 함께 방향(어느 집단이 더 높은지)을 문장으로 설명한다.',
    },
    {
      id: 'pub-gender-reading',
      type: 'file',
      title: '젠더와 사회 — 주차별 리딩 리스트',
      tags: ['사회학이론', '논문'],
      bookmark_count: 19,
      created_at: '2026-07-30',
      file_name: 'gender-society-readings.docx',
      file_size: 96000,
      file_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    },
    {
      id: 'pub-fieldnote-tips',
      type: 'text',
      title: '참여관찰 현장노트 쓰는 법 (조교 피드백 반영본)',
      tags: ['사회조사방법론'],
      bookmark_count: 33,
      created_at: '2026-07-24',
      text_content:
        '현장에서\n' +
        '- 그 자리에서는 키워드만 적는다. 문장을 다듬느라 관찰을 놓치는 것이 가장 흔한 실수다.\n' +
        '- 시간, 장소, 그 자리에 있던 사람의 수와 배치는 반드시 숫자로 남긴다.\n\n' +
        '나온 직후\n' +
        '- 24시간을 넘기지 않고 정서한다. 하루만 지나도 대화의 순서가 뒤섞인다.\n' +
        '- 관찰(본 것)과 해석(내 생각)을 다른 서식으로 분리해서 적는다. 나중에 분석할 때 이 구분이 핵심이다.\n\n' +
        '자주 받는 피드백\n' +
        '- "분위기가 화기애애했다" 같은 요약 대신, 그렇게 판단한 근거가 된 장면을 적을 것.\n' +
        '- 연구 참여자를 식별할 수 있는 정보(실명, 소속, 특이 이력)는 노트 단계에서부터 가명으로.\n' +
        '- 내가 그 자리에서 어떻게 보였을지(연구자의 위치)도 함께 기록할 것.',
    },
    {
      id: 'pub-stat-final',
      type: 'file',
      title: '사회통계 기말 요약본 (회귀분석 중심)',
      tags: ['통계', '요약노트', '족보'],
      bookmark_count: 47,
      created_at: '2026-07-18',
      file_name: 'social-statistics-final.pdf',
      file_size: 1380000,
      file_type: 'application/pdf',
    },
    {
      id: 'pub-thesis-format',
      type: 'text',
      title: '졸업논문 형식 체크리스트',
      tags: ['논문'],
      bookmark_count: 15,
      created_at: '2026-07-10',
      text_content:
        '제출 전 확인\n' +
        '- 표지·목차·초록 페이지 번호 규칙이 학과 양식과 맞는가.\n' +
        '- 표와 그림에 번호와 제목이 있고, 본문에서 한 번 이상 언급되는가.\n' +
        '- 인용 형식이 처음부터 끝까지 하나로 통일되어 있는가(APA 또는 학과 지정 형식).\n\n' +
        '참고문헌\n' +
        '- 본문에 인용된 것만 목록에 올린다. 읽었지만 인용하지 않은 문헌은 뺀다.\n' +
        '- 국문 → 영문 순, 각각 저자 가나다·알파벳순.\n' +
        '- 온라인 자료는 접속일자를 함께 적는다.\n\n' +
        '자주 지적받는 것\n' +
        '- 연구문제와 결론이 서로 대응하지 않는 경우.\n' +
        '- 선행연구 정리가 나열에 그치고, 내 연구가 어디를 메우는지 밝히지 않은 경우.',
    },
    {
      id: 'pub-intro-ppt',
      type: 'file',
      title: '사회학개론 조별 발표 자료 (가족의 변화)',
      tags: ['사회학개론', '발표자료'],
      bookmark_count: 12,
      created_at: '2026-07-02',
      file_name: 'family-change-presentation.pptx',
      file_size: 5240000,
      file_type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    },
  ];

  return { materials: materials, tagOrder: tagOrder };
})();
