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
    return (
        <div>
            <Navigation />

            <Hero id='hero' />

            <CombinedMenu id='combined-menu' />

            <Reviews id='reviews' />

            <Footer id='footer' />
        </div>
    )
}
