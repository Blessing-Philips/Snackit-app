import Intro from "../../components/Intro";
import ComponentCard from "../../components/componentCard";
import { useNavigate } from "react-router-dom";
import styles from './about.module.css';
import about1 from '../../assets/image-14.png';
import about2 from '../../assets/image-18.png';
import about3 from '../../assets/image-12.png';
// import hero from '../../assets/hero1.png';
import Button from "../../components/Button";


const About = () => {
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate('/menu');
    }
    return <>
        <Intro className={styles.main}>About</Intro>
        <p className={styles.lead}>
            Dive into a world of culinary inspiration with our vast selection menus. our goal is 
            to inspire you to explore new flavors, techniques, and cuisines, right from the comfort 
            of your own home.
            </p>
        <ComponentCard className={styles.wrapper}>
            <h2>Our Commitment to Quality</h2>
            <div className={styles.flex}>
                <p> We understand that the heart of any memorable meal lies in the ingredients. 
                    That&apos;s why we meticulously source our products from trusted suppliers and 
                    artisans who share our commitment to quality and sustainability.<br/> From farm-fresh 
                    produce to artisan cheeses and ethically sourced meats, every item in our inventory 
                    is handpicked to ensure freshness, flavor, and nutritional value.<br/>
                    Whether you&apos;re a foodie looking for something new and delicious with specialty ingredients 
                    or a busy professional in need of quick, healthy meal solutions, we&apos;ve got you covered.
                </p>
                <div className={styles.imgDiv}>
                    <img src={about1} alt="about" />
                </div>
                
            </div>
        
        </ComponentCard> 

        <ComponentCard className={styles.wrapper}>
            <h2>Community and Connection</h2>
            <div className={styles.flex2}>
                <p> Food has a remarkable ability to bring people together, and we 
                    believe in fostering a sense of community among our customers. <br/>
                    Our brand is your trusted source for all things food-related. We&apos;re 
                    excited to embark on this culinary journey with you and look forward to 
                    helping you discover, create, and savor memorable dining experiences.<br/> 
                    Together, let&apos;s celebrate the joy of food and the connections it creates.
                </p>
                <div className={styles.imgDiv}>
                    <img src={about2} alt="about" />
                </div>
            </div>

            <p className={styles.lead}>
            Dive into a world of culinary inspiration with our vast selection menus. our goal is 
            to inspire you to explore new flavors, techniques, and cuisines, right from the comfort 
            of your own home.
            </p>
        
        </ComponentCard> 

        <ComponentCard className={styles.wrapper}>
            <h2>Outcoor Catering Service</h2>
            <div className={styles.flex2}>
                <div className={styles.infowrap}>
                    <p> Emphasize the convenience, quality, and customization options available 
                        for events ranging from intimate gatherings to grand celebrations. Inspire 
                        potential clients to elevate their outdoor events with your expertly crafted 
                        menus and exceptional service.
                    </p>
                    <div className={styles.btnwrap}>
                        <Button variant="primary" onClick={handleClick}>Book Now</Button>
                    </div>
                </div>

                <div className={styles.imgDiv2}>
                    <img src={about3} alt="about" />
                </div>
            </div>
        
        </ComponentCard> 
    </>
}
export default About;