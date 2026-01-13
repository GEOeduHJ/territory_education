import { ModuleData } from '../../types';

// Module 6 데이터
export const MODULE_6_DATA: ModuleData = {
  id: "6",
  topic: "모듈 오리엔테이션",
  title: "📘 모듈 한눈에 보기",
  description: "모듈 1~5의 흐름과 핵심 활동을 빠르게 훑어보는 소개 페이지",
  steps: [
    {
      id: "step-1",
      title: "🎵 모듈 1: 세계 분쟁과 캠페인 뮤직비디오",
      description: "영토 분쟁 조사부터 캠페인 노래·영상 제작까지의 여정을 요약합니다",
      content: "모듈 1의 7단계를 컨테이너별로 정리했습니다.",
      hideDefaultContentContainer: true,
      detailContainers: [
        {
          id: "m1-step1",
          title: "Step 1. 분쟁 지역 자료 조사",
          description: "인터랙티브 지도와 자료 열람",
          content: "- 지도 마커를 클릭해 각 분쟁 지역의 배경 자료(PDF)를 확인\n- AI와 함께 조사 내용을 정리하며 다음 단계 준비\n- 지역별 자료 예시: 남중국해, 센카쿠/댜오위다오, 나일강 연안국 등",
          targetModuleId: "1",
          targetStepId: "step-1"
        },
        {
          id: "m1-step2",
          title: "Step 2. 키워드 입력",
          description: "갈등 주체·배경·해결 키워드 수집",
          content: "- 조사한 정보를 4개 키워드로 입력\n- 이후 노래/이미지/영상 생성 프롬프트에 자동 반영",
          targetModuleId: "1",
          targetStepId: "step-2"
        },
        {
          id: "m1-step3",
          title: "Step 3. 노래 생성",
          description: "Suno에서 캠페인 송 만들기",
          content: "- 생성형 프롬프트를 복사해 Suno에서 노래 제작\n- 참고 가이드 링크로 제작 팁 확인",
          targetModuleId: "1",
          targetStepId: "step-3"
        },
        {
          id: "m1-step4",
          title: "Step 4. 앨범 커버 생성",
          description: "Gemini로 커버 아트 제작",
          content: "- 동일한 키워드 프롬프트로 이미지 생성\n- 평화·화해 메시지가 드러나는 시각 요소 강조",
          targetModuleId: "1",
          targetStepId: "step-4"
        },
        {
          id: "m1-step5",
          title: "Step 5. 뮤직비디오 영상 생성(선택)",
          description: "AI 영상으로 스토리 확장",
          content: "- 프롬프트를 활용해 영상 생성\n- 분쟁 현실과 평화적 해결을 담은 시각적 스토리텔링",
          targetModuleId: "1",
          targetStepId: "step-5"
        },
        {
          id: "m1-step6",
          title: "Step 6. 뮤직비디오 편집",
          description: "CapCut에서 합성·편집",
          content: "- 노래·커버·영상 소스를 하나로 편집\n- 메시지가 명확히 전달되도록 구성",
          targetModuleId: "1",
          targetStepId: "step-6"
        },
        {
          id: "m1-step7",
          title: "Step 7. 최종 제출",
          description: "Padlet에 업로드",
          content: "- 완성본 업로드 후 다른 작품 감상 및 피드백",
          targetModuleId: "1",
          targetStepId: "step-7"
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
          title: "Step 1. 육지→해양 영토 전환",
          description: "국토 확장·용도구분 사례 보기",
          content: "- KOSIS 그래프와 토지e음 지도로 관리 사례 확인\n- 해양 시대에 맞춘 관리 필요성 사고 질문 포함",
          targetModuleId: "2",
          targetStepId: "step-1"
        },
        {
          id: "m2-step2",
          title: "Step 2. 해양영토 개념",
          description: "영해·EEZ 등 기본 개념 탐구",
          content: "- 구글 마이맵스로 통상/직선기선, 영해, EEZ, 어업협정 살펴보기",
          targetModuleId: "2",
          targetStepId: "step-2"
        },
        {
          id: "m2-step3",
          title: "Step 3. 해양 공간 데이터(선택)",
          description: "인간 활동 데이터 관측",
          content: "- Global Fishing Watch, EMODnet Human Activities로 활동 데이터 탐색",
          targetModuleId: "2",
          targetStepId: "step-3"
        },
        {
          id: "m2-step4",
          title: "Step 4. 해양공간관리",
          description: "영상 시청 + VADA Hub 탐구",
          content: "- 해양공간관리계획의 목적·방법 영상 시청\n- VADA Hub 지도와 활동지로 지역 해역 활용 현황 조사",
          targetModuleId: "2",
          targetStepId: "step-4"
        },
        {
          id: "m2-step5",
          title: "Step 5. 가치와 미래",
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
          title: "Step 1. 독도 주제 학습",
          description: "AI 챗봇 + 학년별 자료",
          content: "- 독도 역사·지리·문화 학습\n- 드롭다운 자료로 학년 맞춤 정보 열람 후 아이디어 수집",
          targetModuleId: "3",
          targetStepId: "step-1"
        },
        {
          id: "m3-step2",
          title: "Step 2. 굿즈 디자인 생성",
          description: "이미지 업로드 + 프롬프트",
          content: "- Gemini에서 티셔츠, 가방, 스티커 등 굿즈 디자인 이미지 생성",
          targetModuleId: "3",
          targetStepId: "step-2"
        },
        {
          id: "m3-step3",
          title: "Step 3. 상품 설명서 제작",
          description: "템플릿 기반 기획서 작성",
          content: "- 타겟·가격·특징을 담아 상품 설명서 작성",
          targetModuleId: "3",
          targetStepId: "step-3"
        },
        {
          id: "m3-step4",
          title: "Step 4. 최종 제출",
          description: "Padlet 업로드",
          content: "- 굿즈 디자인과 설명서를 공유하고 피드백 확인",
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
          title: "Step 1. DMZ 가치",
          description: "영상으로 역사·생태·문화 이해",
          content: "- DMZ 탄생 배경과 생태적 가치 영상 시청\n- 보전 필요성에 대한 생각 정리",
          targetModuleId: "4",
          targetStepId: "step-1"
        },
        {
          id: "m4-step2",
          title: "Step 2. 사라진 마을",
          description: "메타버스 견학으로 과거 삶 탐구",
          content: "- 통일부 DMZ 메타버스 접속\n- 실향민 시선에서의 질문 3가지 탐구",
          targetModuleId: "4",
          targetStepId: "step-2"
        },
        {
          id: "m4-step3",
          title: "Step 3. 판문점 둘러보기",
          description: "분단 현장 가상 체험",
          content: "- 군사분계선, 군정회의실 테이블, 인상 깊은 건축물 탐색 및 기록",
          targetModuleId: "4",
          targetStepId: "step-3"
        },
        {
          id: "m4-step4",
          title: "Step 4. 온라인 전시",
          description: "테마별 전시 관람 후 아이디어 메모",
          content: "- Google Arts & Culture 전시를 테마별로 탐색\n- 미래 DMZ 아이디어(건축·예술·행사) 메모",
          targetModuleId: "4",
          targetStepId: "step-4"
        },
        {
          id: "m4-step5",
          title: "Step 5. 미래 디자인",
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
      title: "🌐 모듈 5: 제주 예멘 난민과 국제회의",
      description: "다양한 페르소나와 대화하며 입장문을 만들고 국제회의를 진행하는 흐름을 정리합니다",
      content: "모듈 5의 5단계를 컨테이너별로 정리했습니다.",
      hideDefaultContentContainer: true,
      detailContainers: [
        {
          id: "m5-step1",
          title: "Step 1. AI 뉴스 학습",
          description: "영상 시청 + 활동지",
          content: "- AI 뉴스 영상을 시청하며 제주 예멘 난민 사례 이해\n- 활동지로 핵심 포인트 정리",
          targetModuleId: "5",
          targetStepId: "step-1"
        },
        {
          id: "m5-step2",
          title: "Step 2. 페르소나 챗봇",
          description: "이해관계자별 입장 분석",
          content: "- 제주도민, 육지부 주민/지자체, UNHCR 등과 대화\n- 주장·근거를 정리해 입장 대비",
          targetModuleId: "5",
          targetStepId: "step-2"
        },
        {
          id: "m5-step3",
          title: "Step 3. 국제회의 준비",
          description: "코치봇과 입장문·Q&A 작성",
          content: "- 찬반 입장 정리 후 발표용 입장문 작성\n- 예상 질문과 답변 준비",
          targetModuleId: "5",
          targetStepId: "step-3"
        },
        {
          id: "m5-step4",
          title: "Step 4. 국제회의 참여",
          description: "토론 및 Padlet 공유",
          content: "- AI 없이 토론 진행, 입장문을 Padlet에 공유\n- 다른 참가자 글에 댓글·반응 남기기",
          targetModuleId: "5",
          targetStepId: "step-4"
        },
        {
          id: "m5-step5",
          title: "Step 5. 의사결정",
          description: "투표 및 성찰",
          content: "- 찬/반 투표로 최종 결론 도출\n- 경계와 난민 문제에 대한 성찰 질문 답변",
          targetModuleId: "5",
          targetStepId: "step-5"
        }
      ],
      editableContent: false
    }
  ]
};