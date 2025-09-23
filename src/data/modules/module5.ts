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
        openInNewTab: true
      },
      editableContent: false
    },
    {
      id: "step-2",
      title: "🤖 경계 쟁점 분석 - 페르소나 챗봇 대화",
      description: "💬 다양한 페르소나 챗봇과 대화하며 경계 쟁점을 분석해보세요",
      content: "🎯 다양한 관점을 가진 페르소나 챗봇들과 대화하며 영토 분쟁의 복합적인 측면을 이해해보세요! 각 페르소나는 서로 다른 입장과 견해를 가지고 있어 균형잡힌 시각을 형성하는데 도움이 됩니다. 🌟",
      useChatbotCards: true,
      chatbotCards: [
        {
          id: "chatbot-1",
          name: "백록수",
          profileImage: "https://via.placeholder.com/150/4F46E5/FFFFFF?text=백록수",
          description: "영토 분쟁 전문가로서 역사적 관점과 국제법적 해석을 제공하며, 균형잡힌 시각으로 복합적인 영토 문제를 분석합니다.",
          url: "https://share.crack.wrtn.ai/p1a1rx",
          isActive: true
        },
        {
          id: "chatbot-2",
          name: "페르소나 2",
          profileImage: "https://via.placeholder.com/150/059669/FFFFFF?text=P2",
          description: "추가해주세요 - 두 번째 페르소나의 설명을 작성해주세요.",
          url: "#persona2-placeholder",
          isActive: false
        },
        {
          id: "chatbot-3",
          name: "페르소나 3",
          profileImage: "https://via.placeholder.com/150/DC2626/FFFFFF?text=P3",
          description: "추가해주세요 - 세 번째 페르소나의 설명을 작성해주세요.",
          url: "#persona3-placeholder",
          isActive: false
        },
        {
          id: "chatbot-4",
          name: "페르소나 4",
          profileImage: "https://via.placeholder.com/150/7C2D12/FFFFFF?text=P4",
          description: "추가해주세요 - 네 번째 페르소나의 설명을 작성해주세요.",
          url: "#persona4-placeholder",
          isActive: false
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
        openInNewTab: true
      },
      editableContent: false
    },
    {
      id: "step-4",
      title: "🗣️ 국제회의 참여",
      description: "👥 실제 토론에 참여하여 국제회의를 시뮬레이션해보세요",
      content: "🌍 이제 실제 국제회의에 참여할 시간입니다! AI 없이 진행되는 토론에서 여러분이 준비한 입장을 발표하고, 다른 참가자들과 건설적인 토론을 진행해보세요. 상호 존중과 이해를 바탕으로 한 의미 있는 대화를 나누어보겠습니다. 🤝",
      externalLinks: [
        {
          url: "#debate-procedure-placeholder",
          label: "📋 토론 절차 및 시간 가이드 (추후 업데이트 예정)",
          openInNewTab: true
        },
        {
          url: "#debate-guide-placeholder",
          label: "📚 국제회의 토론 가이드 자료 (추후 업데이트 예정)",
          openInNewTab: true
        }
      ],
      editableContent: false
    }
  ]
};