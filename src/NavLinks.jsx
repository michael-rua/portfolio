 
import React, { useContext } from 'react'
import './styles/nav.css'
import { Link, animateScroll as scroll } from "react-scroll";
import { NavToggleContext } from './NavToggleContext'
import { HamburgerContext } from './HamburgerContext'

export default function NavLinks () {
  const [navToggle, setNavToggle ] = useContext(NavToggleContext)
  const [toggleClass, setToggleClass] = useContext(HamburgerContext)
  let style = navToggle ? 'flyoutMenu show' : 'flyoutMenu'
  
  
  const clickHandler = () => {
    navToggle ? setNavToggle(false) : setNavToggle(true)
    toggleClass === 'hamburger hamburger--minus' ? setToggleClass('hamburger hamburger--minus is-active') : setToggleClass('hamburger hamburger--minus')
    
  
  }
  return(
    <div className={style}>
      <div className='flyoutMenuLinks'>
      <ul>
      <li className='nav-item' >
        <Link
          className='aboutLink'
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={80}
          duration={500}
          onClick={() => clickHandler()}
          >
            About
        </Link>
        </li>

        <li className='nav-item'>
        <Link
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={80}
          duration={500}
          onClick={() => clickHandler()}>
            Services
        </Link>
        </li>

        <li className='nav-item'>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={80}
          duration={500}
          onClick={() => clickHandler()}>
            Work
        </Link>
        </li>

        <li className='nav-item'>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={80}
          duration={500}
          onClick={() => clickHandler()}>
            Contact
          </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}