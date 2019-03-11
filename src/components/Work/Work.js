import React from 'react'
import './Work.css'
import War from '../../assets/War.png'
import ArticleSmart from '../../assets/ArticleSmart.png'
import Scribblr from '../../assets/Scribblr.png'
import BodyShift from '../../assets/BodyShift.png'


const Work = () => {
    return (
        <div id="work">
            <h2 className="work-heading">Work</h2>
            <div className="work-card">
                <div className="individual-work">
                    <a href="https://body-shift.herokuapp.com/" target = "_blank" className='work-link'>
                        <img src={BodyShift} alt="" className="work-info" />
                        <p><span className='work-label'>Description: </span>Solo full-stack app with CRUD functionality focusing on health and wellness.
                        <br />
                        <span className='work-label'>Stack: </span>React, React-Router, Rails, Postgres
                        </p>
                    </a>
                </div>
                <br />
                <div className="individual-work">
                    <a href="https://scribblerr.herokuapp.com/" target = "_blank" className='work-link'>
                        <img src={Scribblr} alt="" className="work-info" />
                        <p><span className='work-label'>Description: </span>Group project focused on utilizing Git and GitHub. Worked with 3 other developers to develop skills in a work-place collaboration setting to create a full-stack app.<br />
                        <span className='work-label'>Stack: </span>React, React-Router React-Bootstrap, Express, Sequelize, Postgres
                        </p>
                    </a>
                </div>
                <br />
                <div className="individual-work">
                    <a href="http://painstaking-air.surge.sh/" target = "_blank" className='work-link'>
                        <img src={ArticleSmart} alt="" className="work-info" />
                        <p><span className='work-label'>Description: </span>Solo React project focusing on the use of 3rd party API's as well as general use of React.<br />
                        <span className='work-label'>Stack: </span>React
                        </p>
                    </a>
                </div>
                <br />
                <div className="individual-work">
                    <a href="https://mystifying-lalande-386bba.netlify.com/" target = "_blank" className='work-link'>
                        <img src={War} alt="" className="work-info" />
                        <p><span className='work-label'>Description: </span>Solo project focusing on the use of vanilla js to create a fully functional game of War. The purpose of this project for myself was to create an app heavily weighted in logic specific to looping as well as DOM manipulation.<br />
                        <span className='work-label'>Stack: </span>HTML5, CSS3, Vanilla JS
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Work