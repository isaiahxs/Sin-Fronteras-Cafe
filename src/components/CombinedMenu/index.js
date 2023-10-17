import React, { useEffect, useRef } from 'react';
import FoodMenu from '../FoodMenu';
import DrinksMenu from '../DrinksMenu';
import './CombinedMenu.css';

export default function CombinedMenu() {
    const foodRef = useRef(null);
    const drinksRef = useRef(null);

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
                threshold: 0.01,
            }
        );

        if (foodRef.current) {
            observer.observe(foodRef.current);
        }

        if (drinksRef.current) {
            observer.observe(drinksRef.current);
        }

        return () => {
            if (foodRef.current) {
                observer.unobserve(foodRef.current);
            }

            if (drinksRef.current) {
                observer.unobserve(drinksRef.current);
            }
        };
    }, []);

    return (
        <div id='combined-menu'>
            <div className='menu-container'>
                <div ref={foodRef} className='body-fade-in' id='food-menu'>
                    <FoodMenu />
                </div>

                <div ref={drinksRef} className='body-fade-in' id='drink-menu'>
                    <DrinksMenu />
                </div>
            </div>
        </div>
    )
}
