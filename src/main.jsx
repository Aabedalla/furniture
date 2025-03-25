import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Components/NavBar'
import HedSection from './Components/HedSection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
  <Nav/>
  <HedSection />
   
  </StrictMode>,
)
