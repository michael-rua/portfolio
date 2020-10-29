import React from 'react'
import { animateScroll as scroll } from "react-scroll"
import './styles/nav.css'

import Hamburger from './Hamburger'
import NavLinks from './NavLinks'

export default function Nav () {
  const scrollToTop = () => {
    scroll.scrollToTop();
  }
  return (
    <>
      <div className='nav'>
        <h1 onClick={scrollToTop} id='initials'>MR</h1>
        <Hamburger />
      </div>
      <NavLinks />
    </>
  )
}