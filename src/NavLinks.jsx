 
import React, { useContext } from 'react'
import './styles/nav.css'
import { Link, animateScroll as scroll } from "react-scroll";
import { NavToggleContext } from './NavToggleContext'
import { NavLinksContext} from './NavLinksContext'

export default function NavLinks () {
  const [navToggle, setNavToggle ] = useContext(NavToggleContext)
  const [navLinks, setNavLinks] = useContext(NavLinksContext)
  let style = navToggle ? 'flyoutMenu show' : 'flyoutMenu'
  
  console.log(navLinks)
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
          offset={3}
          duration={500}
          onClick={() => setNavToggle(false)}
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
          offset={3}
          duration={500}
          onClick={() => setNavToggle(false)}>
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
          duration={500}
          onClick={() => setNavToggle(false)}>
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
          duration={500}
          onClick={() => setNavToggle(false)}>
            Contact
          </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}