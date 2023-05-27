import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaWhatsappSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="#Logo" className='footer__logo'>JamsSaberCoding</a>
        <ul className="permalinks">
          <li><a href="#me">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
        <div className="footer__socials">
          <a href="#https://facebook.com"><FaFacebookSquare/></a>
          <a href="#https://twitter.com"><FaTwitterSquare/></a>
          <a href="#https://Whatsapp.com"><FaWhatsappSquare/></a>
          <a href="#https://instagram.com"><FaInstagram/></a>
        </div>
        <div className="footer__copyright">
          <small>&copy; JamsSaberCoding All rights reserved.</small>
        </div>
        {/* <div className="scroll__up">
          <a href="#me">Scroll Up</a>
        </div> */}
      </footer>
    </section>
  )
}

export default Footer