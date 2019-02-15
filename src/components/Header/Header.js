import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className="nav">
                    <Link to={'/'}>CS</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/work'}>Work</Link>
                    <Link to={'/resume'}>Resume</Link>
            </nav>
        </header>
    )
}

export default Header