import FoodMenuNav from '../FoodMenuNav';
import gfIcon from '../../assets/icons/gf-white-text.png';
import { useLanguage } from '../../LanguageContext';
import { englishContent, spanishContent, menuEnglishData, menuSpanishData } from './content';
import './FoodMenu.css';

export default function FoodMenu() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();
    const content = currentLanguage === 'english' ? englishContent : spanishContent;
    const menuData = currentLanguage === 'english' ? menuEnglishData : menuSpanishData;
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
                    {content.options}
                    {item.options.map((option) => (
                        <span key={option} className='option'> {option}</span>
                    ))}
                </div>
            )}
        </div>
    );

    // console.log('sectionRefs:', sectionRefs);


    return (
        <div className='food-section'>
            <h2 className='menu-header'>{content.foodMenu}</h2>
            <div className='food-menu'>
                <FoodMenuNav sectionRefs={sectionRefs} />
                {Object.keys(menuData).map((section) => (
                    // <div key={section} className='menu-section' ref={(el) => (sectionRefs[section] = el)}>
                    <div key={section} className='menu-section' ref={(el) => (sectionRefs[section] = el)} id={section.toLowerCase().replace(' ', '-')}>

                        <h2 className='section-header'>{section}</h2>
                        {menuData[section].map((item) => renderMenuItem(section, item))}
                    </div>
                ))}
                <div className='gluten-warning-container'>
                    <img className='gf-icon' src={gfIcon} alt='Gluten Free Icon' />
                    <h4 className='gluten-warning'>
                        {content.glutenFree}
                    </h4>
                </div>

                <h4 className='food-warning'>{content.foodWarning}</h4>
            </div>
        </div>
    )
}
