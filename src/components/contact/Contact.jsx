import React, { useState } from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
// import {FaWindowClose} from 'react-icons/fa'
import emailjs from '@emailjs/browser';

const Contact = () => {


  const [name, setTo_Name] = useState ("");
  const [email, setTo_Email] = useState ("");
  const [message, setTo_Message] = useState ("");

  const submitInfo = () => {
    console.log (name + email + message);
  
  const EmailContent = {
    name: name,
    email: email,
    message: message,
  }


    emailjs.send('service_u8hkgwa', 'template_seg8twn', EmailContent, 'cjXPLGPF6wLRNIXul')
      .then((result) => {
          console.log(result.text);
          alert("Message Successfully sent!");
      }, (error) => {
          console.log(error.text);
          alert("Message Is not sent!");
      });
  
  };


  return (
  <section id="contacts">
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

     <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineMailOutline className='contact__option-icon' />
          <h4>Email</h4>
          <h5>jracman7@gmail.com</h5>
          <a href="mailto:jracman7@gmail.com" target="_blank" rel="noreferrer" >Send a Message</a>
        </article>

        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon' />
          <h4>Messenger</h4>
          <h5>Jam Saber</h5>
          <a href="https://m.me/jam.junior20" target="_blank" rel="noreferrer" >Send a Message</a>
        </article>

        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
          <h4>WhatsApp</h4> 
          <h5>0927-550-4294</h5>
          <a href="https://api.whatsapp.com/send?+639275504294" target="_blank" rel="noreferrer" >Send a Message</a>
        </article>
      </div>

      {/* ===========end of contact option============= */}

      {/* <div className="modal__overlay">
        <div className="modal__window">
          <div className="modal__titlebar">
            <span className="modal__title">
              <h2>Message Sent</h2>
            </span>
            <button className="modal__close"><FaWindowClose className='modal__close-icon'/></button>
          </div>

          <div className="modal__content">
            <small>Thank you i will response as soon as possible</small>
          </div>
        </div>
      </div> */}

      <div>

        <input type="text" name='name' placeholder='Your Full Name'
         onChange={(event) => {setTo_Name(event.target.value)}}
          autofocus required
         />

        <input type="email" name='email' placeholder='Your Email'
         onChange={(event) => {setTo_Email(event.target.value)}}
          autofocus required/>

        <textarea name="message" rows="7" placeholder='Your Message' 
          onChange={(event) => {setTo_Message(event.target.value)}}
            autofocus required></textarea>
        <button type='submit' className='btn btn-primary' onClick={submitInfo}>Send Message</button>

      </div>
     </div>
    </section>
  )
}

export default Contact