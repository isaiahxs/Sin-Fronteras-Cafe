import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext';
import { englishContent, spanishContent } from './content';
import { Link } from 'react-router-dom';
import fajitas from '../../assets/images/fajitas-jpeg.jpg';
import map_pin from '../../assets/icons/black-map-pin.png';
import phone from '../../assets/icons/black-phone.png';
import facebook from '../../assets/icons/black-facebook.png';
import './Hero.css';

export default function Hero() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();

    const toggleLanguage = () => {
        setCurrentLanguage(currentLanguage === 'english' ? 'spanish' : 'english');
    };

    const content = currentLanguage === 'english' ? englishContent : spanishContent;

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const yOffset = -110;
        const topOffset = sectionElement.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
    };

    return (
        <header className='hero-container' id='hero'>
            <div className='nav-placeholder'></div>
            <div className='hero-section'>
                <div className='hero-information fade-in'>
                    <img src={fajitas} className='hero-background' alt='Fajitas Background' />
                    <div className='hero-text-section hero-contact-section'>
                        <div className='hero-text-section'>
                            <h1 className='title overlay fade-in'>{content.title}</h1>
                            <h2 className='location overlay fade-in'>{content.location}</h2>
                        </div>
                    </div>
                </div>

                <div className='section-below-hero'>
                    <div className='hero-descriptions-container fade1'>

                        {/* <div className='hero-header-section'> */}
                        {/* <h1 className='title'>{content.title}</h1> */}
                        {/* <h2 className='location'>{content.location}</h2> */}
                        {/* </div> */}

                        <button className='language-toggle-button' onClick={toggleLanguage}>
                            {currentLanguage === 'english' ? 'Español' : 'English'}
                        </button>

                        <h3 className='description description-2 urbanist'>
                            {content.description2}
                        </h3>

                        <h3 className='contact-information'>
                            <div className='hero-address'>
                                <a href="https://www.google.com/maps/place/Sin+Fronteras/@38.9775203,-76.5394309,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7f6ce8f43a82f:0x43022ee12cca4c62!8m2!3d38.9775162!4d-76.536856!16s%2Fg%2F1tpf80bs?entry=ttu" target='_blank' rel='noopener noreferrer'>
                                    <div className='footer-icon-container'>
                                        <span>
                                            <img src={map_pin} className='footer-icon hero-map-icon' alt='Map Pin' />
                                            2129 Forest Dr. Annapolis, MD 21401
                                        </span>
                                    </div>
                                </a>
                            </div>

                            <div className='hero-phone'>
                                <a href='tel:+14102660013'>
                                    <div className='footer-icon-container'>
                                        <img src={phone} className='footer-icon hero-phone-icon' alt='Phone Icon' />
                                        <p className='footer-icon-description'>
                                            (410) 266-0013
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div className='hero-facebook'>
                                <a href="https://www.facebook.com/sinfronterascafe/?ref=page_internal" target='_blank' rel='noopener noreferrer'>
                                    <div className='footer-icon-container'>
                                        <img src={facebook} className='footer-icon hero-facebook-icon' alt='Facebook Logo' />
                                        <p className='footer-icon-description'>
                                            Facebook
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </h3>
                    </div>

                    <div className='hero-buttons-container fade2'>
                        <button className='view-food-hero' onClick={() => scrollToSection('food-menu')}>
                            {content.viewFood}
                        </button>

                        <button className='view-drinks-hero' onClick={() => scrollToSection('drink-menu')}>
                            {content.viewDrinks}
                        </button>

                        {/* <button className='view-services-hero' onClick={() => scrollToSection('food-menu')}>
                            {content.viewServices}
                        </button> */}

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
