import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import Nav from './Nav'
import VideoHero from './VideoHero'
import About from './About'
import Services from './Services'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'

function App() {


  return (
    <div className="App">
      <Nav />
      <VideoHero />
     
      <About/>
      <Services/>
      <Work/>   
      <Contact />
      <Footer />
    </div>
  )
}

export default App