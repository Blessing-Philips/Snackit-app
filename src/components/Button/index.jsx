import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({variant, children, onClick}) => {

    Button.propTypes = {
        children: PropTypes.node.isRequired,
        variant:PropTypes.node.isRequired,
        onClick:PropTypes.func,
        };

    return <button 
        className={styles.btn}
        data-variant={variant}
        onClick={onClick}
        >
        {children}
    </button>
}
export default Button;
