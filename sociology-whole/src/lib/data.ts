export interface Term {
  id: string
  name: string
  definition: string
  theorists: string[]
  courses: string[]
  relatedTerms: string[]
}

export interface Theorist {
  id: string
  name: string
  nameEn: string
  birth: string
  death: string
  nationality: string
  keyConcepts: string[]
  majorWorks: string[]
  summary: string
  description: string
}

export interface Course {
  id: string
  name: string
  description: string
  termCount: number
  theoristCount: number
}

export interface Article {
  id: string
  title: string
  summary: string
  relatedConcepts: string[]
  relatedTheorists: string[]
  createdAt: string
}

export const courses: Course[] = [
  { id: 'sociology-history', name: '사회학사', description: '사회학의 역사와 고전 이론가들의 사상을 학습합니다.', termCount: 25, theoristCount: 8 },
  { id: 'modern-sociology', name: '현대사회학', description: '현대 사회학 이론과 주요 패러다임을 다룹니다.', termCount: 20, theoristCount: 6 },
  { id: 'research-methods', name: '사회조사방법론', description: '사회 현상을 과학적으로 연구하는 방법론을 배웁니다.', termCount: 30, theoristCount: 4 },
  { id: 'stratification', name: '사회계층론', description: '사회적 불평등과 계층 구조를 분석합니다.', termCount: 18, theoristCount: 5 },
  { id: 'family', name: '가족사회학', description: '가족 제도의 변화와 현대 가족의 다양성을 탐구합니다.', termCount: 15, theoristCount: 4 },
  { id: 'culture', name: '문화사회학', description: '문화 현상을 사회학적 관점에서 분석합니다.', termCount: 22, theoristCount: 6 },
]

export const theorists: Theorist[] = [
  {
    id: 'durkheim',
    name: '에밀 뒤르켐',
    nameEn: 'Émile Durkheim',
    birth: '1858',
    death: '1917',
    nationality: '프랑스',
    keyConcepts: ['사회적 사실', '아노미', '기계적 연대', '유기적 연대', '집합의식'],
    majorWorks: ['사회분업론(1893)', '자살론(1897)', '종교생활의 원초적 형태(1912)'],
    summary: '사회학을 독립된 학문으로 정립한 기능주의 사회학의 창시자',
    description: '뒤르켐은 사회를 개인의 합 이상의 독립적 실체로 보았으며, 사회적 사실(fait social)을 사회학의 고유한 연구 대상으로 설정했다. 그는 사회적 연대의 유형을 기계적 연대와 유기적 연대로 구분하고, 근대화 과정에서 아노미 현상이 발생하는 메커니즘을 분석했다.',
  },
  {
    id: 'weber',
    name: '막스 베버',
    nameEn: 'Max Weber',
    birth: '1864',
    death: '1920',
    nationality: '독일',
    keyConcepts: ['이해사회학', '이념형', '관료제', '프로테스탄트 윤리', '탈주술화', '가치자유'],
    majorWorks: ['프로테스탄트 윤리와 자본주의 정신(1905)', '경제와 사회(1922)', '직업으로서의 학문(1917)'],
    summary: '이해사회학과 관료제 이론의 창시자, 사회적 행위의 주관적 의미를 중시',
    description: '베버는 사회적 행위의 주관적 의미를 이해(Verstehen)하는 것이 사회학의 과제라고 보았다. 그는 합리화(Rationalisierung)를 근대 서구 문명의 핵심 특징으로 파악했으며, 관료제를 합리적 지배의 가장 순수한 유형으로 분석했다.',
  },
  {
    id: 'marx',
    name: '카를 마르크스',
    nameEn: 'Karl Marx',
    birth: '1818',
    death: '1883',
    nationality: '독일',
    keyConcepts: ['계급투쟁', '잉여가치', '소외', '하부구조/상부구조', '이데올로기', '역사적 유물론'],
    majorWorks: ['자본론(1867)', '공산당 선언(1848)', '독일 이데올로기(1846)'],
    summary: '자본주의 사회의 구조적 모순과 계급 관계를 분석한 갈등론의 기초',
    description: '마르크스는 물질적 생산관계가 사회의 토대(하부구조)를 이루며, 법·정치·문화 등 상부구조를 규정한다고 보았다. 자본주의에서 부르주아지와 프롤레타리아트 간의 계급투쟁이 역사 발전의 원동력이라고 주장했다.',
  },
  {
    id: 'bourdieu',
    name: '피에르 부르디외',
    nameEn: 'Pierre Bourdieu',
    birth: '1930',
    death: '2002',
    nationality: '프랑스',
    keyConcepts: ['문화자본', '아비투스', '장(場)', '상징폭력', '구별짓기'],
    majorWorks: ['구별짓기(1979)', '재생산(1970)', '실천감각(1980)'],
    summary: '문화자본, 아비투스 개념으로 사회적 불평등의 재생산 메커니즘을 분석',
    description: '부르디외는 경제자본 외에 문화자본, 사회자본, 상징자본 등 다양한 자본 형태를 통해 사회적 불평등이 재생산되는 과정을 분석했다. 아비투스 개념을 통해 구조와 행위자 사이의 매개를 설명했다.',
  },
  {
    id: 'goffman',
    name: '어빙 고프먼',
    nameEn: 'Erving Goffman',
    birth: '1922',
    death: '1982',
    nationality: '캐나다/미국',
    keyConcepts: ['인상관리', '연극적 접근', '프레임 분석', '낙인', '총체적 기관'],
    majorWorks: ['자아 연출의 사회학(1959)', '낙인(1963)', '프레임 분석(1974)'],
    summary: '일상적 상호작용을 연극에 비유하여 분석한 미시사회학의 대가',
    description: '고프먼은 일상적 사회적 상호작용을 연극 무대에 비유하여 분석했다. 사람들이 타인에게 특정 인상을 주기 위해 어떻게 자아를 연출(presentation of self)하는지를 탐구했다.',
  },
]

export const terms: Term[] = [
  {
    id: 'anomie',
    name: '아노미 (Anomie)',
    definition: '사회적 규범이 약화되거나 붕괴되어 개인이 행위의 기준을 상실한 상태. 뒤르켐이 제시한 개념으로, 급격한 사회변동기에 기존의 도덕적 규제가 무너지면서 나타나는 규범의 공백 상태를 의미한다.',
    theorists: ['durkheim'],
    courses: ['sociology-history', 'modern-sociology'],
    relatedTerms: ['social-solidarity', 'collective-consciousness'],
  },
  {
    id: 'social-solidarity',
    name: '사회적 연대 (Social Solidarity)',
    definition: '사회 구성원들을 하나의 집합체로 결합시키는 유대 관계. 뒤르켐은 전통사회의 기계적 연대(동질성 기반)와 근대사회의 유기적 연대(분업에 기반한 상호의존)를 구분했다.',
    theorists: ['durkheim'],
    courses: ['sociology-history'],
    relatedTerms: ['anomie', 'collective-consciousness'],
  },
  {
    id: 'collective-consciousness',
    name: '집합의식 (Collective Consciousness)',
    definition: '한 사회의 구성원들이 공유하는 신념, 감정, 가치의 총체. 뒤르켐에 따르면, 기계적 연대 사회에서는 집합의식이 강하고 개인의식이 약하지만, 유기적 연대 사회에서는 그 반대이다.',
    theorists: ['durkheim'],
    courses: ['sociology-history'],
    relatedTerms: ['anomie', 'social-solidarity'],
  },
  {
    id: 'ideal-type',
    name: '이념형 (Ideal Type)',
    definition: '현실의 복잡한 현상을 분석하기 위해 특정 측면을 논리적으로 순수화하여 구성한 개념적 도구. 베버가 사회과학 방법론의 핵심으로 제시했으며, 현실 그 자체가 아니라 현실을 이해하기 위한 "측정 자"의 역할을 한다.',
    theorists: ['weber'],
    courses: ['sociology-history', 'research-methods'],
    relatedTerms: ['verstehen', 'bureaucracy'],
  },
  {
    id: 'verstehen',
    name: '이해 (Verstehen)',
    definition: '사회적 행위에 부여된 주관적 의미를 해석적으로 파악하는 방법. 베버의 이해사회학의 핵심 방법론으로, 인과적 설명과 함께 사회학의 두 축을 이룬다.',
    theorists: ['weber'],
    courses: ['sociology-history', 'research-methods'],
    relatedTerms: ['ideal-type'],
  },
  {
    id: 'bureaucracy',
    name: '관료제 (Bureaucracy)',
    definition: '규칙에 따른 행정, 위계적 조직구조, 전문화된 분업, 문서주의를 특징으로 하는 합리적 조직 형태. 베버는 관료제를 근대 합리화의 가장 대표적인 제도적 표현으로 보았다.',
    theorists: ['weber'],
    courses: ['sociology-history', 'modern-sociology'],
    relatedTerms: ['ideal-type'],
  },
  {
    id: 'class-struggle',
    name: '계급투쟁 (Class Struggle)',
    definition: '생산수단의 소유 여부에 따라 나뉘는 계급들 간의 갈등. 마르크스에 따르면 모든 역사는 계급투쟁의 역사이며, 자본주의에서는 부르주아지와 프롤레타리아트 간의 투쟁이 핵심이다.',
    theorists: ['marx'],
    courses: ['sociology-history', 'stratification'],
    relatedTerms: ['alienation', 'ideology'],
  },
  {
    id: 'alienation',
    name: '소외 (Alienation)',
    definition: '노동자가 자신의 노동 생산물, 노동 과정, 유적 존재(인간 본질), 그리고 다른 인간으로부터 분리되는 현상. 마르크스의 초기 저작에서 핵심적으로 다뤄진 개념이다.',
    theorists: ['marx'],
    courses: ['sociology-history', 'stratification'],
    relatedTerms: ['class-struggle'],
  },
  {
    id: 'cultural-capital',
    name: '문화자본 (Cultural Capital)',
    definition: '교육, 취향, 언어 습관, 문화적 소양 등 비경제적 형태의 자본으로, 사회적 지위의 재생산에 기여한다. 부르디외가 제시한 개념으로, 체화된·객체화된·제도화된 형태로 존재한다.',
    theorists: ['bourdieu'],
    courses: ['stratification', 'culture'],
    relatedTerms: ['habitus', 'symbolic-violence'],
  },
  {
    id: 'habitus',
    name: '아비투스 (Habitus)',
    definition: '특정한 사회적 조건에서 형성된 성향 체계로, 개인의 인식·판단·행위를 무의식적으로 구조화한다. 구조에 의해 형성되면서 동시에 구조를 재생산하는 매개체이다.',
    theorists: ['bourdieu'],
    courses: ['modern-sociology', 'culture'],
    relatedTerms: ['cultural-capital', 'symbolic-violence'],
  },
  {
    id: 'symbolic-violence',
    name: '상징폭력 (Symbolic Violence)',
    definition: '지배 관계가 자연스럽고 정당한 것으로 인식되도록 만드는 비물리적 권력 행사. 피지배자가 지배의 자의성을 인식하지 못한 채 그것을 내면화하는 과정을 포함한다.',
    theorists: ['bourdieu'],
    courses: ['modern-sociology', 'stratification'],
    relatedTerms: ['cultural-capital', 'habitus'],
  },
  {
    id: 'impression-management',
    name: '인상관리 (Impression Management)',
    definition: '타인에게 자신에 대한 특정한 인상을 형성시키기 위해 의도적으로 자신의 행동을 통제하고 조절하는 과정. 고프먼의 연극적 접근(dramaturgical approach)의 핵심 개념이다.',
    theorists: ['goffman'],
    courses: ['modern-sociology'],
    relatedTerms: ['stigma'],
  },
  {
    id: 'stigma',
    name: '낙인 (Stigma)',
    definition: '사회적으로 부정적인 꼬리표가 붙어 정상적 사회적 정체성을 유지하기 어렵게 만드는 속성. 고프먼은 신체적·성격적·부족 낙인으로 유형화했다.',
    theorists: ['goffman'],
    courses: ['modern-sociology'],
    relatedTerms: ['impression-management'],
  },
  {
    id: 'ideology',
    name: '이데올로기 (Ideology)',
    definition: '특정 계급의 이익을 보편적인 것으로 위장하는 관념 체계. 마르크스에게 이데올로기는 지배계급의 사상이 사회 전체의 지배적 사상이 되는 메커니즘을 의미한다.',
    theorists: ['marx'],
    courses: ['sociology-history', 'culture'],
    relatedTerms: ['class-struggle'],
  },
]

export const articles: Article[] = [
  {
    id: 'low-birth-anomie',
    title: '저출산 현상을 뒤르켐의 아노미 개념으로 보면?',
    summary: '급격한 사회변동 속에서 결혼·출산에 대한 기존 규범이 약화되고, 새로운 규범이 아직 확립되지 않은 아노미 상태로 저출산을 해석해봅니다.',
    relatedConcepts: ['anomie', 'social-solidarity'],
    relatedTheorists: ['durkheim'],
    createdAt: '2026-08-10',
  },
  {
    id: 'platform-labor-alienation',
    title: '플랫폼 노동과 마르크스의 소외',
    summary: '배달 라이더, 대리기사 등 플랫폼 노동자들이 경험하는 현대적 소외를 마르크스의 소외론으로 분석합니다.',
    relatedConcepts: ['alienation', 'class-struggle'],
    relatedTheorists: ['marx'],
    createdAt: '2026-08-07',
  },
  {
    id: 'sns-impression-management',
    title: 'SNS 시대의 인상관리: 고프먼이 인스타를 봤다면',
    summary: '인스타그램·틱톡에서의 자기 연출을 고프먼의 연극적 접근과 인상관리 개념으로 읽어봅니다.',
    relatedConcepts: ['impression-management'],
    relatedTheorists: ['goffman'],
    createdAt: '2026-08-03',
  },
  {
    id: 'education-cultural-capital',
    title: '사교육 열풍과 문화자본의 세습',
    summary: '한국 사회의 사교육 문화를 부르디외의 문화자본 개념으로 분석하며, 교육을 통한 불평등 재생산을 살펴봅니다.',
    relatedConcepts: ['cultural-capital', 'habitus', 'symbolic-violence'],
    relatedTheorists: ['bourdieu'],
    createdAt: '2026-07-28',
  },
]
