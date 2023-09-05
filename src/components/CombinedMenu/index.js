import FoodMenu from '../FoodMenu';
import DrinksMenu from '../DrinksMenu';
import './CombinedMenu.css';

export default function CombinedMenu() {
    return (
        <div id='combined-menu'>
            <div className='menu-container'>
                <div id='food-menu'>
                    <FoodMenu />
                </div>

                <div id='drink-menu'>
                    <DrinksMenu />
                </div>
            </div>
        </div>
    )
}
