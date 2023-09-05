import DrinksMenuNav from '../DrinksMenuNav';
import { menuDrinksEnglishData } from './content';
import './DrinksMenu.css';

export default function DrinksMenu() {
    const sectionRefsDrinks = {};

    const renderMenuItem = (section, item) => (

        <div key={item.name} className='menu-item'>
            <div className='item-name-and-price'>
                <h2 className='item-name'>{item.name}</h2>
                <h2 className='item-price'>{item.price}</h2>
            </div>
            <h3 className='item-description'>{item.description}</h3>
            {item.options && item.options.length > 0 && (
                <div className='item-options'>
                    Options:
                    {item.options.map((option) => (
                        <span key={option} className='option'> {option}</span>
                    ))}
                </div>
            )}
        </div>

    );

    // console.log('sectionRefsDrinks:', sectionRefsDrinks);

    return (
        <div className='drink-section'>
            <h2 className='menu-header'>Drink Menu</h2>
            <div className='drinksMenu'>
                <DrinksMenuNav sectionRefsDrinks={sectionRefsDrinks} />
                {Object.keys(menuDrinksEnglishData).map((section) => (
                    <div key={section} className='menu-section' ref={(el) => (sectionRefsDrinks[section] = el)}>
                        <h2 className='section-header'>{section}</h2>
                        {menuDrinksEnglishData[section].map((item) => renderMenuItem(section, item))}
                    </div>
                ))}
                <h4 className='drink-warning'>Please drink responsibly</h4>
            </div>
        </div>
    )
}
