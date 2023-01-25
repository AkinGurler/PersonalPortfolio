import React from 'react'
import './education.scss'
import { Chrono } from "react-chrono";

const Education = () => {
    const items = [{
        title: "2023",
        cardTitle: "Istanbul University-Cerrahpaşa",
        url: "https://www.iuc.edu.tr/tr/_",
        cardSubtitle: "Undergraduated",
        cardDetailedText: "Computer Engineering-GPA=3.29",

    }, {
        title: "2023",
        cardTitle: "Istanbul University-Cerrahpaşa",
        url: "https://www.iuc.edu.tr/tr/_",
        cardSubtitle: "Undergraduated",
        cardDetailedText: "Computer Engineering-GPA=3.29"
    }];

    return (
        <section id='education' >
            <h5>What I Learn</h5>
            <h2>My Education </h2>
            <div className="container education__container">
                <div className="education__schools">
                    <div className="education__school">
                        <h4>Istanbul <br />University</h4>
                        <small className='text-light'>2023 Istanbul</small>
                    </div>
                    <div className="education__school">
                        <h4>Recep Güngör<br /> Anatolian<br /> High School</h4>
                        <small className='text-light'>2018 Istanbul</small>
                    </div>


                </div>
                <div className="timeline">
                    <div className="education__results">
                        <div className="education__result__container">
                        <div className="education__result__content">
                            <h4>Under graduate</h4>
                            <small className='text-light'>GPA=3.29</small>
                        </div>
                    </div>


                    <div className="education__result__container">
                        <div className="education__result__content">
                            <h4>High School<br /> Diploma</h4>
                            <small className='text-light'>Graduate</small>
                        </div>
                    </div>
                    </div>
                    


                </div>

            </div>

        </section>
    )
}

export default Education