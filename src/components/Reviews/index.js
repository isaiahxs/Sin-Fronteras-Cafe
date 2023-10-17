import { useLanguage } from '../../LanguageContext';
import { englishContent, spanishContent } from './content';
import star from '../../assets/icons/star-icon.png';
import './Reviews.css';

export default function Reviews() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();
    const content = currentLanguage === 'english' ? englishContent : spanishContent;

    return (
        <div className='testimonials-section' id='reviews'>
            <div className='home-header-container testimonials-header-container'>
                <h2 className='home-header testimonials-header'>{content.testimonialsHeader}</h2>
                <h3 className='testimonials-subheader'>{content.testimonialsSubheader}</h3>
                <a href="https://www.google.com/search?q=Sin+Fronteras+Cafe%2C+Annapolis+MD&sca_esv=562253820&rlz=1C1CHBF_enUS720US720&sxsrf=AB5stBi9daaIEpwg-kweVvniBPFj-Gk-Hg%3A1693701433901&ei=OdXzZLDUNoKawbkP1K2OgAQ&ved=0ahUKEwjw1MrCmY2BAxUCTTABHdSWA0AQ4dUDCBA&uact=5&oq=Sin+Fronteras+Cafe%2C+Annapolis+MD&gs_lp=Egxnd3Mtd2l6LXNlcnAiIFNpbiBGcm9udGVyYXMgQ2FmZSwgQW5uYXBvbGlzIE1EMgYQABgWGB5I00JQPViKQHAAeAGQAQGYAaMEoAHyEqoBCTEuNC40LTMuMbgBA8gBAPgBAcICBBAjGCfiAwQYACBBiAYB&sclient=gws-wiz-serp#lrd=0x89b7f6ce8f43a82f:0x43022ee12cca4c62,1,,,," target='_blank' rel='noopener noreferrer'>
                    <button className='leave-review-testimonials'>{content.rateYourVisitButton}
                    </button>
                </a>
            </div>

            <div className='first-three-testimonials'>
                <div className='testimonials-container'>
                    {content.testimonials.slice(0, 3).map((testimonial, index) => (
                        <div className='individual-testimonial' key={index}>
                            <div className='review-details'>
                                <div className='reviewer-name-container'>
                                    <p className='reviewer-name'>{testimonial.reviewerName}</p>
                                    <div className='reviewer-image-container'>
                                        <img src={testimonial.imgSrc} className='reviewer-image' alt='Review by Dennis' />
                                    </div>
                                    <span className='stars-container'>
                                        <img className='star' src={star} alt='Star' />
                                        <img className='star' src={star} alt='Star' />
                                        <img className='star' src={star} alt='Star' />
                                        <img className='star' src={star} alt='Star' />
                                        <img className='star' src={star} alt='Star' />
                                    </span>
                                    <p className='review-text'>{testimonial.reviewText}</p>
                                    <a className='review-link' href={testimonial.reviewLink} target='_blank' rel='noopener noreferrer'>
                                        <div className='my-review-link-button'>{testimonial.buttonText}</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='second-three-testimonials'>
                <div className='testimonials-container'>
                    {content.testimonials.slice(3, 6).map((testimonial, index) => (
                        <div className='individual-testimonial' key={index}>
                            <div className='review-details'>
                                <div className='reviewer-name-container'>
                                    <p className='reviewer-name'>{testimonial.reviewerName}</p>
                                    <div className='reviewer-image-container'>
                                        <img src={testimonial.imgSrc} className='reviewer-image' alt='Review by Dennis' />
                                    </div>
                                    <span className='stars-container'>
                                        <img className='star' src={star} alt='Star' />
                                        <img className='star' src={star} alt='Star' />
                                        <img className='star' src={star} alt='Star' />
                                        <img className='star' src={star} alt='Star' />
                                        <img className='star' src={star} alt='Star' />
                                    </span>
                                    <p className='review-text'>{testimonial.reviewText}</p>
                                    <a className='review-link' href={testimonial.reviewLink} target='_blank' rel='noopener noreferrer'>
                                        <div className='my-review-link-button'>{testimonial.buttonText}</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
