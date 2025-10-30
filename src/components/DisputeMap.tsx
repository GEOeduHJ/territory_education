import React from 'react';
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

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">
          🗺️ 세계 영토 분쟁 지역 지도
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          마커를 클릭하면 해당 지역의 자료를 확인할 수 있습니다.
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
                  <a
                    href={region.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-bold shadow"
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
                    자료 보기 (PDF)
                  </a>
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
    </div>
  );
};

export default DisputeMap;
