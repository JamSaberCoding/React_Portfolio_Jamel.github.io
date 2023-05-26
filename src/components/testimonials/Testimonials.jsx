import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avtr1.png'
import AVTR2 from '../../assets/avtr2.png'
import AVTR3 from '../../assets/avtr3.png'
import AVTR4 from '../../assets/avtr4.png'


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Yusoph Aloz',
    review: 'Cheap Price But Amazing and responsive website that i got thanks keep up the good work!',
  },
  {
    avatar: AVTR2,
    name: 'Kazeem Esperida',
    review: 'Thanks Master, I Really Like how you teach us about MERN Stack keep uploading a nice video',
  },
  {
    avatar: AVTR3,
    name: 'Mich Grajo',
    review: 'Awesome, Thanks for making my website easy to use and a minimalistic design',
  },
  {
    avatar: AVTR4,
    name: 'Jobeth Odeza',
    review: 'You have the passion to become one of the great front-end developer just dont change thanks mate',
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
    
      <Swiper className="container testimonials_container"
           // install Swiper modules 
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>


        {
      data.map(({avatar, name, review}, index) => {
        return(
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="AVATAR1" />
           </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
        )
      })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials