import Button from '../Button';
import styles from './hero.module.css';
import hero from '../../assets/hero.png';

const Hero = () => {
    return (
        <div className={styles.main}>
            <div className={styles.textwrap}>
                <h2 className={styles.lead}> Enjoy our 
                    <span> Delicious Meal</span>
                </h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Illo quaerat harum asperiores sapiente consequatur, 
                    nobis soluta sequi atque, aperiam cupiditate ex maiores nesciunt vel, 
                    facilis incidunt ipsam explicabo. Dolorem, debitis.
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