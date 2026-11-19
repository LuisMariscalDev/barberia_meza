import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/fonts.css'
import './styles/tokens.css'
import './styles/global.css'
import { App } from './App.tsx'
import { AvisoPrivacidad } from './components/AvisoPrivacidad/AvisoPrivacidad.tsx'

const ruta = window.location.pathname.replace(/\/+$/, '')
const esAvisoPrivacidad = ruta === '/aviso-de-privacidad'

createRoot(document.getElementById('root')!).render(
  <StrictMode>{esAvisoPrivacidad ? <AvisoPrivacidad /> : <App />}</StrictMode>,
)
