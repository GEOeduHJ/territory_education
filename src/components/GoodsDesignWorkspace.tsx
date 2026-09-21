import React, { useMemo, useState } from 'react';
import { LearningTheme, ModuleStep } from '../types';
import { cleanUiText } from '../utils/uiText';

interface GoodsDesignWorkspaceProps {
  step: ModuleStep;
  onExternalLinkClick: (url: string) => void;
}

interface MockupAsset {
  id: string;
  label: string;
  description: string;
  src: string;
  downloadName: string;
}

const MOCKUP_ASSETS: MockupAsset[] = [
  {
    id: 't-shirt',
    label: '티셔츠',
    description: '면 소재와 봉제선을 살린 실제 상품 촬영형 목업',
    src: '/mockups/dokdo-tshirt-photo.jpg',
    downloadName: 'dokdo-tshirt-photo-mockup.jpg'
  },
  {
    id: 'eco-bag',
    label: '에코백',
    description: '캔버스 조직과 손잡이 디테일을 살린 상품 목업',
    src: '/mockups/dokdo-eco-bag-photo.jpg',
    downloadName: 'dokdo-eco-bag-photo-mockup.jpg'
  },
  {
    id: 'phone-case',
    label: '핸드폰 케이스',
    description: '무광 폴리머 표면과 카메라 홀을 살린 제품 목업',
    src: '/mockups/dokdo-phone-case-photo.jpg',
    downloadName: 'dokdo-phone-case-photo-mockup.jpg'
  }
];

const DEFAULT_THEMES: LearningTheme[] = [
  { id: 'location', title: '위치와 지형', summary: '', content: '', points: [] },
  { id: 'records', title: '이름과 기록', summary: '', content: '', points: [] },
  { id: 'value', title: '생태와 가치', summary: '', content: '', points: [] },
  { id: 'people', title: '사람과 관리', summary: '', content: '', points: [] },
  { id: 'future', title: '알리기와 표현', summary: '', content: '', points: [] }
];

const GoodsDesignWorkspace: React.FC<GoodsDesignWorkspaceProps> = ({ step, onExternalLinkClick }) => {
  const themes = step.learningThemes?.length ? step.learningThemes : DEFAULT_THEMES;
  const [productType, setProductType] = useState(MOCKUP_ASSETS[0].label);
  const [themeId, setThemeId] = useState(themes[0].id);
  const [learningNote, setLearningNote] = useState('');
  const [visualDirection, setVisualDirection] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const selectedTheme = themes.find((theme) => theme.id === themeId) || themes[0];
  const prompt = useMemo(() => {
    const note = learningNote.trim() || '[학습한 내용을 입력하세요]';
    const direction = visualDirection.trim() || '[원하는 색감·스타일·배치 방향을 입력하세요]';

    return `독도 영토교육 학습 결과를 바탕으로 ${productType} 굿즈 디자인을 제작해주세요.

[연결한 학습 주제]
${selectedTheme.title}

[학습 내용]
${note}

[시각 방향]
${direction}

[제작 조건]
- 첨부한 빈 ${productType} 목업의 제품 형태와 비율은 유지하고, 디자인 영역 안에만 그래픽을 배치해주세요.
- 학습 내용에서 핵심 시각 요소를 1~2개 골라 과장 없이 표현해주세요. 독도의 지형, 바위, 생태, 기록 중 학습 내용과 직접 연결되는 요소를 우선합니다.
- 학생이 입력한 메시지가 읽히도록 글자 수와 대비를 조절하고, 실제 상품처럼 깔끔한 평면 디자인으로 완성해주세요.
- 목업 이미지, 손, 사람, 추가 제품을 새로 만들지 말고 완성된 ${productType} 한 개만 보여주세요.`;
  }, [learningNote, productType, selectedTheme.title, visualDirection]);

  const handleCopy = async () => {
    if (!learningNote.trim()) return;
    try {
      await navigator.clipboard.writeText(prompt);
      setCopySuccess('프롬프트가 복사되었습니다.');
      window.setTimeout(() => setCopySuccess(''), 2200);
    } catch {
      setCopySuccess('복사하지 못했습니다. 프롬프트를 직접 선택해 복사해주세요.');
    }
  };

  return (
    <div className="content-column content-column--wide goods-workspace">
      <div className="panel-heading">
        <p className="content-eyebrow">AI와 함께 시각화하기</p>
        <h2>{cleanUiText(step.title)}</h2>
        <p>빈 목업을 내려받고, 1단계에서 배운 내용을 입력하면 Gemini에서 바로 사용할 수 있는 디자인 프롬프트가 만들어집니다.</p>
      </div>

      <section className="mockup-panel" aria-labelledby="mockup-panel-title">
        <div className="workspace-section-heading">
          <div>
            <p className="content-eyebrow">01 · 목업 선택</p>
            <h3 id="mockup-panel-title">빈 디자인 틀을 내려받으세요.</h3>
          </div>
          <span className="workspace-section-heading__note">JPG 사진형 목업 · 실제 소재감</span>
        </div>
        <div className="mockup-grid">
          {MOCKUP_ASSETS.map((asset) => (
            <article key={asset.id} className="mockup-card">
              <div className="mockup-card__image">
                <img src={asset.src} alt={`${asset.label} 빈 상품 촬영형 목업`} width="1122" height="1402" loading="lazy" />
              </div>
              <div className="mockup-card__body">
                <h4>{asset.label}</h4>
                <p>{asset.description}</p>
                <a href={asset.src} download={asset.downloadName} className="button button--secondary mockup-card__download">
                  이미지 다운로드 <span aria-hidden="true">↓</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="prompt-builder" aria-labelledby="goods-prompt-title">
        <div className="workspace-section-heading">
          <div>
            <p className="content-eyebrow">02 · 학습 내용 입력</p>
            <h3 id="goods-prompt-title">배운 내용을 디자인 언어로 바꿔보세요.</h3>
          </div>
          <span className="workspace-section-heading__note">입력 내용은 프롬프트에 반영됩니다.</span>
        </div>

        <div className="goods-prompt-form">
          <div className="form-field">
            <label htmlFor="goods-product-type" className="form-label">만들 굿즈</label>
            <select id="goods-product-type" className="form-select" value={productType} onChange={(event) => setProductType(event.target.value)}>
              {MOCKUP_ASSETS.map((asset) => <option key={asset.id}>{asset.label}</option>)}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="goods-learning-theme" className="form-label">연결할 학습 주제</label>
            <select id="goods-learning-theme" className="form-select" value={themeId} onChange={(event) => setThemeId(event.target.value)}>
              {themes.map((theme) => <option key={theme.id} value={theme.id}>{theme.title}</option>)}
            </select>
          </div>

          <div className="form-field goods-prompt-form__full">
            <label htmlFor="goods-learning-note" className="form-label">학습 내용과 담고 싶은 메시지</label>
            <textarea
              id="goods-learning-note"
              className="form-textarea"
              value={learningNote}
              onChange={(event) => setLearningNote(event.target.value)}
              placeholder="예: 동도와 서도, 89개의 바위섬으로 이루어진 독도의 모습을 알리고 싶다."
              rows={5}
            />
          </div>

          <div className="form-field goods-prompt-form__full">
            <label htmlFor="goods-visual-direction" className="form-label">원하는 시각 방향 <span className="form-label__optional">선택</span></label>
            <input
              id="goods-visual-direction"
              className="form-input"
              value={visualDirection}
              onChange={(event) => setVisualDirection(event.target.value)}
              placeholder="예: 바다색과 따뜻한 주황색, 단순한 지도 그래픽, 초등학생도 이해하기 쉬운 분위기"
            />
          </div>
        </div>

        <div className="generated-prompt" aria-live="polite">
          <div className="generated-prompt__header">
            <div>
              <p className="content-eyebrow">03 · Gemini용 프롬프트</p>
              <h4>입력한 내용으로 생성된 프롬프트</h4>
            </div>
            <button type="button" className="button button--secondary" onClick={handleCopy} disabled={!learningNote.trim()}>
              {copySuccess ? '복사 완료' : '프롬프트 복사'} <span aria-hidden="true">→</span>
            </button>
          </div>
          <pre className="generated-prompt__output">{prompt}</pre>
          {copySuccess && <p className="form-alert form-alert--success" role="status">{copySuccess}</p>}
          <button type="button" className="button button--primary generated-prompt__gemini" onClick={() => onExternalLinkClick('https://gemini.google.com/')}>
            Gemini에서 디자인 만들기 <span aria-hidden="true">↗</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default GoodsDesignWorkspace;
