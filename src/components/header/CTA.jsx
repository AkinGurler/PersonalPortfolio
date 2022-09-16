import React from 'react'
import CV from '../../assets/CV-AkınGürler.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} target="_blank" rel="noreferrer" className='btn btn-primary'>Download CV</a>
        <a href='#contact' className='btn btn-primary' >Let's Contact</a>
    </div>
  )
}

export default CTA