import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/organism/Login';
import { SimpleSkelton } from './components/atoms/SimpleSkelton';
// Basetabを遅延ロードするためにReact.lazyを使用
const Basetab = lazy(() => import('./components/organism/Basetab'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SimpleSkelton />}> {/* ロード中に表示するフォールバックUI */}
        <Routes>
          <Route path="/" element={<Basetab />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
