import React, {useState} from 'react'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'
import './styles/section.css'

import{ init } from 'emailjs-com'
init("user_nn4dLhpldA7kNNBzs8Ks8")


export default function Contact() {
  const [message, setMessage] = useState({message: '' })
  const [user_name, setUser_name] = useState({user_name: '' })
  const [user_email, setUser_email] = useState({user_email: '' })
             

// saves the user's name entered to state
      const nameChange = (event) => {
        setUser_name({user_name: event.target.value})
      }
      
      // saves the user's email entered to state
      const emailChange = (event) => {
        setUser_email({user_email: event.target.value})
      }

      // saves the user's message entered to state
      const messageChange = (event) => {
        setMessage({message: event.target.value})
      }
      const clearInput = () => {
        setUser_name({user_name: ''})
        setUser_email({user_email: ''})
        setMessage({message: ''})
      }

    const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_49qzcog', 'template_53lhhdn', event.target, 'user_nn4dLhpldA7kNNBzs8Ks8')
    .then(res => {
      clearInput()
      // Email successfully sent alert
      Swal.fire({
        title: 'Email Successfully Sent',
        icon: 'success'
      })
    })
    // Email Failed to send Error alert
    .catch(err => {
      Swal.fire({
        title: 'Email Failed to Send',
        icon: 'error'
      })
      console.error('Email Error:', err)
    })
    
  }

  return (
    <>
    
  <div id='contact'>
    <div className='contact content'>
    <h1>Contact</h1>
    <h5 className='small-text'>You can also send me an email directly from here</h5>
    <form className="contact-form" onSubmit={sendEmail}>
      <div className="contact-div">
        <div>
      <label>Name</label>
      <br/>
      <input type="text" name="user_name" onChange={nameChange} value={user_name.user_name} required/>
      </div>
      <div>
      <label>Email</label>
      <br/>
      <input type="email" name="user_email" onChange={emailChange} value={user_email.user_email} required/>
      </div>
      <div>
      <label>Message</label>
      <br/>
      <textarea
      name="message" 
      placeholder="Put your message here" 
      required
      onChange={messageChange}
      value={message.message}
      rows="5"
      cols="30"  />
      </div>
      </div>
      <input type="submit" value="Send" />
      
    </form>
    </div>
  </div>
  </>
  )
}   

