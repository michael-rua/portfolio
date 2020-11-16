import React from 'react'
import './styles/section.css'


export default function Work () {
  return (
    <div id='work'>
      <div className='work content'>
        <h1 className='work-title'>Work</h1>
        <div className='work-container'>
          <div className='left-work-side'>
            <h2 style={{textDecoration:'underline'}}>Reciplan</h2>
            <p>My experiences in Enspiral Dev Academy culminated with a final group project of an epic scale. I worked with a talented team, we decided to create a fresh, functional and useful web app that solves the problem of planning your food for the week and building a dynamic shopping list. We created <strong>Reciplan.</strong></p>
            <div className='work-img-container'>
              <img className='work-img' src='/reciplaniphone.png' alt='app screen images'/>
              {/* <div class="work-img-overlay"><a className='reciplan-link' target='_blank' rel="noopener noreferrer" href='https://www.reciplan.co.nz'>Go to Reciplan.co.nz</a>
              </div> */}
            </div>
            
          </div>
          <div className='right-work-side'>
          
          
            <div className='work-img-container'>
              <img className='work-img' src='/reciplaniphone4.png' alt='app screen images'/>
              
            
              {/* <div class="work-img-overlay">
                <a className='reciplan-link' target='_blank' rel="noopener noreferrer" href='https://www.reciplan.co.nz'>Go to Reciplan.co.nz</a>
              </div> */}
            </div> 
            <p>My role in the team was implementing the technology, specifically the implemtation of React Context API, I was focussed on the functionality of the Navigation and user experience. This was a 6 day project in which we delivered a mobile first, user focussed experience</p>
            <a className='reciplan-link' target='_blank' rel="noopener noreferrer" href='https://www.reciplan.co.nz'><h3>Go to Reciplan.co.nz</h3></a>
          </div>
        </div>
      </div>
    </div>
  )
}

