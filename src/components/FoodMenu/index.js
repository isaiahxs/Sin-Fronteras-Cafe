import FoodMenuNav from '../FoodMenuNav';
import { menuEnglishData } from './content';
import './FoodMenu.css';

export default function FoodMenu() {
    const sectionRefs = {};

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

    // console.log('sectionRefs:', sectionRefs);


    return (
        <div className='foodMenu'>
            <FoodMenuNav sectionRefs={sectionRefs} />
            {Object.keys(menuEnglishData).map((section) => (
                <div key={section} className='menu-section' ref={(el) => (sectionRefs[section] = el)}>
                    <h2 className='section-header'>{section}</h2>
                    {menuEnglishData[section].map((item) => renderMenuItem(section, item))}
                </div>
            ))}
            <div>Gluten Free</div>
            <h4 className='food-warning'>*Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.</h4>
        </div>
    )
}
