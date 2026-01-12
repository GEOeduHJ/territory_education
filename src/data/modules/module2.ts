import { ModuleData } from '../../types';

// Module 2 데이터
export const MODULE_2_DATA: ModuleData = {
  id: "2",
  topic: "해양 영토",
  title: "🌏 대한민국 해양 영토의 이해",
  description: "육지 영토와 해양 영토를 효율적으로 관리하는 방법을 학습하는 모듈입니다",
  steps: [
    {
      id: "step-1",
      title: "📍 육지 영토에서 해양 영토로",
      description: "대한민국 영토의 다양한 형태와 효율적인 관리 방법을 알아봅시다",
      content: "🌍 대한민국의 영토는 육지뿐만 아니라 해양 영토도 포함합니다. 육지 영토를 효율적으로 관리하기 위한 노력들을 살펴보세요!\n\n📌 <'육지 영토'를 효율적으로 관리하기 위한 노력들>\n\n1️⃣ 육지 면적의 확장\n   • 간척사업, 수면매립을 통해 육지면적을 확장\n   • 항만, 도로, 주거 및 산업 단지 건설\n\n2️⃣ 토지의 용도별 구분\n   • 국토의 계획 및 이용법에 따라 용도구역별로 토지 구분\n   • 장기적인 국토 발전 방향 제시\n\n❓ 생각해보기\n   국제 사회가 치열한 해양영토 확보 경쟁을 벌이는 '신 해양 시대'. 땅처럼 바다도 구역을 나누어 계획적으로 보호하고 관리하고 있을까요?",
      externalLinks: [
        {
          url: "https://kosis.kr/visual/koreaInWorld/korInWorldCountryIndex.do?itmId=1005&tabIdx=0&statJipyoId=7493&lang=ko",
          label: "📊 KOSIS 그래프 보기",
          openInNewTab: true
        },
        {
          url: "https://www.eum.go.kr/web/mp/mpMapDet.jsp#none",
          label: "🗺️ 토지e음 지도 확인",
          openInNewTab: true
        }
      ],
      editableContent: false
    },
    {
      id: "step-2",
      title: "🌊 해양영토의 개념",
      description: "해양영토를 구성하는 기본 개념들을 탐구해봅시다",
      content: "🗺️ 구글마이맵스 또는 구글어스에 접속하여, 해양영토를 구성하는 기본 개념들을 탐구해보세요!\n\n📌 주목할 개념\n• 영해 (Territorial Sea)\n• 통상기선 (Normal Baseline)\n• 직선기선 (Straight Baseline)\n• 배타적 경제수역 (Exclusive Economic Zone, EEZ)\n• 어업협정 (Fishery Agreement)\n\n💡 각 지도를 탐구하며 우리나라의 해양영토가 어떻게 구성되어 있는지 알아보세요!",
      externalLinks: [
        {
          url: "https://www.google.com/maps/d/u/0/edit?mid=1TThuATbsbX8aTEtVyY_38AAaiWBpl-o&usp=sharing",
          label: "📍 구글마이맵스 보기",
          openInNewTab: false
        },
        {
          url: "https://earth.google.com/web/@37.83192301,126.99258326,135.86552554a,1318240.48426017d,35y,-0h,0t,0r/data=CgRCAggBMigKJgokCiAxVFRodUFUYnNiWDhhVEV0VnlZXzM4QUFhaVdCcGwtbyACOgMKATBCAggASggIzKiLxQcQAQ?hl=ko&authuser=0",
          label: "🌍 구글어스 보기",
          openInNewTab: true
        }
      ],
      editableContent: false
    },
    {
      id: "step-3",
      title: "📡 해양 공간의 데이터 관리",
      description: "해양에서 발생하는 인간 활동을 데이터로 수집하고 분석하는 시스템을 살펴봅시다",
      content: "🔎 세계어업활동관측 시스템(Global Fishing Watch)과 유럽해양관측및데이터넷(EMODnet)을 통해 해양에서의 인간 활동 데이터를 관찰하고 분석해봅시다.\n\n1) Global Fishing Watch에서 우리나라를 찾아 전 세계 어획량과 비교해보세요. 우리나라를 포함한 중국, 스페인, 대만, 일본 5개 국가의 어획량은 전 세계 어획량의 약 85%를 차지하고 있어요!\n\n2) EMODnet Human Activities에서 해양에 기록된 다양한 인간 활동(어업, 항로, 에너지시설 등)을 살펴보세요.\n\n💬\n발전하는 기술과 함께 바다에서는 다양한 해양 자원을 활용한 해양 산업이 이루어지고 있습니다. 이처럼 바다에서의 여러 인간 활동은 바다를 보다 지속 가능하게 관리하기 위해 체계적으로 수집·분석·지도화될 필요가 있습니다. 아래 링크를 열어 실제 데이터를 직접 탐색해보세요.",
      externalLinks: [
        {
          url: "https://globalfishingwatch.org/map/",
          label: "🐟 Global Fishing Watch (세계어업활동관측 시스템)",
          openInNewTab: true
        },
        {
          url: "https://www.emodnet-humanactivities.eu",
          label: "🌐 EMODnet Human Activities",
          openInNewTab: true
        }
      ],
      editableContent: false
    },
    {
      id: "step-4",
      title: "🧭 해양 공간의 계획과 분석",
      description: "해양공간관리계획의 목적과 방법을 영상으로 보고, 해양공간지도를 이용해 탐구활동을 진행합니다",
      content: "1) [영상시청] '바다라고 다 같은 바다가 아니다?' 영상을 시청하여 '해양공간관리계획'의 시행 목적과 방법을 이해합니다.\n\n2) [탐구활동] '해양공간지도'에 접속하여 탐구지역 주변 해역이 어떻게 활용되고 있는지 조사해보세요.\n\n※ 활동지: 아래 첨부된 활동지를 이용하여 탐구 결과를 정리하세요. (활동지 파일은 프로젝트에 업로드되어 있으면 링크로 연결됩니다)",
      externalLinks: [
        {
          url: "https://www.youtube.com/watch?v=mQhqHQs4g7s",
          label: "▶ 영상시청: '바다라고 다 같은 바다가 아니다?'",
          openInNewTab: true
        },
        {
          url: "https://www.vadahub.go.kr/imap/index.do",
          label: "🗺️ 해양공간지도 (VADA Hub)",
          openInNewTab: true
        },
        {
          url: "https://drive.google.com/file/d/1JDv7omxUfbj3fgmYAxE41hx8apCZlYGo/view?usp=drive_link",
          label: "📥 활동지 다운로드 (Google Drive)",
          openInNewTab: true
        }
      ],
      // 활동지 파일은 아직 워크스페이스에서 발견되지 않음 — 필요 시 public/resources에 업로드해주세요
      editableContent: false
    },
    {
      id: "step-5",
      title: "🌅 해양영토의 가치와 미래",
      description: "미래 해양 시나리오를 생성하고 우리 역할을 고민해봅시다",
      content: "해양영토는 많은 가능성 덕분에 그 중요성이 주목되고 있으며, 앞으로도 역동적으로 변화할 수 있는 공간입니다. 앞으로 바다에 펼쳐질 수 있는 미래를 상상하며, 우리에게 필요한 역할과 자세를 생각해봅시다.\n\n——\n\n[미래 해양 시나리오] 생성:\n생성형 AI 기반으로 동작하는 시나리오가 이 화면에 출력됩니다. 아래의 양식에 따라 시나리오를 작성하고 (예: 현재 바다에서 '00구역'으로 지정된 해역에 '~~하는 상황'이 발생하면 이곳은 어떻게 달라질까요?) 생성된 시나리오를 검토해보세요.\n\n시나리오 예시)\n어민들의 생계가 유지되고 있는 '어업활동 보호구역'에 기후 변화로 인해 어획량이 감소하게 되었다. 그렇다면 이곳은 어떻게 달라지게 될까? 우리에게 어떤 역할과 자세가 필요할까?",
      showScenarioIframe: true,
      scenarioIframeUrl: "",
      editableContent: false
    }
  ]
};