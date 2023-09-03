import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext';
import { englishContent, spanishContent } from './content';
import { Link } from 'react-router-dom';
import fajitas from '../../assets/images/fajitas.avif';
import map_pin from '../../assets/icons/map-pin.svg';
import phone from '../../assets/icons/phone-icon.svg';
import facebook from '../../assets/icons/facebook-logo.svg';
import './Hero.css';

export default function Hero() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();

    const toggleLanguage = () => {
        setCurrentLanguage(currentLanguage === 'english' ? 'spanish' : 'english');
    };

    const content = currentLanguage === 'english' ? englishContent : spanishContent;

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className='hero-container'>
            <div className='hero-section'>
                <div className='hero-information'>
                    {/* <button className='language-toggle-button' onClick={toggleLanguage}>
                        {currentLanguage === 'english' ? 'Español' : 'English'}
                    </button> */}
                    <img src={fajitas} className='hero-background' alt='Fajitas Background' />
                    <div className='hero-text-section'>
                        <h1 className='title'>{content.title}</h1>
                        <h2 className='location'>{content.location}</h2>
                        {/* <button className='language-toggle-button' onClick={toggleLanguage}>
                            {currentLanguage === 'english' ? 'Español' : 'English'}
                        </button> */}
                    </div>
                </div>

                <div className='section-below-hero'>
                    {/* <button className='language-toggle-button' onClick={toggleLanguage}>
                        {currentLanguage === 'english' ? 'Español' : 'English'}
                    </button> */}

                    <div className='hero-descriptions-container'>
                        <h3 className='description welcome urbanist'>
                            {content.description}
                        </h3>
                        <button className='language-toggle-button' onClick={toggleLanguage}>
                            {currentLanguage === 'english' ? 'Español' : 'English'}
                        </button>

                        <h3 className='description description-2 urbanist'>
                            {content.description2}
                        </h3>

                        <h3 className='description description-hours urbanist'>
                            {content.hours}
                        </h3>

                        <h3 className='description description-hours description-hours-bottom urbanist'>
                            {content.hoursSunday}
                        </h3>
                    </div>

                    <div className='hero-buttons-container'>
                        <button className='view-services-hero' onClick={() => scrollToSection('services')}>
                            {content.viewServices}
                        </button>

                        <button className='view-reviews-hero' onClick={() => scrollToSection('reviews')}>
                            {content.viewReviews}
                        </button>

                        <a href="https://www.google.com/search?q=Sin+Fronteras+Cafe%2C+Annapolis+MD&sca_esv=562253820&rlz=1C1CHBF_enUS720US720&sxsrf=AB5stBi9daaIEpwg-kweVvniBPFj-Gk-Hg%3A1693701433901&ei=OdXzZLDUNoKawbkP1K2OgAQ&ved=0ahUKEwjw1MrCmY2BAxUCTTABHdSWA0AQ4dUDCBA&uact=5&oq=Sin+Fronteras+Cafe%2C+Annapolis+MD&gs_lp=Egxnd3Mtd2l6LXNlcnAiIFNpbiBGcm9udGVyYXMgQ2FmZSwgQW5uYXBvbGlzIE1EMgYQABgWGB5I00JQPViKQHAAeAGQAQGYAaMEoAHyEqoBCTEuNC40LTMuMbgBA8gBAPgBAcICBBAjGCfiAwQYACBBiAYB&sclient=gws-wiz-serp#lrd=0x89b7f6ce8f43a82f:0x43022ee12cca4c62,1,,,," target='_blank' rel='noopener noreferrer'>
                            <button className='leave-review-hero'>{content.leaveReview}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
