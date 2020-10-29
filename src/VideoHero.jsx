
import React, { useContext, useState, useEffect } from 'react'
import './styles/main.css'
import { NavToggleContext } from './NavToggleContext'


export default function VideoHero () {
  const [navToggle, ] = useContext(NavToggleContext)
  const [style, setStyle] = useState('hero')


  useEffect(() => {
    navToggle ? setStyle('hero'): setStyle('hero show')
  }, [navToggle])

  return(
    <>
    <div className='videoHero'> 
      <h1 className={style}>Michael Rua</h1>
      <h2 style= {{fontSize: '2rem', top: '54%'}} className={style}>Software Developer | Pilot</h2>
      <video playsInline autoPlay muted loop id="myVideo">
        <source src="/skyBeach-loop (1).mp4" type="video/mp4" />
      </video> 
    </div>
    </>
  )
}