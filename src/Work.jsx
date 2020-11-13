import React from 'react'
import './styles/section.css'


export default function Work () {
  return (
    <div id='work'>
    <div className='work content'>
      <h1 className='work-title'>Work</h1>
      <div className='work-container'>
      <div className='work-img-container'>
        <img className='work-img' src='/reciplaniphone.png' alt='app screen images'/>
        <div class="work-img-overlay"><a className='reciplan-link' target='_blank' rel="noopener noreferrer" href='https://www.reciplan.co.nz'>Go to Reciplan.co.nz</a></div>
      </div>
      <div className='work-img-container'>
        <img className='work-img' src='/reciplaniphone4.png' alt='app screen images'/>
        <div class="work-img-overlay"><a className='reciplan-link' target='_blank' rel="noopener noreferrer" href='https://www.reciplan.co.nz'>Go to Reciplan.co.nz</a></div>
      </div>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
      </div>
    </div>
    </div>
  )
}

