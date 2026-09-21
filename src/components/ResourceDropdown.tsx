import React, { useState } from 'react';
import { DropdownResource } from '../types';
import { cleanUiText } from '../utils/uiText';

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
    <section className="resource-panel" aria-labelledby="resource-panel-title">
      <div className="resource-panel__header">
        <p className="content-eyebrow">자료 살펴보기</p>
        <h3 id="resource-panel-title">학년별 학습 자료</h3>
        <p>학년에 맞는 독도 학습 자료를 선택하고 새 창에서 확인하세요.</p>
      </div>

      <div className="resource-panel__controls">
        <div className="form-field">
          <label htmlFor="resource-select" className="form-label">자료 선택</label>
          <select
            id="resource-select"
            className="form-select"
            value={selectedResource?.id || ''}
            onChange={(e) => {
              const resource = resources.find(r => r.id === e.target.value);
              setSelectedResource(resource || null);
            }}
          >
            {resources.map((resource) => (
              <option key={resource.id} value={resource.id}>
                {cleanUiText(resource.label)}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={handleOpenResource} className="button button--primary resource-open-button">
          학습 자료 보기 <span aria-hidden="true">↗</span>
        </button>
      </div>

      <div className="callout callout--info">
        <p>드롭다운에서 자료를 선택한 뒤 버튼을 누르면 새 창에서 확인할 수 있습니다.</p>
      </div>
    </section>
  );
};

export default ResourceDropdown;
