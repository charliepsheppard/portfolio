import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <h2 className='contact-heading'>Contact</h2>
            <a href='mailto:sheppard.charlie24@gmail.com' className='icon-link'><i class="far fa-envelope fa-3x"></i></a>
            <a href='tel:8022384089' className='icon-link'><i class="fas fa-phone fa-3x"></i></a>
            <a href='https://github.com/charliepsheppard' target = "_blank" className='icon-link'><i className="fab fa-github fa-3x"></i></a>
            <a href='https://www.linkedin.com/in/charlespsheppard/' target = "_blank" className='icon-link'><i className="fab fa-linkedin-in fa-3x"></i></a>
        </div>
    )
}

export default Contact 