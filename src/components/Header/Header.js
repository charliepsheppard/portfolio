import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className="nav">
                    <Link to={'/'} className='nav-link' className='logo'>CS</Link>
                    <Link to={'/about'} className='nav-link'>About</Link>
                    <Link to={'/work'} className='nav-link'>Work</Link>
                    <Link to={'/resume'} className='nav-link'>Resume</Link>
            </nav>
        </header>
    )
}

export default Header