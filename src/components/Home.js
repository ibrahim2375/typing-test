import React, { useEffect, useRef, useState } from 'react'
import '../css/Home.css';
import Landing from '../img/Home landing.png'
import Services from './Services';
import img1 from '../img/services1.png';
import img2 from '../img/services2.png';
import img3 from '../img/services3.png';
import img4 from '../img/services4.png';
import Test from './Test';
import Contact from './Contact'
import Footer from './Footer'
import { Typewriter } from 'react-simple-typewriter';


function Home() {
    const block = useRef();
    const [state, setState] = useState(false);
    const data = [
        {
            i: 1697,
            title: "Learn Touch typing Online  .",
            description: "You will see improvement in a few weeks if you practice often.",
            img: img1
        },
        {
            i: 2732,
            title: "Proper hand posture guide.",
            description: "Will show you the correct hand posture on every key as you type.",
            img: img2
        },
        {
            i: 32895,
            title: "It's a game",
            description: "It's a game. An engaging and interactive experience while you are learning how to type.",
            img: img3
        },
        {
            i: 525154,
            title: "How do you type faster?",
            description: "To type faster, you need to learn how to position yourself correctly, use all your fingers, hit the right keys without looking and avoid making mistakes.",
            img: img4
        }
    ]
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY >= 480) {
                setState(true);
            }
        })
    }, [])
    return (
        <>
            <div className="container">
                <div className="home">
                    <div className="landingInfo">
                        <div className="title"><Typewriter loop cursor cursorStyle='_' typeSpeed={200} delaySpeed={500} words={["Are you still typing ", "with two fingers ?"]} />  </div>
                        <p className="description">
                            test your speed and accuracy using our free
                            typing test. Use your results to see how far
                            a proper typing method could take you!
                        </p>
                        <a href="#typing" className="btn-start">Start From Here</a>
                    </div>
                    <div className="landingImage">
                        <img src={Landing} alt="LandingImage" />
                    </div>
                </div>
                <div className="services">
                    <div className="head">
                        <h1>App Services</h1>
                    </div>
                    <div className={`blocks ${state ? 'fadeIn' : ''}`} ref={block} >
                        {
                            data.map((d, i) => {

                                return (
                                    <div key={i}>
                                        <Services key={i} title={d.title} description={d.description} img={d.img} />
                                    </div>
                                )

                            })

                        }
                    </div>

                </div>
                <div className="typing" id="typing">
                    <h1 style={{ textAlign: 'center' }}>Test Typing</h1>
                    <div className="typingTest">
                        <Test />
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    )
}

export default Home