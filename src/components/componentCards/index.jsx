import PropTypes from 'prop-types';
// import styles from './componentCard.module.css';

const ComponentCard = ({children, className}) => {
    ComponentCard.propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.node.isRequired,
        };

    return <div className={className}>
        {children}
    </div>
    
}
export default ComponentCard;

