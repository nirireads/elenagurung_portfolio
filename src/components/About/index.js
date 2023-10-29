import React from 'react'
import elena from '../../assets/img/profile-img.jpg'
import './index.scss'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='content'>
                <img src={elena} alt='elena' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>I’m Elena Gurung, a creative content creator,
                        and viner. I started my career as a viner and
                        later moved to Instagram. Since then I have
                        discovered my passion for various topics like
                        acting, dancing, and storytelling.
                        Besides creating content for my Instagram,
                        I do make videos for my YouTube, collaborate
                        with other YouTubers,
                        makeup artist, and various brands collaboration.</p>
                    <p>I’m Elena Gurung, a creative content creator, and viner.</p>
                    <button className='button'>
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
