import React from 'react'
import './Resume.css'
import PDF from '../../assets/devResume.pdf'

const Resume = () => {
    return (
        <div>
            <h2 className="resume-heading" id="resume">Resume</h2>
            <p>For the sake of scrolling, feel free to check out my resume below...</p>
            <a href = {PDF} target = "_blank"><button className="resume-button">View Resume</button></a>
        </div>
    )
}

export default Resume