/**
 * glossary-data.js — 용어집 콘텐츠
 *
 * PRD_8.md §5 데이터 모델을 그대로 따른다.
 * file:// 로 직접 열어도 동작해야 하므로 ESM(import/export)이나 fetch를 쓰지 않고
 * 전역 변수 하나만 노출한다.
 */
var GLOSSARY_DATA = (function () {
  'use strict';

  /* PRD_8.md §5 — 카테고리 9종 고정값. 배열 순서가 곧 목록의 그룹 표시 순서다. */
  var categories = [
    '이론/사상',
    '방법론',
    '계급·노동·불평등',
    '젠더·섹슈얼리티',
    '가족·인구',
    '도시·공간',
    '문화·미디어',
    '일탈·범죄',
    '정치·권력·사회변동',
  ];

  /* 이론가 — 미니 팝업(design_5.md §4.6)용 최소 정보만.
     이론가 프로필 페이지가 생기면 각 항목에 page_link를 채우면 된다. */
  var theorists = {
    durkheim: {
      name: '에밀 뒤르켐',
      name_en: 'Émile Durkheim',
      years: '1858–1917',
      mini_bio: '사회학을 독립된 학문으로 정립한 프랑스 사회학자. 사회를 개인의 합 이상의 실체로 보고 사회적 사실을 사회학 고유의 연구 대상으로 설정했다.',
      page_link: null,
    },
    weber: {
      name: '막스 베버',
      name_en: 'Max Weber',
      years: '1864–1920',
      mini_bio: '이해사회학과 관료제 이론의 창시자. 행위자가 자신의 행위에 부여하는 주관적 의미를 파악하는 것이 사회학의 과제라고 보았다.',
      page_link: null,
    },
    marx: {
      name: '카를 마르크스',
      name_en: 'Karl Marx',
      years: '1818–1883',
      mini_bio: '자본주의의 구조적 모순과 계급 관계를 분석한 독일의 사상가. 물질적 생산관계가 사회의 토대를 이루며 법·정치·문화를 규정한다고 보았다.',
      page_link: null,
    },
    bourdieu: {
      name: '피에르 부르디외',
      name_en: 'Pierre Bourdieu',
      years: '1930–2002',
      mini_bio: '문화자본과 아비투스 개념으로 불평등의 재생산 메커니즘을 분석한 프랑스 사회학자. 구조와 행위자의 이분법을 넘어서려 했다.',
      page_link: null,
    },
    goffman: {
      name: '어빙 고프먼',
      name_en: 'Erving Goffman',
      years: '1922–1982',
      mini_bio: '일상적 상호작용을 연극 무대에 비유해 분석한 미시사회학의 대가. 자아 연출과 낙인 연구로 널리 알려져 있다.',
      page_link: null,
    },
    merton: {
      name: '로버트 머튼',
      name_en: 'Robert K. Merton',
      years: '1910–2003',
      mini_bio: '중범위 이론을 제창한 미국의 기능주의 사회학자. 뒤르켐의 아노미를 문화적 목표와 제도적 수단의 괴리로 재해석했다.',
      page_link: null,
    },
    foucault: {
      name: '미셸 푸코',
      name_en: 'Michel Foucault',
      years: '1926–1984',
      mini_bio: '권력을 억압이 아니라 생산적인 관계망으로 재정의한 프랑스 철학자. 규율권력과 생명권력 개념으로 근대 주체의 형성을 분석했다.',
      page_link: null,
    },
    gramsci: {
      name: '안토니오 그람시',
      name_en: 'Antonio Gramsci',
      years: '1891–1937',
      mini_bio: '이탈리아의 마르크스주의 이론가. 지배가 물리력이 아니라 동의를 통해 유지되는 방식을 헤게모니 개념으로 설명했다.',
      page_link: null,
    },
    adorno: {
      name: '테오도어 아도르노',
      name_en: 'Theodor W. Adorno',
      years: '1903–1969',
      mini_bio: '프랑크푸르트학파의 중심 인물. 호르크하이머와 함께 대중문화가 산업적으로 규격화되는 과정을 문화산업으로 비판했다.',
      page_link: null,
    },
    butler: {
      name: '주디스 버틀러',
      name_en: 'Judith Butler',
      years: '1956–',
      mini_bio: '젠더를 내면의 본질이 아니라 반복된 수행의 효과로 재개념화한 미국의 철학자. 퀴어 이론의 형성에 결정적 영향을 미쳤다.',
      page_link: null,
    },
    tonnies: {
      name: '페르디난트 퇴니스',
      name_en: 'Ferdinand Tönnies',
      years: '1855–1936',
      mini_bio: '독일 사회학의 창설자 중 한 사람. 공동사회와 이익사회의 구분으로 근대적 사회관계의 전환을 개념화했다.',
      page_link: null,
    },
    lefebvre: {
      name: '앙리 르페브르',
      name_en: 'Henri Lefebvre',
      years: '1901–1991',
      mini_bio: '공간을 주어진 그릇이 아니라 사회적으로 생산되는 것으로 파악한 프랑스 이론가. 도시에 대한 권리를 주창했다.',
      page_link: null,
    },
    beck: {
      name: '울리히 벡',
      name_en: 'Ulrich Beck',
      years: '1944–2015',
      mini_bio: '근대화가 스스로 만들어낸 위험을 다루는 단계로 이행한다고 본 독일 사회학자. 위험사회와 성찰적 근대화를 제시했다.',
      page_link: null,
    },
    hochschild: {
      name: '앨리 혹실드',
      name_en: 'Arlie Hochschild',
      years: '1940–',
      mini_bio: '감정을 사회학의 분석 대상으로 끌어올린 미국 사회학자. 서비스 노동에서 감정이 관리되고 상품화되는 과정을 연구했다.',
      page_link: null,
    },
    simmel: {
      name: '게오르크 짐멜',
      name_en: 'Georg Simmel',
      years: '1858–1918',
      mini_bio: '사회를 상호작용의 형식으로 파악한 독일 사회학자. 대도시가 개인의 정신생활에 미치는 영향을 분석했다.',
      page_link: null,
    },
    parsons: {
      name: '탤컷 파슨스',
      name_en: 'Talcott Parsons',
      years: '1902–1979',
      mini_bio: '구조기능주의를 체계화한 미국 사회학자. 사회를 균형을 유지하려는 체계로 보고 각 제도의 기능적 요건을 분석했다.',
      page_link: null,
    },
    oakley: {
      name: '앤 오클리',
      name_en: 'Ann Oakley',
      years: '1944–',
      mini_bio: '섹스와 젠더를 사회학적으로 구분해 정착시킨 영국 사회학자. 가사노동을 노동으로 분석한 초기 연구로 알려져 있다.',
      page_link: null,
    },
    glass: {
      name: '루스 글래스',
      name_en: 'Ruth Glass',
      years: '1912–1990',
      mini_bio: '런던의 도시 변화를 관찰하며 젠트리피케이션이라는 용어를 처음 사용한 영국의 도시사회학자.',
      page_link: null,
    },
  };

  /* 용어 — curator_definition(내 정의)과 original_definition(원문 정의)은 필수,
     term_en / original_definition_source / perspectives / related_theorists 는 선택. */
  var terms = [
    /* ── 이론/사상 ───────────────────────────────────────────── */
    {
      id: 'social-solidarity',
      term_ko: '사회적 연대',
      term_en: 'Social Solidarity',
      categories: ['이론/사상'],
      curator_definition:
        '사람들을 하나의 사회로 묶어주는 결속력. 옛날엔 다들 비슷해서, 요즘은 서로 달라서 필요하기 때문에 뭉친다.',
      original_definition:
        '사회적 연대란 개인을 사회에 결속시키는 도덕적 현상으로, 직접 관찰하거나 측정할 수 없기 때문에 그것을 상징하는 가시적 지표인 법을 통해 분석해야 한다. 억압적 제재를 특징으로 하는 법은 기계적 연대에, 복원적 제재를 특징으로 하는 법은 유기적 연대에 대응한다.',
      original_definition_source: '에밀 뒤르켐, 『사회분업론』(1893)',
      related_theorists: ['durkheim', 'tonnies'],
      perspectives: [],
    },
    {
      id: 'collective-consciousness',
      term_ko: '집합의식',
      term_en: 'Collective Consciousness',
      categories: ['이론/사상'],
      curator_definition:
        '한 사회 사람들이 공유하는 공통의 믿음과 감정. 개인이 만든 게 아니라, 오히려 개인을 압박하는 사회 전체의 규칙이다.',
      original_definition:
        '동일한 사회의 평균적 구성원들에게 공통된 신념과 감정의 총체는 고유한 생명을 지닌 하나의 결정된 체계를 이룬다. 이를 집합의식 또는 공통의식이라 부를 수 있다.',
      original_definition_source: '에밀 뒤르켐, 『사회분업론』(1893)',
      related_theorists: ['durkheim'],
      perspectives: [],
    },
    {
      id: 'ideal-type',
      term_ko: '이념형',
      term_en: 'Ideal Type',
      categories: ['이론/사상', '방법론'],
      curator_definition:
        '현실 그대로가 아니라 핵심 특징만 뽑아 극단으로 만든 비교용 기준. 실제 사례가 여기서 얼마나 벗어나는지 재는 잣대로 쓴다.',
      original_definition:
        '이념형은 하나 또는 몇 개의 관점을 일면적으로 강조하고, 그 관점에 부합하는 산재된 개별 현상들을 종합하여 통일적인 사유상(Gedankenbild)으로 구성함으로써 얻어진다. 이 사유상은 그 개념적 순수성에서는 현실 어디에서도 경험적으로 발견되지 않는 하나의 유토피아다.',
      original_definition_source: '막스 베버, 「사회과학적 및 사회정책적 인식의 객관성」(1904)',
      related_theorists: ['weber'],
      perspectives: [],
    },
    {
      id: 'habitus',
      term_ko: '아비투스',
      term_en: 'Habitus',
      categories: ['이론/사상', '계급·노동·불평등'],
      curator_definition:
        '자란 환경이 몸에 새긴 취향과 행동 습관. 계산 없이도 "이게 편하다"고 느끼게 만드는 무의식적 감각이다.',
      original_definition:
        '아비투스란 지속적이고 전이 가능한 성향들의 체계로서, 구조화하는 구조로 기능하도록 미리 구조화된 구조이다. 즉 실천과 표상을 생성하고 조직하는 원리로서, 목적에 대한 의식적 지향이나 그 목적 달성에 필요한 조작의 명시적 숙달 없이도 객관적으로 목적에 적응된 결과를 낳는다.',
      original_definition_source: '피에르 부르디외, 『실천이론 개요』(1972)',
      related_theorists: ['bourdieu'],
      perspectives: [],
    },
    {
      id: 'impression-management',
      term_ko: '인상관리',
      term_en: 'Impression Management',
      categories: ['이론/사상'],
      curator_definition:
        '남에게 어떻게 보일지 생각하며 말투·표정·옷차림을 조절하는 것. 무대 위 배우처럼 상황에 맞는 모습을 보여주는 일상의 연기다.',
      original_definition:
        '개인이 타인 앞에 자신을 제시할 때, 그의 공연은 그 상황에서 공식적으로 인정되는 사회의 가치들을 구현하고 예시하는 경향이 있다. 개인은 자신이 주는 인상을 통제하기 위해 표현적 장비를 동원하며, 이를 무대 장치·외양·매너로 구성된 전면(front)이라 부를 수 있다.',
      original_definition_source: '어빙 고프먼, 『자아 연출의 사회학』(1959)',
      related_theorists: ['goffman'],
      perspectives: [],
    },

    /* ── 방법론 ─────────────────────────────────────────────── */
    {
      id: 'verstehen',
      term_ko: '이해',
      term_en: 'Verstehen',
      categories: ['방법론'],
      curator_definition:
        '상대가 왜 그렇게 행동했는지, 그 사람 입장에서 속마음까지 헤아려보는 방법. 겉모습만이 아니라 의도까지 읽어내려는 시도다.',
      original_definition:
        '사회학은 사회적 행위를 해석적으로 이해하고, 이를 통해 그 경과와 결과를 인과적으로 설명하려는 과학이다. 여기서 행위란 행위자가 주관적 의미를 결부시키는 한에서의 인간 행동을 뜻한다.',
      original_definition_source: '막스 베버, 『경제와 사회』(1922)',
      related_theorists: ['weber'],
      perspectives: [],
    },
    {
      id: 'social-fact',
      term_ko: '사회적 사실',
      term_en: 'Social Fact',
      categories: ['방법론', '이론/사상'],
      curator_definition:
        '내가 만들지 않았지만 따르지 않으면 불이익을 받는, 개인 밖의 규칙과 관습. 언어, 화폐, 결혼 풍습이 대표적인 예다.',
      original_definition:
        '사회적 사실이란 고정되어 있든 아니든, 개인에게 외적인 강제력을 행사할 수 있는 모든 행위 양식을 말한다. 또는 주어진 사회 안에서 일반적으로 나타나면서 개별적 발현과는 독립적으로 고유한 존재를 지니는 모든 행위 양식을 말한다.',
      original_definition_source: '에밀 뒤르켐, 『사회학적 방법의 규칙들』(1895)',
      related_theorists: ['durkheim'],
      perspectives: [],
    },
    {
      id: 'participant-observation',
      term_ko: '참여관찰',
      term_en: 'Participant Observation',
      categories: ['방법론'],
      curator_definition:
        '연구자가 직접 그 집단 속에 들어가 함께 지내며 자료를 모으는 조사법. 설문지로는 못 잡는 분위기와 암묵적 규칙까지 파악할 수 있다.',
      original_definition:
        '참여관찰은 연구자가 상당 기간 특정 집단의 일상적 활동에 참여하면서 그 집단의 행위·사건·관계를 관찰하고 기록하는 현장연구 전략이다. 연구자의 참여 정도는 완전 참여자에서 완전 관찰자에 이르는 연속선 위에 놓인다.',
      original_definition_source: '레이먼드 골드, 「현장관찰에서의 역할」(1958) 유형론 참조',
      related_theorists: [],
      perspectives: [],
    },
    {
      id: 'reflexivity',
      term_ko: '성찰성',
      term_en: 'Reflexivity',
      categories: ['방법론', '이론/사상'],
      curator_definition:
        '연구자도 완전히 중립적일 수 없다는 걸 인정하고, 자기 입장이 연구에 미치는 영향을 스스로 점검하는 태도.',
      original_definition:
        '성찰성이란 인식 주체를 인식 대상과 동일한 분석의 층위에 놓는 작업이다. 사회학자는 자신이 대상을 구성하는 데 사용하는 도구들 자체를 사회학적 분석의 대상으로 삼아야 한다.',
      original_definition_source: '피에르 부르디외·로익 바캉, 『성찰적 사회학으로의 초대』(1992)',
      related_theorists: ['bourdieu', 'beck'],
      perspectives: [],
    },

    /* ── 계급·노동·불평등 ────────────────────────────────────── */
    {
      id: 'class-struggle',
      term_ko: '계급투쟁',
      term_en: 'Class Struggle',
      categories: ['계급·노동·불평등', '정치·권력·사회변동'],
      curator_definition:
        '가진 자와 못 가진 자 사이의 구조적 갈등. 한쪽의 이익이 다른 쪽의 손해에서 나오기 때문에 근본적으로 화해하기 어렵다.',
      original_definition:
        '지금까지의 모든 사회의 역사는 계급투쟁의 역사이다. 자유민과 노예, 귀족과 평민, 영주와 농노, 길드 장인과 직인, 요컨대 억압자와 피억압자는 항상 서로 대립해 왔으며, 때로는 은폐된, 때로는 공공연한 투쟁을 끊임없이 벌여 왔다.',
      original_definition_source: '카를 마르크스·프리드리히 엥겔스, 『공산당 선언』(1848)',
      related_theorists: ['marx'],
      perspectives: [
        {
          school: '갈등론',
          definition:
            '생산수단의 소유 여부가 계급을 나누는 유일한 근본 기준이며, 계급 갈등은 자본주의가 존속하는 한 해소될 수 없는 구조적 적대다. 사회 통합처럼 보이는 것은 갈등의 부재가 아니라 지배계급의 우위가 관철된 일시적 상태에 가깝다.',
          source: '마르크스주의 전통',
        },
        {
          school: '베버주의',
          definition:
            '계급은 시장에서의 기회(계급 상황) 하나만으로 정해지지 않는다. 사회적 명예에 기반한 신분(Stand)과 조직된 권력인 정당(Partei)이라는 별개의 차원이 함께 작동하므로, 불평등은 다차원적으로 분석되어야 하며 계급 갈등이 자동으로 정치적 대립으로 이어지지도 않는다.',
          source: '막스 베버, 『경제와 사회』(1922)',
        },
        {
          school: '기능주의',
          definition:
            '계층화는 갈등의 산물이라기보다 사회가 중요한 직위에 유능한 사람을 배치하기 위해 차등적 보상을 제공한 결과다. 따라서 불평등은 어느 사회에나 나타나는 기능적 필요의 표현으로 이해된다.',
          source: '데이비스·무어, 「계층화의 몇 가지 원리」(1945)',
        },
      ],
    },
    {
      id: 'alienation',
      term_ko: '소외',
      term_en: 'Alienation',
      categories: ['계급·노동·불평등'],
      curator_definition:
        '내가 만든 것, 내가 하는 일이 오히려 나와 상관없는 낯선 것처럼 느껴지는 상태. 일이 자기실현이 아니라 억지 노동이 될 때 생긴다.',
      original_definition:
        '노동자는 자신의 노동에서 자기를 긍정하지 못하고 부정하며, 행복이 아니라 불행을 느끼고, 자유로운 육체적·정신적 에너지를 발휘하는 것이 아니라 육체를 소모시키고 정신을 파괴한다. 그러므로 그의 노동은 자발적인 것이 아니라 강제된 것이며, 욕구의 충족이 아니라 욕구를 충족시키기 위한 수단일 뿐이다.',
      original_definition_source: '카를 마르크스, 『경제학·철학 수고』(1844)',
      related_theorists: ['marx'],
      perspectives: [],
    },
    {
      id: 'cultural-capital',
      term_ko: '문화자본',
      term_en: 'Cultural Capital',
      categories: ['계급·노동·불평등', '문화·미디어'],
      curator_definition:
        '돈은 아니지만 돈처럼 힘을 발휘하는 자원. 말투, 독서량, 학위처럼 은근히 사람을 평가하는 기준이 되는 것들이다.',
      original_definition:
        '문화자본은 세 가지 형태로 존재할 수 있다. 정신과 신체의 지속적 성향의 형태인 체화된 상태, 문화적 재화의 형태인 객체화된 상태, 그리고 교육 자격처럼 제도적으로 공인된 형태인 제도화된 상태가 그것이다.',
      original_definition_source: '피에르 부르디외, 「자본의 형태」(1986)',
      related_theorists: ['bourdieu'],
      perspectives: [],
    },
    {
      id: 'symbolic-violence',
      term_ko: '상징폭력',
      term_en: 'Symbolic Violence',
      categories: ['계급·노동·불평등', '문화·미디어'],
      curator_definition:
        '때리지 않아도 관철되는 지배. 불리한 대우를 받는 사람이 오히려 그걸 당연하게 받아들이게 만드는, 보이지 않는 폭력이다.',
      original_definition:
        '모든 권력은 힘의 관계에 근거한 자의성을 은폐함으로써 그 힘의 관계에 고유한 상징적 힘을 덧붙이는 한에서 상징폭력을 행사한다. 교육 행위는 자의적 권력에 의한 문화적 자의성의 강요인 한에서 객관적으로 상징폭력이다.',
      original_definition_source: '피에르 부르디외·장클로드 파세롱, 『재생산』(1970)',
      related_theorists: ['bourdieu'],
      perspectives: [],
    },
    {
      id: 'social-mobility',
      term_ko: '사회이동',
      term_en: 'Social Mobility',
      categories: ['계급·노동·불평등'],
      curator_definition:
        '개인이나 집단이 계층 사다리에서 위아래로 움직이는 것. 자식이 부모보다 잘살게 됐는지를 따질 때 쓰는 개념이다.',
      original_definition:
        '사회이동이란 개인이나 사회적 대상, 즉 인간 활동에 의해 창조되거나 변형된 가치가 하나의 사회적 위치에서 다른 위치로 이행하는 모든 현상을 말한다.',
      original_definition_source: '피티림 소로킨, 『사회이동』(1927)',
      related_theorists: ['bourdieu'],
      perspectives: [],
    },
    {
      id: 'emotional-labor',
      term_ko: '감정노동',
      term_en: 'Emotional Labor',
      categories: ['계급·노동·불평등', '젠더·섹슈얼리티'],
      curator_definition:
        '돈을 벌기 위해 실제 감정과 상관없이 정해진 표정과 태도를 유지해야 하는 노동. 승무원·상담원의 "항상 웃는 얼굴"이 대표적이다.',
      original_definition:
        '감정노동이란 타인에게서 특정한 심리 상태를 이끌어내기 위해 공적으로 관찰 가능한 표정과 신체적 표현을 만들어내는 것을 뜻한다. 이러한 노동은 임금과 교환되어 판매되므로 교환가치를 지닌다.',
      original_definition_source: '앨리 혹실드, 『감정노동』(1983)',
      related_theorists: ['hochschild', 'goffman'],
      perspectives: [],
    },

    /* ── 젠더·섹슈얼리티 ─────────────────────────────────────── */
    {
      id: 'gender',
      term_ko: '젠더',
      term_en: 'Gender',
      categories: ['젠더·섹슈얼리티'],
      curator_definition:
        '생물학적 성(섹스)과 달리, 사회가 "남자답다·여자답다"며 만들어 붙인 역할과 기대다.',
      original_definition:
        '섹스(sex)는 남성과 여성 사이의 생물학적 차이, 즉 생식기의 가시적 차이와 생식 기능의 차이를 가리키는 말이다. 젠더(gender)는 그러나 문화의 문제로서, 남성적인 것과 여성적인 것으로의 사회적 분류를 가리킨다.',
      original_definition_source: '앤 오클리, 『성, 젠더, 사회』(1972)',
      related_theorists: ['oakley', 'butler'],
      perspectives: [
        {
          school: '구조기능주의',
          definition:
            '남성의 도구적 역할과 여성의 표현적 역할 분담은 핵가족이 안정적으로 기능하기 위한 분업으로 설명된다. 성역할은 사회화를 통해 전수되며 체계의 균형에 기여한다고 본다. 오늘날에는 불평등을 자연화한다는 비판을 강하게 받는 관점이다.',
          source: '탤컷 파슨스·로버트 베일스, 『가족, 사회화, 상호작용 과정』(1955)',
        },
        {
          school: '페미니즘/갈등론',
          definition:
            '젠더는 역할의 차이가 아니라 자원과 권력이 불균등하게 배분된 위계 관계다. 성별 분업은 기능적 필요가 아니라 가부장제와 자본주의가 여성의 노동을 저평가하며 유지해온 결과로 분석된다.',
          source: '실비아 월비, 『가부장제 이론화하기』(1990)',
        },
        {
          school: '포스트구조주의',
          definition:
            '젠더는 표현되어야 할 내면의 본질이 아니라, 규범에 따라 반복적으로 수행됨으로써 마치 본질이 있는 것처럼 보이게 되는 효과다. 따라서 남/여의 이분법 자체가 분석 대상이 된다.',
          source: '주디스 버틀러, 『젠더 트러블』(1990)',
        },
      ],
    },
    {
      id: 'patriarchy',
      term_ko: '가부장제',
      term_en: 'Patriarchy',
      categories: ['젠더·섹슈얼리티', '가족·인구'],
      curator_definition:
        '남성이 여성을 지배하고 그로부터 이득을 얻는 사회 구조. 특정 개인의 나쁜 의도가 아니라 반복되는 시스템을 가리킨다.',
      original_definition:
        '가부장제는 남성이 여성을 지배하고 억압하며 착취하는 사회구조와 실천의 체계로 정의된다. 이는 가사노동, 임금노동, 국가, 폭력, 섹슈얼리티, 문화라는 여섯 개의 상호 연관된 구조를 통해 작동한다.',
      original_definition_source: '실비아 월비, 『가부장제 이론화하기』(1990)',
      related_theorists: ['oakley'],
      perspectives: [
        {
          school: '급진주의 페미니즘',
          definition:
            '가부장제는 계급·인종보다 근원적인 최초의 억압 체계이며, 여성의 몸과 재생산에 대한 남성의 통제가 그 물질적 토대를 이룬다.',
          source: '슐라미스 파이어스톤, 『성의 변증법』(1970)',
        },
        {
          school: '마르크스주의 페미니즘',
          definition:
            '가부장제는 독립된 체계라기보다 자본주의와 맞물려 작동한다. 여성의 무급 가사노동이 노동력 재생산 비용을 사적으로 떠안음으로써 자본 축적에 기여한다는 점에 주목한다.',
          source: '하이디 하트만, 「마르크스주의와 페미니즘의 불행한 결혼」(1979)',
        },
      ],
    },
    {
      id: 'performativity',
      term_ko: '수행성',
      term_en: 'Performativity',
      categories: ['젠더·섹슈얼리티', '이론/사상'],
      curator_definition:
        '정체성이 원래 있어서 드러나는 게 아니라, 같은 행동을 반복하다 보니 마치 원래 그랬던 것처럼 보이게 된다는 관점이다.',
      original_definition:
        '젠더는 언제나 행위(doing)이지만, 그 행위에 선행하여 존재한다고 여겨지는 주체에 의한 행위는 아니다. 젠더 표현 뒤에 젠더 정체성이 있는 것이 아니다. 정체성은 그 결과라고 이야기되는 바로 그 표현들에 의해 수행적으로 구성된다.',
      original_definition_source: '주디스 버틀러, 『젠더 트러블』(1990)',
      related_theorists: ['butler', 'goffman'],
      perspectives: [],
    },
    {
      id: 'care-work',
      term_ko: '돌봄노동',
      term_en: 'Care Work',
      categories: ['젠더·섹슈얼리티', '가족·인구'],
      curator_definition:
        '아이·노인·환자를 돌보는 노동. 사회 유지에 꼭 필요한데도 저평가되고 여성에게 몰리는 경우가 많다.',
      original_definition:
        '돌봄노동은 타인의 건강·안녕·능력의 유지와 발달에 직접 기여하는 대면적 서비스 노동을 가리킨다. 이 노동은 시장에서 유급으로 수행되기도 하고 가정에서 무급으로 수행되기도 하지만, 어느 경우든 그 가치가 체계적으로 저평가되는 경향이 있다.',
      original_definition_source: '낸시 폴브레, 『보이지 않는 마음』(2001)',
      related_theorists: ['hochschild'],
      perspectives: [],
    },

    /* ── 가족·인구 ──────────────────────────────────────────── */
    {
      id: 'nuclear-family',
      term_ko: '핵가족',
      term_en: 'Nuclear Family',
      categories: ['가족·인구'],
      curator_definition:
        '부부와 미혼 자녀로만 이뤄진 가족 형태. 오늘날엔 "정상 가족"의 기준으로 삼기엔 무리가 있다는 비판을 받는다.',
      original_definition:
        '고립된 핵가족은 부부와 그들의 미성년 자녀로 구성되며, 확대친족 집단으로부터 구조적으로 분리되어 있다. 이러한 형태는 직업 체계가 요구하는 지리적·사회적 이동성과 양립 가능하다는 점에서 산업사회에 기능적으로 적합하다.',
      original_definition_source: '탤컷 파슨스·로버트 베일스, 『가족, 사회화, 상호작용 과정』(1955)',
      related_theorists: ['parsons'],
      perspectives: [],
    },
    {
      id: 'demographic-transition',
      term_ko: '인구변천',
      term_en: 'Demographic Transition',
      categories: ['가족·인구'],
      curator_definition:
        '산업화되면서 출생률과 사망률이 함께 낮아지는 장기 변화. 사망률이 먼저 떨어져 인구가 급증했다가, 출생률도 뒤따르며 다시 안정된다.',
      original_definition:
        '근대화 과정에서 인구는 고출생·고사망의 균형 상태에서 저출생·저사망의 균형 상태로 이행한다. 사망률의 저하가 출생률의 저하에 선행하기 때문에 이행기 동안 인구는 급격히 증가한다.',
      original_definition_source: '프랭크 노트스타인, 「인구: 장기적 관점」(1945)',
      related_theorists: [],
      perspectives: [],
    },
    {
      id: 'second-demographic-transition',
      term_ko: '제2차 인구변천',
      term_en: 'Second Demographic Transition',
      categories: ['가족·인구', '문화·미디어'],
      curator_definition:
        '결혼·출산보다 개인의 선택과 자아실현을 우선하면서 저출산·비혼·동거가 늘어나는 최근 흐름이다.',
      original_definition:
        '제2차 인구변천은 대체 수준 이하의 출산율, 결혼의 지연과 동거의 확산, 혼외 출산의 증가를 특징으로 하며, 그 배경에는 물질적 안전보다 자기실현과 개인의 자율성을 우선시하는 탈물질주의적 가치의 확산이 있다.',
      original_definition_source: '론 레스타허·데이르크 판더카 (1986) 논의 요약',
      related_theorists: ['beck'],
      perspectives: [],
    },

    /* ── 도시·공간 ──────────────────────────────────────────── */
    {
      id: 'gentrification',
      term_ko: '젠트리피케이션',
      term_en: 'Gentrification',
      categories: ['도시·공간'],
      curator_definition:
        '낙후된 동네에 돈과 사람이 몰려 집값·임대료가 오르고, 원래 살던 주민과 가게가 밀려나는 현상이다.',
      original_definition:
        '런던의 소박한 노동계급 주거지들이 하나둘씩 중간계급에 의해 잠식되었다. 초라한 셋집들은 임대 기간이 만료되자 우아하고 값비싼 주택으로 바뀌었다. 이러한 젠트리피케이션 과정이 어느 지역에서 일단 시작되면, 원래의 노동계급 거주자 대부분 혹은 전부가 밀려날 때까지 빠르게 진행된다.',
      original_definition_source: '루스 글래스, 『런던: 변화의 양상』(1964)',
      related_theorists: ['glass', 'lefebvre'],
      perspectives: [
        {
          school: '정치경제학적 관점',
          definition:
            '젠트리피케이션은 개인의 취향이 모인 결과가 아니라 자본의 논리다. 도심의 현재 지대와 재개발 시 기대되는 잠재 지대 사이의 격차가 충분히 벌어졌을 때 자본이 회귀하며, 따라서 이는 투자의 공간적 재배치 과정으로 설명된다.',
          source: '닐 스미스, 「지대격차 이론」(1979)',
        },
        {
          school: '문화·소비 중심 관점',
          definition:
            '탈산업화로 성장한 신중간계급이 교외의 획일적 생활양식을 거부하고 도심의 다양성과 진정성을 선택한 결과로 본다. 즉 생산 측 요인보다 소비와 라이프스타일의 변화를 설명의 축에 놓는다.',
          source: '데이비드 레이, 『신중간계급과 중심도시의 재구조화』(1996)',
        },
      ],
    },
    {
      id: 'gemeinschaft-gesellschaft',
      term_ko: '공동사회와 이익사회',
      term_en: 'Gemeinschaft & Gesellschaft',
      categories: ['도시·공간', '이론/사상'],
      curator_definition:
        '관계 자체가 목적인 공동체(가족, 마을)와 각자 목적을 위해 맺어지는 관계(회사, 계약)를 구분한 개념 쌍이다.',
      original_definition:
        '모든 친밀하고 사적이며 배타적인 공동생활은 공동사회(Gemeinschaft)로서의 생활로 이해된다. 이익사회(Gesellschaft)는 공적 생활이며, 말하자면 세계 그 자체다. 사람들은 공동사회 안에서 태어날 때부터 좋을 때나 나쁠 때나 결합되어 있지만, 이익사회에는 마치 낯선 땅에 들어가듯 들어간다.',
      original_definition_source: '페르디난트 퇴니스, 『공동사회와 이익사회』(1887)',
      related_theorists: ['tonnies', 'simmel', 'durkheim'],
      perspectives: [],
    },
    {
      id: 'production-of-space',
      term_ko: '공간의 생산',
      term_en: 'The Production of Space',
      categories: ['도시·공간', '이론/사상'],
      curator_definition:
        '공간은 텅 빈 그릇이 아니라 사회관계로 만들어지고, 그 공간이 다시 사람들의 관계를 바꾼다는 관점이다.',
      original_definition:
        '(사회적) 공간은 (사회적) 생산물이다. 각각의 사회는 자신의 공간을 생산한다. 공간은 그 안에서 사물들이 배열되는 중립적 용기가 아니라, 생산관계의 재생산이 이루어지는 수단이자 그 자체로 투쟁의 장이다.',
      original_definition_source: '앙리 르페브르, 『공간의 생산』(1974)',
      related_theorists: ['lefebvre'],
      perspectives: [],
    },

    /* ── 문화·미디어 ────────────────────────────────────────── */
    {
      id: 'ideology',
      term_ko: '이데올로기',
      term_en: 'Ideology',
      categories: ['문화·미디어', '정치·권력·사회변동'],
      curator_definition:
        '특정 집단에게 유리한 생각을 마치 모두의 상식처럼 보이게 만드는 관념 체계다.',
      original_definition:
        '지배계급의 사상은 어느 시대에나 지배적인 사상이다. 즉 사회의 지배적인 물질적 힘인 계급이 동시에 그 사회의 지배적인 정신적 힘이다. 물질적 생산수단을 마음대로 다루는 계급은 그와 함께 정신적 생산수단도 마음대로 다룬다.',
      original_definition_source: '카를 마르크스·프리드리히 엥겔스, 『독일 이데올로기』(1846)',
      related_theorists: ['marx', 'gramsci'],
      perspectives: [
        {
          school: '고전 마르크스주의',
          definition:
            '이데올로기는 현실의 계급 관계를 거꾸로 비추는 허위의식이다. 하부구조의 모순이 상부구조에서 왜곡된 형태로 나타난 것이므로, 계급 관계가 바뀌면 그 관념도 힘을 잃는다.',
          source: '카를 마르크스, 『독일 이데올로기』(1846)',
        },
        {
          school: '그람시주의',
          definition:
            '이데올로기는 단순한 허위의식이 아니라 사람들이 세계를 이해하고 살아가는 실질적 상식이다. 그렇기에 지배는 강제가 아니라 피지배자의 자발적 동의를 통해 관철되며, 헤게모니를 둘러싼 투쟁의 장이 된다.',
          source: '안토니오 그람시, 『옥중수고』(1929–1935)',
        },
        {
          school: '지식사회학',
          definition:
            '이데올로기는 특정 계급에만 있는 결함이 아니라 모든 사고가 존재 구속성을 갖는다는 사실의 다른 이름이다. 만하임은 현존 질서를 옹호하는 이데올로기와 그것을 넘어서려는 유토피아를 구분했다.',
          source: '카를 만하임, 『이데올로기와 유토피아』(1929)',
        },
      ],
    },
    {
      id: 'hegemony',
      term_ko: '헤게모니',
      term_en: 'Hegemony',
      categories: ['문화·미디어', '정치·권력·사회변동'],
      curator_definition:
        '힘이 아니라 사람들의 동의로 유지되는 지배. 학교·언론 등을 통해 지배 질서가 "원래 그런 것"처럼 스며들게 만든다.',
      original_definition:
        '한 사회집단의 우위는 지배(dominio)와 지적·도덕적 지도(direzione)라는 두 방식으로 나타난다. 사회집단은 권력을 장악하기 전에 이미 지도적일 수 있고 또 그래야만 하며, 권력을 행사할 때에는 지배적인 동시에 계속 지도적이어야 한다.',
      original_definition_source: '안토니오 그람시, 『옥중수고』(1929–1935)',
      related_theorists: ['gramsci'],
      perspectives: [],
    },
    {
      id: 'culture-industry',
      term_ko: '문화산업',
      term_en: 'Culture Industry',
      categories: ['문화·미디어'],
      curator_definition:
        '문화가 공장 제품처럼 규격에 맞춰 대량생산되는 것. 다양해 보여도 실은 미리 짜인 틀 안의 사소한 차이일 뿐이라는 비판이다.',
      original_definition:
        '문화산업의 모든 부문에서 생산물은 계획적으로 그리고 노골적으로 소비를 위해 만들어진다. 그것들은 더 이상 상품이기도 한 예술이 아니라 철저히 상품이다. 문화산업이 제공하는 것은 영원히 동일한 것의 반복이며, 새로움이란 언제나 그 동일성을 감추기 위한 외피에 지나지 않는다.',
      original_definition_source: '막스 호르크하이머·테오도어 아도르노, 『계몽의 변증법』(1947)',
      related_theorists: ['adorno'],
      perspectives: [],
    },
    {
      id: 'distinction',
      term_ko: '구별짓기',
      term_en: 'Distinction',
      categories: ['문화·미디어', '계급·노동·불평등'],
      curator_definition:
        '취향으로 계급을 구분하는 것. 무엇을 좋아하는지가 어느 계급에서 자랐는지를 은연중에 드러낸다는 뜻이다.',
      original_definition:
        '취향은 분류하며, 분류하는 자를 분류한다. 사회적 주체들은 아름다운 것과 추한 것, 세련된 것과 천박한 것 사이에 그들이 긋는 구별에 의해 스스로를 구별짓는다. 그리고 그 안에서 그들이 객관적 분류 체계 안에서 차지하는 위치가 표현되거나 드러난다.',
      original_definition_source: '피에르 부르디외, 『구별짓기』(1979)',
      related_theorists: ['bourdieu'],
      perspectives: [],
    },

    /* ── 일탈·범죄 ──────────────────────────────────────────── */
    {
      id: 'anomie',
      term_ko: '아노미',
      term_en: 'Anomie',
      categories: ['일탈·범죄', '이론/사상'],
      curator_definition:
        '지켜야 할 규범이 흐릿해져 뭘 원해야 할지조차 알 수 없게 된 상태. 사회가 급격히 바뀌는 시기에 자주 나타난다.',
      original_definition:
        '어떤 개인이든 그의 욕구를 제한하는 것은 그의 외부에 있는 도덕적 힘이어야 한다. 사회가 교란되면 이 조절 기능이 마비되어, 사람들은 자신에게 무엇이 가능하고 무엇이 불가능한지, 무엇이 정당하고 무엇이 부당한지 알 수 없게 된다. 그 결과 욕망에는 한계가 없어지고 이 무규제 상태가 아노미다.',
      original_definition_source: '에밀 뒤르켐, 『자살론』(1897)',
      related_theorists: ['durkheim', 'merton'],
      perspectives: [
        {
          school: '뒤르켐(고전) 관점',
          definition:
            '아노미는 사회의 규제력이 약해져 개인의 욕망이 무한정 팽창하는 무규범 상태다. 원인은 개인이 아니라 사회 통합의 수준에 있으며, 따라서 자살률 같은 지표는 사회의 도덕적 상태를 보여주는 사회적 사실이다.',
          source: '에밀 뒤르켐, 『자살론』(1897)',
        },
        {
          school: '기능주의(머튼의 긴장이론)',
          definition:
            '아노미는 규범의 부재가 아니라 구조적 괴리에서 온다. 성공이라는 문화적 목표는 모두에게 주입되는데 그것을 달성할 제도적 수단은 계층에 따라 불균등하게 분배되기 때문이다. 개인은 동조·혁신·의례주의·도피·반역 중 하나로 적응하며, 일탈은 이 긴장에 대한 정상적 반응이다.',
          source: '로버트 머튼, 「사회구조와 아노미」(1938)',
        },
        {
          school: '상징적 상호작용론',
          definition:
            '아노미 같은 거시 개념보다, 어떤 행위가 일탈로 규정되는 상호작용 과정에 주목한다. 일탈은 행위 자체의 속성이 아니라 그 행위에 사회가 어떤 반응과 이름을 붙이는가의 문제로 재구성된다.',
          source: '하워드 베커, 『아웃사이더』(1963)',
        },
      ],
    },
    {
      id: 'stigma',
      term_ko: '낙인',
      term_en: 'Stigma',
      categories: ['일탈·범죄', '이론/사상'],
      curator_definition:
        '어떤 특징 때문에 온전한 사람으로 대우받지 못하게 되는 사회적 꼬리표. 특징 자체가 아니라 그것을 문제 삼는 사회의 시선이 문제다.',
      original_definition:
        '낙인이란 심각하게 신용을 떨어뜨리는 속성이다. 그러나 정말로 필요한 것은 속성이 아니라 관계의 언어다. 어떤 유형의 소유자에게는 낙인이 되는 속성이 다른 유형의 소유자에게는 평범함을 확인해 줄 뿐이며, 따라서 그 자체로 신용을 떨어뜨리거나 존중받게 하는 속성이란 없다.',
      original_definition_source: '어빙 고프먼, 『낙인』(1963)',
      related_theorists: ['goffman'],
      perspectives: [],
    },
    {
      id: 'labeling-theory',
      term_ko: '낙인이론',
      term_en: 'Labeling Theory',
      categories: ['일탈·범죄'],
      curator_definition:
        '일탈은 행동 자체의 성질이 아니라 사회가 그 행동에 "일탈"이라는 이름을 붙였기 때문에 생긴다는 관점이다.',
      original_definition:
        '사회집단은 그것을 위반하면 일탈이 되는 규칙을 만듦으로써 일탈을 창출하고, 그 규칙을 특정한 사람들에게 적용해 그들을 아웃사이더로 낙인찍는다. 이 관점에서 일탈은 그 사람이 저지른 행위의 성질이 아니라, 타인이 그에게 규칙과 제재를 적용한 결과다. 일탈자란 그 낙인이 성공적으로 적용된 사람이다.',
      original_definition_source: '하워드 베커, 『아웃사이더』(1963)',
      related_theorists: ['goffman', 'merton'],
      perspectives: [],
    },

    /* ── 정치·권력·사회변동 ──────────────────────────────────── */
    {
      id: 'bureaucracy',
      term_ko: '관료제',
      term_en: 'Bureaucracy',
      categories: ['정치·권력·사회변동', '이론/사상'],
      curator_definition:
        '정해진 규칙과 위계에 따라 일이 처리되는 조직 형태. 공정함이 강점이지만, 융통성 없이 규정 뒤에 숨게 만드는 약점도 있다.',
      original_definition:
        '순수하게 관료제적인 행정 조직은 순수하게 기술적 관점에서 볼 때 최고도의 효율성을 달성할 수 있으며, 이 의미에서 인간에 대한 명령적 통제를 수행하는 가장 합리적으로 알려진 수단이다. 그것은 정밀성, 안정성, 규율의 엄격성, 신뢰성에서 다른 모든 형태를 능가한다.',
      original_definition_source: '막스 베버, 『경제와 사회』(1922)',
      related_theorists: ['weber', 'merton'],
      perspectives: [],
    },
    {
      id: 'disciplinary-power',
      term_ko: '규율권력',
      term_en: 'Disciplinary Power',
      categories: ['정치·권력·사회변동'],
      curator_definition:
        '직접 벌하지 않아도, 감시받을지 모른다는 느낌만으로 스스로 행동을 단속하게 만드는 권력이다.',
      original_definition:
        '규율은 신체의 활동에 대한 면밀한 통제를 가능하게 하고, 신체적 힘의 지속적인 복종을 확보하며, 그 힘에 순종–효용의 관계를 강제하는 방법이다. 이러한 방법을 통해 규율은 신체를 대상이자 도구로 삼아 유순하면서도 유용한 신체를 만들어낸다.',
      original_definition_source: '미셸 푸코, 『감시와 처벌』(1975)',
      related_theorists: ['foucault'],
      perspectives: [],
    },
    {
      id: 'civil-society',
      term_ko: '시민사회',
      term_en: 'Civil Society',
      categories: ['정치·권력·사회변동'],
      curator_definition:
        '국가도 시장도 아닌, 시민들이 자발적으로 모여 목소리를 내는 영역. 시민단체·노동조합·언론이 여기 속한다.',
      original_definition:
        '우리가 할 수 있는 것은 두 개의 상부구조적 층위를 구별하는 일이다. 하나는 흔히 사적이라 불리는 조직들의 총체인 시민사회이고, 다른 하나는 정치사회 또는 국가다. 이 두 층위는 각각 지배집단이 사회 전체에 걸쳐 행사하는 헤게모니의 기능과 국가를 통해 행사되는 직접적 지배의 기능에 대응한다.',
      original_definition_source: '안토니오 그람시, 『옥중수고』(1929–1935)',
      related_theorists: ['gramsci'],
      perspectives: [],
    },
    {
      id: 'risk-society',
      term_ko: '위험사회',
      term_en: 'Risk Society',
      categories: ['정치·권력·사회변동', '이론/사상'],
      curator_definition:
        '근대화가 만든 위험(원전 사고, 기후변화 등)을 다시 근대화로 해결해야 하는 사회. 부자든 가난한 사람이든 가리지 않고 퍼진다.',
      original_definition:
        '고전적 산업사회의 논리가 부의 생산과 분배를 중심으로 조직되었다면, 위험사회에서는 과학적·기술적으로 생산된 위험의 분배가 중심 문제가 된다. 궁핍은 위계적이지만 스모그는 민주적이다.',
      original_definition_source: '울리히 벡, 『위험사회』(1986)',
      related_theorists: ['beck'],
      perspectives: [],
    },
  ];

  return { categories: categories, theorists: theorists, terms: terms };
})();
