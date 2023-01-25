import React from 'react'
import './header.scss'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
       
        <h1>Akın Gürler</h1>
        <h3 className='text-light'>Web Developer</h3>
        <CTA />
        <HeaderSocial/>
        
        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div> {/* bim specicyfing css */}
    </header>
  )
}

export default header