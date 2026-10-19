import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModuleCard from './ModuleCard';
import LearningRoutePreview from './LearningRoutePreview';
import { ModuleInfo } from '../types';
import { contentLoader } from '../services/linkService';

const worksheetDownloads = [
  {
    moduleNumber: '01',
    title: '세계 분쟁',
    file: 'module1-world-conflicts.hwpx',
    downloadName: '모듈1_세계분쟁_학생활동지.hwpx',
    fileSize: '157 KB',
  },
  {
    moduleNumber: '02',
    title: '해양 영토',
    file: 'module2-marine-territory.hwpx',
    downloadName: '모듈2_해양영토_학생활동지.hwpx',
    fileSize: '12 MB',
  },
  {
    moduleNumber: '03',
    title: '독도',
    file: 'module3-dokdo.hwpx',
    downloadName: '모듈3_독도_학생활동지.hwpx',
    fileSize: '85 KB',
  },
  {
    moduleNumber: '04',
    title: 'DMZ',
    file: 'module4-dmz.hwpx',
    downloadName: '모듈4_DMZ_학생활동지.hwpx',
    fileSize: '4.8 MB',
  },
  {
    moduleNumber: '05',
    title: '경계',
    file: 'module5-boundaries.hwpx',
    downloadName: '모듈5_경계_학생활동지.hwpx',
    fileSize: '52 MB',
  },
];

const HomePage: React.FC = () => {
  const [modules, setModules] = useState<ModuleInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        setLoading(true);
        const moduleList = await contentLoader.loadLearningModules();
        setModules(moduleList);
      } catch (err) {
        setError(err instanceof Error ? err.message : '학습 내용을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadHomeData();
  }, []);

  const handleModuleClick = (moduleId: string) => {
    navigate(`/module/${moduleId}`);
  };

  if (loading) {
    return (
      <div className="site-shell loading-state" role="status" aria-live="polite">
        <div className="loading-state__inner">
          <div className="loading-mark" aria-hidden="true" />
          <p>학습 모듈을 준비하고 있습니다.</p>
          <div className="loading-skeleton loading-skeleton--wide" />
          <div className="loading-skeleton" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="site-shell status-state">
        <div className="status-state__inner" role="alert">
          <span className="status-state__label">불러오기 오류</span>
          <h1>학습 모듈을 준비하지 못했습니다.</h1>
          <p>{error}</p>
          <button type="button" className="button button--primary" onClick={() => window.location.reload()}>
            다시 시도하기 <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="site-shell home-page">
      <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>

      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand-lockup" href="/" aria-label="영토교육 홈">
            <span className="brand-mark" aria-hidden="true">🗺️</span>
            <span className="brand-copy">
              <strong>영토교육</strong>
              <span>학습 플랫폼</span>
            </span>
          </a>

          <nav className="site-nav" aria-label="주요 메뉴">
            <a href="#modules" className="site-nav__link">5개 모듈</a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="home-hero home-hero--learning" aria-labelledby="home-hero-title">
          <div className="home-hero__copy">
            <p className="hero-kicker">생성형 AI 기반 영토교육</p>
            <h1 id="home-hero-title" className="hero-title">
              AI로 영토를 읽고,
              <strong>평화의 언어로 표현합니다.</strong>
            </h1>
            <p className="hero-description">
              지도와 기록 자료로 영토 문제를 탐구하고, 서로 다른 관점을 비교하며, 생성형 AI와 함께 생각을 결과물로 표현하는 5개 학습 모듈입니다.
            </p>

            <div className="hero-actions">
              <a href="#modules" className="button button--primary">
                5개 모듈 시작하기 <span aria-hidden="true">→</span>
              </a>
            </div>

            <p className="hero-note">
              <span>자료에서 시작</span>
              <span aria-hidden="true">·</span>
              <span>관점을 비교</span>
              <span aria-hidden="true">·</span>
              <span>AI로 표현</span>
            </p>
          </div>

          <LearningRoutePreview modules={modules} onModuleClick={handleModuleClick} />
        </section>

        <section id="modules" className="modules-section" aria-labelledby="modules-title">
          <div className="content-section__inner">
            <div className="section-heading modules-section__heading">
              <p className="section-kicker">실제 AI 활용 학습 모듈</p>
              <h2 id="modules-title">관심 있는 주제에서 학습을 시작하세요.</h2>
              <p>각 모듈은 영토 문제를 자료로 탐구하고, AI를 활용해 주제에 맞는 결과물을 제작하는 독립적인 학습 경로입니다.</p>
            </div>

            <div className="module-library__meta" aria-label={`${modules.length}개 실제 학습 모듈`}>
              <strong>{modules.length}개</strong>
              <span>실제 AI 활용 학습 모듈</span>
              <span className="module-library__meta-note">모듈을 선택하면 해당 주제의 학습 공간으로 이동합니다.</span>
            </div>

            <div className="module-library">
              {modules.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  onClick={() => handleModuleClick(module.id)}
                />
              ))}
            </div>

            <section className="worksheets-section" aria-labelledby="worksheets-title">
              <div className="worksheets-section__heading">
                <p className="section-kicker">수업 자료</p>
                <h2 id="worksheets-title">학생 활동지 다운로드</h2>
                <p>모듈별 학생 활동지를 내려받아 수업에 활용해 보세요.</p>
              </div>

              <div className="worksheet-download-grid">
                {worksheetDownloads.map((worksheet) => (
                  <article className="worksheet-download-card" key={worksheet.moduleNumber}>
                    <div className="worksheet-download-card__meta">
                      <span>모듈 {worksheet.moduleNumber}</span>
                      <span>HWPX · {worksheet.fileSize}</span>
                    </div>
                    <h3>{worksheet.title}</h3>
                    <p>학생 활동지</p>
                    <a
                      className="worksheet-download-card__link"
                      href={`/worksheets/${worksheet.file}`}
                      download={worksheet.downloadName}
                      aria-label={`모듈 ${worksheet.moduleNumber} ${worksheet.title} 학생 활동지 다운로드`}
                    >
                      <span>학습지 다운로드</span>
                      <span aria-hidden="true">↓</span>
                    </a>
                  </article>
                ))}
              </div>

              <p className="worksheets-section__note">
                모듈 5 활동지는 이미지 픽셀을 손실 없이 변환해 화질을 유지하면서 용량을 줄였습니다.
              </p>
            </section>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>영토교육 학습 플랫폼</span>
          <span>© 서울대학교 지리교육과 김민성 교수 연구팀</span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
