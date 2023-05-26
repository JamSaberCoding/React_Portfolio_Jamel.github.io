import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/"><BsLinkedin/></a>
        <a href="https://www.facebook.com/"><BsFacebook/></a>
        <a href="https://www.twitter.com/"><AiFillTwitterCircle/></a>
      
    </div>
  )
}

export default HeaderSocials