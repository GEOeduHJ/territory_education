# 🤖✨ AI와 함께하는 스마트 영토교육 플랫폼

> 인공지능 기술을 활용한 창의적이고 재미있는 영토교육 플랫폼입니다!  
> AI 챗봇과의 대화, 창작 활동, 시뮬레이션을 통해 우리나라의 소중한 영토를 더 깊이 이해할 수 있습니다.

## 🌟 주요 특징

- 🎯 **AI 기반 학습 경험**: 개인 맞춤형 키워드 학습과 AI 챗봇 상호작용
- 🎨 **창작 중심 교육**: 뮤직비디오, 굿즈 디자인, 발표 자료 제작
- 🌐 **외부 도구 연동**: Suno, Gemini, Google AI Studio, CapCut, Padlet 등
- 📱 **완전 반응형**: 모든 디바이스에서 최적화된 학습 경험
- 🎪 **게임화된 UI**: 이모지와 친근한 인터페이스로 학습 동기 부여

## 📚 학습 모듈 구성

### 🎵 모듈 1: AI 뮤직비디오 제작 (6단계)
- **1단계**: 키워드 입력 및 실시간 템플릿 생성
- **2단계**: AI 기반 캠페인송 생성 (Suno 연동)
- **3단계**: 이미지 생성 및 편집 (Gemini 연동)  
- **4단계**: 영상 제작 및 편집 (CapCut 연동)
- **5단계**: 완성작 편집 및 보완
- **6단계**: 작품 제출 및 공유 (Padlet 연동)

### 🛍️ 모듈 3: 독도 굿즈 디자인 & 상품 기획 (4단계)
- **1단계**: 독도 자율 학습 및 자료 수집
- **2단계**: AI 굿즈 디자인 생성 (Gemini 연동)
- **3단계**: 상품 설명서 제작 (Canva 템플릿)
- **4단계**: 최종 작품 제출 및 공유

### 🏛️ 모듈 5: 국제회의 시뮬레이션 (4단계)
- **1단계**: AI 뉴스 학습 (Google AI Studio 연동)
- **2단계**: AI 페르소나 챗봇과 대화 학습
- **3단계**: 회의 준비 자료 제작
- **4단계**: 모의 토론 참여 및 자료 공유

## 🛠 기술 스택

### Frontend
- **React 18** + **TypeScript** - 현대적인 컴포넌트 기반 개발
- **Tailwind CSS** - 효율적인 반응형 스타일링
- **React Router DOM** - SPA 라우팅

### 개발 도구
- **Vite** - 빠른 개발 서버 및 빌드
- **ESLint** + **TypeScript** - 코드 품질 관리
- **PostCSS** - CSS 전처리

### AI & 외부 서비스 연동
- **Suno AI** - 음악 생성
- **Google Gemini** - 이미지 생성 및 텍스트 처리
- **Google AI Studio** - 뉴스 학습 및 챗봇
- **CapCut** - 영상 편집
- **Padlet** - 작품 공유 플랫폼
- **Canva** - 디자인 템플릿

## � 빠른 시작

### 1. 저장소 클론 및 의존성 설치
```bash
git clone https://github.com/GEOeduHJ/territory_education.git
cd territory_education
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```
> 🌐 http://localhost:5173 에서 애플리케이션 확인

### 3. 프로덕션 빌드
```bash
npm run build
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/                    # React 컴포넌트
│   ├── HomePage.tsx              # 🏠 메인 랜딩 페이지
│   ├── ModuleCard.tsx            # 📇 모듈 선택 카드
│   ├── ModulePage.tsx            # 📖 모듈 상세 페이지
│   ├── TabNavigation.tsx         # 🔄 단계별 탭 네비게이션
│   ├── StepContent.tsx           # 📝 단계별 콘텐츠 렌더러
│   ├── KeywordInputForm.tsx      # ⌨️ 키워드 입력 폼
│   ├── TemplateContentRenderer.tsx # 📋 템플릿 렌더러
│   ├── FixedTemplateRenderer.tsx  # 📄 고정 템플릿 렌더러
│   └── ChatbotCardRenderer.tsx    # 🤖 챗봇 카드 렌더러
├── data/                         # 📊 데이터 관리
│   ├── modules.ts                # 모듈 메타데이터
│   └── modules/                  # 개별 모듈 데이터
│       ├── index.ts              # 모듈 로더
│       ├── module1.ts            # 🎵 뮤직비디오 모듈
│       ├── module2.ts            # 📝 개발 예정
│       ├── module3.ts            # 🛍️ 굿즈 디자인 모듈
│       ├── module4.ts            # 📝 개발 예정
│       ├── module5.ts            # 🏛️ 국제회의 모듈
│       └── module6.ts            # 📝 개발 예정
├── services/                     # 🔧 비즈니스 로직
│   ├── keywordController.ts      # 키워드 상태 관리
│   └── linkService.ts            # 외부 링크 및 콘텐츠 로딩
├── types/                        # 📋 TypeScript 타입 정의
│   └── index.ts                  # 모든 인터페이스 정의
├── App.tsx                       # 🎯 메인 애플리케이션
├── main.tsx                      # 🚪 진입점
└── index.css                     # 🎨 글로벌 스타일
```

## 🎛️ 주요 기능 상세

### 1. 키워드 기반 학습 시스템 (모듈 1)
- **실시간 템플릿 생성**: 사용자 입력 키워드로 동적 콘텐츠 생성
- **로컬 상태 관리**: 키워드 데이터 자동 저장 및 복원
- **Copy-to-Clipboard**: 생성된 템플릿 쉬운 복사 기능

### 2. 고정 템플릿 시스템 (모듈 3)
- **전문 프롬프트**: 굿즈 디자인을 위한 최적화된 AI 프롬프트
- **단계별 가이드**: 체계적인 디자인 프로세스 안내

### 3. AI 페르소나 챗봇 (모듈 5)
- **다양한 캐릭터**: 외교관, 기자, 학자 등 역할별 AI 봇
- **대화형 학습**: 실제와 같은 토론 및 인터뷰 경험

### 4. 외부 도구 완전 연동
- **새 탭 열기**: 모든 외부 링크 안전한 새 창에서 실행
- **보안 설정**: `noopener,noreferrer` 적용
- **사용자 추적**: 링크 클릭 로깅 및 분석 준비

## 🎨 UI/UX 특징

### 반응형 디자인
- **모바일 우선**: 작은 화면부터 설계
- **브레이크포인트**: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- **동적 레이아웃**: 화면 크기에 따른 최적 배치

### 접근성 (Accessibility)
- **키보드 네비게이션**: Tab, Arrow 키 완전 지원
- **ARIA 레이블**: 스크린 리더 호환성
- **색상 대비**: WCAG 가이드라인 준수

### 사용자 경험
- **로딩 상태**: skeleton UI 및 스피너
- **오류 처리**: 사용자 친화적 오류 메시지
- **진행률 표시**: 실시간 학습 진행 상황

## 🔧 개발자 가이드

### 새 모듈 추가하기
1. `src/data/modules/moduleX.ts` 생성
2. `ModuleData` 인터페이스 구현
3. `src/data/modules/index.ts`에 모듈 등록
4. 필요시 새로운 렌더러 컴포넌트 개발

### 커스텀 스타일링
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        territory: {
          primary: '#1e40af',
          secondary: '#3b82f6',  
          accent: '#60a5fa'
        }
      }
    }
  }
}
```

### 환경 변수
```bash
# .env
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-analytics-id
```

## � 배포 가이드

### Vercel (권장)
```bash
npm run build
npx vercel --prod
```

### Netlify
```bash
npm run build
# dist/ 폴더를 Netlify에 드래그 앤 드롭
```

### GitHub Pages
```bash
npm run build
# dist/ 폴더 내용을 gh-pages 브랜치에 푸시
```

## � 성능 최적화

- ⚡ **Vite 빌드**: 매우 빠른 개발 및 빌드 속도
- 📦 **코드 분할**: 모듈별 dynamic import
- 🎯 **Tree Shaking**: 사용하지 않는 코드 자동 제거
- 💾 **캐싱 전략**: 효율적인 브라우저 캐싱

## 🤝 기여 방법

1. **Fork** 이 저장소
2. **Feature 브랜치** 생성 (`git checkout -b feature/AmazingFeature`)
3. **변경사항 커밋** (`git commit -m 'Add some AmazingFeature'`)
4. **브랜치에 푸시** (`git push origin feature/AmazingFeature`)
5. **Pull Request** 생성

## � 라이선스

이 프로젝트는 교육 목적으로 제작되었으며, MIT 라이선스 하에 배포됩니다.

## 💡 향후 계획

- [ ] 🎮 **모듈 2, 4, 6** 개발 완성
- [ ] 📈 **학습 진도 추적** 시스템
- [ ] 🏆 **성취 배지** 시스템  
- [ ] 🌍 **다국어 지원** (영어, 중국어, 일본어)
- [ ] 📱 **PWA 변환** (오프라인 학습 지원)
- [ ] 🔔 **실시간 알림** 시스템

---

<div align="center">
  
**🏛️ 대한민국 영토교육을 더 재미있고 효과적으로! 🇰🇷**

</div>