import React, { useState } from 'react';

interface PromptInputBoxProps {
  label?: string;
  placeholder?: string;
}

/**
 * PromptInputBox - 학생이 가이드를 참고해 직접 프롬프트를 작성하고 복사할 수 있는 입력 칸
 */
export const PromptInputBox: React.FC<PromptInputBoxProps> = ({
  label = '✏️ 우리 모둠 프롬프트 작성하기',
  placeholder
}) => {
  const [value, setValue] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = async () => {
    if (!value.trim()) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopySuccess('복사되었습니다!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('복사에 실패했습니다.');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-medium text-gray-900">{label}</h3>
        <button
          type="button"
          onClick={handleCopy}
          disabled={!value.trim()}
          className={`inline-flex items-center px-3 py-1.5 text-sm rounded-lg transition-colors focus:ring-4 ${
            value.trim()
              ? 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-200'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          프롬프트 복사
        </button>
      </div>

      {copySuccess && (
        <div className="mb-3 p-2 bg-green-100 border border-green-200 rounded text-green-800 text-sm">
          {copySuccess}
        </div>
      )}

      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        rows={8}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-y text-gray-800"
      />
    </div>
  );
};

export default PromptInputBox;
