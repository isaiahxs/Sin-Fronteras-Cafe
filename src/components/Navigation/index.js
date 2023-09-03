import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../LanguageContext';
import { englishContent, spanishContent } from './content';
import { Link, useLocation } from 'react-router-dom';
// import logo from '../../../assets/icons/scissors-comb-white.png';
import './Navigation.css'

export default function Navigation() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();
    const content = currentLanguage === 'english' ? englishContent : spanishContent;
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > lastScrollPos) {
                setIsScrollingDown(true);
            } else {
                setIsScrollingDown(false);
            }

            setLastScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollPos]);

    const navBarClass = isScrollingDown ? 'nav-bar hidden' : 'nav-bar';

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className={navBarClass}>
            <div className='nav-options'>
                {/* <div className='nav-logo-container'>
                    <img src={logo} className='small-logo' alt="Isaula's Logo" onClick={() => scrollToTop()} />
                </div> */}

                {/* <div>
                    Home
                </div>

                <div>
                    Menu
                </div>

                <div>
                    About
                </div>

                <div>
                    Contact
                </div> */}

                <div>
                    <Link to='/'>
                        <button className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}>
                            Home
                        </button>
                    </Link>
                </div>

                <div>
                    {/* <Link to='/annapolis'> */}
                    <button className={`nav-button ${location.pathname === '/annapolis' ? 'active' : ''}`}>
                        Menu
                    </button>
                    {/* </Link> */}
                </div>

                <div>
                    {/* <Link to='/annapolis'> */}
                    <button className={`nav-button ${location.pathname === '/annapolis' ? 'active' : ''}`}>
                        About
                    </button>
                    {/* </Link> */}
                </div>

                <div>
                    {/* <Link to='/annapolis'> */}
                    <button className={`nav-button ${location.pathname === '/annapolis' ? 'active' : ''}`}>
                        Contact
                    </button>
                    {/* </Link> */}
                </div>

                {/* <li>
                    <button className='nav-button' onClick={() => scrollToSection('services')}>
                        {content.services}
                    </button>
                </li> */}

                {/* <li>
                    <button className='nav-button' onClick={() => scrollToSection('reviews')}>
                        {content.reviews}
                    </button>
                </li> */}
            </div>
        </nav>
    )
}
