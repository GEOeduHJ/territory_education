import React, { useState } from 'react';

interface PadletQrUploadProps {
  moduleId: string;
}

interface StoredQrImage {
  dataUrl: string;
  fileName: string;
}

const MAX_FILE_SIZE = 8 * 1024 * 1024;
const MAX_IMAGE_DIMENSION = 1200;
const ACCEPTED_IMAGE_TYPES = new Set(['image/png', 'image/jpeg', 'image/webp']);

const getStorageKey = (moduleId: string) => `territory-education:padlet-qr:v1:${moduleId}`;

const loadSavedImage = (moduleId: string): StoredQrImage | null => {
  try {
    const saved = window.localStorage.getItem(getStorageKey(moduleId));
    if (!saved) return null;

    const parsed = JSON.parse(saved) as StoredQrImage;
    if (typeof parsed.dataUrl === 'string' && parsed.dataUrl.startsWith('data:image/png;base64,')) {
      return parsed;
    }
  } catch {
    // 저장 공간을 사용할 수 없는 경우에도 새 이미지는 현재 화면에서 표시한다.
  }

  return null;
};

const readAndResizeImage = (file: File): Promise<string> => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = () => reject(new Error('파일을 읽지 못했습니다. 다시 선택해주세요.'));
  reader.onload = () => {
    const image = new Image();
    image.onerror = () => reject(new Error('이미지를 열지 못했습니다. PNG, JPG 또는 WEBP 파일인지 확인해주세요.'));
    image.onload = () => {
      if (!image.naturalWidth || !image.naturalHeight) {
        reject(new Error('이미지 크기를 확인할 수 없습니다. 다른 파일을 선택해주세요.'));
        return;
      }

      const scale = Math.min(
        1,
        MAX_IMAGE_DIMENSION / image.naturalWidth,
        MAX_IMAGE_DIMENSION / image.naturalHeight
      );
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));

      const context = canvas.getContext('2d');
      if (!context) {
        reject(new Error('이미지를 준비하지 못했습니다. 다시 시도해주세요.'));
        return;
      }

      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/png'));
    };
    image.src = String(reader.result);
  };
  reader.readAsDataURL(file);
});

const PadletQrUpload: React.FC<PadletQrUploadProps> = ({ moduleId }) => {
  const [qrImage, setQrImage] = useState<StoredQrImage | null>(() => loadSavedImage(moduleId));
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState('');
  const storageKey = getStorageKey(moduleId);
  const inputId = `padlet-qr-image-${moduleId}`;

  const handleFile = async (file?: File) => {
    if (!file) return;

    if (!ACCEPTED_IMAGE_TYPES.has(file.type)) {
      setStatus('PNG, JPG, JPEG, WEBP 이미지 파일을 선택해주세요.');
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setStatus('이미지 용량은 8MB 이하로 선택해주세요.');
      return;
    }

    setStatus('QR 이미지를 준비하고 있습니다.');
    try {
      const nextImage = { dataUrl: await readAndResizeImage(file), fileName: file.name };
      setQrImage(nextImage);

      try {
        window.localStorage.setItem(storageKey, JSON.stringify(nextImage));
        setStatus('QR 코드가 표시되고 이 브라우저에 저장되었습니다.');
      } catch {
        setStatus('QR 코드는 표시했지만 브라우저 저장 공간이 부족해 새로고침 후에는 사라질 수 있습니다.');
      }
    } catch (error) {
      setStatus(error instanceof Error ? error.message : '이미지를 추가하지 못했습니다.');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    void handleFile(event.target.files?.[0]);
    event.target.value = '';
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    void handleFile(event.dataTransfer.files?.[0]);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget;
    if (nextTarget instanceof Node && event.currentTarget.contains(nextTarget)) return;
    setIsDragging(false);
  };

  const removeImage = () => {
    setQrImage(null);
    setStatus('Padlet QR 이미지가 제거되었습니다.');
    try {
      window.localStorage.removeItem(storageKey);
    } catch {
      // 화면에서는 제거하고, 브라우저 저장소 접근 실패는 방해하지 않는다.
    }
  };

  return (
    <section className="padlet-qr" aria-labelledby={`padlet-qr-title-${moduleId}`}>
      <header className="padlet-qr__header">
        <p className="padlet-qr__eyebrow">교사용 준비 · PADLET</p>
        <h3 id={`padlet-qr-title-${moduleId}`}>학생용 Padlet QR 코드</h3>
        <p>
          개인 Padlet의 QR 이미지를 올리면 학생들이 이 화면에서 바로 스캔할 수 있습니다.
          이미지는 현재 브라우저에만 저장되며 사이트에 업로드되지 않습니다.
        </p>
      </header>

      <div
        className={`padlet-qr__dropzone${isDragging ? ' padlet-qr__dropzone--dragging' : ''}`}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label htmlFor={inputId} className="padlet-qr__upload-label">
          <span className="padlet-qr__upload-mark" aria-hidden="true">＋</span>
          <span className="padlet-qr__upload-copy">
            <strong>{qrImage ? '다른 QR 이미지로 바꾸려면 끌어 놓거나 선택하세요.' : 'Padlet QR 이미지를 끌어 놓거나 선택하세요.'}</strong>
            <small id={`padlet-qr-hint-${moduleId}`}>PNG · JPG · WEBP / 최대 8MB</small>
          </span>
          <span className="padlet-qr__upload-action">파일 선택</span>
        </label>
        <input
          id={inputId}
          className="padlet-qr__file-input"
          type="file"
          accept="image/png,image/jpeg,image/webp"
          aria-describedby={`padlet-qr-hint-${moduleId}`}
          onChange={handleInputChange}
        />
      </div>

      {status && (
        <p id={`padlet-qr-status-${moduleId}`} className="padlet-qr__status" role="status" aria-live="polite">
          {status}
        </p>
      )}

      {qrImage && (
        <figure className="padlet-qr__preview">
          <figcaption className="padlet-qr__preview-heading">
            <div>
              <strong>학생이 스캔할 QR 코드</strong>
              <span>{qrImage.fileName}</span>
            </div>
            <button type="button" className="button button--text" onClick={removeImage}>
              이미지 제거
            </button>
          </figcaption>
          <div className="padlet-qr__image-frame">
            <img src={qrImage.dataUrl} alt={`학습 모듈 ${moduleId}의 Padlet 접속 QR 코드`} />
          </div>
        </figure>
      )}
    </section>
  );
};

export default PadletQrUpload;
