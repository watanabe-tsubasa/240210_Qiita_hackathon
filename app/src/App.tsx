import { Basetab } from './components/organism/Basetab';
import { useLiffContext } from './context/useLiffContext';


function App() {
  const { message, error } = useLiffContext();
  return (
    <div className="App">
      <h1>create-liff-app</h1>
      {message && <p>{message}</p>}
      {error && (
        <p>
          <code>{error}</code>
        </p>
      )}
      <a
        href="https://developers.line.biz/ja/docs/liff/"
        target="_blank"
        rel="noreferrer"
      >
        LIFF Documentation
      </a>
      <div className='w-full h-[93vH] flex justify-center my-4'>
        <Basetab />
      </div>
    </div>
  );
}

export default App
