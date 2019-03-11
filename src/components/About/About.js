import React from 'react'
import './About.css'

const About = (props) => {
    return(
        <div className="about" id="about">
            <h2 ref={props.appRef} >About Me</h2>
            <div className='about-content'>
                <p>
                    {/* So, who is Charlie? Great question.
                    I grew up in the beautiful state of Vermont in its most populated city, Burlington. 
                    I always wanted to move to New York City, but like so many before me, it was difficult. I would sit throughout my teens and wait for the day until I would be able to move here. The day finally came when I graduated college. After traveling through Europe the summer following graduation, much to my parents chagrin, I picked up my one suitcase (yes, one), and moved myself to NYC without knowing anyone. I worked in tech sales at a company called Trustpilot doing business development for about 11 months. I then found my way into a position at Yelp doing sales work as well. And yes, I made 100+ dials every day. After a while I knew it was not what I was supposed to do. I wanted something new, something fresh, something challenging. 
                    I had done some self-teaching to try and learn how to code twice before, but I kept hitting walls which made it difficult to continue. When I left Yelp, I knew that I had to change something, and that is when General Assembly came into the mix. I realized that I wanted to devote my time and energy to making my dream of becoming a developer a reality. And here I sit, not broken hearted, but excited and ready to work for my future. */}

                    So, who is Charlie? Great question.
                    <br />
                    <br />
                    I grew up in the beautiful state of Vermont in its most populated city, Burlington. I always wanted to move to New York City, and in 2016 made that a reality. Involved in sales at both smaller and larger tech companies I knew I was looking for more.
                    <br />
                    <br />
                    I had an interest in coding and began self-teaching, and I enjoyed it thoroughly. I finally made the decision to pursue web development full time and enrolled in General Assembly's Web Development Immersive where I learned full stack development, learning technologies such as React, SQL, NodeJs, Express, Ruby, and Rails. 
                    <br />
                    <br />
                    What I am looking for in a position is the ability to continue my growth, focusing on learning and implementing new stacks to create reliable applications. Through my time returning to school, what kept me motivated was the ability to improve my knowledge in a subject that is constantly evolving. 
                </p>
            </div>
        </div>
    )
}

export default About