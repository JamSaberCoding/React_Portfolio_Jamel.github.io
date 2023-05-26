import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/pic1.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
 <header>
  <div className="container header__container">
    <h5 id='me'>Hello I'm</h5>
    <h1>Jamel Racman Jr</h1>
    <h5 className="text-light"> Fullstack Developer</h5>
    <CTA/>
    <HeaderSocial/>

    <div className="me">
      <img src={ME} alt="me" />
      
    </div>
    <a href="#contacts" className='scroll__down'>Scroll Down</a>
  </div>
 </header>
  )
}

export default Header