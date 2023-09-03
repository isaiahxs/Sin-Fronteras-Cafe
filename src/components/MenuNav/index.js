import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../LanguageContext';
import { englishContent, spanishContent } from './content';
import { Link, useLocation } from 'react-router-dom';
import './MenuNav.css'

export default function MenuNav({ sectionRefs }) {
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

    // const scrollToSection = (sectionText) => {
    //     const sectionElement = document.getElementByText(sectionText);
    //     sectionElement.scrollIntoView({ behavior: 'smooth' });
    // };

    console.log('sectionRefs in MenuNav:', sectionRefs);


    // const scrollToSection = (sectionText) => {
    //     const sectionElement = sectionRefs[sectionText];
    //     if (sectionElement) {
    //         sectionElement.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    const scrollToSection = (section) => {
        const sectionElement = sectionRefs[section];
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className='menu-nav'>
            <div className='menu-nav-options'>
                <div>
                    <button className='nav-button' onClick={() => scrollToSection('appetizers')}>
                        Appetizers
                    </button>
                </div>

                <div>
                    <button className='nav-button' onClick={() => scrollToSection('salads')}>
                        Salads
                    </button>
                </div>

                <div>
                    <button
                        className={`nav-button`}
                        onClick={() => scrollToSection('entrees')}
                    >
                        Entrees
                    </button>
                </div>

                <div>
                    <button
                        className={`nav-button`}
                        onClick={() => scrollToSection('desserts')}
                    >
                        Desserts
                    </button>
                </div>
            </div>
        </nav>
    )
}
