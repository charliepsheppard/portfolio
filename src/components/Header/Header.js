import React from 'react'
import './Header.css'
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons'

const Header = () =>  {
    return (
        <header>
            <nav className="nav">
                <ul>
                    <a href="#home-page"><li className='logo'>CHARLIE SHEPPARD</li></a>
                    <a href="#about"><li className='nav-link'>About</li></a>
                    <a href="#work"><li className='nav-link'>Work</li></a>
                    <a href="#resume"><li className='nav-link'>Resume</li></a>
                    <a href="#contact"><li className='nav-link'>Contact</li></a>
                    <a href="https://github.com/charliepsheppard" target = "_blank"><i className="fab fa-github fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/charlespsheppard/" target = "_blank"><i className="fab fa-linkedin-in fa-2x"></i></a>
                </ul>
            </nav>
        </header>
    )    
    
}

export default Header