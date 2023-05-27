import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pic5.png'
import IMG2 from '../../assets/pic4.png'
import IMG3 from '../../assets/pic3.png'
import IMG4 from '../../assets/pic2.png'
import IMG5 from '../../assets/pic3.png'


// ==============list============

const data =[
  {
  id: 1,
  image: IMG1,
  title: 'Student & Teacher Grading System',
  github: 'https://github.com/JamSaberCoding/JamSaberCoding',
  demo: 'https://github.com/JamSaberCoding/JamSaberCoding'
  },
  {
  id: 2,
  image: IMG2,
  title: 'Online Casino',
  github: 'https://github.com/JamSaberCoding/JamSaberCoding',
  demo: 'https://github.com/JamSaberCoding/JamSaberCoding'
  },
  {
  id: 3,
  image: IMG3,
  title: 'Payment System',
  github: 'https://github.com/JamSaberCoding/JamSaberCoding',
  demo: 'https://github.com/JamSaberCoding/JamSaberCoding'
  },
  {
  id: 4,
  image: IMG4,
  title: 'Student & Teacher Grading System',
  github: 'https://github.com/JamSaberCoding/JamSaberCoding',
  demo: 'https://github.com/JamSaberCoding/JamSaberCoding'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Marketing E-Slot Casino',
    github: 'https://github.com/JamSaberCoding/JamSaberCoding',
    demo: 'https://github.com/JamSaberCoding/JamSaberCoding'
  },
  {
    id: 6,
    image: IMG1,
    title: 'Smart Metering System',
    github: 'https://github.com/JamSaberCoding/JamSaberCoding',
    demo: 'https://github.com/JamSaberCoding/JamSaberCoding'
  }
]



const Portfolio = () => {
  return (
   <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
    {
      data.map(({id, image, title, github, demo}) => {
        return(
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
         <div className="portfolio__item-cta">
         <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
          <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
         </div>
        </article>
        )
      })
}
    </div>
   </section>
  )
}

export default Portfolio