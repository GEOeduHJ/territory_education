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
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">
          🗺️ 세계 영토 분쟁 지역 지도
        </h3>
        <p className="text-sm text-gray-600 mt-1">
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
            attribution='Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
            maxZoom={19}
          />
          
          {regions.map((region) => (
            <Marker
              key={region.id}
              position={region.coordinates}
            >
              <Popup>
                <div className="p-2">
                  <h4 className="font-bold text-lg mb-2">📍 {region.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{region.description}</p>
                  <div className="flex flex-col gap-2">
                    {region.dialogue && (
                      <button
                        type="button"
                        onClick={() => setSelectedDialogue(region)}
                        className="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-bold shadow"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        💬 대화문 보기
                      </button>
                    )}
                    <a
                      href={region.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-bold shadow"
                      style={{ color: '#fff' }}
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      자료 보기 (영상)
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          💡 TIP: 지도를 드래그하여 이동하고, 마우스 휠로 확대/축소할 수 있습니다.
        </p>
      </div>

      {selectedDialogue && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-4"
          onClick={() => setSelectedDialogue(null)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">💬 {selectedDialogue.name} 대화문</h3>
              <button
                type="button"
                onClick={() => setSelectedDialogue(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="닫기"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4 overflow-y-auto">
              <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                {selectedDialogue.dialogue}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisputeMap;
