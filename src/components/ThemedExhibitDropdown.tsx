import React, { useState } from 'react';
import { DropdownResource } from '../types';

interface ThemedExhibitDropdownProps {
  resources: DropdownResource[];
}

const ThemedExhibitDropdown: React.FC<ThemedExhibitDropdownProps> = ({ resources }) => {
  const [selected, setSelected] = useState<DropdownResource | null>(resources[0] || null);

  const openSelected = () => {
    if (selected) {
      window.open(selected.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden p-6">
      <div className="mb-4">
        <h4 className="text-md font-semibold text-gray-900 mb-2">전시 작품 선택</h4>
        <p className="text-sm text-gray-600 mb-3">선택한 전시 작품을 새 창에서 열어 자세히 살펴보세요.</p>
        <div className="flex gap-3">
          <select
            className="flex-1 p-3 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer"
            value={selected?.id || ''}
            onChange={(e) => {
              const res = resources.find(r => r.id === e.target.value);
              setSelected(res || null);
            }}
          >
            {resources.map(r => (
              <option key={r.id} value={r.id}>{r.label}</option>
            ))}
          </select>
          <button
            onClick={openSelected}
            className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            새 창에서 열기
          </button>
        </div>
      </div>
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <p className="text-sm text-blue-800">💡 <strong>TIP:</strong> 전시 작품을 선택한 뒤 "새 창에서 열기" 버튼을 눌러 상세 페이지를 확인하세요.</p>
      </div>
    </div>
  );
};

export default ThemedExhibitDropdown;
