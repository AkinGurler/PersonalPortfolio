import React, { useState } from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa'
import { SiBookstack } from 'react-icons/si'
import { BsFillTelephoneInboundFill } from 'react-icons/bs'

const Nav = () => {
    const [active, setActive] = useState('')
    return (
        <nav>
            <div className="navbar__button">
                <a href="#"
                    onClick={() => setActive('#')}
                    className={active === '#' ? 'active' : ''}><FaHome /></a>
                <h5 className='button__definition'> Home</h5>
            </div>


            <div className="navbar__button">
                <a href="#about"
                    onClick={() => setActive('#about')}
                    className={active === '#about' ? 'active' : ''}
                ><FaUser /></a>
                <h5 className='button__definition'> About</h5>
            </div>

            <div className="navbar__button">
                <a href="#experience"
                    onClick={() => setActive('#experience')}
                    className={active === '#experience' ? 'active' : ''}
                ><FaLaptopCode /></a>
                <h5 className='button__definition'> Skills</h5>
            </div>

            <div className="navbar__button">
                <a href="#portfolio"
                    onClick={() => setActive('#portfolio')}
                    className={active === '#portfolio' ? 'active' : ''}
                ><SiBookstack /></a>

                <h5 className='button__definition'> Portfolio</h5>
            </div>

            <div className="navbar__button">
                <a href="#contact"
                    onClick={() => setActive('#contact')}
                    className={active === '#contact' ? 'active' : ''}
                ><BsFillTelephoneInboundFill /></a>
                <h5 className='button__definition'>Contact</h5>
            </div>


        </nav>
    )
}



export default Nav