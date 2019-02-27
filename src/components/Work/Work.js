import React from 'react'
import './Work.css'
import War from '../../assets/War.png'
import ArticleSmart from '../../assets/ArticleSmart.png'
import Scribblr from '../../assets/Scribblr.png'


const Work = () => {
    return (
        <div id="work">
            <h2 className="work-heading">Work</h2>
            <div className="work-card">
                <div>
                <img src={War} alt="" className="work-info" />
                <span>This is a text</span>
                </div>
                <br />
                <div>
                <img src={ArticleSmart} alt="" className="work-info" />
                <span>This is a text</span>
                </div>
                <br />
                <div>
                <img src={Scribblr} alt="" className="work-info" />
                <span>This is a text</span>
                </div>
            </div>
        </div>
    )
}

export default Work