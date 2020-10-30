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
  <div id='contact'>
    <div className='contact content'>
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" onChange={nameChange} value={user_name.user_name} />
      <label>Email</label>
      <input type="email" name="user_email" onChange={emailChange} value={user_email.user_email} />
      <label>Message</label>
      <textarea name="message" onChange={messageChange} value={message.message}  />
      <input type="submit" value="Send" />
    </form>
    </div>
  </div>
  );
}

// export default function Email () {
//     const [state, setState] = useState(
//       { feedback: '',
//         name: '',
//         email: '' 
//        }
//     )
         
//       // saves the user's name entered to state
//       const nameChange = (event) => {
//         setState({name: event.target.value})
//       }
      
//       // saves the user's email entered to state
//       const emailChange = (event) => {
//         setState({email: event.target.value})
//       }

//       // saves the user's message entered to state
//       const messageChange = (event) => {
//         setState({feedback: event.target.value})
//       }

//       //onSubmit of email form
//       const handleSubmit = (event) => {
//         event.preventDefault();

//         //This templateId is created in EmailJS.com
//         const templateId = 'template_53lhhdn';
    
//         //This is a custom method from EmailJS that takes the information 
//         //from the form and sends the email with the information gathered 
//         //and formats the email based on the templateID provided.
//         sendFeedback(templateId, {
//           message: state.feedback, 
//           name: state.name, 
//           email: state.email
//         })
       

//       }
    
//       //Custom EmailJS method
//       const sendFeedback = (templateId, variables) => {
//         emailjs.send(
//           'service_49qzcog', templateId,
//           variables
//           ).then(res => {
//             // Email successfully sent alert
//             Swal.fire({
//               title: 'Email Successfully Sent',
//               icon: 'success'
//             })
//           })
//           // Email Failed to send Error alert
//           .catch(err => {
//             Swal.fire({
//               title: 'Email Failed to Send',
//               icon: 'error'
//             })
//             console.error('Email Error:', err)
//           })
//       }
    
   
//         return (
          
//           //Form layout that requires a Name, Email, and message
//           <div id='contact'>
//              <div className='contact content'>
//           <form className="test-mailing" onSubmit={handleSubmit}>

//             <br/>
//             <div style={{fontSize: "1.2rem"}}>

//               <h6>You can also send me an email directly from here</h6>
//               <div>
//                   <label>Name</label>
//                   <input name="user_name" className="form-control email-inputs"  type="text" 
//                     id="name" onChange={nameChange} required/>
//               </div>

//               <div>
//                   <label>Email</label>
//                   <input name="user_email" className="form-control email-inputs"  type="text"
//                     id="email" onChange={emailChange} required/>
//               </div>

//               <label>
//                   Message
//               </label>
//               <div>
//                 <textarea
//                   id="message"
//                   name="message"
//                   onChange={messageChange}
//                   placeholder="Put your message here"
//                   required
//                   className="email-text-area form-control"
//                   rows="10"
//                   cols="30"
//                 />
//               </div>

//             </div>

//             <input type="submit" value="Submit" className="btn btn-outline-light" />
//           </form>
//           </div>
//           </div>
//         )
// }
    

