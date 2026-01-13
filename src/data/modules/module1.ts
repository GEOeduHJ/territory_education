import { ModuleData, ModuleKeywordConfig } from '../../types';

// Module 1 키워드 설정
export const MODULE_1_KEYWORD_CONFIG: ModuleKeywordConfig = {
  moduleId: "1",
  hasKeywordFeature: true,
  keywordInputStepId: "step-2",  // step-1에서 step-2로 변경
  templateSteps: ["step-3", "step-4", "step-5"],  // step-7은 템플릿 사용 안 함
  template: {
    template: "영토 분쟁을 사례로 캠페인 노래를 만들거야. 이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. 해결 방안으로는 [keyword3]이/가 필요해. [keyword4]",
    placeholders: ["[keyword1]", "[keyword2]", "[keyword3]", "[keyword4]"]
  }
};

// Module 1 데이터
export const MODULE_1_DATA: ModuleData = {
  id: "1",
  topic: "세계분쟁",
  title: "🎵 영토의 불협화음을 넘어, 평화의 하모니를 부르다",
  description: "전 세계의 다양한 영토 분쟁 사례를 탐구하고, 생성형 AI를 활용하여 평화를 위한 메시지를 뮤직비디오 형식으로 제작하는 모듈",
  steps: [
    {
      id: "step-1",
      title: "🗺️ 분쟁 지역 자료 조사",
      description: "세계 각지의 영토 분쟁 지역을 탐색하고 자료를 조사하세요 🔎 ",
      content: "지도에서 분쟁 지역을 탐색하고 해당 분쟁과 관련된 자료를 확인해보세요! 마커를 클릭하면 자료를 열람할 수 있습니다. 👆\n관심 있는 지역의 자료를 읽고 정리하면서 AI 챗봇과 함께 다음 단계를 준비하세요.",
      externalLink: {
        url: "https://gemini.google.com/gem/1H87D2QncaI9DQX_uz0DYgnCQs2wyXzJp?usp=sharing",
        label: "🤖 AI와 함께 분쟁 지역 탐색하기 (Gemini Gems)",
        openInNewTab: true
      },
      showMap: true,
      regionResources: [
        
  {
    "id": "region-1",
    "name": "남중국해",
    "coordinates": [12, 115.0],
    "pdfUrl": "https://drive.google.com/file/d/1MzJuwKxo5TweZEvtAfFHbNFRsGHIr51P/view?usp=drive_link",
    "description": "중국·대만·베트남·필리핀·말레이시아·브루나이 간 도서 주권 및 해양 관할권 분쟁"
  },
  {
    "id": "region-2",
    "name": "센카쿠/댜오위다오",
    "coordinates": [25.78, 123.5],
    "pdfUrl": "https://drive.google.com/file/d/1OacSt4QfZgJgsj5B2qo7eTZVRabdWu2s/view?usp=drive_link",
    "description": "일본·중국·대만 간 동중국해 도서 영유권 분쟁"
  },
  {
    "id": "region-3",
    "name": "남쿠릴/북방영토",
    "coordinates": [44.5, 146.5],
    "pdfUrl": "https://drive.google.com/file/d/1dB4c9RpY9ZijO6oGbhe6eG3auUM-ILBv/view?usp=drive_link",
    "description": "러시아와 일본 간 4개 섬(이투루프·쿠나시르·시코탄·하보마이) 영유권 분쟁"
  },
  {
    "id": "region-4",
    "name": "중국-인도 국경",
    "coordinates": [28.5, 94.8],
    "pdfUrl": "https://drive.google.com/file/d/1DHClybP2CQUYCpb-3sotrJwcqdpjyLi4/view?usp=drive_link",
    "description": "중국과 인도 간 악사이친·라다크·아루나찰프라데시 국경선 분쟁"
  },
  {
    "id": "region-5",
    "name": "카슈미르",
    "coordinates": [34.0, 76.5],
    "pdfUrl": "https://drive.google.com/file/d/1TCg1QiyaO98CifgRLP_1AaTRrsgmoYV1/view?usp=drive_link",
    "description": "인도·파키스탄(중국 연계) 간 카슈미르 영토 주권 및 자치권 분쟁"
  },
  {
    "id": "region-6",
    "name": "이스라엘-팔레스타인",
    "coordinates": [31.5, 35.0],
    "pdfUrl": "https://drive.google.com/file/d/1i69RmbV9cda4sn9WsvDCLD8d2QTmJhVr/view?usp=drive_link",
    "description": "이스라엘과 팔레스타인 간 영토·국경·정착촌·예루살렘 지위 분쟁"
  },
  {
    "id": "region-7",
    "name": "나일강 연안국",
    "coordinates": [12.0, 33.0],
    "pdfUrl": "https://drive.google.com/file/d/1gnPBJHcCmHNNnZVdRvFpPxPp-l5XsWYx/view?usp=drive_link",
    "description": "이집트·수단·에티오피아 등 나일강 유역 국가 간 물 배분 및 댐 건설 분쟁"
  },
  {
    "id": "region-8",
    "name": "이집트-수단(할라이브)",
    "coordinates": [22.2, 36.6],
    "pdfUrl": "https://drive.google.com/file/d/1m7SHMyptobTmfYvgJuf3F5DZaEpXKJ6C/view?usp=drive_link",
    "description": "이집트와 수단 간 홍해 연안 할라이브 삼각지대 영유권 분쟁"
  }
      ],
      editableContent: true
    },
    {
      id: "step-2",
      title: "✏️ 키워드 입력",
      description: "🎵 캠페인 노래 제작을 위한 핵심 키워드를 입력하세요",
      content: "🎤 캠페인 노래 만들기를 위한 핵심 정보를 입력하세요! 1단계에서 조사한 내용을 바탕으로 각 항목에 적절한 키워드를 넣어주시면 다음 단계에서 자동으로 활용됩니다. ✨",
      isKeywordInput: true,
      editableContent: false
    },
    {
      id: "step-3",
      title: "🎵 노래 생성",
      description: "🎶 생성된 프롬프트를 복사하고 노래를 생성해보세요",
      content: "🎼 2단계에서 입력한 키워드를 바탕으로 노래 생성 프롬프트가 만들어졌습니다! 프롬프트를 복사한 후, Suno 사이트에서 멋진 노래를 생성해보세요. 🎸",
      useKeywordTemplate: true,
      templateContent: "영토 분쟁을 사례로 캠페인 노래를 만들어줘. \n이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. \n해결 방안으로는 [keyword3]이/가 필요해. \n[keyword4]라고 생각해\n\n위 프롬프트 내용에 맞게 감동적이고 기억에 남는 캠페인 노래 가사를 작성하고 작곡해주세요. \n평화와 화해의 메시지가 담긴 멜로디로 만들어주세요.",
      externalLinks: [
        {
          url: "https://suno.com/",
          label: "🎵 Suno에서 노래 생성하기",
          openInNewTab: true,
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
      id: "step-4",
      title: "🎨 앨범 커버 이미지 생성",
      description: "🖼️ 프롬프트를 복사하고 앨범 커버 이미지를 생성해보세요",
      content: "🌟 아래 프롬프트를 사용하여 앨범 커버 이미지를 생성해보세요! Gemini를 사용하여 창의적이고 멋진 앨범 커버를 만들어보세요. 🎭",
      useKeywordTemplate: true,
      templateContent: "영토 분쟁을 사례로 한 캠페인 노래의 앨범 커버 이미지를 만들어줘. \n이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. \n해결 방안으로는 [keyword3]이/가 필요해. \n[keyword4]라고 생각해\n\n위 프롬프트 내용이 잘 반영된 뮤직비디오 앨범 커버 이미지를 생성해주세요. \n평화적이고 희망적인 느낌의 아름다운 디자인으로, 영토 분쟁의 해결과 화해를 상징하는 시각적 요소를 포함해주세요. \n이미지에 문자는 포함하지 마세요.",
      externalLink: {
        url: "https://gemini.google.com/app?hl=ko",
        label: "🎨 Gemini에서 앨범 커버 이미지 생성하기",
        openInNewTab: true
      },
      editableContent: false
    },
    {
      id: "step-5",
      title: "🎬 뮤직비디오 영상 생성(선택 사항)",
      description: "📹 프롬프트를 복사하고 뮤직비디오 영상을 생성해보세요",
      content: "🎥 같은 프롬프트를 활용하여 뮤직비디오용 영상을 생성해보세요! AI를 사용하여 매력적이고 인상적인 영상을 만들어보세요. 🌈",
      useKeywordTemplate: true,
      templateContent: "영토 분쟁을 사례로 한 캠페인 노래의 뮤직비디오 영상을 만들어줘. \n이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. \n해결 방안으로는 [keyword3]이/가 필요해. \n\n위 프롬프트 내용을 바탕으로 감동적인 뮤직비디오 영상을 생성해주세요. \n영토 분쟁의 현실과 평화적 해결의 중요성을 담은 시각적 요소를 포함해주세요.\n영상에 문자는 포함하지 마세요.",
      externalLink: {
        url: "https://create.wan.video/generate/video/generate?model=wan2.6",
        label: "🎬 Wan에서 뮤직비디오 영상 생성하기",
        openInNewTab: true
      },
      editableContent: false
    },
    {
      id: "step-6",
      title: "✂️ 뮤직비디오 편집",
      description: "🎞️ 제작한 콘텐츠들을 하나의 뮤직비디오로 편집하세요",
      content: "지금까지 생성한 노래와 이미지, 영상 등을 합쳐서 완성된 뮤직비디오를 만들어보세요! \n거의 다 완성되었어요! 💪",
      useKeywordTemplate: false,
      templateContent: "영토 분쟁을 사례로 캠페인 노래를 만들거야. 이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. 해결 방안으로는 [keyword3]이/가 필요해. [keyword4]\n\n✂️ 위 주제로 제작한 노래, 앨범 커버 이미지, 영상 소스들을 하나로 합쳐서 완성도 높은 뮤직비디오를 편집해주세요. 캠페인 메시지가 명확히 전달되고 시청자의 공감을 이끌어낼 수 있는 구성으로 편집해주세요.",
      externalLink: {
        url: "https://www.capcut.com/my-edit?start_tab=video",
        label: "✂️ CapCut에서 뮤직비디오 편집하기",
        openInNewTab: true
      },
      editableContent: false
    },
    {
      id: "step-7",
      title: "🏆 최종 결과물 제출",
      description: "🎊 완성된 뮤직비디오를 제출하고 다른 작품들을 확인해보세요",
      content: "🎉 축하합니다! 뮤직비디오가 완성되었습니다! \nPadlet에 작품을 업로드하고 다른 학습자들의 멋진 작품도 감상해보세요. 🌟",
      useKeywordTemplate: false,
      // externalLink: {
      //   url: "https://padlet.com/ghdwns00610/_-f575dgwgyfccfr0v",
      //   label: "🎊 Padlet에 뮤직비디오 제출하기",
      //   openInNewTab: true
      // },
      showEmbeddedPadlet: true,
      padletUrl: "https://padlet.com/ghdwns00610/_-f575dgwgyfccfr0v",
      editableContent: false
    }
  ]
};