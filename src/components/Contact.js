import React, { useRef } from 'react'
import '../css/Contact.css'
import swal from 'sweetalert';
import backgroundImage from '../img/contact background.jpg'
import { db } from '../database/firebase';
import {
    setDoc, doc, Timestamp
} from "firebase/firestore";
function Contact() {
    const email = useRef();
    const message = useRef();
    async function sendData() {
        await setDoc(doc(db, "mails", email.current.value), {
            email: email.current.value,
            message: message.current.value,
            sendedAt: Timestamp.fromDate(new Date()),
        });
        swal({
            title: "Good job!",
            text: email.current.value,
            icon: "success",
            button: "Aww yiss!",
        });
    }
    const checkValidaty = (e) => {
        e.preventDefault();
        if (email.current.value === "" || message.current.value === "") {
            swal({
                title: "warning!",
                text: "email or  message cant be empty  ",
                icon: "error",
                button: "Aww yiss!",
            });
        }
        else if (email.current.value === " ") {
            swal({
                title: "warning!",
                text: "email",
                icon: "error",
                button: "Aww yiss!",
            });
        }
        else {
            sendData();
        }
    }

    return (
        <div className="contact" id="mail">
            <img src={backgroundImage} alt="background" />
            <form>
                <div className="txt">
                    <h2>Contact Us 🤖</h2>
                    <p>it’s to get any help you need it in our site...</p>
                </div>
                <input className="input" type="email" name="email" placeholder="  email" ref={email} />
                <textarea className="message" name="message" placeholder="message" ref={message}></textarea>
                <button className="btn-send" onClick={checkValidaty}> Send</button>

            </form>
        </div>
    )
}

export default Contact