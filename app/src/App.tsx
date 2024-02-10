import liff from '@line/liff';
import { useEffect, useState } from 'react'
import { Basetab } from './components/organism/Basetab';


function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        setMessage("LIFF init succeeded.");
        console.log(message);
      })
      .catch((e: Error) => {
        setMessage("LIFF init failed.");
        setError(`${e}`);
        console.log(error);
      });
  });

  return (
    <div className="App">
      {/* <h1>create-liff-app</h1>
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
      </a> */}
      <div className='w-full h-[93vH] flex justify-center my-4'>
        <Basetab />
      </div>
    </div>
  );
}

export default App
