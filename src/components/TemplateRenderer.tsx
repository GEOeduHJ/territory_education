import React, { useState } from 'react';
import { ModuleStep, KeywordData } from '../types';
import { KeywordController } from '../services/keywordController';
import { cleanUiText } from '../utils/uiText';

interface TemplateRendererProps {
  step: ModuleStep;
  onExternalLinkClick: (url: string) => void;
  mode: 'dynamic' | 'fixed';
  keywords?: KeywordData;
}

export const TemplateRenderer: React.FC<TemplateRendererProps> = ({ step, onExternalLinkClick, mode, keywords }) => {
  const [copySuccess, setCopySuccess] = useState('');

  const getTemplateContent = (): string => {
    if (mode === 'fixed') return step.fixedTemplateContent || step.content || '';
    if (step.templateContent && keywords) return KeywordController.replaceTemplatePlaceholders(step.templateContent, keywords);
    return step.content || '';
  };

  const templateContent = getTemplateContent();
  const hasAllKeywords = mode === 'dynamic' && keywords ? KeywordController.hasAllKeywords(keywords) : true;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(templateContent);
      setCopySuccess('복사되었습니다!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('복사에 실패했습니다.');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };

  return (
    <div className="content-column content-column--medium">
      {mode === 'dynamic' && !hasAllKeywords && (
        <aside className="callout callout--warning" role="status">
          <div>
            <h3>키워드를 먼저 입력해주세요.</h3>
            <p>1단계에서 키워드를 입력하면 개인화된 콘텐츠를 확인할 수 있습니다.</p>
          </div>
        </aside>
      )}

      <section className="template-panel mb-6" aria-labelledby="template-panel-title">
        <div className="panel-heading">
          <p className="content-eyebrow">AI와 함께 만들기</p>
          <h2 id="template-panel-title">{cleanUiText(step.title)}</h2>
          <p>{cleanUiText(step.description)}</p>
        </div>

        <div className="template-section">
          <div className="template-section__heading">
            <h3>{mode === 'dynamic' ? '생성된 프롬프트' : '프롬프트 템플릿'}</h3>
            <button type="button" onClick={copyToClipboard} className="button button--secondary template-copy-button">
              복사하기 <span aria-hidden="true">→</span>
            </button>
          </div>

          {copySuccess && <div className="form-alert form-alert--success" role="status" aria-live="polite">{copySuccess}</div>}

          {mode === 'fixed' && (
            <div className="content-block content-block--muted">
              <p className="rich-text">{cleanUiText(step.content)}</p>
            </div>
          )}

          <div className={`template-output ${mode === 'fixed' ? 'template-output--fixed' : ''}`}>
            <p className="rich-text">{templateContent}</p>
          </div>
        </div>

        {mode === 'dynamic' && hasAllKeywords && keywords && (
          <div className="keyword-summary">
            <h4>적용된 키워드</h4>
            <dl>
              <div><dt>지리적 위치</dt><dd>{keywords.keyword1}</dd></div>
              <div><dt>갈등 배경</dt><dd>{keywords.keyword2}</dd></div>
              <div><dt>현재 상황</dt><dd>{keywords.keyword3}</dd></div>
              <div><dt>해결 노력</dt><dd>{keywords.keyword4}</dd></div>
            </dl>
          </div>
        )}

        {(step.externalLinks || step.externalLink) && (
          <div className="next-action-section">
            <h4>{cleanUiText(step.actionLabel || '다음 활동')}</h4>
            {step.externalLinks && step.externalLinks.length > 0 && (
              <div className="next-action-list">
                {step.externalLinks.map((link, index) => {
                  const unavailable = link.url.includes('placeholder');
                  return (
                    <button
                      type="button"
                      key={index}
                      onClick={() => onExternalLinkClick(link.url)}
                      className={`button ${index === 0 ? 'button--primary' : 'button--secondary'} next-action-button ${unavailable ? 'button--disabled' : ''}`}
                      disabled={unavailable}
                    >
                      {cleanUiText(link.label)}
                      {!unavailable && link.openInNewTab && <span aria-hidden="true">↗</span>}
                    </button>
                  );
                })}
              </div>
            )}
            {step.externalLink && !step.externalLinks && (
              <button type="button" onClick={() => onExternalLinkClick(step.externalLink!.url)} className="button button--primary next-action-button">
                {cleanUiText(step.externalLink.label)}
                {step.externalLink.openInNewTab && <span aria-hidden="true">↗</span>}
              </button>
            )}
          </div>
        )}
      </section>

      {mode === 'dynamic' ? (
        <aside className="callout callout--neutral">
          <div>
            <h4>키워드를 수정할까요?</h4>
            <p>1단계로 돌아가 조사 내용을 다시 정리할 수 있습니다.</p>
          </div>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('navigateToKeywordInput'))}
            className="button button--secondary"
          >
            키워드 수정하기
          </button>
        </aside>
      ) : (
        <aside className="callout callout--tip">
          <div>
            <h4>사용 팁</h4>
            <p>프롬프트를 복사한 후 외부 사이트에 붙여넣어 사용하세요. 독도 관련 이미지를 함께 업로드하면 더 좋은 결과를 얻을 수 있습니다.</p>
          </div>
        </aside>
      )}
    </div>
  );
};
