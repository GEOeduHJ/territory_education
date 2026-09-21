import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModuleCard from './ModuleCard';
import LearningOverviewCard from './LearningOverviewCard';
import LearningRoutePreview from './LearningRoutePreview';
import { ModuleInfo } from '../types';
import { contentLoader } from '../services/linkService';

const learningPath = [
  {
    title: '자료와 쟁점 읽기',
    description: '지도와 기록 자료를 바탕으로 영토 문제의 맥락을 파악합니다.'
  },
  {
    title: '근거와 관점 비교하기',
    description: '서로 다른 주장과 생활의 관점을 비교하며 생각을 넓힙니다.'
  },
  {
    title: 'AI와 아이디어 확장하기',
    description: '생성형 AI를 활용해 질문과 표현 방식을 발전시킵니다.'
  },
  {
    title: '결과물로 표현하고 성찰하기',
    description: '노래·이미지·굿즈·발표 자료로 생각을 공유하고 배운 점을 돌아봅니다.'
  },
  {
    title: '서로의 표현을 살펴보기',
    description: '다른 관점의 결과물을 비교하며 평화로운 해결의 가능성을 생각합니다.'
  }
];

const HomePage: React.FC = () => {
  const [modules, setModules] = useState<ModuleInfo[]>([]);
  const [overview, setOverview] = useState<ModuleInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        setLoading(true);
        const [moduleList, overviewInfo] = await Promise.all([
          contentLoader.loadLearningModules(),
          contentLoader.loadModuleInfo('0')
        ]);
        setModules(moduleList);
        setOverview(overviewInfo);
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

  if (error || !overview) {
    return (
      <div className="site-shell status-state">
        <div className="status-state__inner" role="alert">
          <span className="status-state__label">불러오기 오류</span>
          <h1>학습 모듈을 준비하지 못했습니다.</h1>
          <p>{error || '학습 개요 정보가 없습니다.'}</p>
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
            <span className="brand-mark" aria-hidden="true">지</span>
            <span className="brand-copy">
              <strong>영토교육</strong>
              <span>지리교육 학습 플랫폼</span>
            </span>
          </a>

          <nav className="site-nav" aria-label="주요 메뉴">
            <a href="#overview" className="site-nav__link">학습 개요</a>
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
              <a href="#overview" className="button button--text">
                전체 학습 흐름 보기
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

        <section id="overview" className="overview-section" aria-labelledby="overview-title">
          <div className="content-section__inner">
            <div className="section-heading">
              <p className="section-kicker">AI 활용 학습 개요</p>
              <h2 id="overview-title">먼저 전체 학습 흐름을 확인하세요.</h2>
              <p>자료를 읽고 쟁점을 비교한 뒤, 생성형 AI와 함께 결과물을 만들고 서로의 표현을 성찰하는 순서로 진행됩니다.</p>
            </div>

            <LearningOverviewCard
              overview={overview}
              stages={learningPath}
              onClick={() => handleModuleClick('0')}
            />
          </div>
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
