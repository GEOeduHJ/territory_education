import { LearningTheme, ModuleData } from '../../types';

export const DOKDO_LEARNING_THEMES: LearningTheme[] = [
  {
    id: 'location',
    title: '독도의 위치와 영역',
    summary: '지도상의 위치와 영토·영해·영공',
    contentParagraphs: [
      [
        { text: '독도는 ' },
        { id: 'coordinates', text: '동해에 있으며 북위 37도, 동경 131도', revealable: true },
        { text: ' 부근에 위치한 우리나라의 동쪽 끝 섬이다. 울진군 죽변에서 동쪽으로 약 216.8km, 울릉도에서 ' },
        { id: 'ul-relation', text: '남동쪽으로 약 87.4km', revealable: true },
        { text: ' 떨어져 있다. 기준점을 어디에 두는지에 따라 방향과 거리가 달라지므로 위치를 설명할 때는 출발점·방향·거리를 함께 확인한다.' }
      ],
      [
        { text: '날씨가 맑으면 울릉도에서 독도를 ' },
        { id: 'visible-from-ul', text: '맨눈으로 볼 수 있다', revealable: true },
        { text: '. 독도가 실제로 보인다는 사실은 두 섬의 거리와 방향을 지도상의 위치 관계와 연결해 이해하게 한다. 두 섬 사이의 가까운 거리와 시야는 독도와 울릉도가 맺어 온 ' },
        { id: 'community-relation', text: '생활권 관계', revealable: true },
        { text: '를 이해하는 데 도움이 된다.' }
      ],
      [
        { text: '한 나라의 영역은 ' },
        { id: 'territorial-components', text: '영토·영해·영공', revealable: true },
        { text: '으로 이루어진다. 영해는 영해 기선에서 최대 12해리(약 22km)까지이다. 섬 주변 바다의 ' },
        { id: 'eez-boundary', text: '경계와 배타적 경제 수역', revealable: true },
        { text: '도 함께 살펴봐야 한다. 배타적 경제 수역은 영해와 구분되는 권리 범위이므로 두 개념을 혼동하지 않는 것이 중요하다.' }
      ]
    ],
    inquiryPrompt: '지도와 영역 개념을 함께 활용해 독도의 위치를 어떻게 설명할 수 있을까요?',
    checkQuestion: '독도의 위치를 지도에서 설명하는 데 가장 직접적인 근거는 무엇일까요?',
    checkOptions: [
      { id: 'location-correct', label: '울릉도를 기준으로 한 방향과 거리', feedback: '맞아요. 기준점·방향·거리를 함께 보면 지도에서 위치 관계를 설명할 수 있습니다.', isCorrect: true },
      { id: 'location-weather', label: '독도 여행에 적합한 계절과 날씨', feedback: '여행 정보를 고르는 데 쓰이는 내용입니다. 위치를 설명하려면 지도상의 기준점과 방향, 거리를 확인하세요.', isCorrect: false },
      { id: 'location-color', label: '지도에 표시된 섬의 색깔', feedback: '색은 지도 표현 방식일 수 있습니다. 위치를 보여주는 기준점과 방향·거리 정보를 확인하세요.', isCorrect: false }
    ],
  },
  {
    id: 'landform',
    title: '독도의 지형',
    summary: '해저 화산에서 동도·서도와 해저 지형까지',
    contentParagraphs: [
      [
        { text: '독도는 약 ' },
        { text: '460만~250만 년 전 해저 약 2,000m에서 분출한 용암이 굳어 형성된 ' },
        { id: 'landform-volcanic-island', text: '화산섬', revealable: true },
        { text: '이다. 울릉도와 제주도보다 먼저 만들어졌으며, 지금 바다 위로 드러난 부분은 거대한 화산체의 일부다.' }
      ],
      [
        { text: '처음에는 하나의 섬이었지만 ' },
        { id: 'erosion-separation', text: '파랑에 의한 침식', revealable: true },
        { text: '과 해수면 변화 등의 작용으로 약 250만 년 전 동도와 서도로 나뉘었다. 이후에도 비바람과 파도가 바위를 깎고 무너뜨리며 해안 절벽과 해식동굴, 바위 지형을 만들었다.' }
      ],
      [
        { text: '독도는 동도와 서도, 89개의 작은 바위섬으로 이루어져 있다. 지표에는 주상절리와 해식애, 해식동굴, 시 스택 등 화산 활동과 파도 침식의 흔적이 남아 있다. 바닷속에는 울릉도와 독도 사이의 안용복 해산, 독도 남동쪽의 심흥택 해산과 이사부 해산 같은 ' },
        { id: 'undersea-volcanic-landform', text: '해저 화산 지형', revealable: true },
        { text: '도 이어져 있다. 육지와 해저를 함께 살펴보면 독도의 화산 형성과 현재 지형의 관계를 이해할 수 있다.' }
      ]
    ],
    inquiryPrompt: '독도의 지형을 그림이나 굿즈로 표현한다면 어떤 섬이나 바위의 형태가 가장 잘 드러날까요?',
    checkQuestion: '독도의 섬과 바위 지형을 설명한 내용으로 알맞은 것은 무엇일까요?',
    checkOptions: [
      { id: 'landform-correct', label: '동도와 서도, 89개의 작은 바위섬으로 이루어져 있다.', feedback: '맞아요. 두 큰 섬과 작은 바위섬이 독도의 기본적인 지형 구성을 이룹니다.', isCorrect: true },
      { id: 'landform-one', label: '하나의 둥근 섬과 모래사장으로 이루어져 있다.', feedback: '독도는 동도·서도와 작은 바위섬으로 이루어져 있습니다. 섬의 구성을 다시 떠올려보세요.', isCorrect: false },
      { id: 'landform-coral', label: '산호초가 쌓여 만들어진 평평한 섬이다.', feedback: '독도는 용암이 굳어 형성된 화산섬입니다. 형성 과정과 지형의 특징을 다시 살펴보세요.', isCorrect: false }
    ]
  },
  {
    id: 'ecology',
    title: '독도의 생태계와 해양 자원',
    summary: '섬과 바다의 생물 다양성, 자원과 보전',
    contentParagraphs: [
      [
        { text: '독도는 급경사 사면이 많고 토양층이 얕아 식물이 뿌리내릴 곳과 수분이 부족하다. 염분이 섞인 해풍과 강한 바람도 식물의 성장에 영향을 준다. 그럼에도 해국·번행초·섬기린초와 곰솔·동백나무 등이 자란다. 이처럼 ' },
        { id: 'island-habitat', text: '열악한 섬 환경에 적응한 생물', revealable: true },
        { text: '이 독도 생태계의 특징이다. 섬의 환경 조건과 그곳에서 살아가는 생물의 관계를 함께 살펴볼 수 있다.' }
      ],
      [
        { text: '독도에는 괭이갈매기·슴새·바다제비를 비롯해 약 139종의 조류가 서식하며, 이 세 종은 독도에서 번식한다. 주변에는 무척추동물 약 370종과 해조류 약 223종이 확인되고, 바다에는 오징어·꽁치·전복·해삼 등도 살아간다. 생물과 서식지를 함께 보호하기 위해 독도는 천연기념물 제336호 ' },
        { id: 'nature-protection-area', text: '독도천연보호구역', revealable: true },
        { text: '으로 지정되어 있다.' }
      ],
      [
        { text: '수심 200m 아래의 해양 심층수는 햇빛이 닿지 않고 낮은 수온을 유지하는 바닷물이다. 해저에는 메탄을 주성분으로 하는 가스 하이드레이트도 분포한다. 독도의 지질 경관과 생물 다양성은 ' },
        { id: 'natural-heritage-value', text: '자연유산의 가치', revealable: true },
        { text: '를 지니며, 수산물과 해저 자원은 ' },
        { id: 'economic-value', text: '경제적 가치', revealable: true },
        { text: '를 지닌다. 다만 자원이 존재한다는 사실만으로 실제 채취와 이용이 가능하다고 단정할 수는 없다. 자원 이용 가능성은 ' },
        { id: 'conservation-and-extraction', text: '생태계 보전과 채취 기술·비용', revealable: true },
        { text: '을 함께 따져 살펴야 한다.' }
      ]
    ],
    inquiryPrompt: '독도 주변 바다의 생물과 자원을 소개할 때 이용 가치와 보전의 필요성을 어떻게 함께 담을 수 있을까요?',
    checkQuestion: '독도 주변 해양 자원의 활용 가능성을 판단할 때 함께 고려할 점은 무엇일까요?',
    checkOptions: [
      { id: 'ecology-correct', label: '생태계 영향과 채취 기술·비용을 함께 따져본다.', feedback: '맞아요. 자원의 존재뿐 아니라 지속 가능한 이용 조건도 함께 살펴야 합니다.', isCorrect: true },
      { id: 'ecology-unlimited', label: '자원이 확인되면 환경 영향과 관계없이 바로 채취한다.', feedback: '자원 개발은 생태계 보전과 기술·비용을 함께 고려해야 합니다.', isCorrect: false },
      { id: 'ecology-guaranteed', label: '해저에 자원이 있다는 사실만으로 실제 채취가 가능하다고 판단한다.', feedback: '자원의 존재와 실제 개발 가능성은 다릅니다. 채취 기술과 비용도 확인해야 합니다.', isCorrect: false }
    ],
  },
  {
    id: 'historical-records',
    title: '독도의 기록과 역사',
    summary: '우리나라 문헌과 일본의 행정 기록으로 살펴보는 독도 인식',
    contentParagraphs: [
      [
        { text: '우리나라 역사 문헌에는 독도와 관련된 많은 기록이 남아 있다. 『삼국사기』에는 512년 신라가 우산국을 복속한 사실이 기록되어 있다. 『세종실록지리지』는 우산도와 무릉도(울릉도)를 서로 구분되는 두 섬으로 기록했고, 『동국문헌비고』는 울릉과 우산이 우산국의 땅이며 우산은 일본에서 송도라 부르는 섬이라고 설명한다. 이러한 기록은 조선에서 ' },
        { id: 'separate-island-recognition', text: '독도를 울릉도와 구별되는 섬', revealable: true },
        { text: '으로 인식했음을 보여준다.' }
      ],
      [
        { text: '한편 일본의 기록에서도 당시 행정기관이 울릉도와 독도를 어떻게 보았는지 확인할 수 있다. 1695년 돗토리번의 답변에는 울릉도와 송도(독도)가 돗토리번에 속하지 않는다고 적혀 있다. 1877년 메이지 정부의 태정관 지령은 울릉도와 그 밖의 한 섬에 대해 ' },
        { id: 'japan-not-related', text: '일본은 관계가 없다', revealable: true },
        { text: '고 판단했다. 이 기록들은 당시 일본의 영토 인식에서 두 섬을 ' },
        { id: 'not-japanese-territory', text: '일본 관할의 영토로 보지 않았다', revealable: true },
        { text: '는 근거이다.' }
      ],
      [
        { text: '조선의 문헌은 우산도와 울릉도를 구분하고, 일본의 행정 기록은 당시 두 섬을 일본 관할로 두지 않았음을 보여준다. 출처와 작성 시기가 다른 기록을 함께 비교하면 독도가 역사적으로 우리 영토였다는 근거를 확인하고, 그 근거를 들어 설명할 수 있다. ' },
        { id: 'compare-historical-records', text: '여러 기록을 대조하는 과정', revealable: true },
        { text: '은 자료가 작성된 배경과 맥락까지 살펴 역사적 사실을 판단하는 데 도움이 된다.' }
      ]
    ],
    inquiryPrompt: '우리나라 문헌과 일본의 행정 기록을 함께 비교하면 독도의 역사적 인식을 어떻게 설명할 수 있을까요?',
    checkQuestion: '독도의 역사적 인식을 설명하기 위해 가장 적절한 방법은 무엇일까요?',
    checkOptions: [
      { id: 'records-correct', label: '서로 다른 시기와 작성 주체의 기록을 대조해 공통점과 맥락을 살펴본다.', feedback: '맞아요. 기록의 작성 시기와 주체를 비교해야 독도에 대한 역사적 인식을 근거로 설명할 수 있습니다.', isCorrect: true },
      { id: 'records-single', label: '한 문헌의 한 문장만으로 모든 역사적 사실을 판단한다.', feedback: '한 기록만 보면 당시의 맥락이나 다른 자료와의 관계를 놓칠 수 있습니다.', isCorrect: false },
      { id: 'records-name-only', label: '섬의 이름이 다르면 서로 다른 섬이라고 판단한다.', feedback: '이름은 시대와 기록 주체에 따라 달라질 수 있으므로 위치와 기록 맥락도 함께 비교해야 합니다.', isCorrect: false }
    ],
  },
  {
    id: 'international-relations',
    title: '독도와 국제 관계',
    summary: '대한제국의 관할과 일본의 편입 조치, 전후 문서',
    contentParagraphs: [
      [
        { text: '독도는 대한민국의 영토다. 다만 일본 정부가 독도에 대한 ' },
        { id: 'sovereignty-claim', text: '영유권', revealable: true },
        { text: '을 주장하면서 한일 간 외교 쟁점이 이어지고 있다. 이 문제를 이해하려면 각국의 주장만 나열하기보다, 영토에 관한 기록이나 행정 조치가 어떤 ' },
        { id: 'historical-context', text: '시대적 상황', revealable: true },
        { text: '에서 나왔는지 함께 살펴야 한다.' }
      ],
      [
        { text: '1900년 대한제국 칙령 제41호는 울릉도의 행정구역을 정비하면서 울릉도와 죽도, 석도를 울도군의 관할 구역으로 규정했다. 대한민국은 이때의 석도를 독도로 해석한다. 이 칙령의 의미는 대한제국이 울도군이라는 행정구역과 군수를 두고 주변 섬을 관할하도록 정했다는 점에서, 독도가 ' },
        { id: 'korean-administration', text: '대한제국의 행정 체계 안에서 관리되었다', revealable: true },
        { text: '는 근거로 읽힌다.' }
      ],
      [
        { text: '1905년 일본은 러일전쟁 중 독도를 시마네현에 편입하는 조치를 했다. 일본 정부는 이 조치를 영유 의사의 확인이라고 설명하지만, 대한민국은 대한제국의 관할이 이미 존재하던 상황에서 이뤄진 ' },
        { id: 'unilateral-encroachment', text: '일방적 침탈', revealable: true },
        { text: '로 본다.' }
      ],
      [
        { text: '1946년 연합국 최고사령관 각서인 ‘SCAPIN-677’은 일본 정부가 일정 지역에 대해 정치·행정 권한을 행사하지 못하도록 한 지령이다. 여기에 울릉도와 독도 등이 ' },
        { id: 'excluded-from-japanese-administration', text: '일본의 행정 범위에서 제외된 지역', revealable: true },
        { text: '으로 적혔다. 따라서 이 문서는 일본의 점령 기간에 독도가 일본의 행정 권한에서 분리되어 취급되었다는 사실을 보여준다.' }
      ]
    ],
    inquiryPrompt: '1900년 대한제국 칙령, 1905년 일본의 편입 조치, SCAPIN-677을 시대적 상황과 작성 주체에 따라 어떻게 비교할 수 있을까요?',
    checkQuestion: 'SCAPIN-677에 관한 설명으로 알맞은 것은 무엇일까요?',
    checkOptions: [
      { id: 'international-relations-correct', label: '일본 점령기에 일본 정부가 일정 지역에서 정치·행정 권한을 행사하지 못하도록 한 연합국 최고사령관의 지령이다.', feedback: '맞아요. SCAPIN-677은 전후 일본 점령기에 적용된 행정 지령으로, 독도 등이 일본 행정 범위에서 제외된 지역에 포함되었습니다.', isCorrect: true },
      { id: 'international-relations-treaty', label: '대한제국이 울릉도와 주변 섬의 관할을 정한 1900년 칙령이다.', feedback: '그 설명은 대한제국 칙령 제41호에 해당합니다. SCAPIN-677은 1946년 연합국 최고사령관의 지령입니다.', isCorrect: false },
      { id: 'international-relations-japan', label: '일본 정부가 1905년에 독도를 시마네현에 편입한 고시이다.', feedback: '1905년 편입 조치는 시마네현 고시 제40호와 관련됩니다. SCAPIN-677은 전후 점령기에 내려진 별도의 지령입니다.', isCorrect: false }
    ],
  },
  {
    id: 'east-sea-naming',
    title: '독도와 동해 표기 문제',
    summary: '독도 명칭과 동해 표기의 역사·국제 기준',
    contentParagraphs: [
      [
        { text: '독도와 바다의 이름은 지도에서 어떤 이름을 사용하느냐의 문제인 동시에, ' },
        { id: 'place-name-diffusion', text: '지명이 만들어지고 국제적으로 퍼지는 과정', revealable: true },
        { text: '과 연결된다. 한국에서는 독도를 독도라고 부르고, 일본 정부는 다케시마라고 부른다. 세계의 일부 지도에는 리앙쿠르 록스라는 이름도 사용된다. 따라서 각 지명이 언제, 누가, 어떤 자료와 목적을 바탕으로 사용하기 시작했는지 구분해 살펴야 한다.' }
      ],
      [
        { text: '한반도와 일본 열도 사이의 바다를 두고 한국과 일본은 서로 다른 표기 입장을 갖고 있다. 한국은 동해라는 명칭의 역사적 사용과 양국이 공유하는 바다라는 점을 들어 동해(East Sea)와 일본해(Sea of Japan)를 함께 표기하자고 제안한다. 일본은 일본해 단독 표기를 유지해야 한다는 입장이다. 양국의 입장을 비교할 때는 각 정부의 설명을 그대로 사실로 받아들이기보다, 그 주장이 ' },
        { id: 'check-claim-evidence', text: '어떤 근거를 제시하는지 확인', revealable: true },
        { text: '하는 것이 중요하다.' }
      ],
      [
        { text: '국제수로기구(IHO)가 1929년에 발간한 『해양과 바다의 경계』에는 해당 바다가 일본해로 표기되었다. 이 문서는 항해와 해도 제작에 활용되는 바다 이름을 정리하고 통일하는 과정에서 만들어졌다. 그러나 당시 한국은 일본의 식민 지배 아래 있어 국제 표준을 정하는 과정에서 독자적으로 의견을 제시하기 어려웠다. 한편 일본 정부는 일본해라는 이름이 식민 지배 이전부터 국제적으로 널리 사용되었다고 주장한다. 이 차이를 이해하려면 과거 지도에서 사용된 ' },
        { id: 'map-and-standardization-history', text: '여러 명칭과 지도 제작 시기, 국제 표준 문서의 발행 시기', revealable: true },
        { text: '를 함께 비교할 필요가 있다.' }
      ]
    ],
    inquiryPrompt: '과거 지도와 국제 표준 문서, 양국 정부의 주장을 비교해 표기 논쟁의 근거를 어떻게 설명할 수 있을까요?',
    checkQuestion: '동해 표기 문제를 자료에 근거해 살펴보는 방법으로 가장 적절한 것은 무엇일까요?',
    checkOptions: [
      { id: 'east-sea-correct', label: '과거 지도와 국제 표준 문서의 시기·목적을 살피고, 양국 정부가 제시하는 근거를 비교한다.', feedback: '맞아요. 지명 사용의 역사와 표준 문서의 역할, 각 정부의 주장을 구분해 검토할 수 있습니다.', isCorrect: true },
      { id: 'east-sea-one-map', label: '지도 한 장에 적힌 이름만으로 모든 표기 문제를 판단한다.', feedback: '지도는 제작 시기와 목적에 따라 다를 수 있습니다. 여러 지도와 표준 문서를 함께 살펴보세요.', isCorrect: false },
      { id: 'east-sea-claim', label: '한 정부의 설명을 다른 자료와 비교하지 않고 그대로 결론으로 삼는다.', feedback: '정부의 입장도 하나의 주장입니다. 어떤 자료를 근거로 삼는지 확인하고 비교해야 합니다.', isCorrect: false }
    ],
  }
];

export const MODULE_3_DATA: ModuleData = {
  id: '3',
  topic: '독도',
  title: '독도를 배우고, AI로 배움의 가치를 디자인하다',
  description: '독도의 위치와 영역, 지형과 생태, 기록과 역사, 국제 관계와 동해 표기를 배우고 생성형 AI로 굿즈와 상품 설명서를 만드는 모듈',
  steps: [
    {
      id: 'step-1',
      title: '독도 주제 학습',
      description: '여섯 주제를 열어 독도의 위치·지형·생태·기록과 역사·국제 관계·동해 표기를 살펴보세요.',
      content: '요약문에서 ‘클릭해서 내용 확인’을 눌러 중요한 사실을 확인하세요. 다시 참고하고 싶은 내용은 최대 3개까지 관심 내용으로 추가해둘 수 있습니다.',
      learningThemes: DOKDO_LEARNING_THEMES,
      showResourceDropdown: true,
      dropdownResources: [
        {
          id: 'resource-1',
          label: '초등 3~4학년 독도 학습 자료',
          url: 'https://contents.nahf.or.kr/eddokViewer/contens.do?viewType=Elementary34&levelId=eddok.d_0001'
        },
        {
          id: 'resource-2',
          label: '초등 독도 학습 자료',
          url: 'https://contents.nahf.or.kr/eddokViewer/contens.do?viewType=Elementary&levelId=eddok.d_0002'
        },
        {
          id: 'resource-3',
          label: '중학교 독도 학습 자료',
          url: 'https://contents.nahf.or.kr/eddokViewer/contens.do?viewType=Middle&levelId=eddok.d_0003'
        },
        {
          id: 'resource-4',
          label: '고등학교 독도 학습 자료',
          url: 'https://contents.nahf.or.kr/eddokViewer/contens.do?viewType=High&levelId=eddok.d_0004'
        }
      ],
      editableContent: false
    },
    {
      id: 'step-2',
      title: '배운 내용 점검 퀴즈',
      description: '여섯 주제의 내용을 점검해보세요. 선택지 순서는 퀴즈를 새로 시작할 때마다 섞입니다.',
      content: '각 문항에서 가장 적절한 답을 고르고 해설을 확인하세요. 헷갈린 내용은 1단계의 해당 주제를 다시 읽어보세요.',
      learningThemes: DOKDO_LEARNING_THEMES,
      useLearningQuiz: true,
      editableContent: false
    },
    {
      id: 'step-3',
      title: '독도 굿즈 디자인 생성',
      description: '1단계에서 추가한 관심 내용을 참고해 나만의 굿즈 디자인 프롬프트를 작성해보세요.',
      content: '선택한 관심 내용은 자동으로 입력되지 않습니다. 별도 목록을 참고해 디자인에 담을 학습 내용을 직접 적어보세요.',
      learningThemes: DOKDO_LEARNING_THEMES,
      useGoodsDesignWorkspace: true,
      editableContent: false
    },
    {
      id: 'step-4',
      title: '상품 설명서 제작',
      description: '굿즈의 의미와 사용 방법을 정리해 상품 설명서 이미지로 완성해보세요.',
      content: '1단계에서 골라둔 핵심 내용은 메시지 입력칸에 미리 표시됩니다. 굿즈 이미지와 함께 상품 설명서에 담을 내용을 다듬어보세요.',
      useProductSheetWorkspace: true,
      editableContent: false
    },
    {
      id: 'step-5',
      title: '최종 작품 제출',
      description: '완성된 독도 굿즈와 상품 설명서를 공유하고 서로의 아이디어를 살펴보세요.',
      content: '독도 굿즈 디자인과 상품 설명서가 완성되었습니다. Padlet에 결과물을 업로드하고, 다른 학습자들이 어떤 독도의 가치와 메시지를 선택했는지 비교해보세요.',
      showEmbeddedPadlet: true,
      padletUrl: 'https://padlet.com/ghdwns00610/padlet-tzs4uog4dr84u5gi',
      editableContent: false
    }
  ]
};
