import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../LanguageContext';
import { englishContent, spanishContent } from './content';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/icons/red-logo-margarita.png';
import hamburger from '../../assets/icons/hamburger.png';
import './Navigation.css'

export default function Navigation() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();
    const content = currentLanguage === 'english' ? englishContent : spanishContent;
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const location = useLocation();

    const navRef = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavOpen = () => {
        setIsNavOpen(!isNavOpen);
    }

    useEffect(() => {
        if (isNavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isNavOpen]);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isNavOpen && navRef.current && !navRef.current.contains(e.target)) {
                setIsNavOpen(false);
            }
        };

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isNavOpen]);

    //to have hiding when scrolling ----------------------------------------------------------
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const currentScrollPos = window.pageYOffset;

    //         if (currentScrollPos > lastScrollPos) {
    //             setIsScrollingDown(true);
    //         } else {
    //             setIsScrollingDown(false);
    //         }

    //         setLastScrollPos(currentScrollPos);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [lastScrollPos]);

    // // const navBarClass = isScrollingDown ? 'nav-bar hidden' : 'nav-bar';
    // const navBarClass = isScrollingDown ? 'nav-bar' : 'nav-bar';

    // const scrollToSection = (sectionId) => {
    //     const sectionElement = document.getElementById(sectionId);
    //     sectionElement.scrollIntoView({ behavior: 'smooth' });
    // };
    //----------------------------------------------------------

    const scrollToSection = (sectionId) => {
        setIsNavOpen(false);

        const sectionElement = document.getElementById(sectionId);
        if (sectionId === 'footer') {
            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        } else {
            const yOffset = -90;
            const topOffset = sectionElement.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
            // sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className='nav-bar'>
            <div className='nav-options'>
                <div className='nav-logo-container'>
                    <img src={logo} className='small-logo' alt="Sin Fronteras Logo" onClick={() => scrollToTop()} />
                </div>

                <div className='nav-name'>
                    Sin Fronteras Cafe
                </div>

                <div className='nav-logo-container'>
                    <button className='hamburger-menu' onClick={toggleNavOpen}>
                        <img src={hamburger} className='small-logo' alt='Hamburger Menu' />
                    </button>
                </div>

                {isNavOpen && <div className='backdrop'></div>}

                <div ref={navRef} className={`nav-panel ${isNavOpen ? 'nav-open' : ''}`}>
                    <button className='x-button' onClick={toggleNavOpen}>X</button>

                    <div>
                        <button className='nav-button' onClick={() => scrollToSection('menu')}>
                            Menu
                        </button>
                    </div>

                    <div>
                        <button className='nav-button' onClick={() => scrollToSection('reviews')}>
                            Reviews
                        </button>
                    </div>

                    <div>
                        <button
                            className={`nav-button`}
                            onClick={() => scrollToSection('footer')}
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
