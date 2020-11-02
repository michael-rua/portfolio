import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './styles/section.css'



export default function Footer () {
  return (
    <div id='footer'>
    <div className='footer content'>
    <FontAwesomeIcon icon={faGithub} size="lg"/>
    <FontAwesomeIcon icon={faLinkedin} size="lg"/>
    <FontAwesomeIcon icon={faMobileAlt} size="lg"/>
    <FontAwesomeIcon icon={faEnvelope} size="lg"/>
    </div>
    </div>
    
  )
}