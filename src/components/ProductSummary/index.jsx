import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { incrementProductAmount, decrementProductAmount } from '../../store/cartSlice';
import styles from './productSummary.module.css'; 


const ProductSummary = ({product}) => {
    const dispatch = useDispatch();

    ProductSummary.propTypes = {
        product: PropTypes.any.isRequired,
    };

    return (
        <div className={styles.summaryContainer}>
            <div className={styles.wrap}>
                <div className={styles.imagewrap}>
                    <img src={product.imageURL} alt={product.name} className={styles.img}/>
                </div>
            <div className={styles.info}>
                <h3>{product.name}</h3>
            </div>
            <div className>
                <div>{`${product.price}$`}</div>
                <div>
                    <button disabled={product.amount <= 0} onClick={() =>dispatch(decrementProductAmount(product))}>-</button>
                    <span >{product.amount}</span>
                    <button  onClick={() => dispatch(incrementProductAmount(product))}>+</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProductSummary;



