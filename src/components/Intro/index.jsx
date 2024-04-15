import PropTypes from 'prop-types';
import styles from './intro.module.css';

const Intro = ({children}) => {
    
    Intro.propTypes = {
        children: PropTypes.node.isRequired,
    };

    return (
        <div className={styles.main}>
           <h2 className={styles.lead}> {children}  </h2>
                
           
        </div>
    )
}
export default Intro;