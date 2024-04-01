import PropTypes from 'prop-types';
import styles from './componentCard.module.css';

const ComponentCard = ({children}) => {
    ComponentCard.propTypes = {
        children: PropTypes.node.isRequired,
        };
    return (
        <div className={styles.wrapper}>
            {children}
            
        </div>
    )
}
export default ComponentCard;

