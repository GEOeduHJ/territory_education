import { ModuleData } from '../../types';

// Module 3 데이터
export const MODULE_3_DATA: ModuleData = {
  id: "3",
  topic: "독도",
  title: "🛍️ 외로운 섬의 기억을 넘어, 우리 땅의 숨결을 입히다",
  description: "독도의 역사적·지리적 가치를 심층적으로 탐구하고, 생성형 AI를 활용하여 상품을 기획·제작하는 모듈",
  steps: [
    {
      id: "step-1",
      title: "📚 독도 주제 학습",
      description: "AI 챗봇과 대화하며 독도에 대해 학습해봅시다",
      content: "AI 챗봇과 대화하며 독도에 대한 역사, 지리, 문화적 의미 등을 학습해보세요! \n아래 버튼을 클릭하여 AI 챗봇과 대화를 시작하거나, 드롭다운에서 학년별 학습 자료를 선택하여 새 창에서 확인할 수 있습니다. \n굿즈 디자인에 활용할 수 있는 아이디어를 수집해보세요.",
      externalLinks: [
        {
          url: "https://gemini.google.com/gem/1X21Of9Ls1y00m5wv9qavlZ9HpPGMKOlo?usp=sharing",
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
      description: "🖼️ 업로드한 이미지를 활용하여 창의적인 굿즈 디자인을 생성해보세요",
      content: "1단계에서 학습한 내용을 바탕으로 독도 굿즈 디자인을 생성해보세요! \n독도 관련 이미지를 업로드하고, 아래 프롬프트를 사용하여 멋진 굿즈 디자인을 만들어보세요.\n1~3번 중 하나만 입력하거나 원하는 디자인을 직접 작성해보세요.",
      useFixedTemplate: true,
      fixedTemplateContent: "업로드한 이미지를 활용하여 다음과 같은 굿즈 디자인 이미지를 생성해주세요:\n1. 티셔츠나 후드티 등 의류 디자인\n2. 가방, 파우치 등 생활용품 디자인\n3. 핸드폰 케이스, 스티커 등 액세서리 디자인",
      externalLinks: [
        {
          url: "https://gemini.google.com/",
          label: "🎨 Gemini에서 굿즈 디자인 생성하기",
          openInNewTab: true
        }
        // ,
        // {
        //   url: "#design-guide-placeholder",
        //   label: "📋 상품 디자인 가이드 (추후 업로드 예정)",
        //   openInNewTab: true
        // }
      ],
      editableContent: false
    },
    {
      id: "step-3",
      title: "📄 상품 설명서 제작",
      description: "📝 디자인한 굿즈의 상품 설명서를 제작해보세요",
      content: "2단계에서 디자인한 굿즈의 매력적인 상품 설명서를 제작해보세요! \n아래 템플릿을 활용하여 독도의 가치를 널리 알릴 수 있는 상품 기획서를 만들어보세요. \n다양한 요소를 자유롭게 포함해주세요.",
      externalLinks: [
        {
          url: "https://docs.google.com/presentation/d/1GRUi29ADKSgtvLatn6yV-0fiygg4PRpS/edit?usp=drive_link&ouid=109701651086925137185&rtpof=true&sd=true",
          label: "📝 템플릿으로 상품 설명서 제작하기",
          openInNewTab: true
        }
        // {
        //   url: "#description-guide-placeholder",
        //   label: "📚 상품 설명서 제작 가이드 (추후 업로드 예정)",
        //   openInNewTab: true
        // }
      ],
      editableContent: false
    },
    {
      id: "step-4",
      title: "🏆 최종 작품 제출",
      description: "🎊 완성된 굿즈 디자인과 상품 설명서를 제출해보세요",
      content: "🎉 독도 굿즈 디자인과 상품 설명서가 완성되었습니다! \n아래 Padlet에 완성된 굿즈 디자인과 상품 기획서를 업로드하고 다른 학습자들의 창의적인 디자인 작품도 감상해보세요. \n서로의 아이디어에서 영감을 얻어보세요!",
      // externalLink: {
      //   url: "https://padlet.com/ghdwns00610/padlet-tzs4uog4dr84u5gi",
      //   label: "🎊 Padlet에 굿즈 디자인 제출하기",
      //   openInNewTab: true
      // },
      showEmbeddedPadlet: true,
      padletUrl: "https://padlet.com/ghdwns00610/padlet-tzs4uog4dr84u5gi",
      editableContent: false
    }
  ]
};