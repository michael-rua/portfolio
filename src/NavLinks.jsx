 
import React, { useContext } from 'react'

import './styles/nav.css'

import { NavToggleContext } from './NavToggleContext'

export default function NavLinks () {
  const [navToggle, ] = useContext(NavToggleContext)
  const style = navToggle ? 'flyoutMenu show' : 'flyoutMenu'

  return(
    <div className={style}>
      <div className='flyoutMenuLinks'>
        <h1>About</h1>
        <h1>Services</h1>
        <h1>Work</h1>
        <h1>Contact</h1>
      </div>
    </div>
  )
}