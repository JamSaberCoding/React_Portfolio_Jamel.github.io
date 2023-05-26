import React from 'react'
import './about.css'
import ME from '../../assets/pic11.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="me" />
        </div>
        <div className="about__content">

          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2yrs Working as Developer</small>
            </article>
            
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <AiOutlineProject className='about__icon'/>
              <h5>Projects</h5>
              <small>90+ Projects Completed</small>
            </article>
          </div>
          <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi iusto est qui ab maiores tenetur excepturi dicta harum accusamus alias adipisci voluptatibus fugit, praesentium esse accusantium earum suscipit animi molestias.</p>
            <a href="#contacts" className='btn btn-primary'> Let's Talk</a>
         </div>
        </div>
      </div>

    </section>
  )
}

export default About