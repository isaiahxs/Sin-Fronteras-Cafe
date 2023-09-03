import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../LanguageContext';
import { englishContent, spanishContent } from './content';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/icons/red-logo-margarita.png';
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

    // const navBarClass = isScrollingDown ? 'nav-bar hidden' : 'nav-bar';
    const navBarClass = isScrollingDown ? 'nav-bar' : 'nav-bar';

    // const scrollToSection = (sectionId) => {
    //     const sectionElement = document.getElementById(sectionId);
    //     sectionElement.scrollIntoView({ behavior: 'smooth' });
    // };

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionId === 'footer') {
            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        } else {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className={navBarClass}>
            <div className='nav-options'>
                <div className='nav-logo-container'>
                    <img src={logo} className='small-logo' alt="Sin Fronteras Logo" onClick={() => scrollToTop()} />
                </div>

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
        </nav>
    )
}
