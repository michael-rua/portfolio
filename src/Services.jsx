import React, { useState } from 'react'
import './styles/section.css'

import { Document, Page } from 'react-pdf'

export default function Services () {
const [state, setState] = useState({
  numPages: null,
  pageNumber: 1
})

 const onDocumentLoadSuccess = ({ numPages }) => {
  setState({ numPages })
}

// const { pageNumber, numPages} = state

  return (
    <div id='services'>
      <div className='services content'>
        <h1 className='services-title'>Services</h1>
        <div className='services-container'>
          <div className='services-left'>
            <h2>I offer Full stack web developer services</h2>
            <p>I specialise in High engagement and user focussed design, giving feature rich experiences to all users. </p>
          </div>
          <div className='services-right'>
            <a className='cv-link' href='https://drive.google.com/file/d/1XYnSJjyOlKtNDsZAJbLzcnM9sFCrZtfV/view?usp=sharing'>View my CV</a>
            
        {/* <Document
          file='cv.pdf'
          onLoadSuccess={() => onDocumentLoadSuccess()}
        >
          <Page pageNumber={state.pageNumber} />
        </Document>
        <p>Page {state.pageNumber} of {state.numPages}</p> */}
            
          </div>
          
        </div>
      </div>
    </div>
  )
}
 