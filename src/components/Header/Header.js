import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <ul>
                    <li className='nav-link' className='logo'>Charlie Sheppard</li>
                    <li className='nav-link'>About</li>
                    <li className='nav-link'>Work</li>
                    <li className='nav-link'>Resume</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header