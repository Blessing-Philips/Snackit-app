
import Card from "../Card";
import styles from './service.module.css';



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
    </div>
}

export default Service;