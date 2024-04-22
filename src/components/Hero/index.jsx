import Button from '../Button';
import styles from './hero.module.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate('/menu');
    }
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
                    <Button variant="primary" onClick={handleClick}>Order Now</Button>
                </div>
            </div>
        </div>
    )
}
export default Hero;
