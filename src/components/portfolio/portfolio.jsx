import React, { useState } from 'react'
import './portfolio.css'
import image1 from '../../assets/portfolio1.jpg'
import image2 from '../../assets/portfolio2.jpg'
import image3 from '../../assets/portfolio3.jpg'

const PROJECT_DATA = [
    {
        img: image1, title: 'Web Fitness',
        github: "https://github.com/AkinGurler/WebFitness",
        livedemo: "https://fitnessclubdemo.netlify.app/"
    },
    {
        img: image2, title: 'Web Fitness',
        github: "https://github.com/AkinGurler/WebFitness",
        livedemo: "https://fitnessclubdemo.netlify.app/"
    },
    {
        img: image3, title: 'Web Fitness',
        github: "https://github.com/AkinGurler/WebFitness",
        livedemo: "https://fitnessclubdemo.netlify.app/"
    }
]

const Portfolio = () => {
    const [projects, setProjects] = useState(PROJECT_DATA)
    const [frontSkills, setFrontSkills] = useState(PROJECT_DATA)

    return (
        <section id='portfolio' >
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <container className="portfolio__container">
                {projects.map((item, index) => (
                    <article key={index} className='portfolio__item'>
                        <div className="portfolio__item-image">
                            <img src={item.img} alt="" />
                        </div>
                        <h3>{item.title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={item.github} className='btn'>Github</a>
                            <a href={item.livedemo} className='btn btn-primary'>Live Demo</a>
                        </div>

                    </article>
                ))}

            </container>
        </section>
    )
}

export default Portfolio