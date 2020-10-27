import React from 'react'


import Nav from './Nav'
import VideoHero from './VideoHero'
import About from './About'
import Services from './Services'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'
import ArrowDown from './ArrowDown'

function App() {


  return (
    <div className="App">
      <Nav />
      <VideoHero />
      <ArrowDown />
      <About />
      <Services />    
      <Work />  
      <Contact />
      <Footer />
    </div>
  )
}

export default App