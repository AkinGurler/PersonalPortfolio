import React from 'react'
import {IoLogoLinkedin} from 'react-icons/io'
import {IoLogoGithub} from 'react-icons/io'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="linkedin" target="_blank"><IoLogoLinkedin/></a>
        <a href="github" target="_blank"><IoLogoGithub/></a>
        

    </div>
  )
}

export default HeaderSocial