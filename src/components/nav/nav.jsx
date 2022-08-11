import React, { useState } from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'
import { RiServiceFill } from 'react-icons/ri'
import { AiFillContacts } from 'react-icons/ai'

const Nav = () => {
    const [active, setActive] = useState('')
    return (
        <nav>
            <a href="#"
                onClick={() => setActive('#')}
                className={active === '#' ? 'active' : ''}><FaHome /></a>
            <a href="#about"
                onClick={() => setActive('#about')}
                className={active === '#about' ? 'active' : ''}
            ><FaUser /></a>
            <a href="#experience"
                onClick={() => setActive('#experience')}
                className={active === '#experience' ? 'active' : ''}
            ><FaBook /></a>
            <a href="#services"
                onClick={() => setActive('#services')}
                className={active === '#services' ? 'active' : ''}
            ><RiServiceFill /></a>
            <a href="#contact"
                onClick={() => setActive('#contact')}
                className={active === '#contact' ? 'active' : ''}
            ><AiFillContacts /></a>
        </nav>
    )
}



export default Nav