import React, { useState } from 'react'
import './portfolio.css'
import webfitnessgif from '../../assets/web-fitness.gif'
import bloggif from '../../assets/blog-gif.gif'
import backgammonimg from '../../assets/backgammonimg.png'

import tictactoegif from '../../assets/tic-tac-toe.gif'

const PROJECT_DATA = [
    {
        img: webfitnessgif,
        title: 'Web Fitness',
        github: "https://github.com/AkinGurler/WebFitness",
        livedemo: "https://fitnessclubdemo.netlify.app/"
    },
    {
        img: bloggif,
        title: 'Blog-City',
        github: "https://github.com/AkinGurler/Blog",
        livedemo: "https://blogcity-frontend.herokuapp.com/posts"
    },
    {
        img: backgammonimg,
        title: 'Backgammon',
        github: "https://github.com/AkinGurler/Backgammon",
        livedemo: ""
    },
    {
        img: tictactoegif,
        title: 'Tic-Tac-Toe-React',
        github: "https://github.com/AkinGurler/Tic-Tac-Toe-React",
        livedemo: "https://letsplay-tic-tac-toe.netlify.app/"
    },
   

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
                            {item.livedemo ? 
                            <a href={item.livedemo} target="_blank" rel="noopener noreferrer">
                            <img src={item.img} alt="" />
                            </a>:<img src={item.img} alt="" /> }
                            
                            
                        </div>
                        <h3>{item.title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={item.github} className='btn'>Github</a>
                            {item.livedemo && <a href={item.livedemo} className='btn btn-primary'>Live Demo</a> }
                            
                        </div>

                    </article>
                ))}

            </container>
        </section>
    )
}

export default Portfolio