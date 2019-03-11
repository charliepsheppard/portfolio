import React from 'react'
import './Home.css'
import photo from '../../assets/myPhoto.png'

const Home = () => {
    return (
        <div id='home-page'>
            <img src={photo} className="photo" />
            <h1 className='home-heading'><span className='hi'>Hi, </span><br /><span className='charlie'>I'm Charlie</span></h1>
        </div>
    )
}

export default Home