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
    <a target='_blank' rel="noopener noreferrer" href='https://github.com/michael-rua'><FontAwesomeIcon icon={faGithub}  size="lg"/></a>
    <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/michaelrua/'><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
    <a href='tel:+64-211560222'><FontAwesomeIcon icon={faMobileAlt} size="lg"/></a>
    <a target='_blank' rel="noopener noreferrer" href="mailto:michaelrua1@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="lg"/></a>
    </div>
    </div>
    
  )
}