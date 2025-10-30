import { ModuleData } from '../../types';

// Module 3 데이터
export const MODULE_3_DATA: ModuleData = {
  id: "3",
  title: "🛍️ 독도 굿즈 디자인 및 상품 기획",
  description: "독도에 대한 학습을 바탕으로 창의적인 굿즈를 디자인하고 상품 기획서를 제작하는 모듈입니다",
  steps: [
    {
      id: "step-1",
      title: "📚 독도 주제 학습",
      description: "🏝️ AI 챗봇과 대화하며 독도에 대해 학습해봅시다",
      content: "🤖 AI 챗봇과 대화하며 독도에 대한 역사, 지리, 문화적 의미 등을 학습해보세요! 아래 버튼을 클릭하여 AI 챗봇과 대화를 시작하거나, 드롭다운에서 학년별 학습 자료를 선택하여 새 창에서 확인할 수 있습니다. 굿즈 디자인에 활용할 수 있는 아이디어를 수집해보세요. 📖",
      externalLinks: [
        {
          url: "https://gemini.google.com/gem/cd753540688f",
          label: "🤖 AI 챗봇과 독도 학습하기",
          openInNewTab: true
        }
      ],
      showResourceDropdown: true,
      dropdownResources: [
        {
          id: "resource-1",
          label: "📚 초등 3-4학년용",
          url: "http://contents.nahf.or.kr/eddokViewer/contens.do?viewType=Elementary34&levelId=eddok.d_0001"
        },
        {
          id: "resource-2",
          label: "📚 초등학생",
          url: "http://contents.nahf.or.kr/eddokViewer/contens.do?viewType=Elementary&levelId=eddok.d_0002"
        },
        {
          id: "resource-3",
          label: "📚 중학생",
          url: "http://contents.nahf.or.kr/eddokViewer/contens.do?viewType=Elementary&levelId=eddok.d_0003"
        },
        {
          id: "resource-4",
          label: "📚 고등학생",
          url: "http://contents.nahf.or.kr/eddokViewer/contens.do?viewType=Elementary&levelId=eddok.d_0004"
        }
      ],
      editableContent: false
    },
    {
      id: "step-2",
      title: "🎨 독도 굿즈 디자인 생성",
      description: "🖼️ 독도 이미지를 활용하여 창의적인 굿즈 디자인을 생성해보세요",
      content: "🎯 1단계에서 학습한 내용을 바탕으로 독도 굿즈 디자인을 생성해보세요! 웹에서 찾은 독도 관련 이미지를 Gemini에 업로드하고, 아래 프롬프트를 사용하여 멋진 의류와 굿즈 디자인을 만들어보세요. 🎪",
      useFixedTemplate: true,
      fixedTemplateContent: "🏝️ 업로드한 독도 이미지를 참고하여 다음과 같은 굿즈 디자인을 생성해주세요:\n\n1. 🎽 티셔츠나 후드티 등 의류 디자인\n2. 🎒 가방, 파우치 등 생활용품 디자인\n3. 📱 핸드폰 케이스, 스티커 등 액세서리 디자인\n\n✨ 독도의 아름다운 자연경관과 역사적 의미를 담아 젊은 세대가 자랑스럽게 사용할 수 있는 세련되고 트렌디한 디자인으로 만들어주세요. 대한민국의 영토임을 자연스럽게 알릴 수 있는 요소도 포함해주세요.",
      externalLinks: [
        {
          url: "https://gemini.google.com/",
          label: "🎨 Gemini에서 굿즈 디자인 생성하기",
          openInNewTab: true
        },
        {
          url: "#design-guide-placeholder",
          label: "📋 상품 디자인 가이드 (추후 업로드 예정)",
          openInNewTab: true
        }
      ],
      editableContent: false
    },
    {
      id: "step-3",
      title: "📄 상품 설명서 제작",
      description: "📝 디자인한 굿즈의 상품 설명서를 제작해보세요",
      content: "📋 2단계에서 디자인한 굿즈의 매력적인 상품 설명서를 제작해보세요! Canva 템플릿을 활용하여 전문적이고 눈에 띄는 상품 기획서를 만들어보세요. 타겟 고객, 가격, 특징 등을 포함해주세요. ✨",
      externalLinks: [
        {
          url: "https://www.canva.com/design/DAGz8lNujXM/ZJvBjNrSA15P519Pt0zcBw/edit?utm_content=DAGz8lNujXM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
          label: "📝 Canva 템플릿으로 상품 설명서 제작하기",
          openInNewTab: true
        },
        {
          url: "#description-guide-placeholder",
          label: "📚 상품 설명서 제작 가이드 (추후 업로드 예정)",
          openInNewTab: true
        }
      ],
      editableContent: false
    },
    {
      id: "step-4",
      title: "🏆 최종 작품 제출",
      description: "🎊 완성된 굿즈 디자인과 상품 설명서를 제출해보세요",
      content: "🎉 축하합니다! 독도 굿즈 디자인과 상품 설명서가 완성되었습니다! 아래 Padlet에 완성된 굿즈 디자인과 상품 기획서를 업로드하고 다른 학습자들의 창의적인 디자인 작품도 감상해보세요. 서로의 아이디어에서 영감을 얻어보세요! 🌟",
      externalLink: {
        url: "https://padlet.com/ghdwns00610/padlet-tzs4uog4dr84u5gi",
        label: "🎊 Padlet에 굿즈 디자인 제출하기",
        openInNewTab: true
      },
      showEmbeddedPadlet: true,
      padletUrl: "https://padlet.com/ghdwns00610/padlet-tzs4uog4dr84u5gi",
      editableContent: false
    }
  ]
};