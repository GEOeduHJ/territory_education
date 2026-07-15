import { ModuleData, ModuleKeywordConfig } from '../../types';

// Module 1 키워드 설정
export const MODULE_1_KEYWORD_CONFIG: ModuleKeywordConfig = {
  moduleId: "1",
  hasKeywordFeature: true,
  keywordInputStepId: "step-2",  // step-1에서 step-2로 변경
  templateSteps: ["step-3", "step-4", "step-5"],  // step-7은 템플릿 사용 안 함
  template: {
    template: `아래 네 개 항목을 입력하세요.
- [keyword1] (지리적 위치): 특정 국가명 대신 지형·지역성으로 서술하세요. 예: '해안의 작은 섬 무리', '고원지대의 경계 산맥'
- [keyword2] (갈등 배경): 분쟁의 원인/역사적 맥락을 한 문장으로.
- [keyword3] (현재 상황): 지금 벌어지고 있는 상황을 간단히 요약.
- [keyword4] (해결 노력): 제안되는 평화적 조치나 노력(한 문장).

이 입력값들은 step-3(노래), step-4(이미지) 템플릿의 기본 자료로 사용되며, 학생은 각 템플릿을 편집하여 최종 프롬프트를 만드세요.`,
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
    "pdfUrl": "https://youtu.be/QmIDYcYFuzk",
    "description": "중국·대만·베트남·필리핀·말레이시아·브루나이 간 도서 주권 및 해양 관할권 분쟁"
  },
  {
    "id": "region-2",
    "name": "센카쿠/댜오위다오",
    "coordinates": [25.78, 123.5],
    "pdfUrl": "https://youtu.be/StSkJFXdFcY",
    "description": "일본·중국·대만 간 동중국해 도서 영유권 분쟁"
  },
  {
    "id": "region-3",
    "name": "남쿠릴/북방영토",
    "coordinates": [44.5, 146.5],
    "pdfUrl": "https://youtu.be/BVjvTI_gAu4",
    "description": "러시아와 일본 간 4개 섬(이투루프·쿠나시르·시코탄·하보마이) 영유권 분쟁"
  },
  {
    "id": "region-4",
    "name": "중국-인도 국경",
    "coordinates": [28.5, 94.8],
    "pdfUrl": "https://youtu.be/yUAss_21D3A",
    "description": "중국과 인도 간 악사이친·라다크·아루나찰프라데시 국경선 분쟁"
  },
  {
    "id": "region-5",
    "name": "카슈미르",
    "coordinates": [34.0, 76.5],
    "pdfUrl": "https://youtu.be/sJiWSypT7rQ",
    "description": "인도·파키스탄(중국 연계) 간 카슈미르 영토 주권 및 자치권 분쟁"
  },
  {
    "id": "region-6",
    "name": "이스라엘-팔레스타인",
    "coordinates": [31.5, 35.0],
    "pdfUrl": "https://youtu.be/28BPywj9Tbk",
    "description": "이스라엘과 팔레스타인 간 영토·국경·정착촌·예루살렘 지위 분쟁"
  },
  {
    "id": "region-7",
    "name": "나일강 연안국",
    "coordinates": [12.0, 33.0],
    "pdfUrl": "https://youtu.be/btKYe_wUjJA",
    "description": "이집트·수단·에티오피아 등 나일강 유역 국가 간 물 배분 및 댐 건설 분쟁"
  },
  {
    "id": "region-8",
    "name": "이집트-수단(할라이브)",
    "coordinates": [22.2, 36.6],
    "pdfUrl": "https://youtu.be/33Cn13jnh1Y",
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
      templateContent: `당신은 교육용 창작 보조자입니다.
    목적: 분쟁의 배경을 설명하고 공감과 평화적 해결을 촉진하는 캠페인 노래를 만듭니다.
    대상: 중·고등학생. 톤: 따뜻하고 희망적.
    금지: 특정 국가/집단·실제 인물 직접 지칭, 폭력 미화/선동, 혐오 표현.

    입력:
    - 위치: [keyword1]
    - 갈등 배경: [keyword2]
    - 현재 상황: [keyword3]
    - 해결 노력: [keyword4]

    출력요구:
    1) 가사(한국어) — 형식은 반드시 3파트만 사용: Verse 1 / Verse 2 / Chorus.
       - Verse 1: 위치와 배경을 사용해 장면을 설정(6~8행 권장).
       - Verse 2: 현재 상황과 사람들의 이야기를 감성적으로 묘사(6~8행).
       - Chorus: 해결 노력([keyword4])을 중심으로 희망적이고 반복 가능한 후렴(4~6행).
    2) 한 줄로 장르·템포·무드 표기(예: '장르: 포크 · 템포: 중간 · 무드: 따뜻하고 서정적').
    3) 교사용 메모: 학습 포인트 2개(각 한 문장) + 수업용 토론 질문 2개.

    주의: 가사 내에서 국가나 분쟁명을 직접 쓰지 말고 '해안의 섬 무리', '내륙의 산악 지대'처럼 지형·장면 기반의 표현을 사용하세요.`,
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
      templateContent: `이미지 생성 템플릿(학생이 수정하여 사용하세요).
    목표: 분쟁의 구체적 이름/국가 표기는 피하고, 은유와 상징으로 평화 메시지 전달.
    금지: 특정 국가명/분쟁명/실제 인물/국기/지도 경계선/폭력적 표현·묘사/문자(텍스트).

    입력(참고):
    - 위치: [keyword1]
    - 갈등 배경: [keyword2]
    - 현재 상황: [keyword3]
    - 해결 노력: [keyword4]

    요청(권장):
    - 정사각형 1:1, 권장 해상도 2048x2048.
    - 스타일: 수채화 느낌 또는 평면 일러스트(학생 선택).
    - 색상 팔레트: 부드러운 파스텔(연파랑·연초록·은은한 금빛).
    - 핵심 심상(하나 이상을 포함):
      - 겹쳐진 지도 조각이 꽃·나무로 피어나는 은유,
      - 서로 손을 잡는 실루엣(익명화된 인물),
      - 비둘기 또는 잔잔한 물결 위의 작은 보트(평화 상징).
    - 표현 키워드: '은유적', '상징적', '희망적인 조명(새벽/황혼)', '평온한 분위기'.
    - 변형: 색조/구성/초점 변형을 포함한 3가지 버전 생성 요청.

    설명: 학생은 위 템플릿의 심상·스타일·색상 등을 직접 수정한 후 이미지 생성 도구에 붙여넣어 사용하세요.`,
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
      templateContent: "영토 분쟁을 사례로 한 캠페인 노래의 뮤직비디오 영상을 만들어줘. \n이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. \n해결 방안으로는 [keyword4]이/가 필요해. \n\n위 프롬프트 내용을 바탕으로 감동적인 뮤직비디오 영상을 생성해주세요. \n영토 분쟁의 현실과 평화적 해결의 중요성을 담은 시각적 요소를 포함해주세요.\n영상에 문자는 포함하지 마세요.",
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
      templateContent: "영토 분쟁을 사례로 캠페인 노래를 만들거야. 이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. 해결 방안으로는 [keyword4]이/가 필요해. [keyword4]\n\n✂️ 위 주제로 제작한 노래, 앨범 커버 이미지, 영상 소스들을 하나로 합쳐서 완성도 높은 뮤직비디오를 편집해주세요. 캠페인 메시지가 명확히 전달되고 시청자의 공감을 이끌어낼 수 있는 구성으로 편집해주세요.",
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