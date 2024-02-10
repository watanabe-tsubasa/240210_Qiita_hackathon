import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Basetab } from './components/organism/Basetab';
import { Login } from './components/organism/Login';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Basetab />} />
          <Route path="/login" element={<Login />} />
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App
