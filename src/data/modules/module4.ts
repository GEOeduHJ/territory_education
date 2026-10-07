import { ModuleData } from '../../types';

// Module 4 데이터
export const MODULE_4_DATA: ModuleData = {
  id: "4",
  topic: "DMZ",
  title: "🔎 멈춘 시간을 넘어, 미래를 디자인하다",
  description: "전쟁의 상흔이 남은 DMZ의 과거와 현재를 메타버스와 디지털 아카이브로 탐색하고, AI 융합 창작 활동을 통해 평화와 생태가 공존하는 미래 청사진을 설계하는 모듈",
  steps: [
    {
      id: "step-1",
      title: "🌿 DMZ의 가치 살펴보기",
      description: "분단의 역사로 탄생한 DMZ의 생태적·문화적 가치를 살펴봅시다",
      content: "DMZ는 어떤 곳일까요? 분단의 역사로 인해 탄생한 DMZ 속 다양한 문화 및 자연 유산을 확인해봅시다! \n📺 아래 영상을 시청한 뒤, 문장에 가려진 핵심 표현을 눌러 확인해보세요.",
      embeddedResources: [
        {
          id: 'dmz-step1-video',
          title: 'DMZ 학습 영상',
          url: 'https://youtu.be/9Qf4xOjg2OM?si=cm6o-fnBWyCwP2xl',
          embedUrl: 'https://www.youtube-nocookie.com/embed/9Qf4xOjg2OM?rel=0',
          aspectRatio: '16 / 9',
          allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        }
      ],
      revealableStatements: [
        [
          { text: "세계에는 나라와 나라를 나누는 선인 ‘경계’를 분리의 의미를 넘어, ① " },
          { id: "dmz-coexistence-transition", text: "공존과 전환", revealable: true },
          { text: "의 공간으로 다시 해석한 사례들이 있습니다." }
        ],
        [
          { text: "우리나라의 경우, 남과 북 사이에는 1953년에 ② " },
          { id: "dmz-armistice", text: "정전협정", revealable: true },
          { text: "이 체결되면서 전쟁의 총성이 멈추었습니다." }
        ],
        [
          { text: "이때 군사분계선을 기준으로 남쪽과 북쪽에서 각각 ③ " },
          { id: "dmz-buffer-distance", text: "2", revealable: true },
          { text: " km씩 떨어진 지역을 비무장지대, 즉 ④ " },
          { id: "dmz-name", text: "DMZ", revealable: true },
          { text: "로 지정하였습니다." }
        ],
        [
          { text: "하지만 오랫동안 사람의 출입과 개발이 제한되면서, DMZ는 흰목물떼새와 두루미 같은 ⑤ " },
          { id: "dmz-endangered-species", text: "멸종위기종", revealable: true },
          { text: "을 비롯한 다양한 생물의 서식지가 되었습니다." }
        ],
        [
          { text: "이러한 생태적 가치를 중심으로 생태공원뿐만 아니라 사람들이 역사와 생태를 직접 배우며 걸을 수 있는 ⑥ " },
          { id: "dmz-peace-trail", text: "평화의 길(산책로)", revealable: true },
          { text: "이 개방되었습니다." }
        ],
        [
          { text: "분단과 전쟁, 평화를 주제로 한 전시회 활동과 음악 및 문화 행사가 열리면서, DMZ는 ⑦ " },
          { id: "dmz-artistic-value", text: "예술", revealable: true },
          { text: "적 가치를 지닌 공간으로도 변화하고 있습니다." }
        ],
        [
          { text: "전쟁의 상처가 남아 있던 DMZ는 이제 역사, 생명, 평화, 문화예술이 숨 쉬는 공간으로 주목받고 있습니다." }
        ]
      ],
      editableContent: false
    },
    {
      id: "step-2",
      title: "🏛️ DMZ 속 잊혀진 삶을 찾아서",
      description: "통일부 DMZ 메타버스에서 사라진 마을을 견학하며 과거의 삶을 상상해봅시다",
      content: "DMZ는 6.25 전쟁 발발 이전에는 사람들의 삶의 터전이었습니다. \n아래 DMZ 메타버스에 접속하여 '사라진 마을'을 중 1곳을 선택해 견학하고, 70여 년 전 이곳에 살았던 사람들의 삶을 돌아보세요.",
      embeddedResources: [
        {
          id: 'dmz-universe-village',
          title: 'DMZ Universe · 사라진 마을',
          description: '메타버스 화면이 표시되지 않으면 원본 사이트를 새 창에서 열어주세요.',
          url: 'https://universe.go.kr/main',
          embedUrl: 'https://universe.go.kr/main',
          aspectRatio: '16 / 9'
        }
      ],
      editableContent: false
    },
    {
      id: "step-3",
      title: "🖼️ DMZ 온라인 전시회 방문하기",
      description: "구글 Arts & Culture에서 열린 DMZ 관련 전시회를 탐방하고 아이디어를 메모해봅시다",
      content: "최근에는 DMZ의 가치를 중심으로 한 여러 테마의 전시회가 개최되어 왔습니다. \n아래 전시 검색 링크에 접속하여 관심 있는 전시회를 찾아보세요. \n관심 가는 전시회를 2개 선택하여 자유롭게 탐방한 뒤, 본 전시가 미래 DMZ에 어떤 아이디어(건축, 예술, 행사 등)를 주었는지 간단히 메모해보세요.\n\n전시 테마 예시:\n1️⃣ 멈춘 시간의 기록: 역사의 현장\n2️⃣ 인간 없는 낙원: 생태 보고서\n3️⃣ 미래를 상상하다: 예술과 창작",
      themedExhibits: [
        {
          id: 'theme-1',
          theme: '테마 1. 멈춘 시간의 기록: 역사의 현장',
          resources: [
            { id: 't1-r1', label: '판문점과 비무장지대', url: 'https://artsandculture.google.com/story/QQXx_Fe1ujX7yg' },
            { id: 't1-r2', label: 'DMZ 박물관', url: 'https://artsandculture.google.com/story/4AXRs9Dpd3Fnmw' },
            { id: 't1-r3', label: '군사정전위원회와 판문점', url: 'https://artsandculture.google.com/story/kgVRGlGk1FthDQ' },
            { id: 't1-r4', label: '6·25전쟁의 아픔을 간직한 문화유산', url: 'https://artsandculture.google.com/story/SgVxszQNK2c6wA' }
          ]
        },
        {
          id: 'theme-2',
          theme: '테마 2. 인간 없는 낙원: 생태 보고서',
          resources: [
            { id: 't2-r1', label: 'DMZ 자연복원을 위한 노력', url: 'https://artsandculture.google.com/story/lgWRs7b8YaFvhg' },
            { id: 't2-r2', label: 'DMZ 접경지역과 한국의 희귀식물들', url: 'https://artsandculture.google.com/story/agUh2IDATGZUzw' },
            { id: 't2-r3', label: 'DMZ에 살고있는 멸종위기 동물들', url: 'https://artsandculture.google.com/story/ogWBMSfpx6OMBg' },
            { id: 't2-r4', label: 'DMZ 자생식물원', url: 'https://artsandculture.google.com/story/6QWhcOu5JYDriQ' },
            { id: 't2-r5', label: '유네스코 세계 지질 공원, 한탄강', url: 'https://artsandculture.google.com/story/ngXhggy1gxvXpw' },
            { id: 't2-r6', label: '습지 식물들의 천국, 용늪', url: 'https://artsandculture.google.com/story/9wWRMQipJWlbrA' }
          ]
        },
        {
          id: 'theme-3',
          theme: '테마 3. 미래를 상상하다: 예술과 창작',
          resources: [
            { id: 't3-r1', label: '지금, 전환중인', url: 'https://artsandculture.google.com/story/WAXxG24-AITmLg' },
            { id: 't3-r2', label: 'DMZ 미래에 대한 제안들', url: 'https://artsandculture.google.com/story/KQXB0RZtTmopSw' },
            { id: 't3-r3', label: '접경 지역의 삶', url: 'https://artsandculture.google.com/story/tAXxfsH2k0mYcw' },
            { id: 't3-r4', label: 'DMZ에 대한 예술적 탐구', url: 'https://artsandculture.google.com/story/wAVxVVU3KmaKmg' },
            { id: 't3-r5', label: '역사와 풍경', url: 'https://artsandculture.google.com/story/hwXRwvIqzKgqFg' }
          ]
        }
      ],
      editableContent: false
    },
    {
      id: "step-4",
      title: "✍️ 미래 DMZ 디자인 프롬프트 만들기",
      description: "온라인 전시에서 얻은 아이디어를 바탕으로 DMZ의 가치를 살리는 작품을 구상하고, Gemini에 입력할 프롬프트를 완성해보세요.",
      content: "아래 칸에 모둠의 구상만 입력하면 전체 프롬프트가 자동으로 정리됩니다. 복사한 뒤 Gemini 링크를 열어 붙여넣으세요.",
      contentLabel: "프롬프트 작성 안내",
      guidedPrompt: {
        id: "module4-dmz-design-prompt",
        title: "DMZ 미래 디자인 프롬프트",
        description: "전시에서 얻은 아이디어를 구체적인 공간·작품·프로그램으로 발전시켜보세요.",
        groups: [
          {
            id: "direction",
            title: "01 · 디자인 방향",
            fields: [
              { id: "designExpertise", label: "어떤 분야를 디자인하나요?", placeholder: "예: 미래 건축물", particle: "object" },
              { id: "designObject", label: "DMZ의 가치를 살릴 대상은 무엇인가요?", placeholder: "예: 생태와 평화가 공존하는 방문자 공간", particle: "object" },
              { id: "exhibitionIdea", label: "온라인 전시에서 얻은 아이디어", placeholder: "예: 야생동물 이동 통로" },
              { id: "applicationMethod", label: "아이디어를 적용할 방식", placeholder: "예: 건축물의 지붕과 연결 보행로에 반영하는" }
            ]
          },
          {
            id: "value-and-place",
            title: "02 · 가치와 공간",
            fields: [
              { id: "protectedValue", label: "보호하거나 되살리고 싶은 가치", placeholder: "예: 두루미의 서식지와 평화의 기억" },
              { id: "valueReason", label: "그 가치를 선택한 이유", placeholder: "예: 생태와 역사를 함께 기억하고 다음 세대에 전하고 싶기 때문", particle: "copula" },
              { id: "mainProgram", label: "주요 기능·의미 또는 프로그램", placeholder: "예: 생태 관찰, 평화 기록 전시, 시민 참여 프로그램", multiline: true, fullWidth: true, particle: "copula" },
              { id: "place", label: "조성·설치·개최할 장소", placeholder: "예: DMZ 접경 지역의 기존 탐방로 인근" },
              { id: "placeReason", label: "그 장소를 선택한 이유", placeholder: "예: 생태와 분단의 역사를 함께 배울 수 있기 때문", particle: "copula" },
              { id: "participants", label: "주 이용자 또는 참여자", placeholder: "예: 청소년과 지역 주민" },
              { id: "experience", label: "이들이 경험하거나 느낄 점", placeholder: "예: 생태 보전의 중요성과 평화의 가치를", particle: "object" }
            ]
          },
          {
            id: "image-scenes",
            title: "03 · 이미지에 담을 장면",
            fields: [
              { id: "scene1", label: "① 첫 번째 모습이나 장면", placeholder: "예: 습지에서 쉬는 두루미와 관찰 데크", multiline: true, fullWidth: true },
              { id: "scene2", label: "② 두 번째 모습이나 장면", placeholder: "예: 과거의 흔적을 보존한 전시 공간", multiline: true, fullWidth: true },
              { id: "scene3", label: "③ 세 번째 모습이나 장면", placeholder: "예: 사람들이 함께 참여하는 평화 문화 행사", multiline: true, fullWidth: true }
            ]
          },
          {
            id: "visual-finish",
            title: "04 · 색감과 결과물 형식",
            fields: [
              { id: "colorMood", label: "전체적인 색감과 분위기", placeholder: "예: 차분한 흙빛과 생명력을 나타내는 초록색의 조화", particle: "euro" },
              { id: "outputFormat", label: "원하는 결과물 형식", placeholder: "예: 실제 조감도처럼 보이는 가로형 컨셉 아트" }
            ]
          }
        ],
        template: "너는 {{designExpertise}} 디자인하는 전문가야.\n우리 모둠은 DMZ의 가치를 살리는 {{designObject}} 구상하고 있어.\n온라인 전시에서 얻은 {{exhibitionIdea}} 아이디어를 {{applicationMethod}} 방식으로 적용하려고 해.\n\n우리가 보호하거나 되살리고 싶은 가치는 {{protectedValue}}이고, 그 이유는 {{valueReason}}.\n주요 기능·의미 또는 프로그램은 {{mainProgram}}.\n\n조성·설치·개최할 장소는 {{place}}이고, 이곳을 선택한 이유는 {{placeReason}}.\n주로 이용하거나 참여할 사람은 {{participants}}이며,\n이들이 {{experience}} 경험하거나 느낄 수 있도록 표현해 줘.\n\n이미지에는 다음 모습이나 장면이 구체적으로 드러나게 해 줘.\n① {{scene1}}\n② {{scene2}}\n③ {{scene3}}\n\n전체적인 색감과 분위기는 {{colorMood}},\n결과물은 {{outputFormat}} 형식으로 만들어 줘.",
        geminiUrl: "https://gemini.google.com/gem/1eRAWkMTkInJrzBdngQgEuHXzBcq3e4pE?usp=sharing",
        geminiLabel: "Gemini에서 프롬프트 붙여넣기"
      },
      editableContent: false
    },
    {
      id: "step-5",
      title: "🎯 DMZ 미래 디자인하기",
      description: "AI 플랫폼을 활용해 미래 DMZ의 모습을 디자인하고 작품을 제작해봅시다",
      content: "아래 분야 중 하나를 선택해 출품작을 완성하고 작품 설명을 작성하세요.\n\n [AI 활용 출품 분야]\n1️⃣ 미래 건축물 디자인: DMZ의 역사·환경·평화 가치를 보호하고 재생할 수 있는 건축물을 구상해보세요.\n\n2️⃣ 평화 미술 작품: '생명/재생/통일'을 상징하는 시각 예술 작품을 제작해보세요.\n\n3️⃣ 미래 공연/행사 기획: DMZ의 상징성을 활용한 공연이나 행사를 기획해보세요.",
      showScenarioIframe: true,
      scenarioIframeUrl: "https://padlet.com/jde0609/dmz_future_design",
      
      editableContent: true
      
    }
  ]
};
