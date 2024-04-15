import PropTypes from 'prop-types';
import styles from './products.module.css';
import Button from "../Button";
// import Button, { AddButton } from "../Button";

const ProductCard = ({product, onAddItem}) => {

    ProductCard.propTypes = {
        product: PropTypes.any.isRequired,
        onAddItem: PropTypes.any,
        };


    const addItem = () => {
        onAddItem(product)
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.imgDiv}>
                 <img src={product.imageURL} alt={product.name} className={styles.img} />
            </div>
           
            <h3 className={styles.lead}>{product.name} <span>{product.price}</span></h3>
            <div className={styles.btnwrap}>
                <Button variant="primary" onClick={addItem}>+</Button>
            </div>
            {/* <AddButton onAddItem={addItem}/> */}

        </div>
    )
}

export default ProductCard;
