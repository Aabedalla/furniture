import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Components/NavBar'
import HedSection from './Components/HedSection'
import Service from './Components/Service'
import MostPopular from './Components/MostPopular.jsx'
import About from './Components/AboutUs'
import Footer from './Components/Footer'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
  <Nav/>
  <HedSection />
  <Service />
  <MostPopular />
  <About />
  <Footer />
  </StrictMode>,
)
