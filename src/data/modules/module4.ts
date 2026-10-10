import { ModuleData } from '../../types';

// Module 4 데이터
export const MODULE_4_DATA: ModuleData = {
  id: "4",
  topic: "DMZ",
  title: "DMZ의 가치를 발견하고, 가능성을 디자인하다",
  description: "전쟁의 상흔이 남은 DMZ의 과거와 현재를 메타버스와 디지털 아카이브로 탐색하고, AI 융합 창작 활동을 통해 평화와 생태가 공존하는 미래 청사진을 설계하는 모듈",
  steps: [
    {
      id: "step-1",
      title: "DMZ의 가치 살펴보기",
      description: "분단의 역사로 탄생한 DMZ의 생태적·문화적·역사적·평화적 가치를 살펴보세요.",
      content: "영상 자료를 바탕으로 DMZ가 어떤 가치를 지닌 공간인지 확인해 보세요.\n그리고 DMZ의 다양한 가치를 왜 지켜야 하는지 함께 논의해 보세요.",
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
      title: "DMZ 메타버스 둘러보기",
      description: "통일부 DMZ 메타버스에서 사라진 마을을 살펴보며 과거의 삶을 상상해 보세요.",
      content: "DMZ가 6·25 전쟁 발발 이전에는 사람들의 삶의 터전이었다는 점을 확인해 보세요.\n아래 DMZ 메타버스에 접속해 '사라진 마을' 중 한 곳을 골라 둘러보고, 70여 년 전 이곳에 살았던 사람들의 삶을 돌아보세요.",
      embeddedResources: [
        {
          id: 'dmz-universe-village',
          title: 'DMZ Universe · 사라진 마을',
          description: '메타버스 화면이 표시되지 않으면 원본 사이트를 새 창에서 열어 보세요.',
          url: 'https://universe.go.kr/main',
          embedUrl: 'https://universe.go.kr/main',
          aspectRatio: '16 / 9'
        }
      ],
      editableContent: false
    },
    {
      id: "step-3",
      title: "온라인 전시로 DMZ 탐색하기",
      description: "구글 Arts & Culture에서 DMZ 관련 전시회를 살펴보고 아이디어를 메모해 보세요.",
      content: "최근 열린 DMZ 관련 전시회 가운데 역사(테마 1), 생태(테마 2), 예술(테마 3)을 주제로 한 전시 두 개를 골라 자유롭게 살펴보세요.\n전시 자료와 작품을 참고해 DMZ를 어떤 공간으로 활용할 수 있을지 아이디어를 간단히 메모해 보세요.",
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
      title: "DMZ 활용 방안 디자인하기",
      description: "온라인 전시에서 얻은 아이디어를 바탕으로 DMZ의 가치를 살릴 수 있는 건축물, 예술 작품 또는 공연·행사를 디자인해 보세요.",
      content: "아래 칸에 모둠의 구상만 입력해 보세요. 전체 프롬프트가 자동으로 정리되는 모습을 확인해 보세요. 프롬프트를 복사한 뒤 Gemini 링크를 열어 붙여넣어 보세요.",
      contentLabel: "프롬프트 작성 안내",
      guidedPrompt: {
        id: "module4-dmz-design-prompt",
        title: "DMZ 미래 디자인 프롬프트",
        description: "전시에서 얻은 아이디어를 구체적인 공간·작품·프로그램으로 발전시켜 보세요.",
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
      title: "공유와 성찰",
      description: "설계한 DMZ 활용 방안을 발표하고 다른 작품도 감상해 보세요.",
      content: "최종 결과물의 이미지를 제시하고, 우리 모둠이 제안하는 활용 방안과 그 의미를 설명해 보세요.\n다른 모둠의 작품을 두 개 이상 살펴보고, 작품과 설명에 나타난 내용을 근거로 평가해 보세요.",
      showScenarioIframe: true,
      scenarioIframeUrl: "https://padlet.com/jde0609/dmz_future_design",
      
      editableContent: true
      
    }
  ]
};
