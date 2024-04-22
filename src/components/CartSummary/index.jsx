import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { incrementProductAmount, decrementProductAmount, removeProduct } from "../../store/cartSlice";
import styles from './cartSummary.module.css';

const CartSummary = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrap}>
                <img src={product.imageURL} alt={product.name} />
            </div>
            <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <ul>{
                    product.foodItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }</ul>
            </div>
            <div className={styles.priceFlex}>
                <div className={styles.pricing}>₦{product.price.toLocaleString()} x {product.amount} = ₦{(product.price * product.amount).toLocaleString()}</div>
                <div className={styles.productQty}>
                    <button disabled={product.amount <= 1} onClick={() => dispatch(decrementProductAmount({id: product._id}))}>-</button>
                    <span>{product.amount}</span>
                    <button onClick={() => dispatch(incrementProductAmount({id: product._id}))}>+</button>
                </div>
                <button className={styles.removeButton} onClick={() => dispatch(removeProduct({id: product._id}))}>Remove</button>
            </div>
        </div>
    );
};

CartSummary.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string,
        // id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired,
        foodItems: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
};

export default CartSummary;
