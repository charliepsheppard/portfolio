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
                <a href="https://mystifying-lalande-386bba.netlify.com/" target = "_blank">
                    <img src={War} alt="" className="work-info" />
                    <p>This is a text</p>
                </a>
                <br />
                <a href="http://painstaking-air.surge.sh/" target = "_blank">
                    <img src={ArticleSmart} alt="" className="work-info" />
                    <p>This is a text</p>
                </a>
                <br />
                <a href="https://scribblerr.herokuapp.com/" target = "_blank">
                    <img src={Scribblr} alt="" className="work-info" />
                    <p>This is a text</p>
                </a>
            </div>
        </div>
    )
}

export default Work