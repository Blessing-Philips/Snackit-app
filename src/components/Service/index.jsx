
import Card from "../Card";
import styles from './service.module.css';
import Image1 from '../../assets/outdoor1.png';
import Image2 from '../../assets/outdoor 2.png';
import Button from "../Button";



const Service = () => {
    return <div className={styles.container} >
        <h2>We Offer</h2>
        <p> Indulge your cravings with our irresistible snack selection 
            and explore a world of flavors, from savory to sweet, and 
            discover the perfect treat to satisfy your hunger.
        </p>
        <div>
                <Card  />      
        </div>
        <div className={styles.imageContainer}>
            <div>
                <img src={Image1} alt="outdoor image"/>
            </div>
            <div>
            <img src={Image2} alt="outdoor image"/>
            </div>
        </div>
        <div className={styles.btnWrap}>        
            <Button variant="secondary">Book now</Button>
        </div>

    </div>
}

export default Service;