import React, { useState } from 'react'
import './experience.scss'
import { GiProgression } from 'react-icons/gi'


const FRONT_SKILLS = [
  { name: "HTML", level: "Intermediate" },
  { name: "CSS", level: "Intermediate" },
  { name: "Bootstrap", level: "Beginner" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Redux", level: "Intermediate" },
  { name: "MaterialUI", level: "Beginner" },

];
const BACKEND_SKILLS = [
  { name: "NodeJS", level: "Beginner" },
  { name: "ExpressJS", level: "Beginner" },
  { name: "MYSQL", level: "Intermediate" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "MongoDB", level: "Beginner" },
  { name: "Java", level: "Beginner" },

];
const TOOLS_METHODS = [
  { name: "Git", level: "Intermediate" },
  { name: "Github", level: "Intermediate" },
  { name: "Heroku", level: "Intermediate" },
  { name: "Netfily", level: "Intermediate" },
  { name: "Chorome Dev Tools", level: "Intermediate" },
  { name: "VsCode", level: "Intermediate" },
]

const Experience = () => {
  const [frontSkills, setFrontSkills] = useState(FRONT_SKILLS)
  const [backSkills, setBackSkills] = useState(BACKEND_SKILLS)
  const [tools, setTools] = useState(TOOLS_METHODS)



  return (
    <section id='experience'>
      <h5>what Skill i Have</h5>
      <h2 >My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontSkills.map((skill, index) => (
              <article key={index} className="experience__details">
                <GiProgression className='experience__details-icon' />
                <div className='experience__properties'>
                  <h4>{skill.name}</h4>
                  <small className='text-light'>{skill.level}</small>
                </div>
              </article>
            ))}
          </div>

        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backSkills.map((skill, index) => (
              <article key={index} className="experience__details">
                <GiProgression className='experience__details-icon' />
                <div className='experience__properties'>
                  <h4 className='experience__name'>{skill.name}</h4>
                  <small className='text-light'>{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__tools">
          <h3>Tools & Methods</h3>
          <div className="experience__content">
            {tools.map((skill, index) => (
              <article key={index} className="experience__details">
                <GiProgression className='experience__details-icon' />
                <div className='experience__properties'>
                  <h4 className='experience__name'>{skill.name}</h4>
                  <small className='text-light'>{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience