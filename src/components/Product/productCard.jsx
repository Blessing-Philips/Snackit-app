import PropTypes from 'prop-types';
import styles from './products.module.css';
import Button from "../Button";

const ProductCard = ({product, onAddItem}) => {
    
    const addItem = () => {
        onAddItem(product)
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.imgDiv}>
                 <img src={product.imageURL} alt={product.name} className={styles.img} />
            </div>
            <div className={styles.details}>
                <h3>{product.name}</h3>
                <p>{product.price.toLocaleString()}</p>
            </div>
            {/* <ul>{
                    product.foodItems && product.foodItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }</ul> */}
            
            {/* {  product.foodItems && product.foodItems.length > 0 && (
                <p>{
                    product.foodItems.map((item, index)=>(
                        <span key={index}>{item}</span>
                    ))}
                </p>
            )} */}
            <div className={styles.btnwrap}>
                <Button variant="primary" onClick={addItem}>+</Button>
            </div>
            {/* <AddButton onAddItem={addItem}/> */}

        </div>
    )
}
ProductCard.propTypes = {
    product: PropTypes.any.isRequired,
    onAddItem: PropTypes.any,
};

export default ProductCard;
