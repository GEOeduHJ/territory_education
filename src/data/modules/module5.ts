import { ModuleData } from '../../types';

// Module 5 데이터
export const MODULE_5_DATA: ModuleData = {
  id: "5",
  topic: "경계",
  title: "🌐 세계시민의 눈으로 경계 속 관계를 잇고 해법을 찾다",
  description: "경계의 개념과 경계가 사람들의 이동과 삶에 미치는 영향을 이해하고, 제주 예멘 난민 사례를 바탕으로 AI 페르소나 챗봇과 대화하며 다양한 관점을 비교·조정하는 모듈",
  steps: [
    {
      id: "step-1",
      title: "경계 개념 학습 및 사례 살펴보기",
      description: "비자, 국경 정책, 국민투표와 감염병 대응 사례를 비교하며 경계가 사람들의 이동과 국가 간 관계에 미치는 영향을 살펴봅니다.",
      content: "각 사례의 이미지와 설명을 살펴보며 경계가 사람들의 이동과 일상에 어떤 영향을 주는지 생각해 보세요.",
      contentLabel: "여러 나라의 경계 사례 살펴보기",
      caseStudies: [
        {
          id: "korea-visa-travel",
          imageSrc: "/images/module5-border-cases/korea-visa-travel.png",
          imageAlt: "공항 출입국 심사 장면과 세계 여러 나라 방문에 관한 뉴스 자막",
          caption: "한국의 무비자 제도와 해외 이동"
        },
        {
          id: "us-mexico-border-policy",
          imageSrc: "/images/module5-border-cases/us-mexico-border-policy.png",
          imageAlt: "2014년과 2019년 미국·멕시코 국경 정책을 비교한 그림",
          caption: "미국 정권 변화와 멕시코 국경 정책"
        },
        {
          id: "brexit-referendum",
          imageSrc: "/images/module5-border-cases/brexit-referendum.png",
          imageAlt: "브렉시트 찬반 집회에서 유럽연합 깃발을 든 시민",
          caption: "영국의 국민투표와 브렉시트"
        },
        {
          id: "japan-entry-restrictions",
          imageSrc: "/images/module5-border-cases/japan-entry-restrictions.png",
          imageAlt: "일본 도심 사진과 해외 유학생 입국 제한 관련 뉴스 화면",
          caption: "일본의 코로나19 확산 방지를 위한 입국 제한"
        }
      ],
      boundaryStatements: [
        {
          id: "not-fixed",
          marker: "①",
          before: "경계는 한 번 정해지면 영원히 바뀌지 않는 고정된 선이라고만 볼 수 ",
          answer: "없다",
          after: "."
        },
        {
          id: "socially-constructed",
          marker: "②",
          before: "경계를 넘는 규칙은 사람들의 이해관계, 사회적 요구, 정책 등에 따라 달라지므로 경계는 ",
          answer: "사회적",
          connector: "으로",
          after: " 구성되는 특성을 지닌다."
        },
        {
          id: "movement-and-exchange",
          marker: "③",
          before: "지도 위의 경계선이 그대로여도, 그 경계를 넘는 규칙이 달라지면 사람들의 ",
          answer: "이동과 교류",
          connector: "가",
          after: " 달라질 수 있다."
        },
        {
          id: "multiple-perspectives",
          marker: "④",
          before: "경계에 관한 결정은 사람마다 다른 영향을 줄 수 있으므로, 경계 문제를 이해할 때는 ",
          answer: "다양한 관점",
          connector: "에",
          after: " 귀 기울여야 한다."
        }
      ],
      editableContent: false
    },
    {
      id: "step-2",
      title: "제주 사례로 경계 이해하기",
      description: "제주 예멘 난민 사례를 만화의 흐름에 따라 살펴보며 경계를 둘러싼 상황과 여러 입장을 생각해봅니다.",
      content: "제주 예멘 난민 사례를 6컷 만화로 살펴보세요. 각 장면에서 경계와 관련된 규칙이 누구에게 어떤 영향을 주는지 생각해봅시다.",
      contentLabel: "사례 살펴보기",
      imageCarousel: {
        title: "제주 경계 사례 만화",
        description: "좌우 화살표를 눌러 만화 6컷을 한 장면씩 살펴보세요.",
        placeholderCount: 6,
        aspectRatio: "3 / 1",
        slides: [
          {
            id: "jeju-comic-01",
            src: "/images/module5-jeju-comic/1.webp",
            alt: "전쟁으로 피란하는 예멘 가족과 무비자 제도로 제주행 비행기에 오른 모습",
            explanation: [
              [
                { text: "제주도에는 외국인이 복잡한 비자 발급 절차 없이도 30일 동안 제주에 머물 수 있는 " },
                { id: "visa-free", text: "무비자", revealable: true },
                { text: " 제도가 있다." }
              ]
            ]
          },
          {
            id: "jeju-comic-02",
            src: "/images/module5-jeju-comic/4.webp",
            alt: "제주에 도착한 예멘 난민의 난민 신청 심사와 육지 이동 제한, 찬반 집회 모습",
            explanation: [
              [
                { text: "이 제도를 통해 예멘 사람들이 자국의 전쟁 위험을 피해 제주도에서 " },
                { id: "refugee", text: "난민", revealable: true },
                { text: " 신청을 했다." }
              ],
              [
                { text: "그런데 제주도에서 우리나라 본토(육지)로 이동하는 " },
                { id: "departure-from-jeju", text: "출도", revealable: true },
                { text: "가 제한되어, 이들은 제주에 남을 수밖에 없었다." }
              ]
            ]
          },
          {
            id: "jeju-comic-03",
            src: "/images/module5-jeju-comic/2.webp",
            alt: "육지부 주민 가족과 지자체 대표가 제주 예멘 난민 수용과 이동 제한을 두고 우려를 나누는 장면",
            explanation: [
              [
                { text: "본토인 육지부에서는 난민의 전국 확산을 우려하며, 출도를 " },
                { id: "block-departure", text: "막아야", revealable: true },
                { text: " 한다는 목소리가 크다." }
              ],
              [
                { text: "육지부의 주민들과 지자체에서는 다수 국민의 " },
                { id: "public-safety", text: "안전", revealable: true },
                { text: "과, 지방자치의 " },
                { id: "regional-equity", text: "형평성", revealable: true },
                { text: "이 우선이라고 말했다." }
              ]
            ]
          },
          {
            id: "jeju-comic-04",
            src: "/images/module5-jeju-comic/3.webp",
            alt: "제주 구좌읍 주민과 UN 난민기구 관계자가 난민 수용 문제에 대해 서로 다른 입장을 밝히는 장면",
            explanation: [
              [
                { text: "제주도와 " },
                { id: "international-community", text: "국제사회", revealable: true },
                { text: "에서는 난민의 출도를 " },
                { id: "allow-departure", text: "허용해야", revealable: true },
                { text: " 한다는 입장이 강하다." }
              ],
              [
                { text: "출도 금지 조치는 제주 " },
                { id: "local-community", text: "지역 사회", revealable: true },
                { text: "의 안정을 위협하는, 정부의 일방적인 결정이라며 불만을 표하였다." }
              ],
              [
                { text: "UN 난민 기구에서는 한국이 난민협약국인 만큼, 난민의 " },
                { id: "human-rights", text: "인권", revealable: true },
                { text: "을 지키는 데 책임을 다해야 한다는 입장이다." }
              ]
            ]
          },
          {
            id: "jeju-comic-05",
            src: "/images/module5-jeju-comic/5.webp",
            alt: "난민 수용 문제의 복합적인 쟁점과 공동체 안전, 인권, 소통과 책임의 균형을 표현한 장면",
            explanation: [
              [
                { text: "예멘 난민들의 출도와 관련된 논의는, 우리가 " },
                { id: "boundary", text: "경계", revealable: true },
                { text: "를 어떻게 만들어나갈 것인지에 대한 문제이다." }
              ]
            ]
          },
          {
            id: "jeju-comic-06",
            src: "/images/module5-jeju-comic/6.webp",
            alt: "학생들이 제주 사례를 토론하며 경계를 어떻게 다루고 결정할지 성찰하는 장면",
            explanation: [
              [
                { text: "경계를 어떻게 다루느냐에 따라, 우리가 살아가는 지역, " },
                { id: "country", text: "국가", revealable: true },
                { text: ", 그리고 세계의 모습이 달라질 수 있다." }
              ]
            ]
          }
        ]
      },
      embeddedResources: [
        {
          id: "module5-jeju-border-video",
          title: "경계 사례 학습 영상",
          description: "만화 사례를 살펴본 뒤 영상으로 경계와 관련된 내용을 더 알아보세요.",
          url: "https://youtu.be/nvC2O_fLERI?si=22nlbg5xMTE6vSYe",
          embedUrl: "https://www.youtube-nocookie.com/embed/nvC2O_fLERI?rel=0",
          aspectRatio: "16 / 9",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        }
      ],
      editableContent: false
    },
    {
      id: "step-3",
      title: "챗봇 대화 준비하기",
      description: "크랙 앱 또는 QR 코드로 인물별 챗봇을 찾아 프로필에 접속하고, 안내를 따라 대화를 준비합니다.",
      content: "안내된 순서에 따라 인물별 챗봇과의 대화를 준비하세요.",
      contentLabel: "챗봇 대화 준비",
      imageCarousel: {
        title: "챗봇 대화 사용 안내",
        description: "화살표를 눌러 챗봇 접속부터 대화 마무리까지 5단계 안내를 순서대로 확인하세요.",
        placeholderCount: 5,
        slides: [
          {
            id: "chatbot-guide-crack-app-search",
            src: "/images/module5-chatbot-guide-revised/01-crack-app-search.webp",
            alt: "크랙 앱 또는 QR 코드로 각 인물의 챗봇을 검색하고 프로필에 접속하는 화면",
            caption: "“크랙” 앱에 접속하여(또는 QR 코드를 찍어서) 각 인물의 챗봇을 검색하고, 챗봇 프로필에 접속한다."
          },
          {
            id: "chatbot-guide-profile-entry",
            src: "/images/module5-chatbot-guide-revised/02-profile-entry.webp",
            alt: "챗봇 캐릭터 프로필과 인물의 기본 입장, 플레이 또는 새로하기 버튼을 보여주는 화면",
            caption: "캐릭터 프로필에서 인물의 기본적인 입장을 확인한다. [‘플레이’ 또는 ‘새로하기’] 버튼을 누르면 채팅방으로 입장한다."
          },
          {
            id: "chatbot-guide-play-guide",
            src: "/images/module5-chatbot-guide-revised/03-play-guide.webp",
            alt: "챗봇 플레이 가이드와 추가 기능 사용 금지 안내가 표시된 화면",
            caption: "대화를 나누기 전, 플레이 가이드를 숙지한다.\n(※ 마음대로 추가기능을 사용하거나, 설정을 변경하지 마세요!)"
          },
          {
            id: "chatbot-guide-compose-message",
            src: "/images/module5-chatbot-guide-revised/04-write-message.webp",
            alt: "챗봇 메시지를 직접 입력해 질문과 답변을 이어가는 대화 화면",
            caption: "이후 대화 내용을 직접 입력한 후, 전송버튼을 눌러 대화를 시작한다. 단, 한 번의 메시지에 최소 두 문장 이상을 작성한다."
          },
          {
            id: "chatbot-guide-secret-item-ending",
            src: "/images/module5-chatbot-guide-revised/05-secret-item-ending.webp",
            alt: "캐릭터와의 대화가 끝난 뒤 비밀 아이템이 표시된 엔딩 장면",
            caption: "캐릭터와 질문 및 답변을 최소 열 번 이상 주고받아,\n캐릭터가 보여주는 엔딩 장면 속의 ‘비밀 아이템’을 획득한다."
          }
        ]
      },
      editableContent: false
    },
    {
      id: "step-4",
      title: "챗봇과 대화 나누기",
      description: "제공된 페르소나 챗봇과 대화하며 다양한 입장을 분석해봅시다",
      content: "페르소나 챗봇과 대화하며 여러 입장을 분석해보세요. 먼저 배정받은 사람과 대화하여 '나의 입장'을 정리하고, 다음에는 반대 입장과 대화하여 상대의 주장과 근거를 이해하세요.\n\n대화 가이드:\n1) 나의 입장 분석: 내가 배정받은 사람과 먼저 대화해봅시다. 이 사람은 누구이며, 어떤 입장(주장, 근거)인가요?\n2) 반대 입장 분석: 다음은 나와 반대되는 입장의 사람과 대화해봅시다. 이 사람은 누구이며, 어떤 입장(주장, 근거)인가요?",
      useChatbotCards: true,
      chatbotCards: [
        {
          id: "persona-jeju",
          name: "제주도민",
          profileImage: "https://via.placeholder.com/150/0ea5e9/ffffff?text=제주도민",
          description: "제주 지역 주민의 관점에서 지역 경제·생활·생태를 고려한 입장을 제시합니다.",
          url: "https://share.crack.wrtn.ai/p1a1rx",
          isActive: true
        },
        {
          id: "persona-mainland-resident",
          name: "육지부 주민",
          profileImage: "https://via.placeholder.com/150/10b981/ffffff?text=육지부+주민",
          description: "육지 지역 일반 주민의 입장에서 사회적 영향과 안전 우려를 중심으로 의견을 제시합니다.",
          url: "https://share.crack.wrtn.ai/jxt0b34",
          isActive: true
        },
        {
          id: "persona-local-official",
          name: "육지부 지자체 대표",
          profileImage: "https://via.placeholder.com/150/f97316/ffffff?text=지자체+대표",
          description: "지자체의 입장에서 행정적·경제적 고려와 지역 주민의 복지를 중심으로 입장을 설명합니다.",
          url: "https://share.crack.wrtn.ai/5nbswb",
          isActive: true
        },
        {
          id: "persona-unhcr",
          name: "유엔난민기구 대변인",
          profileImage: "https://via.placeholder.com/150/7c3aed/ffffff?text=UNHCR",
          description: "국제기구 관점에서 인도주의적 원칙과 국제법적 고려를 바탕으로 입장을 제시합니다.",
          url: "https://share.crack.wrtn.ai/bl1783",
          isActive: true
        }
      ],
      editableContent: false
    },
    {
      id: "step-5",
      title: "의사결정과 성찰",
      description: "여러 인물의 목소리를 들은 경험을 바탕으로 경계에 대한 의사결정을 내리고, 자신의 의견을 공유해봅시다.",
      content: " 아래의 양식에 맞추어 난민 신청자의 출도에 대한 결정을 내리고, 그 결정에 따르는 책임과 대책을 생각해 봅시다.",
      contentLabel: "경계 결정문 작성하고 공유하기",
      showEmbeddedPadlet: true,
      padletUrl: "https://padlet.com/jde1211/global_forum",
      editableContent: false
    }
  ]
};
