import { menuEnglishData } from './content';
import './FoodMenu.css';

export default function FoodMenu() {
    const renderMenuItem = (item) => (
        <div key={item.name} className='menu-item'>
            <h2 className='item-name'>{item.name}</h2>
            <h2 className='item-price'>{item.price}</h2>
            <h3 className='item-description'>{item.description}</h3>
            {item.options && item.options.length > 0 && (
                <div className='item-options'>
                    {item.options.map((option) => (
                        <span key={option} className='option'>{option}</span>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <div>
            {Object.keys(menuEnglishData).map((section) => (
                <div key={section} className='menu-section'>
                    {section}
                    {menuEnglishData[section].map((item) => renderMenuItem(item))}
                </div>
            ))}
            <div>Gluten Free</div>
            <h4 className='food-warning'>*Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.</h4>
        </div>
    )
}
