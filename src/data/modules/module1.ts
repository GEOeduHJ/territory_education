import { ModuleData, ModuleKeywordConfig } from '../../types';

// Module 1 키워드 설정
export const MODULE_1_KEYWORD_CONFIG: ModuleKeywordConfig = {
  moduleId: "1",
  hasKeywordFeature: true,
  keywordInputStepId: "step-1",
  templateSteps: ["step-2", "step-3", "step-4", "step-5"],
  template: {
    template: "영토 분쟁을 사례로 캠페인 노래를 만들거야. 이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. 해결 방안으로는 [keyword3]이/가 필요해. [keyword4]",
    placeholders: ["[keyword1]", "[keyword2]", "[keyword3]", "[keyword4]"]
  }
};

// Module 1 데이터
export const MODULE_1_DATA: ModuleData = {
  id: "1",
  title: "영토교육 캠페인 노래 만들기",
  description: "영토 분쟁 사례를 바탕으로 캠페인 노래를 제작하는 모듈입니다",
  steps: [
    {
      id: "step-1",
      title: "✏️ 키워드 입력",
      description: "🎵 캠페인 노래 제작을 위한 핵심 키워드를 입력하세요",
      content: "🎤 캠페인 노래 만들기를 위한 핵심 정보를 입력하세요! 각 항목에 적절한 키워드를 넣어주시면 다음 단계에서 자동으로 활용됩니다. ✨",
      isKeywordInput: true,
      editableContent: false
    },
    {
      id: "step-2",
      title: "🎵 노래 생성",
      description: "🎶 생성된 프롬프트를 복사하고 노래를 생성해보세요",
      content: "🎼 1단계에서 입력한 키워드를 바탕으로 노래 생성 프롬프트가 만들어졌습니다! 프롬프트를 복사한 후, Suno 사이트에서 멋진 노래를 생성해보세요. 🎸",
      useKeywordTemplate: true,
      templateContent: "영토 분쟁을 사례로 캠페인 노래를 만들거야. 이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. 해결 방안으로는 [keyword3]이/가 필요해. [keyword4]\n\n🎵 위 프롬프트 내용에 맞게 감동적이고 기억에 남는 캠페인 노래 가사를 작성하고 작곡해주세요. 평화와 화해의 메시지가 담긴 멜로디로 만들어주세요.",
      externalLinks: [
        {
          url: "https://suno.com/",
          label: "🎵 Suno에서 노래 생성하기",
          openInNewTab: true
        },
        {
          url: "https://drive.google.com/file/d/1wL7Z6FzH8PJXA0FWi-0-A3S_FkZFCgl_/view?usp=sharing",
          label: "📚 노래 생성 가이드 보기",
          openInNewTab: true
        }
      ],
      editableContent: false
    },
    {
      id: "step-3",
      title: "🎨 앨범 커버 이미지 생성",
      description: "🖼️ 프롬프트를 복사하고 앨범 커버 이미지를 생성해보세요",
      content: "🌟 동일한 프롬프트를 사용하여 앨범 커버 이미지를 생성해보세요! Gemini를 사용하여 창의적이고 멋진 앨범 커버를 만들어보세요. 🎭",
      useKeywordTemplate: true,
      templateContent: "영토 분쟁을 사례로 캠페인 노래를 만들거야. 이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. 해결 방안으로는 [keyword3]이/가 필요해. [keyword4]\n\n🎨 위 프롬프트 내용이 잘 반영된 뮤직비디오 앨범 커버 이미지를 생성해주세요. 평화적이고 희망적인 느낌의 아름다운 디자인으로, 영토 분쟁의 해결과 화해를 상징하는 시각적 요소를 포함해주세요.",
      externalLink: {
        url: "https://gemini.google.com/app?hl=ko",
        label: "🎨 Gemini에서 앨범 커버 이미지 생성하기",
        openInNewTab: true
      },
      editableContent: false
    },
    {
      id: "step-4",
      title: "🎬 뮤직비디오 영상 생성",
      description: "📹 프롬프트를 복사하고 뮤직비디오 영상을 생성해보세요",
      content: "🎥 같은 프롬프트를 활용하여 뮤직비디오용 영상을 생성해보세요! Google AI Studio를 사용하여 매력적이고 인상적인 영상을 만들어보세요. 🌈",
      useKeywordTemplate: true,
      templateContent: "영토 분쟁을 사례로 캠페인 노래를 만들거야. 이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. 해결 방안으로는 [keyword3]이/가 필요해. [keyword4]\n\n🎬 위 프롬프트 내용을 바탕으로 감동적인 뮤직비디오 영상을 생성해주세요. 영토 분쟁의 현실과 평화적 해결의 중요성을 담은 시각적 스토리텔링으로, 시청자에게 깊은 인상을 남길 수 있는 영상을 만들어주세요.",
      externalLink: {
        url: "https://aistudio.google.com/prompts/new_video",
        label: "🎬 Google AI Studio에서 뮤직비디오 영상 생성하기",
        openInNewTab: true
      },
      editableContent: false
    },
    {
      id: "step-5",
      title: "✂️ 뮤직비디오 편집",
      description: "🎞️ 제작한 콘텐츠들을 하나의 뮤직비디오로 편집하세요",
      content: "🎉 지금까지 생성한 노래, 앨범 커버, 영상을 CapCut에서 합쳐서 완성된 뮤직비디오를 만들어보세요! 거의 다 완성되었어요! 💪",
      useKeywordTemplate: true,
      templateContent: "영토 분쟁을 사례로 캠페인 노래를 만들거야. 이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. 해결 방안으로는 [keyword3]이/가 필요해. [keyword4]\n\n✂️ 위 주제로 제작한 노래, 앨범 커버 이미지, 영상 소스들을 하나로 합쳐서 완성도 높은 뮤직비디오를 편집해주세요. 캠페인 메시지가 명확히 전달되고 시청자의 공감을 이끌어낼 수 있는 구성으로 편집해주세요.",
      externalLink: {
        url: "https://www.capcut.com/my-edit?start_tab=video",
        label: "✂️ CapCut에서 뮤직비디오 편집하기",
        openInNewTab: true
      },
      editableContent: false
    },
    {
      id: "step-6",
      title: "🏆 최종 결과물 제출",
      description: "🎊 완성된 뮤직비디오를 제출하고 다른 작품들을 확인해보세요",
      content: "🎉 축하합니다! 뮤직비디오가 완성되었습니다! 아래 Padlet에 작품을 업로드하고 다른 학습자들의 멋진 작품도 감상해보세요. 🌟",
      useKeywordTemplate: false,
      externalLink: {
        url: "https://padlet.com/ghdwns00610/_-f575dgwgyfccfr0v",
        label: "🎊 Padlet에 뮤직비디오 제출하기",
        openInNewTab: true
      },
      showEmbeddedPadlet: true,
      padletUrl: "https://padlet.com/ghdwns00610/_-f575dgwgyfccfr0v",
      editableContent: false
    }
  ]
};