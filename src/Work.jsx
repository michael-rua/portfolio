import React from 'react'
import './styles/section.css'


export default function Work () {
  return (
    <div id='work'>
      <div className='work content'>
        <h1 className='work-title'>Work</h1>
        <div className='work-container'>
          <div className='left-work-side'>
            <div className='work-img-container'>
              <img className='work-img' src='/reciplaniphone.png' alt='app screen images'/>
              <div class="work-img-overlay"><a className='reciplan-link' target='_blank' rel="noopener noreferrer" href='https://www.reciplan.co.nz'>Go to Reciplan.co.nz</a>
              </div>
            </div>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est </p>
          </div>
          <div className='right-work-side'>
          <div className='work-img-container'>
            <img className='work-img' src='/reciplaniphone4.png' alt='app screen images'/>
            
            <div class="work-img-overlay">
              <a className='reciplan-link' target='_blank' rel="noopener noreferrer" href='https://www.reciplan.co.nz'>Go to Reciplan.co.nz</a>
            </div>
          </div> 
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est </p>
          </div>
        </div>
      </div>
    </div>
  )
}

