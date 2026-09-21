import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { RegionResource } from '../types';
import 'leaflet/dist/leaflet.css';

// Leaflet 아이콘 문제 해결 (Vite 환경)
const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const iconShadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: iconUrl,
  shadowUrl: iconShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface DisputeMapProps {
  regions: RegionResource[];
}

const DisputeMap: React.FC<DisputeMapProps> = ({ regions }) => {
  // 지도 중심점 계산 (모든 마커의 평균 좌표)
  const centerLat = regions.reduce((sum, r) => sum + r.coordinates[0], 0) / regions.length || 35;
  const centerLng = regions.reduce((sum, r) => sum + r.coordinates[1], 0) / regions.length || 127;

  const [selectedDialogue, setSelectedDialogue] = useState<RegionResource | null>(null);

  return (
    <section className="map-panel" aria-labelledby="map-panel-title">
      <div className="map-panel__header">
        <p className="content-eyebrow">공간에서 확인하기</p>
        <h3 id="map-panel-title">세계 영토 분쟁 지역 지도</h3>
        <p>
          마커를 클릭하면 해당 지역의 자료를 확인할 수 있습니다. 카슈미르, 남중국해, 센카쿠/댜오위다오, 남쿠릴/북방영토, 나일강 연안국은 사례 분석용 대화문도 볼 수 있어요.
        </p>
      </div>
      
      <div className="relative" style={{ height: '600px' }}>
        <MapContainer
          center={[centerLat, centerLng]}
          zoom={3}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={true}
        >
          {/* Esri World Street Map - 영어 지명 지도 */}
          <TileLayer
            attribution='Tiles &copy; Esri - Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
            maxZoom={19}
          />
          
          {regions.map((region) => (
            <Marker
              key={region.id}
              position={region.coordinates}
            >
              <Popup>
                <div className="map-popup">
                  <h4>{region.name}</h4>
                  <p>{region.description}</p>
                  <div className="map-popup__actions">
                    {region.dialogue && (
                      <button
                        type="button"
                        onClick={() => setSelectedDialogue(region)}
                        className="button button--primary map-action-button"
                      >
                        대화문 보기
                      </button>
                    )}
                    <a
                      href={region.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--secondary map-action-button"
                    >
                      자료 보기 <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      <div className="map-panel__footer">
        <p>
          지도를 드래그하여 이동하고, 마우스 휠로 확대하거나 축소할 수 있습니다.
        </p>
      </div>

      {selectedDialogue && (
        <div
          className="dialog-backdrop"
          onClick={() => setSelectedDialogue(null)}
        >
          <div
            className="dialog-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dialog-card__header">
              <h3>{selectedDialogue.name} 대화문</h3>
              <button
                type="button"
                onClick={() => setSelectedDialogue(null)}
                className="dialog-close"
                aria-label="닫기"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="dialog-card__body">
              <p>
                {selectedDialogue.dialogue}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DisputeMap;
