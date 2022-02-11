import React from 'react'
import '../css/About.css'
import aboutImag_1 from '../img/about1.jpg'
import aboutImag_2 from '../img/about2.jpg'
import Footer from './Footer'
function About() {
  return (
    <>
      <div className="about">
        <div className="txtHead">
          <h1>About Us</h1>
          <p>Typing is a  way to learn or perfect their keyboarding technique. What’s more, we help you to find this service on our site.</p>
        </div>
        <div className="aboutImg">
          <img src={aboutImag_1} alt="img 1" />
          <img src={aboutImag_2} alt="img 2" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About