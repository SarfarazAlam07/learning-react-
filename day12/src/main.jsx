import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Head from './Head.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head/>
    <App />
  </StrictMode>,
)
