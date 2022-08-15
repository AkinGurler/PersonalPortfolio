import React from 'react'
import './about.css'
import ME from "../../assets/me-about.jpg"
import { MdOutlineWork } from 'react-icons/md'
import { AiOutlineFileDone } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__image">
          <div className="about__image-me">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__content__cards">
            <article className='about__card'>
              <MdOutlineWork className='about__card__icon' />
              <h5>Experience</h5>
              <small>I have no experience yet</small>
            </article>
            <article className='about__card'>
              <AiOutlineFileDone className='about__card__icon' />
              <h5>Projects</h5>
              <small>3 projects has a live demo</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt sit soluta atque cumque obcaecati laboriosam,
             commodi deserunt reprehenderit molestias, dolor, mollitia ut quidem id adipisci esse in accusamus reiciendis delectus?
          </p>
          <a href="#contact" className='btn btn-primary'>LETS TALK</a>
        </div>
      </div>
    </section>
  )
}

export default About