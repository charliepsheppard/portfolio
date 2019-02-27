import React from 'react'
import './Resume.css'
import PDF from '../../assets/devResume.pdf'

const Resume = () => {
    return (
        <div>
            <a href = {PDF} target = "_blank"><button>View Resume</button></a>
        </div>
    )
}

export default Resume