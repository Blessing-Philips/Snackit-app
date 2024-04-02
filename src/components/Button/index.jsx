import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({variant, children}) => {

    Button.propTypes = {
        children: PropTypes.node.isRequired,
        variant:PropTypes.node.isRequired,
        };

    return <button 
        className={styles.btn}
        data-variant={variant}>
        {children}
    </button>
}
export default Button;