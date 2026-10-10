import React from 'react';
import { ModuleStep } from '../types';
import { cleanUiText } from '../utils/uiText';

interface InlineEmbeddedResourcesProps {
  resources: NonNullable<ModuleStep['embeddedResources']>;
  onExternalLinkClick: (url: string) => void;
}

const InlineEmbeddedResources: React.FC<InlineEmbeddedResourcesProps> = ({
  resources,
  onExternalLinkClick
}) => {
  if (resources.length === 0) return null;

  return (
    <section className="inline-embedded-resources" aria-label="사이트 안에서 보는 자료">
      {resources.map((resource) => (
        <article className="inline-embedded-resource" key={resource.id}>
          <header className="inline-embedded-resource__header">
            <h3>{cleanUiText(resource.title)}</h3>
            {resource.description && <p>{cleanUiText(resource.description)}</p>}
          </header>
          <div
            className="inline-embedded-resource__frame"
            style={{ aspectRatio: resource.aspectRatio || '16 / 9' }}
          >
            <iframe
              src={resource.embedUrl}
              title={cleanUiText(resource.title)}
              className="inline-embedded-resource__iframe"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow={resource.allow}
              allowFullScreen
            />
          </div>
          <footer className="inline-embedded-resource__footer">
            <p>화면이 표시되지 않으면 원본 자료를 새 창에서 열어 보세요.</p>
            <button
              type="button"
              className="button button--secondary"
              onClick={() => onExternalLinkClick(resource.url)}
            >
              원본 자료 새 창에서 열기
            </button>
          </footer>
        </article>
      ))}
    </section>
  );
};

export default InlineEmbeddedResources;
