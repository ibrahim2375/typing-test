import React from 'react'
import '../css/Contact.css'
import backgroundImage from '../img/contact background.jpg'
function Contact() {
    return (
        <div className="contact">
            <img src={backgroundImage} alt="background" />
            <form>
                <div className="txt">
                    <h2>Contact Us 🤖</h2>
                    <p>it’s to get any help you need it in our site...</p>
                </div>
                <input className="input" type="email" name="email" placeholder="email" />
                <textarea className="message" name="message" placeholder="message"></textarea>
                <button className="btn-send">Send</button>

            </form>
        </div>
    )
}

export default Contact