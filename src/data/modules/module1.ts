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
      title: "키워드 입력",
      description: "캠페인 노래 제작을 위한 핵심 키워드를 입력하세요",
      content: "캠페인 노래 만들기를 위한 핵심 정보를 입력하세요. 각 항목에 적절한 키워드를 넣어주시면 다음 단계에서 자동으로 활용됩니다.",
      isKeywordInput: true,
      editableContent: false
    },
    {
      id: "step-2",
      title: "콘텐츠 생성 1단계",
      description: "입력한 키워드를 바탕으로 기본 콘텐츠를 확인하세요",
      content: "기본 콘텐츠",
      useKeywordTemplate: true,
      templateContent: "영토 분쟁을 사례로 캠페인 노래를 만들거야. 이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. 해결 방안으로는 [keyword3]이/가 필요해. [keyword4]",
      editableContent: true
    },
    {
      id: "step-3",
      title: "콘텐츠 생성 2단계",
      description: "키워드가 적용된 콘텐츠를 바탕으로 노래 가사를 구상하세요",
      content: "기본 콘텐츠",
      useKeywordTemplate: true,
      templateContent: "영토 분쟁을 사례로 캠페인 노래를 만들거야. 이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. 해결 방안으로는 [keyword3]이/가 필요해. [keyword4]",
      editableContent: true
    },
    {
      id: "step-4",
      title: "콘텐츠 생성 3단계",
      description: "노래의 멜로디와 구성을 계획하세요",
      content: "기본 콘텐츠",
      useKeywordTemplate: true,
      templateContent: "영토 분쟁을 사례로 캠페인 노래를 만들거야. 이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. 해결 방안으로는 [keyword3]이/가 필요해. [keyword4]",
      editableContent: true
    },
    {
      id: "step-5",
      title: "최종 완성",
      description: "캠페인 노래를 완성하고 공유하세요",
      content: "기본 콘텐츠",
      useKeywordTemplate: true,
      templateContent: "영토 분쟁을 사례로 캠페인 노래를 만들거야. 이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. 해결 방안으로는 [keyword3]이/가 필요해. [keyword4]",
      externalLink: {
        url: "https://example.com/step5",
        label: "완성된 캠페인 노래 공유하기",
        openInNewTab: true
      },
      editableContent: true
    }
  ]
};