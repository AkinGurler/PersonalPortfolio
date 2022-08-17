import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import About from './components/about/About'
import Services from './components/services/services'
import Portfolio from './components/portfolio/Portfolio'
import Education from './components/education/Education'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <Header/>
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App