import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../LanguageContext';
import { englishContent, spanishContent } from './content';
import { Link, useLocation } from 'react-router-dom';
import './FoodMenuNav.css'

export default function FoodMenuNav({ sectionRefs }) {
    const { currentLanguage, setCurrentLanguage } = useLanguage();
    const content = currentLanguage === 'english' ? englishContent : spanishContent;
    const [lastScrollPos, setLastScrollPos] = useState(0);

    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos < lastScrollPos) {
                setIsScrollingUp(true);
            } else {
                setIsScrollingUp(false);
            }

            setLastScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollPos]);

    useEffect(() => {
        const menuSection = document.getElementById('food-menu');
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsScrollingDown(true);
                } else {
                    setIsScrollingDown(false);
                }
            },
            { threshold: [0] } // Trigger when at least 1 pixel is visible
        );

        if (menuSection) {
            observer.observe(menuSection);
        }

        return () => {
            if (menuSection) {
                observer.unobserve(menuSection);
            }
        };
    }, []);

    // const navBarClass = isScrollingDown ? 'nav-bar hidden' : 'nav-bar';
    const navBarClass = isScrollingDown ? 'menu-nav sticky' : 'menu-nav up';

    // const navBarClassUp = isScrollingUp ? 'menu-nav sticky up' : 'menu-nav';

    const scrollToSection = (section) => {
        const sectionElement = sectionRefs[section];
        if (sectionElement) {
            // sectionElement.scrollIntoView({ behavior: 'smooth' });

            const yOffset = -170;
            const topOffset = sectionElement.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
    };

    return (
        <nav className={navBarClass}>
            <div className='menu-nav-options'>
                <div className='first-two-menu-buttons'>
                    <div>
                        <button className='menu-nav-button' onClick={() => scrollToSection('Appetizers')}>
                            {content.appetizers}
                        </button>
                    </div>

                    <div>
                        <button className='menu-nav-button' onClick={() => scrollToSection('Salads')}>
                            {content.salads}
                        </button>
                    </div>
                </div>

                <div className='second-two-menu-buttons'>
                    <div>
                        <button
                            className='menu-nav-button'
                            onClick={() => scrollToSection('Entrees')}
                        >
                            {content.entrees}
                        </button>
                    </div>

                    <div>
                        <button
                            className='menu-nav-button'
                            onClick={() => scrollToSection('Desserts')}
                        >
                            {content.desserts}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
