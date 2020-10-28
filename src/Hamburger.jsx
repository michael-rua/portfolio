 
import React, { useState, useContext} from 'react'
import { Link, animateScroll as scroll } from "react-scroll"
import { NavToggleContext } from './NavToggleContext'

import './styles/hamburger.css'

export default function Hamburger () {
  const [navToggle, setNavToggle] = useContext(NavToggleContext)
  const [toggleClass, setToggleClass] = useState('hamburger hamburger--minus')

  const clickHandler = () => {
    scroll.scrollToTop()
    
    navToggle ? setNavToggle(false) : setNavToggle(true)
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