import React, {useState} from 'react'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'
import './styles/section.css'


export default function Email () {
    const [state, setState] = useState(
      { feedback: '',
        name: '',
        email: '' 
       }
    )
         
      // saves the user's name entered to state
      const nameChange = (event) => {
        setState({name: event.target.value})
      }
      
      // saves the user's email entered to state
      const emailChange = (event) => {
        setState({email: event.target.value})
      }

      // saves the user's message entered to state
      const messageChange = (event) => {
        setState({feedback: event.target.value})
      }

      //onSubmit of email form
      const handleSubmit = (event) => {
        event.preventDefault();

        //This templateId is created in EmailJS.com
        const templateId = 'basic';
    
        //This is a custom method from EmailJS that takes the information 
        //from the form and sends the email with the information gathered 
        //and formats the email based on the templateID provided.
        sendFeedback(templateId, {
          message: state.feedback, 
          name: state.name, 
          email: state.email
                                       }
                         )

      }
    
      //Custom EmailJS method
      const sendFeedback = (template_9ougnaf, service_49qzcog) => {
        window.emailjs.send(
          'gmail', template_9ougnaf,service_49qzcog
          
          ).then(res => {
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
          
          //Form layout that requires a Name, Email, and message
          <div id='contact'>
             <div className='contact content'>
          <form className="test-mailing" onSubmit={handleSubmit}>

            <br/>
            <div style={{fontSize: "1.2rem"}}>

              <h6>You can also send me an email directly from here</h6>
              <div>
                  <label htmlFor="name">Name</label>
                  <input className="form-control email-inputs" name="user_name" type="text" 
                    id="name" onChange={nameChange} required/>
              </div>

              <div>
                  <label htmlFor="email">Email</label>
                  <input className="form-control email-inputs" name="user_email" type="text"
                    id="email" onChange={emailChange} required/>
              </div>

              <label htmlFor="message">
                  Message
              </label>
              <div>
                <textarea
                  id="message"
                  name="message"
                  onChange={messageChange}
                  placeholder="Put your message here"
                  required
                  className="email-text-area form-control"
                  rows="10"
                  cols="30"
                />
              </div>

            </div>

            <input type="submit" value="Submit" className="btn btn-outline-light" />
          </form>
          </div>
          </div>
        )
}
    

