 
import React, { useState, useContext} from 'react'
import { animateScroll as scroll } from "react-scroll"
import { NavToggleContext } from './NavToggleContext'

import './styles/hamburger.css'

export default function Hamburger () {
  const [navToggle, setNavToggle] = useContext(NavToggleContext)
  const [toggleClass, setToggleClass] = useState('hamburger hamburger--minus')
  const scrollToTop = () => {
    scroll.scrollToTop();
  }
  const clickHandler = () => {
    
    
    navToggle ? setNavToggle(false) : setNavToggle(true) || scrollToTop()
    toggleClass === 'hamburger hamburger--minus' ? setToggleClass('hamburger hamburger--minus is-active') : setToggleClass('hamburger hamburger--minus')
    
  
  }

  return(
    <div className={toggleClass} onClick={clickHandler}>
      <div className='hamburger-box'>
        <div className='hamburger-inner'></div>
      </div>
    </div>
  )
}