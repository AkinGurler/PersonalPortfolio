import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mee2.png'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Welcome</h2>
        <h1>Akın Gürler</h1>
        <h3 className='text-light'>Web Developer</h3>
        <CTA />
        <HeaderSocial/>
        {/* <div className="me">
          <img width={500} height={400} src={ME} alt="" />
        </div> */}
        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div> {/* bim specicyfing css */}
    </header>
  )
}

export default header