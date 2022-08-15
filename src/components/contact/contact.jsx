import React, { useState } from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
const CONTACT_DATA = [
  {
    type: "Email",
    contact: "akingurler.b@gmail.com",
    link: "mailto:akingurler.b@gmail.com",
    icon: <AiOutlineMail />
  },
  {
    type: "WhatsApp",
    contact: "(553)-460-00-27",
    link: "http://api.whatsapp.com/send?phone=905534600027",
    icon: <AiOutlineWhatsApp />
  }
]
const Contact = () => {
  const [contactData, setContactData] = useState(CONTACT_DATA)
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact ME</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {contactData.map((contact, index) => (
            <article key={index} className="contact__option">
              {contact.icon}
              <h4>{contact.type}</h4>
              <h5>{contact.contact}</h5>
              <a href={contact.link} target="_blank">Send a message</a>
            </article>
          ))}
        </div>
        <form action="">
          <input
            type="text"
            name='name'
            placeholder='Your Full name' required
          />
          <input
            type="email"
            name='email'
            placeholder='Your Email' required
          />
          <textarea
            name="message"
            rows="7"
            placeholder='Your Message'>
          </textarea>
          <button
          type='submit'
          className='btn btn primary'
          >
            Send a Message
          </button>

        </form>
      </div>
    </section>
  )
}

export default Contact