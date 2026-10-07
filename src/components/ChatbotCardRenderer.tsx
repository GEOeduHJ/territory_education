import React from 'react';
import { ModuleStep } from '../types';
import { cleanUiText } from '../utils/uiText';

interface ChatbotCardRendererProps {
  step: ModuleStep;
  onExternalLinkClick: (url: string) => void;
}

/**
 * Module 5의 페르소나 챗봇 선택 화면
 */
export const ChatbotCardRenderer: React.FC<ChatbotCardRendererProps> = ({
  step,
  onExternalLinkClick
}) => {
  return (
    <div className="content-column content-column--wide">
      <section className="chatbot-panel mb-6" aria-labelledby="chatbot-panel-title">
        <div className="activity-section">
          <h3 id="chatbot-panel-title">활동 안내</h3>
          <div className="content-block content-block--accent">
            <p className="rich-text">{cleanUiText(step.content)}</p>
          </div>
        </div>

        {step.chatbotCards && step.chatbotCards.length > 0 && (
          <div className="activity-section">
            <div className="activity-section__heading">
              <h3>페르소나 챗봇과 대화하기</h3>
              <p>서로 다른 입장을 비교하며 쟁점을 다시 바라보세요.</p>
            </div>
            <div className="chatbot-grid">
              {step.chatbotCards.map((chatbot) => (
                <article
                  key={chatbot.id}
                  className={`chatbot-card ${chatbot.isActive ? '' : 'chatbot-card--inactive'}`}
                >
                  <div className="chatbot-card__media">
                    <div className="chatbot-card__avatar">
                      <img
                        src={chatbot.profileImage}
                        alt={`${cleanUiText(chatbot.name)} 프로필`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.classList.add('is-hidden');
                          target.nextElementSibling?.classList.remove('is-hidden');
                        }}
                      />
                      <span className="chatbot-card__avatar-fallback is-hidden" aria-hidden="true">
                        {cleanUiText(chatbot.name).slice(0, 1)}
                      </span>
                    </div>
                  </div>

                  <div className="chatbot-card__body">
                    <h4>{cleanUiText(chatbot.name)}</h4>
                    <p>{cleanUiText(chatbot.description)}</p>
                    <button
                      type="button"
                      onClick={() => chatbot.isActive && onExternalLinkClick(chatbot.url)}
                      disabled={!chatbot.isActive}
                      className={`button button--primary chatbot-card__button ${!chatbot.isActive ? 'button--disabled' : ''}`}
                    >
                      {chatbot.isActive
                        ? '새 창에서 대화하기'
                        : '준비 중'}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      <aside className="callout callout--tip">
        <div>
          <h4>대화 팁</h4>
          <p>각 페르소나와 자유롭게 대화하며 다양한 관점에서 경계 쟁점을 분석해보세요.</p>
        </div>
      </aside>
    </div>
  );
};
