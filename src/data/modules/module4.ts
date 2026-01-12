import { ModuleData } from '../../types';

// Module 4 데이터
export const MODULE_4_DATA: ModuleData = {
  id: "4",
  topic: "DMZ",
  title: "DMZ 미래 디자인 챌린지",
  description: "DMZ의 역사적·생태적 가치를 탐구하고, AI 도구를 활용해 미래 DMZ의 모습을 디자인하는 모듈입니다",
  steps: [
    {
      id: "step-1",
      title: "🌿 DMZ의 가치 살펴보기",
      description: "분단의 역사로 탄생한 DMZ의 생태적·문화적 가치를 살펴봅시다",
      content: "DMZ는 어떤 곳일까요? 분단의 역사로 인해 탄생한 DMZ 속 다양한 문화 및 자연 유산을 확인해봅시다! 아래 영상들을 시청하고 DMZ가 왜 보전되어야 하는지 생각해보세요.",
      externalLinks: [
        {
          url: "https://www.youtube.com/watch?v=8jK9K41tCvA",
          label: "▶ DMZ의 탄생 배경과 생태적 가치",
          openInNewTab: true
        },
        {
          url: "https://www.youtube.com/watch?v=qqPTMvKhNFM",
          label: "▶ DMZ 미래의 유산",
          openInNewTab: true
        }
      ],
      editableContent: false
    },
    {
      id: "step-2",
      title: "🏛️ DMZ 속 잊혀진 삶을 찾아서",
      description: "통일부 DMZ 메타버스에서 사라진 마을을 견학하며 과거의 삶을 상상해봅시다",
      content: "DMZ는 6.25 전쟁 발발 이전에는 사람들의 삶의 터전이었습니다. 통일부에서 제공하는 DMZ 메타버스에 접속하여 '사라진 마을'을 견학하고, 70여 년 전 이곳에 살았던 사람들의 삶을 돌아보세요.\n\n<견학 중 탐구 내용>\n1. OO지역의 마을은 원래 어떤 곳이었나요?\n2. 이곳의 실향민들이 고향으로 돌아간다면, 무엇을 하고 싶어할까요?\n3. 만약 전쟁이 없었다면 이곳은 지금 어떤 모습일까요?",
      externalLinks: [
        {
          url: "https://universe.go.kr/main",
          label: "🕊️ 통일부 DMZ 메타버스 (사라진 마을 견학)",
          openInNewTab: true
        }
      ],
      editableContent: false
    },
    {
      id: "step-3",
      title: "🔍 DMZ 속 분단의 현장 둘러보기",
      description: "판문점의 내부를 가상으로 둘러보며 분단의 현장을 체험해봅시다",
      content: "DMZ에는 1953년 전쟁을 '잠시 멈추자'고 합의한 장소가 있습니다. 분단의 현장이자 쉽게 가보기 힘든 '판문점'의 내부를 자유롭게 돌아다니며 다음 질문을 탐구해보세요.\n\n<견학 중 탐구 내용>\n1. 군사분계선은 현실에서는 목숨을 걸어야 넘을 수 있는 경계선입니다. 판문점의 여러 군데에 그어진 군사분계선을 따라 돌아다녀봅시다.\n\n2. '군정회의실'에서 정전협정이 이루어진 '테이블'을 찾아봅시다. 테이블의 중앙에 놓인 마이크 앞에 서서, 내가 남북대표라면 어떤 합의를 하고 싶은지 생각해봅시다.\n(예: 이산가족 상봉, DMZ 숲 관리 및 산불 끄기 협력, 대북/대남 확성기 운영 조정 등)\n\n3. 판문점에 있는 여러 건축물 중 가장 기억에 남는 곳 앞에서 인증샷을 남겨봅시다.",
      externalLinks: [
        {
          url: "https://universe.go.kr/main",
          label: "🕊️ 통일부 DMZ 메타버스 (판문점 견학)",
          openInNewTab: true
        }
      ],
      editableContent: false
    },
    {
      id: "step-4",
      title: "🖼️ DMZ 온라인 전시회 방문하기",
      description: "구글 Arts & Culture에서 열린 DMZ 관련 전시회를 탐방하고 아이디어를 메모해봅시다",
      content: "최근에는 DMZ의 가치를 중심으로 한 여러 테마의 전시회가 개최되어 왔습니다. 아래 전시 검색 링크에 접속하여 관심 있는 전시회를 찾아보세요. 관심 가는 전시회를 2개 선택하여 자유롭게 탐방한 뒤, 본 전시가 미래 DMZ에 어떤 아이디어(건축, 예술, 행사 등)를 주었는지 간단히 메모해보세요.\n\n전시 테마 예시:\n1️⃣ 멈춘 시간의 기록: 역사의 현장\n2️⃣ 인간 없는 낙원: 생태 보고서\n3️⃣ 미래를 상상하다: 예술과 창작",
      externalLinks: [
        {
          url: "https://artsandculture.google.com/search/exhibit?q=비무장지대",
          label: "🔎 Google Arts & Culture - DMZ 전시 검색",
          openInNewTab: true
        }
      ],
      editableContent: false
    },
    {
      id: "step-5",
      title: "🎯 DMZ 미래 디자인하기",
      description: "AI 플랫폼을 활용해 미래 DMZ의 모습을 디자인하고 작품을 제작해봅시다",
      content: "1) 출품작 아이디어를 구체화한 뒤 이미지를 생성하고,\n2) 투닝 에디터(Tooning Editor) 등 생성형 AI 플랫폼을 사용해 최종 출품작을 완성해봅니다.\n\n아래 플랫폼을 참고하여 1~4단계에서 얻은 지식과 영감을 바탕으로 창의적인 작품(이미지, 포스터, 기획안 등)을 제작하고, 작품의 설명을 함께 작성하세요.\n\n(이미지를 만들 때는 채팅창의 '이미지' 기능을 사용해 주세요.)\n\n[AI 활용 출품 분야]\n1) 미래 건축물 디자인: DMZ의 역사·환경·평화 가치를 보호하고 재생할 수 있는 건축물을 구상해보세요.\n\n2) 평화 미술 작품: '생명/재생/통일'을 상징하는 시각 예술 작품을 제작해보세요.\n\n3) 미래 공연/행사 기획: DMZ의 상징성을 활용한 공연이나 행사를 기획하고, 포스터나 홍보물을 제작해보세요.\n\n(위 분야 중 하나를 선택해 출품작을 완성하고 작품 설명을 작성하세요.)",
      externalLinks: [
        {
          url: "https://gemini.google.com/gem/1eRAWkMTkInJrzBdngQgEuHXzBcq3e4pE?usp=sharing",
          label: "🖼️ Gemini - 이미지 생성 링크",
          openInNewTab: true
        },
        {
          url: "https://tooning.io/editor-information",
          label: "✏️ 투닝 에디터 (Tooning Editor) - 생성형 AI 편집기",
          openInNewTab: true
        }
      ],
      editableContent: false
    }
  ]
};