import React, { useEffect, useMemo, useState } from 'react';
import { LearningTheme, ModuleStep } from '../types';
import { loadDokdoTakeaways, resolveDokdoTakeaways, saveDokdoTakeaways } from '../utils/dokdoTakeaways';

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
  { id: 'location', title: '독도의 위치와 영역', summary: '', contentParagraphs: [] },
  { id: 'landform', title: '독도의 지형', summary: '', contentParagraphs: [] },
  { id: 'ecology', title: '독도의 생물과 해양 자원', summary: '', contentParagraphs: [] },
  { id: 'people', title: '독도 주민의 생활', summary: '', contentParagraphs: [] },
  { id: 'history', title: '독도의 역사와 명칭', summary: '', contentParagraphs: [] },
  { id: 'conflict', title: '독도의 분쟁과 갈등', summary: '', contentParagraphs: [] }
];

const GoodsDesignWorkspace: React.FC<GoodsDesignWorkspaceProps> = ({ step, onExternalLinkClick }) => {
  const themes = step.learningThemes?.length ? step.learningThemes : DEFAULT_THEMES;
  const [productType, setProductType] = useState(MOCKUP_ASSETS[0].label);
  const [themeId, setThemeId] = useState(themes[0].id);
  const interestNotes = useMemo(() => resolveDokdoTakeaways(loadDokdoTakeaways(), themes), [themes]);
  const [learningNote, setLearningNote] = useState('');
  const [messageDesignPlan, setMessageDesignPlan] = useState('');
  const [visualDirection, setVisualDirection] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  useEffect(() => {
    saveDokdoTakeaways(interestNotes);
  }, [interestNotes]);

  const selectedTheme = themes.find((theme) => theme.id === themeId) || themes[0];
  const prompt = useMemo(() => {
    const note = learningNote.trim() || '[1단계에서 학습한 내용을 입력하세요]';
    const designPlan = messageDesignPlan.trim() || '[학습 내용을 어떤 시각 요소와 구성으로 전달할지 입력하세요]';
    const direction = visualDirection.trim() || '[원하는 이미지의 분위기·색감·질감을 입력하세요]';

    return `독도 영토교육 학습 결과를 바탕으로 ${productType} 굿즈 디자인을 제작해주세요.

[연결한 학습 주제]
${selectedTheme.title}

[디자인에 표현할 학습 내용]
${note}

[메시지 디자인 방안]
${designPlan}

[디자인 스타일]
${direction}

[제작 조건]
- 첨부한 빈 ${productType} 목업의 제품 형태와 비율은 유지하고, 디자인 영역 안에만 그래픽을 배치해주세요.
- 메시지 디자인 방안에 따라 학습 내용을 정확하고 과장 없이 시각화해주세요. 독도와 직접 연결되는 요소를 우선합니다.
- 이미지에는 읽을 수 있는 문구·문자·숫자·로고를 넣지 말고, 시각 요소만으로 학습 내용을 표현해주세요.
- 목업 이미지, 손, 사람, 추가 제품을 새로 만들지 말고 완성된 ${productType} 한 개만 보여주세요.`;
  }, [learningNote, messageDesignPlan, productType, selectedTheme.title, visualDirection]);

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
      <p className="goods-workspace__intro-note">
        1단계에서 추가한 관심 내용을 참고하되, 프롬프트에는 필요한 내용을 직접 작성해보세요. 선택한 문장은 자동으로 입력되지 않습니다.
      </p>

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

      <section className="learning-interest-reference" aria-labelledby="learning-interest-reference-title">
        <div className="learning-interest-reference__heading">
          <div>
            <p className="content-eyebrow">1단계에서 고른 문장</p>
            <h3 id="learning-interest-reference-title">내가 관심있어한 내용</h3>
          </div>
          <p>프롬프트에 자동으로 들어가지 않아요. 참고해서 디자인에 담을 내용을 직접 작성해보세요.</p>
        </div>
        {interestNotes.length > 0 ? (
          <ul className="learning-interest-reference__list">
            {interestNotes.map((item) => (
              <li key={item.id}>
                <strong>{item.themeTitle}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="learning-interest-reference__empty">아직 추가한 내용이 없습니다. 1단계에서 관심 내용을 추가하면 여기에 표시됩니다.</p>
        )}
      </section>

      <section className="prompt-builder" aria-labelledby="goods-prompt-title">
        <div className="workspace-section-heading">
          <div>
            <p className="content-eyebrow">02 · 디자인 프롬프트 구성</p>
            <h3 id="goods-prompt-title">배운 내용을 나만의 디자인 언어로 작성해보세요.</h3>
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
            <label htmlFor="goods-learning-note" className="form-label">디자인에 표현할 학습 내용</label>
            <p className="goods-prompt-form__hint" id="goods-learning-note-hint">1단계에서 배운 내용 중 굿즈에 담고 싶은 핵심을 적어보세요.</p>
            <textarea
              id="goods-learning-note"
              className="form-textarea"
              aria-describedby="goods-learning-note-hint"
              value={learningNote}
              onChange={(event) => setLearningNote(event.target.value)}
              placeholder="예: 동도와 서도, 89개의 바위섬으로 이루어진 독도의 모습을 알리고 싶다."
              rows={5}
            />
          </div>

          <div className="form-field goods-prompt-form__full">
            <label htmlFor="goods-message-design-plan" className="form-label">메시지 디자인 방안</label>
            <p className="goods-prompt-form__hint" id="goods-message-design-plan-hint">학습 내용을 어떤 그림·상징·배치로 전달할지 구상해보세요.</p>
            <textarea
              id="goods-message-design-plan"
              className="form-textarea"
              aria-describedby="goods-message-design-plan-hint"
              value={messageDesignPlan}
              onChange={(event) => setMessageDesignPlan(event.target.value)}
              placeholder="예: 동도와 서도의 실루엣을 중심에 두고, 두 섬 사이의 가까운 거리를 이어지는 선으로 표현한다."
              rows={4}
            />
          </div>

          <div className="form-field goods-prompt-form__full">
            <label htmlFor="goods-visual-direction" className="form-label">디자인 스타일 <span className="form-label__optional">선택</span></label>
            <p className="goods-prompt-form__hint" id="goods-visual-direction-hint">이미지의 전체적인 분위기, 색감, 질감 등을 적어보세요.</p>
            <input
              id="goods-visual-direction"
              className="form-input"
              aria-describedby="goods-visual-direction-hint"
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
