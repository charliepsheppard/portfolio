import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <h2 className='contact-heading'>Contact Me</h2><br />
            <a href='mailto:sheppard.charlie24@gmail.com'><button className='contact-button'>Email me</button></a><br />
            <a href='tel:8022384089'><button className='contact-button'>Call me</button></a><br />
            <a href='https://www.linkedin.com/in/charlespsheppard/' target = "_blank"><button className='contact-button'>Find me on LinkedIn</button></a><br />
            <a href='https://github.com/charliepsheppard' target = "_blank"><button className='contact-button'>Find me on GitHub</button></a>
        </div>
    )
}

export default Contact 