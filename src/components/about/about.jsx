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
            Hello my name is Akın .I'm studying computer engineering at Istanbul University.
            It is my last year.Currently, I am sharpening my programming skills.I'm working with React and also NodeJS
            I'm focused on the front side right now.You can check my projects and contact me.

          </p>
          <a href="#contact" className='btn btn-primary'>Contact ME</a>
        </div>
      </div>
    </section>
  )
}

export default About