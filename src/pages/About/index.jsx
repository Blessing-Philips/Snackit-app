import Intro from "../../components/Intro";
import ComponentCard from "../../components/componentCards";
import styles from './about.module.css';

const About = () => {
    return <>
        <Intro>About</Intro>
        <ComponentCard className={styles.wrapper}>
            <h2>Our Commitment to Quality</h2>
            <div>
                <p> We understand that the heart of any memorable meal lies in the ingredients. 
                    That is why we meticulously source our products from trusted suppliers and 
                    artisans who share our commitment to quality and sustainability. From farm-fresh 
                    produce to artisan cheeses and ethically sourced meats, every item in our inventory 
                    is handpicked to ensure freshness, flavor, and nutritional value.
                </p>
                <img src="#" alt="about" />
            </div>
        
        </ComponentCard> 
    </>
}
export default About;