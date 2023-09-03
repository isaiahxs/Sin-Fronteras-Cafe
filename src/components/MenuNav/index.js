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
            // sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    };

    return (
        <nav className='menu-nav'>
            <div className='menu-nav-options'>
                <div>
                    <button className='menu-nav-button' onClick={() => scrollToSection('Appetizers')}>
                        Appetizers
                    </button>
                </div>

                <div>
                    <button className='menu-nav-button' onClick={() => scrollToSection('Salads')}>
                        Salads
                    </button>
                </div>

                <div>
                    <button
                        className='menu-nav-button'
                        onClick={() => scrollToSection('Entrees')}
                    >
                        Entrees
                    </button>
                </div>

                <div>
                    <button
                        className='menu-nav-button'
                        onClick={() => scrollToSection('Desserts')}
                    >
                        Desserts
                    </button>
                </div>
            </div>
        </nav>
    )
}
