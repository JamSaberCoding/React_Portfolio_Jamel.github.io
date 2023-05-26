import React from 'react'
import './services.css'
import {GoCheck} from 'react-icons/go'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      {/* =================box1=============== */}
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <GoCheck className='service__list-icon' />
              <p>Illustrate design ideas using storyboards, process flows and sitemaps</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Design graphic user interface elements, like menus, tabs and widgets</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Build page navigation buttons and search fields
</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Create original graphic designs (e.g. images, sketches and tables)
</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Prepare and present rough drafts to internal teams and key stakeholders
</p>
            </li>
          </ul>
        </article>
        {/* =================box2=============== */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <GoCheck className='service__list-icon' />
              <p>Monitoring website traffic
</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Maintaining and updating websites
</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Troubleshooting website problems and bugs</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Working with graphics and other designers</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Presenting design specs</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Proficiency in HTML, CSS, JavaScript, PHP, and other relevant programming languages
</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Creating and testing applications for websites</p>
            </li>
          </ul>
        </article>

        {/* =================box3=============== */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <GoCheck className='service__list-icon' />
              <p>Writing, reviewing, editing, and updating content for company websites, blogs, marketing materials, and similar platforms.
</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Conducting research and interviews to learn more about current trends, developments, and perceptions about the subject matter, and then contextualizing your findings.
</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Assisting the creative team with the design of promotional materials.
</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Using social media to engage consumers, respond to questions or complaints, and to promote company initiatives.
</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Collaborating with internal departments to establish campaign objectives, complete tasks, and identify and solve problems.
</p>
            </li>
          </ul>
        </article>
        {/* ==============end of box ================== */}
      </div>
    </section>
  )
}

export default Services