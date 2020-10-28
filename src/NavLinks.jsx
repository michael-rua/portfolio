 
import React, { useContext } from 'react'
import './styles/nav.css'
import { Link, animateScroll as scroll } from "react-scroll";
import { NavToggleContext } from './NavToggleContext'

export default function NavLinks () {
  const [navToggle, ] = useContext(NavToggleContext)
  const style = navToggle ? 'flyoutMenu show' : 'flyoutMenu'
  const scrollToTop = () => {
    scroll.scrollToTop();
  }
  return(
    <div className={style}>
      <div className='flyoutMenuLinks'>
        <Link
        //  className='nav h1'
         activeClass="active"
         to="About"
         spy={true}
         smooth={true}
         offset={-70}
         duration={500}>
           <h1>About</h1>
        </Link>

        <Link
        //  className='nav h1'
         activeClass="active"
         to="Services"
         spy={true}
         smooth={true}
         offset={-70}
         duration={500}>
           <h1>Services</h1>
        </Link>

        <Link 
        // className='nav h1'
        activeClass="active"
        to="Work"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          <h1>Work</h1>
        </Link>

        <Link 
        // className='nav h1'
        activeClass="active"
        to="Contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          <h1>Contact</h1>
        </Link>
      </div>
    </div>
  )
}