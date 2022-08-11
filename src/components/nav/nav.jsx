import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {RiServiceFill} from 'react-icons/ri'
import {AiFillContacts} from 'react-icons/ai'

const nav = () => {
  return (
    <nav>
    <a href="#"><FaHome/></a>
    <a href="#about"><FaUser/></a>
    <a href="#experience"><FaBook/></a>
    <a href="#services"><RiServiceFill/></a>
    <a href="#contact"><AiFillContacts/></a>
    </nav>
  )
}

export default nav