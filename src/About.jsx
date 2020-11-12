import React from 'react'
import './styles/section.css'


export default function About () {
  return (
  <div id='about'>
    <div className='about content'>
        <h1 className='about-title'>About Me</h1>
      <div className='about-container'>
        <div className='left-about-section'>
          <img className='about-img' src='/me-katie.jpg' alt= 'Me and Katie'/>
        </div> 
        <div className='right-about-section'>   
          <p>
           I love cats, outdoors and mountain biking.

          </p>
        </div>
      </div>
    </div>
  </div>
  )
}