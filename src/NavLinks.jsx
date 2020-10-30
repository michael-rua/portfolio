 
import React, { useContext } from 'react'
import './styles/nav.css'
import { Link, animateScroll as scroll } from "react-scroll";
import { NavToggleContext } from './NavToggleContext'

export default function NavLinks () {
  const [navToggle, setNavToggle ] = useContext(NavToggleContext)
  const style = navToggle ? 'flyoutMenu show' : 'flyoutMenu'
  
// Link.active ? setNavToggle(false) : setNavToggle(true)
  
  return(
    <div className={style}>
      <div className='flyoutMenuLinks'>
      <ul>
      <li className='nav-item'>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={3}
          duration={500}>
            About
        </Link>
        </li>

        <li className='nav-item'>
        <Link
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={3}
          duration={500}>
            Services
        </Link>
        </li>

        <li className='nav-item'>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={3}
          duration={500}>
            Work
        </Link>
        </li>

        <li className='nav-item'>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={3}
          duration={500}>
            Contact
          </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}