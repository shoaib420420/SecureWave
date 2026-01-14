import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Hero from './sections/Hero';
import Services from './sections/Services';
import Methodology from './sections/Methodology';
import CaseStudy from './sections/CaseStudy';
import Wins from './sections/Wins';
import Blog from './sections/Blog';
import Clients from './sections/Clients';
import CTA from './sections/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Methodology />
      <CaseStudy />
      <Wins />
      <Clients />
      <Blog />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
