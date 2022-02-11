// import React, { useState, useEffect } from 'react'
import '../css/About.css'
import aboutImag_1 from '../img/about1.jpg'
import aboutImag_2 from '../img/about2.jpg'
import Footer from './Footer'
import User1 from '../img/user1.jpg'
import User2 from '../img/user2.jpg'

function About() {
  const stories = [
    {
      id: 1,
      comment: "you will benefit from a typing training program, yes it's realy useful and added new skill.",
      img: User1
    },
    {
      id: 2,
      comment: " if it means typing more slowly at first.You will see improvement in a few weeks ",
      img: User2
    }
  ]
  return (

    <div>
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
      <div className="opinin">
        <h1>Success Stories</h1>
        <div className="stories" >
          {stories.map((story, i) => {
            return <div className="story" key={i}>
              <div className="border">
                <img src={story.img} alt="user" />
              </div>
              <div className="comment">
                <p> <q>{story.comment}</q></p>
              </div>
            </div>

          })}
        </div>

      </div>
      <Footer className="stikyFooter" />
    </div>
  )

}

export default About