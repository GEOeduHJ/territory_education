import { ModuleData } from '../../types';

// Module 6 데이터
export const MODULE_0_DATA: ModuleData = {
  id: "0",
  topic: "모듈 소개",
  title: "📘 모듈 한눈에 보기",
  description: "전체 모듈 한눈에 살펴보기",
  steps: [
    {
      id: "step-1",
      title: "🎵 모듈 1: 세계 분쟁과 AI 캠페인 노래",
      description: "영토 분쟁 조사부터 생성형 AI를 활용한 캠페인 노래·앨범 커버 제작까지의 여정을 요약합니다",
      content: "모듈 1의 6단계를 컨테이너별로 정리했습니다.",
      hideDefaultContentContainer: true,
      detailContainers: [
        {
          id: "m1-step1",
          title: "🗺️ 분쟁 지역 자료 조사",
          description: "인터랙티브 지도와 자료 열람",
          content: "지도 마커를 클릭해 각 분쟁 지역의 배경 자료(PDF)를 확인\n- AI와 함께 조사 내용을 정리하며 다음 단계 준비\n- 지역별 자료 예시: 남중국해, 센카쿠/댜오위다오, 나일강 연안국 등",
          targetModuleId: "1",
          targetStepId: "step-1"
        },
        {
          id: "m1-step2",
          title: "✏️ 키워드 입력",
          description: "갈등 주체·배경·해결 키워드 수집",
          content: "- 조사한 정보를 4개 키워드로 입력\n- 이후 가사와 이미지 생성 프롬프트에 자동 반영",
          targetModuleId: "1",
          targetStepId: "step-2"
        },
        {
          id: "m1-step3",
          title: "📝 가사 초안 작성 및 수정",
          description: "Gemini에서 가사 초안을 받고 평화의 메시지로 다듬기",
          content: "- 생성형 프롬프트를 복사해 Gemini에서 가사 초안 받기\n- 자료 조사 내용과 평화의 메시지가 드러나도록 직접 수정",
          targetModuleId: "1",
          targetStepId: "step-3"
        },
        {
          id: "m1-step4",
          title: "🎵 노래 생성",
          description: "Suno에서 캠페인 노래 만들기",
          content: "- 완성한 가사를 Suno에 입력해 노래 제작\n- 노래의 기획 의도에 맞게 스타일을 조정",
          targetModuleId: "1",
          targetStepId: "step-4"
        },
        {
          id: "m1-step5",
          title: "🎨 앨범 커버 이미지 생성",
          description: "Gemini로 커버 아트 제작",
          content: "- 이미지 프롬프트를 직접 작성해 커버 아트 제작\n- 평화·화해 메시지가 드러나는 시각 요소 강조",
          targetModuleId: "1",
          targetStepId: "step-5"
        },
        {
          id: "m1-step6",
          title: "🏆 최종 결과물 제출",
          description: "Padlet에 업로드",
          content: "- 완성한 노래와 앨범 커버 업로드 후 다른 작품 감상 및 피드백",
          targetModuleId: "1",
          targetStepId: "step-6"
        }
      ],
      editableContent: false
    },
    {
      id: "step-2",
      title: "🌊 모듈 2: 해양 영토와 공간 데이터",
      description: "해양영토 개념 이해부터 공간 데이터 탐구, 미래 가치 논의까지를 정리합니다",
      content: "모듈 2의 5단계를 컨테이너별로 정리했습니다.",
      hideDefaultContentContainer: true,
      detailContainers: [
        {
          id: "m2-step1",
          title: "📍 육지 영토에서 해양 영토로",
          description: "국토 확장·용도구분 사례 보기",
          content: "- KOSIS 그래프와 토지e음 지도로 관리 사례 확인\n- 해양 시대에 맞춘 관리 필요성 사고 질문 포함",
          targetModuleId: "2",
          targetStepId: "step-1"
        },
        {
          id: "m2-step2",
          title: "🌊 해양영토의 개념",
          description: "영해·EEZ 등 기본 개념 탐구",
          content: "- 구글 마이맵스로 통상/직선기선, 영해, EEZ, 어업협정 살펴보기",
          targetModuleId: "2",
          targetStepId: "step-2"
        },
        {
          id: "m2-step3",
          title: "📡 해양 공간의 데이터 관리(선택 사항)",
          description: "인간 활동 데이터 관측",
          content: "- Global Fishing Watch, EMODnet Human Activities로 활동 데이터 탐색",
          targetModuleId: "2",
          targetStepId: "step-3"
        },
        {
          id: "m2-step4",
          title: "🧭 해양 공간의 계획과 분석",
          description: "영상 시청 + VADA Hub 탐구",
          content: "- 해양공간관리계획의 목적·방법 영상 시청\n- VADA Hub 지도와 활동지로 지역 해역 활용 현황 조사",
          targetModuleId: "2",
          targetStepId: "step-4"
        },
        {
          id: "m2-step5",
          title: "🌅 해양영토의 가치와 미래",
          description: "공유·토의 및 성찰",
          content: "- 조사 결과 공유 후 지속 가능한 해양 이용을 위한 역할 논의",
          targetModuleId: "2",
          targetStepId: "step-5"
        }
      ],
      editableContent: false
    },
    {
      id: "step-3",
      title: "🛍️ 모듈 3: 독도 굿즈 기획",
      description: "독도 학습→굿즈 디자인→상품 설명서 제작→공유 과정을 한눈에 봅니다",
      content: "모듈 3의 4단계를 컨테이너별로 정리했습니다.",
      hideDefaultContentContainer: true,
      detailContainers: [
        {
          id: "m3-step1",
          title: "📚 독도 주제 학습",
          description: "다섯 테마로 독도의 핵심 내용 학습",
          content: "- 위치와 지형, 이름과 기록, 생태와 가치, 사람과 관리, 알리기와 표현을 홈페이지에서 직접 학습\n- 필요하면 AI 챗봇과 학년별 원자료로 더 질문하고 근거를 확인",
          targetModuleId: "3",
          targetStepId: "step-1"
        },
        {
          id: "m3-step2",
          title: "🎨 독도 굿즈 디자인 생성",
          description: "빈 목업 다운로드 + Gemini 프롬프트",
          content: "- 티셔츠·에코백·핸드폰 케이스 빈 목업을 내려받기\n- 학습 내용을 입력해 Gemini용 디자인 프롬프트를 만들고 굿즈 이미지 제작",
          targetModuleId: "3",
          targetStepId: "step-2"
        },
        {
          id: "m3-step3",
          title: "📄 상품 설명서 제작",
          description: "입력 내용이 반영된 이미지 템플릿",
          content: "- 상품명·한 줄 소개·학습 메시지를 입력\n- 아래 미리보기에서 내용을 확인하고 상품 설명서를 PNG 이미지로 내려받기",
          targetModuleId: "3",
          targetStepId: "step-3"
        },
        {
          id: "m3-step4",
          title: "🏆 최종 작품 제출",
          description: "Padlet 업로드",
          content: "- 굿즈 디자인과 설명서를 공유하고 피드백 확인\n- 가상 바자회 활동으로 활용 가능",
          targetModuleId: "3",
          targetStepId: "step-4"
        }
      ],
      editableContent: false
    },
    {
      id: "step-4",
      title: "🔎 모듈 4: DMZ 탐험과 미래 디자인",
      description: "DMZ의 가치 탐색부터 메타버스 견학, 전시 관람, 미래 디자인까지 요약합니다",
      content: "모듈 4의 5단계를 컨테이너별로 정리했습니다.",
      hideDefaultContentContainer: true,
      detailContainers: [
        {
          id: "m4-step1",
          title: "🌿 DMZ의 가치 살펴보기",
          description: "영상으로 역사·생태·문화 이해",
          content: "- DMZ 탄생 배경과 생태적 가치 영상 시청\n- 보전 필요성에 대한 생각 정리",
          targetModuleId: "4",
          targetStepId: "step-1"
        },
        {
          id: "m4-step2",
          title: "🏛️ DMZ 속 잊혀진 삶을 찾아서",
          description: "메타버스 견학으로 과거 삶 탐구",
          content: "- 통일부 DMZ 메타버스 접속\n- 실향민 시선에서의 질문 3가지 탐구",
          targetModuleId: "4",
          targetStepId: "step-2"
        },
        {
          id: "m4-step3",
          title: "🔍 DMZ 속 분단의 현장 둘러보기",
          description: "분단 현장 가상 체험",
          content: "- 군사분계선, 군정회의실 테이블, 인상 깊은 건축물 탐색 및 기록",
          targetModuleId: "4",
          targetStepId: "step-3"
        },
        {
          id: "m4-step4",
          title: "🖼️ DMZ 온라인 전시회 방문하기",
          description: "테마별 전시 관람 후 아이디어 메모",
          content: "- Google Arts & Culture 전시를 테마별로 탐색\n- 미래 DMZ 아이디어(건축·예술·행사) 메모",
          targetModuleId: "4",
          targetStepId: "step-4"
        },
        {
          id: "m4-step5",
          title: "🎯 DMZ 미래 디자인하기",
          description: "AI 활용 창작 제출",
          content: "- 건축/미술/행사 중 하나를 선택해 AI로 제작\n- Padlet 시나리오 보드에 공유",
          targetModuleId: "4",
          targetStepId: "step-5"
        }
      ],
      editableContent: false
    },
    {
      id: "step-5",
      title: "🌐 모듈 5: 경계와 다양한 관점",
      description: "경계 개념과 제주 사례를 살펴보고, 여러 인물의 관점을 비교한 뒤 생각을 정리합니다",
      content: "모듈 5의 5단계를 컨테이너별로 정리했습니다.",
      hideDefaultContentContainer: true,
      detailContainers: [
        {
          id: "m5-step1",
          title: "📺 경계 개념 학습 및 사례 살펴보기",
          description: "경계 개념과 여러 나라 사례",
          content: "- 경계 개념과 사례 이미지 살펴보기\n- AI 뉴스 영상으로 관련 이슈 확인",
          targetModuleId: "5",
          targetStepId: "step-1"
        },
        {
          id: "m5-step2",
          title: "🗺️ 제주 사례로 경계 이해하기",
          description: "6컷 만화로 사례 탐구",
          content: "- 제주 예멘 난민 사례의 흐름 살펴보기\n- 장면별 핵심 표현을 확인하며 여러 입장 파악",
          targetModuleId: "5",
          targetStepId: "step-2"
        },
        {
          id: "m5-step3",
          title: "💬 챗봇 대화 준비하기",
          description: "챗봇 접속부터 대화 완료까지 사용 안내",
          content: "- 크랙 앱 또는 QR 코드로 인물별 챗봇 찾기\n- 프로필과 플레이 가이드 확인 후 대화하기\n- 최소 두 문장으로 대화하고 비밀 아이템 획득",
          targetModuleId: "5",
          targetStepId: "step-3"
        },
        {
          id: "m5-step4",
          title: "🤖 챗봇과 대화 - 페르소나별 시뮬레이션",
          description: "인물별 관점과 근거 비교",
          content: "- 제주도민, 육지부 주민·지자체, UNHCR 관점 살펴보기\n- 인물의 주장과 근거 비교",
          targetModuleId: "5",
          targetStepId: "step-4"
        },
        {
          id: "m5-step5",
          title: "📝 생각 정리와 성찰하기",
          description: "Padlet에 생각 공유 및 사례 성찰",
          content: "- 서로 다른 인물이 중요하게 여긴 점을 Padlet에 공유\n- 경계가 사람들의 생활에 미치는 영향 돌아보기",
          targetModuleId: "5",
          targetStepId: "step-5"
        }
      ],
      editableContent: false
    }
  ]
};
