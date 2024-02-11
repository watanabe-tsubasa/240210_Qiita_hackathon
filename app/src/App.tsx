import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/organism/Login';
import { SimpleSkelton } from './components/atoms/SimpleSkelton';
const Basetab = lazy(() => import('./components/organism/Basetab'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SimpleSkelton />}>
        <Routes>
          <Route path="/" element={<Basetab />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
