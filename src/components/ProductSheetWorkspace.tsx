import React, { useState } from 'react';

interface ProductSheetValues {
  productName: string;
  oneLine: string;
  learningMessage: string;
}

const INITIAL_VALUES: ProductSheetValues = {
  productName: '',
  oneLine: '',
  learningMessage: ''
};

const SVG_FONT_FAMILY = 'Apple SD Gothic Neo, Noto Sans KR, Arial, sans-serif';
const MAX_IMAGE_SIZE = 8 * 1024 * 1024;

const escapeXml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const wrapText = (value: string, maxCharacters: number) => {
  const characters = Array.from(value.trim() || '내용을 입력해주세요.');
  const lines: string[] = [];
  for (let index = 0; index < characters.length; index += maxCharacters) {
    lines.push(characters.slice(index, index + maxCharacters).join(''));
  }
  return lines.slice(0, 4);
};

const svgTextLines = (
  value: string,
  x: number,
  y: number,
  maxCharacters: number,
  fontSize = 24,
  lineHeight = 34,
  fill = '#213746',
  fontWeight = 500
) => {
  const lines = wrapText(value, maxCharacters);
  return `<text x="${x}" y="${y}" font-family="${SVG_FONT_FAMILY}" font-size="${fontSize}" font-weight="${fontWeight}" fill="${fill}">${lines
    .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`)
    .join('')}</text>`;
};

const buildProductSheetSvg = (values: ProductSheetValues, productImage: string | null) => {
  const productName = values.productName.trim() || '독도 굿즈 이름';
  const oneLine = values.oneLine.trim() || '상품을 한 문장으로 소개해보세요.';
  const learningMessage = values.learningMessage.trim() || '학습 내용에서 발견한 독도의 의미를 적어보세요.';
  const imageMarkup = productImage
    ? `<image href="${escapeXml(productImage)}" x="797" y="118" width="506" height="356" preserveAspectRatio="xMidYMid meet" clip-path="url(#product-image-clip)" />`
    : `<rect x="797" y="118" width="506" height="356" rx="18" fill="#ebe5da" stroke="#c7b99e" stroke-width="2" stroke-dasharray="8 8" />
       <text x="1050" y="282" text-anchor="middle" font-family="${SVG_FONT_FAMILY}" font-size="18" font-weight="700" letter-spacing="3" fill="#7e7569">PRODUCT IMAGE</text>
       <text x="1050" y="316" text-anchor="middle" font-family="${SVG_FONT_FAMILY}" font-size="18" fill="#7e7569">이미지를 추가하면 여기에 표시됩니다</text>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="1100" viewBox="0 0 1400 1100">
  <defs>
    <linearGradient id="sheet-hero" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#102d40" />
      <stop offset="0.68" stop-color="#1a4b5c" />
      <stop offset="1" stop-color="#286f78" />
    </linearGradient>
    <linearGradient id="sheet-paper" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fffdf9" />
      <stop offset="1" stop-color="#f7f1e8" />
    </linearGradient>
    <filter id="sheet-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#102d40" flood-opacity="0.18" />
    </filter>
    <clipPath id="product-image-clip">
      <rect x="797" y="118" width="506" height="356" rx="18" />
    </clipPath>
  </defs>
  <rect width="1400" height="1100" fill="#e9e2d8" />
  <rect x="42" y="42" width="1316" height="1016" rx="22" fill="url(#sheet-paper)" filter="url(#sheet-shadow)" />
  <rect x="42" y="42" width="1316" height="500" rx="22" fill="url(#sheet-hero)" />
  <path d="M42 442 C250 372 380 522 590 454 S1000 374 1358 446 L1358 542 L42 542 Z" fill="#0c2434" opacity="0.34" />
  <text x="96" y="104" font-family="${SVG_FONT_FAMILY}" font-size="18" font-weight="700" letter-spacing="4" fill="#d9c18a">DOKDO GOODS / OBJECT 01</text>
  <text x="1286" y="104" text-anchor="end" font-family="${SVG_FONT_FAMILY}" font-size="16" font-weight="700" letter-spacing="2" fill="#c7e1dc">FIELD NOTE</text>
  ${svgTextLines(productName, 96, 190, 16, 56, 66, '#ffffff', 800)}
  ${svgTextLines(oneLine, 96, 364, 28, 22, 32, '#d8e7e6', 500)}
  <line x1="96" y1="438" x2="650" y2="438" stroke="#d9c18a" stroke-width="2" />
  <text x="96" y="480" font-family="${SVG_FONT_FAMILY}" font-size="15" font-weight="700" letter-spacing="2" fill="#d9c18a">LEARN / DESIGN / SHARE</text>
  <rect x="770" y="92" width="560" height="408" rx="26" fill="#f2ede4" stroke="#d9c18a" stroke-width="2" />
  ${imageMarkup}
  <text x="797" y="528" font-family="${SVG_FONT_FAMILY}" font-size="14" font-weight="700" letter-spacing="2" fill="#d9c18a">PRODUCT PORTRAIT</text>
  <text x="96" y="620" font-family="${SVG_FONT_FAMILY}" font-size="16" font-weight="800" letter-spacing="3" fill="#0f766e">THE STORY BEHIND THE OBJECT</text>
  <line x1="96" y1="648" x2="1304" y2="648" stroke="#d9cdbb" stroke-width="2" />
  <text x="96" y="708" font-family="${SVG_FONT_FAMILY}" font-size="14" font-weight="800" letter-spacing="2" fill="#0f766e">01 / THE IDEA</text>
  ${svgTextLines(learningMessage, 96, 748, 52, 28, 40, '#213746', 600)}
  <line x1="96" y1="934" x2="1304" y2="934" stroke="#d9cdbb" stroke-width="2" />
  <text x="96" y="984" font-family="${SVG_FONT_FAMILY}" font-size="15" font-weight="700" letter-spacing="2" fill="#667b85">AI 활용 영토교육 학습 모듈</text>
  <text x="1304" y="984" text-anchor="end" font-family="${SVG_FONT_FAMILY}" font-size="15" fill="#667b85">STUDENT EDITION · DOKDO</text>
</svg>`;
};

const readAndResizeImage = (file: File): Promise<string> => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = () => reject(new Error('파일을 읽지 못했습니다.'));
  reader.onload = () => {
    const image = new Image();
    image.onerror = () => reject(new Error('이미지를 불러오지 못했습니다.'));
    image.onload = () => {
      const maxWidth = 1200;
      const maxHeight = 900;
      const scale = Math.min(1, maxWidth / image.naturalWidth, maxHeight / image.naturalHeight);
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      const context = canvas.getContext('2d');
      if (!context) {
        reject(new Error('이미지 캔버스를 만들지 못했습니다.'));
        return;
      }
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/png'));
    };
    image.src = String(reader.result);
  };
  reader.readAsDataURL(file);
});

const ProductSheetWorkspace: React.FC = () => {
  const [values, setValues] = useState<ProductSheetValues>(INITIAL_VALUES);
  const [productImage, setProductImage] = useState<string | null>(null);
  const [productImageName, setProductImageName] = useState('');
  const [imageStatus, setImageStatus] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [downloadState, setDownloadState] = useState('');

  const canDownload = Boolean(values.productName.trim() && values.oneLine.trim() && values.learningMessage.trim());
  const valueOrPlaceholder = (value: string, placeholder: string) => value.trim() || placeholder;

  const updateValue = (field: keyof ProductSheetValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setDownloadState('');
  };

  const handleImageFile = async (file?: File) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setImageStatus('PNG, JPG, JPEG, WEBP 이미지 파일만 추가할 수 있습니다.');
      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      setImageStatus('이미지 용량은 8MB 이하로 선택해주세요.');
      return;
    }

    setImageStatus('이미지를 상품 설명서에 맞게 준비하고 있습니다.');
    try {
      const imageDataUrl = await readAndResizeImage(file);
      setProductImage(imageDataUrl);
      setProductImageName(file.name);
      setImageStatus('상품 이미지가 설명서에 삽입되었습니다.');
      setDownloadState('');
    } catch (error) {
      setImageStatus(error instanceof Error ? error.message : '이미지를 추가하지 못했습니다.');
    }
  };

  const handleImageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    void handleImageFile(event.target.files?.[0]);
    event.target.value = '';
  };

  const handleImageDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    void handleImageFile(event.dataTransfer.files?.[0]);
  };

  const clearProductImage = () => {
    setProductImage(null);
    setProductImageName('');
    setImageStatus('상품 이미지가 제거되었습니다.');
    setDownloadState('');
  };

  const handleDownload = () => {
    if (!canDownload) return;
    const svgBlob = new Blob([buildProductSheetSvg(values, productImage)], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    const image = new Image();

    image.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 1400;
        canvas.height = 1100;
        const context = canvas.getContext('2d');
        if (!context) throw new Error('canvas context unavailable');
        context.drawImage(image, 0, 0);

        const downloadLink = document.createElement('a');
        downloadLink.download = 'dokdo-product-brief.png';
        downloadLink.href = canvas.toDataURL('image/png');
        downloadLink.click();
        setDownloadState('상품 설명서를 PNG 이미지로 내려받았습니다.');
      } catch {
        setDownloadState('이미지를 만들지 못했습니다. 다시 시도해주세요.');
      } finally {
        URL.revokeObjectURL(svgUrl);
      }
    };

    image.onerror = () => {
      URL.revokeObjectURL(svgUrl);
      setDownloadState('이미지를 만들지 못했습니다. 다시 시도해주세요.');
    };
    image.src = svgUrl;
  };

  return (
    <div className="content-column content-column--wide product-sheet-workspace">
      <div className="panel-heading product-sheet-workspace__intro">
        <p className="content-eyebrow">OBJECT 01 · PRODUCT BRIEF</p>
        <h2>배운 내용을 하나의 상품 이야기로 완성하세요.</h2>
        <p>명품 브랜드의 제품 소개서처럼 상품 이미지와 학습에서 얻은 메시지를 한 장의 브리프로 정리합니다.</p>
      </div>

      <section className="product-sheet-form" aria-labelledby="product-sheet-form-title">
        <div className="workspace-section-heading">
          <div>
            <p className="content-eyebrow">01 · 상품 정보</p>
            <h3 id="product-sheet-form-title">상품의 핵심을 정리해보세요.</h3>
          </div>
          <span className="workspace-section-heading__note">필수 항목 3개 · 이미지는 선택</span>
        </div>

        <div className="product-sheet-fields">
          <div className="form-field">
            <label htmlFor="sheet-product-name" className="form-label">상품명 <span className="form-required" aria-hidden="true">*</span></label>
            <input id="sheet-product-name" className="form-input" value={values.productName} onChange={(event) => updateValue('productName', event.target.value)} placeholder="예: 바다를 품은 독도 에코백" />
          </div>
          <div className="form-field product-sheet-fields__full">
            <label htmlFor="sheet-one-line" className="form-label">한 줄 소개 <span className="form-required" aria-hidden="true">*</span></label>
            <textarea id="sheet-one-line" className="form-textarea" rows={3} value={values.oneLine} onChange={(event) => updateValue('oneLine', event.target.value)} placeholder="이 상품이 무엇을 전하는지 한 문장으로 적어보세요." />
          </div>
          <div className="form-field product-sheet-fields__full">
            <label htmlFor="sheet-learning-message" className="form-label">학습에서 얻은 메시지 <span className="form-required" aria-hidden="true">*</span></label>
            <textarea id="sheet-learning-message" className="form-textarea" rows={4} value={values.learningMessage} onChange={(event) => updateValue('learningMessage', event.target.value)} placeholder="독도의 위치, 기록, 생태, 사람과 관리 중 어떤 내용을 담았나요?" />
          </div>
        </div>
      </section>

      <section className="product-image-upload" aria-labelledby="product-image-upload-title">
        <div className="workspace-section-heading">
          <div>
            <p className="content-eyebrow">02 · 대표 이미지</p>
            <h3 id="product-image-upload-title">직접 만든 상품 이미지를 넣어보세요.</h3>
          </div>
          <span className="workspace-section-heading__note">PNG · JPG · WEBP / 최대 8MB</span>
        </div>

        <div
          className={`image-upload ${isDragging ? 'image-upload--dragging' : ''}`}
          onDragOver={(event) => { event.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleImageDrop}
        >
          <label htmlFor="product-sheet-image" className="image-upload__label">
            <span className="image-upload__mark" aria-hidden="true">＋</span>
            <span className="image-upload__copy">
              <strong>{productImage ? '다른 이미지로 교체하기' : '상품 이미지를 끌어 놓거나 선택하세요.'}</strong>
              <small>AI로 만든 굿즈 이미지, 직접 촬영한 사진 모두 사용할 수 있습니다.</small>
            </span>
            <span className="image-upload__action">파일 선택</span>
          </label>
          <input id="product-sheet-image" className="image-upload__input" type="file" accept="image/png,image/jpeg,image/webp" onChange={handleImageInput} />
        </div>

        {productImage && (
          <div className="image-upload__selected">
            <img src={productImage} alt="상품 설명서에 삽입할 선택 이미지" />
            <div>
              <strong>{productImageName}</strong>
              <span>설명서 오른쪽 상단 제품 이미지 영역에 반영됩니다.</span>
            </div>
            <button type="button" className="button button--text" onClick={clearProductImage}>이미지 제거</button>
          </div>
        )}
        {imageStatus && <p className="image-upload__status" role="status">{imageStatus}</p>}
      </section>

      <section className="product-sheet-output" aria-labelledby="product-sheet-output-title">
        <div className="workspace-section-heading">
          <div>
            <p className="content-eyebrow">03 · PRODUCT BRIEF 미리보기</p>
            <h3 id="product-sheet-output-title">브랜드 제품 소개서처럼 확인하세요.</h3>
          </div>
          <button type="button" className="button button--primary" onClick={handleDownload} disabled={!canDownload}>
            PNG로 내려받기 <span aria-hidden="true">↓</span>
          </button>
        </div>

        <div className="product-sheet-preview" role="img" aria-label="입력한 내용과 상품 이미지가 반영된 독도 굿즈 제품 소개서 미리보기">
          <div className="product-sheet-preview__paper">
            <div className="product-sheet-preview__hero">
              <div className="product-sheet-preview__hero-copy">
                <span className="product-sheet-preview__eyebrow">DOKDO GOODS / OBJECT 01</span>
                <strong>{valueOrPlaceholder(values.productName, '독도 굿즈 이름')}</strong>
                <p>{valueOrPlaceholder(values.oneLine, '상품을 한 문장으로 소개해보세요.')}</p>
                <span className="product-sheet-preview__signature">LEARN / DESIGN / SHARE</span>
              </div>
              <div className="product-sheet-preview__image-frame">
                {productImage ? <img src={productImage} alt="상품 설명서에 삽입된 대표 상품 이미지" /> : <span>이미지를 추가하면<br />여기에 표시됩니다</span>}
                <small>PRODUCT PORTRAIT</small>
              </div>
            </div>
            <div className="product-sheet-preview__manifest">
              <div className="product-sheet-preview__manifest-heading">
                <span>THE STORY BEHIND THE OBJECT</span>
                <span>STUDENT EDITION · DOKDO</span>
              </div>
              <div className="product-sheet-preview__manifest-grid">
                <article><span>01 / THE IDEA</span><p>{valueOrPlaceholder(values.learningMessage, '학습 내용에서 발견한 독도의 의미를 적어보세요.')}</p></article>
              </div>
            </div>
          </div>
        </div>
        {!canDownload && <p className="workspace-hint">상품명, 한 줄 소개, 학습 메시지를 입력하면 PNG로 내려받을 수 있습니다. 대표 이미지는 선택 항목입니다.</p>}
        {downloadState && <p className="form-alert form-alert--success" role="status">{downloadState}</p>}
      </section>
    </div>
  );
};

export default ProductSheetWorkspace;
