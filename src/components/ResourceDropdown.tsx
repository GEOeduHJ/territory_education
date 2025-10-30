import React, { useState } from 'react';
import { DropdownResource } from '../types';

interface ResourceDropdownProps {
  resources: DropdownResource[];
}

const ResourceDropdown: React.FC<ResourceDropdownProps> = ({ resources }) => {
  const [selectedResource, setSelectedResource] = useState<DropdownResource | null>(resources[0] || null);

  const handleOpenResource = () => {
    if (selectedResource) {
      window.open(selectedResource.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden p-6">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-900 mb-3">
          📚 학년별 학습 자료 선택
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          학년에 맞는 독도 학습 자료를 선택하고 새 창에서 확인하세요.
        </p>
        <div className="flex gap-3">
          <select
            className="flex-1 p-3 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors cursor-pointer"
            value={selectedResource?.id || ''}
            onChange={(e) => {
              const resource = resources.find(r => r.id === e.target.value);
              setSelectedResource(resource || null);
            }}
          >
            {resources.map((resource) => (
              <option key={resource.id} value={resource.id}>
                {resource.label}
              </option>
            ))}
          </select>
          <button
            onClick={handleOpenResource}
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 whitespace-nowrap"
            style={{ color: '#fff' }}
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
            학습 자료 보기
          </button>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <p className="text-sm text-blue-800">
          💡 <strong>TIP:</strong> 드롭다운에서 학년별 자료를 선택한 후 "새 창에서 열기" 버튼을 클릭하면 해당 학습 자료를 확인할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default ResourceDropdown;
