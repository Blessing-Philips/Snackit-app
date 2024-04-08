import Button from '../Button';
import styles from './hero.module.css';
import hero from '../../assets/hero.png';

const Hero = () => {
    return (
        <div className={styles.main}>
            <div className={styles.textwrap}>
                <h2 className={styles.lead}> Deliciousness 
                    <span> in every bite</span>
                </h2>
                <p> Taste the difference with our delectable finger foods and homemade meals, 
                    where every bite is a journey of flavor and delight
                </p>
                <div className={styles.btnwrapper}>
                    <Button>See Menu</Button>
                </div>
            </div>
        
            <div className={styles.imagecontainer}>
                <img src={hero} alt="Hero image here"/>
            </div>
           
        </div>
    )
}
export default Hero;