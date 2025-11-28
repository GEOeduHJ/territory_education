import { ModuleData } from '../../types';

// Module 5 데이터
export const MODULE_5_DATA: ModuleData = {
  id: "5",
  title: "🌐 국제회의 시뮬레이션",
  description: "AI 뉴스 학습부터 페르소나 챗봇 대화, 국제회의 준비 및 참여까지 체험하는 종합 모듈입니다",
  steps: [
    {
      id: "step-1",
      title: "📺 AI 뉴스 영상 학습",
      description: "🎬 AI 뉴스 영상을 시청하여 학습 내용을 확인해보세요",
      content: "🔍 최신 AI 뉴스 영상을 통해 영토 분쟁과 관련된 다양한 이슈들을 학습해보세요! 국제적인 관점에서 바라본 영토 문제의 현황과 해결 방안에 대해 알아보겠습니다. 📊",
      externalLink: {
        url: "#ai-news-placeholder",
        label: "📺 AI 뉴스 영상 시청하기 (추후 업데이트 예정)",
        openInNewTab: true,
        showIframe: false
      },
      editableContent: false
    },
    {
      id: "step-2",
      title: "🤖 챗봇과 대화 - 페르소나별 시뮬레이션",
      description: "💬 제공된 페르소나 챗봇과 대화하며 다양한 입장을 분석해봅시다",
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
          url: "https://share.crack.wrtn.ai/r07bmd",
          isActive: true
        },
        {
          id: "persona-local-official",
          name: "육지부 지자체 대표",
          profileImage: "https://via.placeholder.com/150/f97316/ffffff?text=지자체+대표",
          description: "지자체의 입장에서 행정적·경제적 고려와 지역 주민의 복지를 중심으로 입장을 설명합니다.",
          url: "https://share.crack.wrtn.ai/ramf3c",
          isActive: true
        },
        {
          id: "persona-unhcr",
          name: "유엔난민기구 대변인",
          profileImage: "https://via.placeholder.com/150/7c3aed/ffffff?text=UNHCR",
          description: "국제기구 관점에서 인도주의적 원칙과 국제법적 고려를 바탕으로 입장을 제시합니다.",
          url: "https://share.crack.wrtn.ai/n84w28",
          isActive: true
        }
      ],
      externalLinks: [
        {
          url: "https://toolkit.i-scream.co.kr/",
          label: "🔀 랜덤 편성/투표 툴킷 (예시)",
          openInNewTab: true,
          showIframe: false
        }
      ],
      editableContent: false
    },
    {
      id: "step-3",
      title: "🏛️ 국제회의 준비",
      description: "📝 챗봇을 활용하여 입장문 작성 및 질의응답을 구상해보세요",
      content: "✍️ 국제회의 준비 코치봇과 함께 효과적인 입장문을 작성하고, 예상 질문에 대한 답변을 준비해보세요! 논리적이고 설득력 있는 발표를 위한 전략을 수립하겠습니다. 🎯",
      externalLink: {
        url: "https://share.crack.wrtn.ai/2scw5q",
        label: "🤖 국제회의 준비 코치봇과 상담하기",
        openInNewTab: true,
        showIframe: false
      },
      editableContent: false
    },
    {
      id: "step-4",
      title: "🗣️ 국제회의 참여",
      description: "👥 실제 토론에 참여하여 국제회의를 시뮬레이션해보세요",
      content: "🌍 이제 실제 국제회의에 참여할 시간입니다! AI 없이 진행되는 토론에서 여러분이 준비한 입장을 발표하고, 다른 참가자들과 건설적인 토론을 진행해보세요. 상호 존중과 이해를 바탕으로 한 의미 있는 대화를 나누어보겠습니다. 🤝\n\n작성한 입장문을 아래의 국제회의장 패들렛에 공유해보세요. 다른 참석자들의 입장문을 읽고, 최소 3개 이상의 입장문에 댓글 또는 반응을 남겨 의견을 교환해보세요.",
      externalLinks: [
        {
          url: "#debate-procedure-placeholder",
          label: "📋 토론 절차 및 시간 가이드 (추후 업데이트 예정)",
          openInNewTab: true,
          showIframe: false
        },
        {
          url: "#debate-guide-placeholder",
          label: "📚 국제회의 토론 가이드 자료 (추후 업데이트 예정)",
          openInNewTab: true,
          showIframe: false
        },
        {
          url: "https://padlet.com/jde1211/global_forum",
          label: "📎 국제회의장 Padlet (입장문 공유)",
          openInNewTab: true,
          showIframe: false
        }
      ],
      // 패들렛 임베드로 참가자 작품을 바로 확인할 수 있도록 설정
      showEmbeddedPadlet: true,
      padletUrl: "https://padlet.com/jde1211/global_forum",
      editableContent: false
    }
    ,
    {
      id: "step-5",
      title: "🗳️ 국제회의 의사결정",
      description: "안건에 대한 최종 판결을 내리고 투표로 결과를 집계합니다",
      content: "이제 안건에 대해 최종 결정을 내릴 시간입니다. '난민들의 출도 허용'에 대해 [찬성] 또는 [반대]로 최종 선택을 한 뒤 투표해 주세요.\n\n가능하다면 외부 툴킷을 사용하여 찬성/반대 득표를 집계하는 점수판을 연동할 수 있습니다(플랫폼 보안 정책에 따라 iframe 로드가 제한될 수 있음). 아래 링크를 열어 투표 결과 집계 페이지를 확인하거나, 교사가 제공한 실시간 투표 도구를 사용하세요.\n\n토론 후 성찰 질문:\n- 제주의 경계는 어떻게 결정되었나요?\n- 지금 내 생각은 처음과 비교했을 때 어떤 점에서 달라졌나요?",
      externalLinks: [
        {
          url: "https://toolkit.i-scream.co.kr/",
          label: "📊 투표 점수판 툴킷 (예시)",
          openInNewTab: true,
          showIframe: false
        }
      ],
      editableContent: false
    }
  ]
};