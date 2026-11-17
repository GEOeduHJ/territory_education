import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { RegionResource } from '../types';
import 'leaflet/dist/leaflet.css';

// Leaflet 아이콘 문제 해결 (Vite 환경)
const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const iconShadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl,
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

const getYouTubeEmbedUrl = (videoUrl: string): string | null => {
  try {
    const parsedUrl = new URL(videoUrl);
    const hostname = parsedUrl.hostname.replace(/^www\./, '');
    let videoId = '';

    if (hostname === 'youtu.be') {
      videoId = parsedUrl.pathname.split('/').filter(Boolean)[0] || '';
    } else if (hostname === 'youtube.com' || hostname === 'm.youtube.com') {
      videoId = parsedUrl.searchParams.get('v')
        || parsedUrl.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1]
        || '';
    }

    if (!videoId) return null;
    return 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(videoId) + '?rel=0';
  } catch {
    return null;
  }
};

const DisputeMap: React.FC<DisputeMapProps> = ({ regions }) => {
  // 지도 중심점 계산 (모든 마커의 평균 좌표)
  const centerLat = regions.reduce((sum, region) => sum + region.coordinates[0], 0) / regions.length || 35;
  const centerLng = regions.reduce((sum, region) => sum + region.coordinates[1], 0) / regions.length || 127;
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [selectedDialogue, setSelectedDialogue] = useState<RegionResource | null>(null);
  const activeIndex = regions.length ? activeVideoIndex % regions.length : 0;
  const activeRegion = regions[activeIndex];
  const activeEmbedUrl = activeRegion ? getYouTubeEmbedUrl(activeRegion.videoUrl) : null;
  const carouselId = 'module1-dispute-videos';

  const moveVideo = (direction: -1 | 1) => {
    if (regions.length < 2) return;
    setActiveVideoIndex((current) => (current + direction + regions.length) % regions.length);
  };

  const handleVideoKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.closest('.dispute-video-carousel__control')) return;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      moveVideo(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      moveVideo(1);
    }
  };

  return (
    <section className="map-panel" aria-labelledby="map-panel-title">
      <div className="map-panel__header">
        <p className="content-eyebrow">공간에서 확인하기</p>
        <h3 id="map-panel-title">세계 영토 분쟁 지역 지도</h3>
        <p>
          지도에서 사례 지점을 누르면 아래 영상이 해당 사례로 바뀝니다. 좌우 화살표나 사례 선택 버튼으로 다섯 영상을 살펴보세요.
        </p>
      </div>

      <div className="dispute-map__canvas">
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

          {regions.map((region, index) => (
            <Marker
              key={region.id}
              position={region.coordinates}
              title={region.name}
              eventHandlers={{
                click: () => setActiveVideoIndex(index)
              }}
            >
              <Popup>
                <div className="map-popup">
                  <h4>{region.name}</h4>
                  <p>{region.description}</p>
                  <p className="map-popup__video-hint">관련 영상은 지도 아래에서 확인해 보세요.</p>
                  {region.dialogue && (
                    <button
                      type="button"
                      onClick={() => setSelectedDialogue(region)}
                      className="button button--primary map-action-button"
                    >
                      대화문 보기
                    </button>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="map-panel__footer">
        <p>지도를 드래그해 이동하고, 마우스 휠로 확대하거나 축소해 보세요.</p>
      </div>

      {regions.length > 0 && (
        <section
          className="dispute-video-carousel"
          aria-labelledby={carouselId + '-title'}
          aria-roledescription="carousel"
          onKeyDown={handleVideoKeyDown}
        >
          <header className="dispute-video-carousel__header">
            <div>
              <p className="dispute-video-carousel__eyebrow">사례 자료</p>
              <h3 id={carouselId + '-title'}>세계 분쟁 사례 영상</h3>
            </div>
            <p className="dispute-video-carousel__instruction">
              지도에서 지점을 선택하거나 화살표를 눌러 영상을 넘겨 보세요.
            </p>
          </header>

          <div className="dispute-video-carousel__stage">
            <button
              type="button"
              className="dispute-video-carousel__arrow dispute-video-carousel__arrow--previous dispute-video-carousel__control"
              aria-label="이전 분쟁 사례 영상 보기"
              onClick={() => moveVideo(-1)}
              disabled={regions.length < 2}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div className="dispute-video-carousel__frame">
              {activeEmbedUrl && activeRegion ? (
                <iframe
                  key={activeRegion.id}
                  src={activeEmbedUrl}
                  title={activeRegion.name + ' 분쟁 사례 영상'}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <p className="dispute-video-carousel__unavailable">이 영상은 임베드 형식으로 표시할 수 없습니다.</p>
              )}
            </div>

            <button
              type="button"
              className="dispute-video-carousel__arrow dispute-video-carousel__arrow--next dispute-video-carousel__control"
              aria-label="다음 분쟁 사례 영상 보기"
              onClick={() => moveVideo(1)}
              disabled={regions.length < 2}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="dispute-video-carousel__footer">
            <div className="dispute-video-carousel__indicators" role="group" aria-label="사례 영상 선택">
              {regions.map((region, index) => (
                <button
                  key={region.id}
                  type="button"
                  className={
                    'dispute-video-carousel__indicator dispute-video-carousel__control'
                    + (index === activeIndex ? ' is-active' : '')
                  }
                  aria-label={(index + 1) + '번째 영상: ' + region.name}
                  aria-pressed={index === activeIndex}
                  onClick={() => setActiveVideoIndex(index)}
                >
                  <span>{region.name}</span>
                </button>
              ))}
            </div>
            <p className="dispute-video-carousel__counter" aria-live="polite" aria-atomic="true">
              {activeRegion?.name} <span>{activeIndex + 1} / {regions.length}</span>
            </p>
          </div>
        </section>
      )}

      {selectedDialogue && (
        <div
          className="dialog-backdrop"
          onClick={() => setSelectedDialogue(null)}
        >
          <div
            className="dialog-card"
            onClick={(event) => event.stopPropagation()}
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
              <p>{selectedDialogue.dialogue}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DisputeMap;
