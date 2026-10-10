import React from 'react';
import { ModuleStep } from '../types';
import { cleanUiText } from '../utils/uiText';

type ImageCarouselData = NonNullable<ModuleStep['imageCarousel']>;
type CarouselSlide = ImageCarouselData['slides'][number];

interface Module5ImageCarouselProps {
  carousel: ImageCarouselData;
}

const Module5ImageCarousel: React.FC<Module5ImageCarouselProps> = ({ carousel }) => {
  const hasGuideCaptions = carousel.slides.some((slide) => Boolean(slide.caption));
  const hasExplanations = carousel.slides.some((slide) => Boolean(slide.explanation?.length));
  const slides: CarouselSlide[] = carousel.slides.length > 0
    ? carousel.slides
    : Array.from({ length: Math.max(1, carousel.placeholderCount ?? 1) }, (_, index) => ({
        id: `placeholder-${index + 1}`
      }));
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [revealedIds, setRevealedIds] = React.useState<Set<string>>(() => new Set());
  const currentIndex = activeIndex % slides.length;
  const activeSlide = slides[currentIndex];
  const carouselId = `module5-carousel-${carousel.title.replace(/[^a-zA-Z0-9가-힣]/g, '-')}`;

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + slides.length) % slides.length);
  };

  const toggleReveal = (id: string) => {
    setRevealedIds((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (slides.length < 2) return;
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.closest('.module5-image-carousel__arrow')) return;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1);
    }
  };

  return (
    <section
      className="module5-image-carousel"
      aria-labelledby={carouselId}
      onKeyDown={handleKeyDown}
    >
      <div className="module5-image-carousel__heading">
        <div>
          <p className="module5-image-carousel__eyebrow">이미지 자료</p>
          <h3 id={carouselId}>
            {cleanUiText(carousel.title)}
          </h3>
        </div>
        {carousel.description && <p>{cleanUiText(carousel.description)}</p>}
      </div>

      <div className="module5-image-carousel__stage">
        <button
          type="button"
          className="module5-image-carousel__arrow module5-image-carousel__arrow--previous"
          aria-label="이전 이미지 보기"
          onClick={() => move(-1)}
          disabled={slides.length < 2}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <figure
          className={`module5-image-carousel__frame ${hasGuideCaptions ? 'module5-image-carousel__frame--guided' : ''}`}
          style={carousel.aspectRatio ? { aspectRatio: carousel.aspectRatio } : undefined}
        >
          {activeSlide?.src ? (
            <img
              key={activeSlide.id}
              src={activeSlide.src}
              alt={cleanUiText(activeSlide.alt || `${carousel.title} ${currentIndex + 1}번째 이미지`)}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="module5-image-carousel__placeholder" role="img" aria-label={`${currentIndex + 1}번째 이미지 업로드 대기`}>
              <span className="module5-image-carousel__placeholder-mark" aria-hidden="true">
                <svg viewBox="0 0 32 32">
                  <rect x="4.5" y="6.5" width="23" height="19" rx="3" />
                  <circle cx="12" cy="13" r="2" />
                  <path d="m7 23 6.5-6 4.5 4 3.5-3 4.5 4" />
                </svg>
              </span>
              <strong>이미지 업로드 대기</strong>
              <span>이미지가 등록되면 이 컷에서 확인해 보세요.</span>
            </div>
          )}
        </figure>

        <button
          type="button"
          className="module5-image-carousel__arrow module5-image-carousel__arrow--next"
          aria-label="다음 이미지 보기"
          onClick={() => move(1)}
          disabled={slides.length < 2}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {activeSlide?.caption && (
        <div className="module5-image-carousel__guide" aria-live="polite" aria-atomic="true">
          <span className="module5-image-carousel__guide-step">안내 {currentIndex + 1}</span>
          <p>{cleanUiText(activeSlide.caption)}</p>
        </div>
      )}

      {hasExplanations && activeSlide?.explanation && (
        <section
          className="module5-image-carousel__explanation"
          aria-labelledby={`${carouselId}-explanation-title`}
        >
          <header className="module5-image-carousel__explanation-heading">
            <div>
              <p className="module5-image-carousel__eyebrow">장면 읽기</p>
              <h4 id={`${carouselId}-explanation-title`} aria-live="polite" aria-atomic="true">
                {currentIndex + 1}컷 설명
              </h4>
            </div>
            <p>가려진 핵심 표현을 눌러 내용을 확인해 보세요.</p>
          </header>
          <ul className="module5-image-carousel__explanation-list">
            {activeSlide.explanation.map((paragraph, paragraphIndex) => (
              <li key={`${activeSlide.id}-explanation-${paragraphIndex}`}>
                {paragraph.map((part, partIndex) => {
                  if (!part.revealable || !part.id) {
                    return <React.Fragment key={partIndex}>{part.text}</React.Fragment>;
                  }

                  const revealId = `${activeSlide.id}:${part.id}`;
                  const isRevealed = revealedIds.has(revealId);

                  return (
                    <span
                      key={partIndex}
                      className={`theme-learning__cloze ${isRevealed ? 'theme-learning__cloze--revealed' : ''}`}
                    >
                      <button
                        type="button"
                        className="theme-learning__reveal"
                        aria-expanded={isRevealed}
                        aria-label={isRevealed ? `핵심 내용 ${part.text} 다시 가리기` : '클릭해서 내용 확인'}
                        onClick={() => toggleReveal(revealId)}
                      >
                        {isRevealed ? part.text : '클릭해서 내용 확인'}
                      </button>
                    </span>
                  );
                })}
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="module5-image-carousel__footer">
        <div className="module5-image-carousel__progress" aria-hidden="true">
          {slides.map((slide, index) => (
            <span
              key={slide.id}
              className={index === currentIndex ? 'is-active' : ''}
            />
          ))}
        </div>
        <p className="module5-image-carousel__counter" aria-label={`현재 이미지 ${currentIndex + 1} / ${slides.length}`}>
          {currentIndex + 1} <span>/</span> {slides.length}
        </p>
      </div>
    </section>
  );
};

export default Module5ImageCarousel;
