import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello</h5>
        <h1>Akınke</h1>
        <h5 className='text-light'>Web Developer</h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div> {/* bim specicyfing css */}
    </header>
  )
}

export default header