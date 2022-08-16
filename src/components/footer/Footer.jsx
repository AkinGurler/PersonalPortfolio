import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Akın Software</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ak%C4%B1n-g%C3%BCrler-524a67231/"><AiFillLinkedin/></a>
        <a href="https://www.instagram.com/akingurler/"> <AiFillInstagram/></a>
        <a href="https://github.com/AkinGurler"><AiFillGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Akın Gürler
        </small>
      </div>
    </footer>
  )
}

export default Footer