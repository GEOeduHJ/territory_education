import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ModulePage from './components/ModulePage';

// 404 Not Found 컴포넌트
const NotFoundPage: React.FC = () => {
  return (
    <div className="site-shell status-state">
      <div className="status-state__inner" role="alert">
        <span className="status-state__label">페이지 오류</span>
        <div className="not-found-code" aria-hidden="true">404</div>
        <h1>
          페이지를 찾을 수 없습니다
        </h1>
        <p>
          요청하신 페이지가 존재하지 않습니다.
        </p>
        <a
          href="/"
          className="button button--primary"
        >
          학습 홈으로 돌아가기
        </a>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* 홈페이지 라우트 */}
          <Route path="/" element={<HomePage />} />
          
          {/* 모듈 페이지 라우트 */}
          <Route path="/module/:moduleId" element={<ModulePage />} />
          
          {/* 404 페이지 라우트 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
