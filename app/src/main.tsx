import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LiffProvider } from './context/LiffContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LiffProvider>
      <App />
    </LiffProvider>
  </React.StrictMode>,
)
