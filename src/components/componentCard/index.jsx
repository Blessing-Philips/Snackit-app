import PropTypes from 'prop-types';


const ComponentCard = ({children, className}) => {

    ComponentCard.propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.any.isRequired,
    };
    
    return (
        <div className={className}>{children}</div>
    )
}
export default ComponentCard;