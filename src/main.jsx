import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Formulario from './components/formulario.jsx'
import ListaSeries from './components/ListaSeries.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListaSeries/>
    <Formulario/>
  </StrictMode>,
)
