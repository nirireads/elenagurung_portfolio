import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='top'>
                    <h3>Elena Gurung</h3>
                </div>
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
                <div class="copyright">
                    © Copyright <strong><span>Elena Gurung</span></strong>. All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer
