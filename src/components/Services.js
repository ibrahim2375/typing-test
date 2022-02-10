import React from 'react'
import '../css/Services.css'

function Services(props) {
    return (
        <div className="block">
            <div className="text">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <img className="imgServices" src={props.img} alt="img of service" />
        </div>
    )
}

export default Services;