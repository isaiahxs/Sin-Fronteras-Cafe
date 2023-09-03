import FoodMenu from '../FoodMenu';
import DrinksMenu from '../DrinksMenu';
import './CombinedMenu.css';

export default function CombinedMenu() {
    return (
        <div id='menu'>
            <div className='menu-section'>
                <FoodMenu />
                <DrinksMenu />
            </div>
        </div>
    )
}
