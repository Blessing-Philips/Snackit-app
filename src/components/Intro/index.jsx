import PropTypes from 'prop-types';
import styles from './intro.module.css';

const Intro = ({children, className}) => {
    
    Intro.propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.any.isRequired,
    };

    return (
        <div className={className}>
            <h2 className={styles.lead}> {children}  </h2>

           
        </div>
    )

}
export default Intro;