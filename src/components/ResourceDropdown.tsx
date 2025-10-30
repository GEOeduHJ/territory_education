import React, { useState } from 'react';
import { DropdownResource } from '../types';

interface ResourceDropdownProps {
  resources: DropdownResource[];
}

const ResourceDropdown: React.FC<ResourceDropdownProps> = ({ resources }) => {
  const [selectedUrl, setSelectedUrl] = useState(resources[0]?.url || '');

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-3">
          📚 학습 자료 선택
        </h3>
        <select
          className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors cursor-pointer"
          value={selectedUrl}
          onChange={(e) => setSelectedUrl(e.target.value)}
        >
          {resources.map((resource) => (
            <option key={resource.id} value={resource.url}>
              {resource.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="relative" style={{ height: '800px' }}>
        <iframe
          src={selectedUrl}
          title="학습 자료"
          className="w-full h-full border-0"
          allow="fullscreen"
          loading="lazy"
        />
      </div>
      
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          💡 TIP: 드롭다운 메뉴에서 다른 자료를 선택하면 바로 확인할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default ResourceDropdown;
