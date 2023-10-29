import React from 'react'
import './index.scss'
import ReactTypingEffect from 'react-typing-effect'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                <h1>Elena Gurung</h1>
                <p>I'm
                    <span>
                        <ReactTypingEffect
                            text={["Content Creater.",
                                "Freelancer."]}
                            speed={100}
                            eraseDelay={1000}
                            eraseSpeed={100}
                            typingDelay={500}
                        />
                    </span>
                </p>
                <div className='social-link'>
                    <ul>
                        <li className='nav-item'>
                            <a href="https://www.instagram.com/elenadon_/" class="twitter" target="_blank" rel='noreferrer noopener'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="https://www.facebook.com/elenadon2/" class="twitter" target="_blank" rel='noreferrer noopener'>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="https://www.youtube.com/channel/UCvKGxmYGLOyY1I2iZ6-DC0g" class="twitter" target="_blank" rel='noreferrer noopener'>
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="https://www.tiktok.com/@elenadon_" class="twitter" target="_blank" rel='noreferrer noopener'>
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero
