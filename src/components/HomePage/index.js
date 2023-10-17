import React, { useEffect, useRef } from 'react';
import Navigation from '../Navigation';
import Hero from '../Hero';
import Reviews from '../Reviews';
import CombinedMenu from '../CombinedMenu';
// import FoodMenu from '../FoodMenu';
// import DrinksMenu from '../DrinksMenu';
// import About from '../About';
import Footer from '../Footer';
import './HomePage.css';

export default function HomePage() {
    const menuRef = useRef(null);
    const reviewsRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        // if (menuRef.current) {
        //     observer.observe(menuRef.current);
        // }

        if (reviewsRef.current) {
            observer.observe(reviewsRef.current);
        }

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            // if (menuRef.current) {
            //     observer.unobserve(menuRef.current);
            // }

            if (reviewsRef.current) {
                observer.unobserve(reviewsRef.current);
            }

            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <div>
            <Navigation />

            <Hero />

            {/* <div ref={menuRef} className='body-fade-in'> */}
            <CombinedMenu />
            {/* </div> */}

            <div ref={reviewsRef} className='body-fade-in'>
                <Reviews />
            </div>

            <div ref={footerRef} className='footer-fade-in'>
                <Footer />
            </div>
        </div>
    )
}
