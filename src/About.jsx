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
          ada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, 

          </p>
        </div>
      </div>
    </div>
  </div>
  )
}