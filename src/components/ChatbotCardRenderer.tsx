import React from 'react';
import { ModuleStep } from '../types';

interface ChatbotCardRendererProps {
  step: ModuleStep;
  onExternalLinkClick: (url: string) => void;
}

/**
 * ChatbotCardRenderer - 챗봇 카드 렌더러 컴포넌트
 * 
 * Module 5의 Step 2에서 페르소나 챗봇들을 카드 형태로 표시합니다.
 */
export const ChatbotCardRenderer: React.FC<ChatbotCardRendererProps> = ({
  step,
  onExternalLinkClick
}) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* 메인 콘텐츠 */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h2>
          <p className="text-gray-600">{step.description}</p>
        </div>

        {/* 학습 내용 섹션 */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">📋 활동 안내</h3>
          <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {step.content}
              </p>
            </div>
          </div>
        </div>

        {/* 챗봇 카드들 */}
        {step.chatbotCards && step.chatbotCards.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🤖 페르소나 챗봇과 대화하기</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {step.chatbotCards.map((chatbot) => (
                <div
                  key={chatbot.id}
                  className={`bg-white border rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                    chatbot.isActive
                      ? 'border-blue-300 hover:shadow-lg hover:-translate-y-1'
                      : 'border-gray-300 opacity-60'
                  }`}
                >
                  {/* 프로필 이미지 */}
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-32 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                      <img
                        src={chatbot.profileImage}
                        alt={`${chatbot.name} 프로필`}
                        className="w-16 h-16 rounded-full object-cover"
                        onError={(e) => {
                          // 이미지 로드 실패 시 기본 아바타 표시
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-16 h-16 bg-gray-300 rounded-full items-center justify-center">
                        <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* 카드 내용 */}
                  <div className="p-4">
                    <h4 className="font-bold text-gray-800 text-lg mb-2">{chatbot.name}</h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{chatbot.description}</p>
                    
                    <button
                      onClick={() => chatbot.isActive && onExternalLinkClick(chatbot.url)}
                      disabled={!chatbot.isActive}
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                        chatbot.isActive
                          ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {chatbot.isActive ? `${chatbot.name}와 대화하기` : '준비 중'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 사용 안내 */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <h4 className="text-sm font-medium text-yellow-800">💡 대화 팁</h4>
            <p className="mt-1 text-sm text-yellow-700">
              각 페르소나와 자유롭게 대화하며 다양한 관점에서 경계 쟁점을 분석해보세요. 서로 다른 입장과 견해를 이해하는 것이 중요합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};