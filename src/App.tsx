import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ModulePage from './components/ModulePage';

// 404 Not Found 컴포넌트
const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="text-6xl font-bold text-gray-400 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-gray-600 mb-6">
          여기를 수정하세요 - 요청하신 페이지가 존재하지 않습니다.
        </p>
        <a
          href="/"
          className="bg-territory-primary text-white px-6 py-2 rounded-lg hover:bg-territory-secondary transition-colors inline-block"
        >
          홈으로 돌아가기
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