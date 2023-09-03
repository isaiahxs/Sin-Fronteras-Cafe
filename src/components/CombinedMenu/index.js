import FoodMenu from '../FoodMenu';
import DrinksMenu from '../DrinksMenu';
import './CombinedMenu.css';

export default function CombinedMenu() {
    return (
        <div id='menu'>
            <div className='menu-container'>
                <FoodMenu />
                <DrinksMenu />
            </div>
        </div>
    )
}
