import React, { useState } from 'react';
import './index.scss';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome, faUser,
    faEnvelope, faSuitcase,
    faChartLine, faBarsStaggered,
    faBars, faBlog, faTimes
} from '@fortawesome/free-solid-svg-icons';

const menuItems = [
    { path: '/', icon: faHome, text: 'Home', section: 'hero' },
    { path: '/about', icon: faUser, text: 'About', section: 'about' },
    { path: '/facts', icon: faChartLine, text: 'My Numbers', section: 'facts' },
    { path: '/portfolio', icon: faBarsStaggered, text: 'Portfolio', section: 'portfolio' },
    { path: '/brands', icon: faSuitcase, text: 'Brands', section: 'brands' },
    // { path: '#services', icon: faSuitcase, text: 'Services' , section:'services'},
    { path: '/testimonials', icon: faBlog, text: 'More From Web', section: 'testimonials' },
    { path: '/contact', icon: faEnvelope, text: 'Contact', section: 'contact' },
];


const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <div className='header'>
            <nav className={`nav-menu ${showNav ? 'mobile-show' : ''}`}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li className='nav-item' key={index}>
                            <Link
                                to={item.section}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                delay={400}
                                activeClass="active"
                                onClick={() => setShowNav(false)}
                            >
                                <div className='center-svg'>
                                    <span className='icon'>
                                        <FontAwesomeIcon icon={item.icon} />
                                    </span>
                                </div>
                                <div className='center-text'>
                                    <span className='button-text'>{item.text}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* HAMBURGER ICON/ CLOSE ICON */}
            <div
                className={` ${showNav ? 'close-icon' : 'hamburger-icon'}`}
                onClick={toggleNav}
            >
                <FontAwesomeIcon icon={showNav ? faTimes : faBars} size="2x" />
            </div>


        </div>
    );
};

export default Navbar;
