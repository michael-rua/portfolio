 
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
        <Link
        //  className='nav h1'
         activeClass="active"
         to="about"
         spy={true}
         smooth={true}
         offset={-70}
         duration={500}>
          <h1 className='h1text'>About</h1>
        </Link>

        <Link
        //  className='nav h1'
         activeClass="active"
         to="services"
         spy={true}
         smooth={true}
         offset={-70}
         duration={500}>
           <h1 className='h1text'>Services</h1>
        </Link>

        <Link 
        // className='nav h1'
        activeClass="active"
        to="work"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          <h1 className='h1text'>Work</h1>
        </Link>

        <Link 
        // className='nav h1'
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          <h1 className='h1text'>Contact</h1>
        </Link>
      </div>
    </div>
  )
}