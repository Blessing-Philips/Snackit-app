import { useSelector } from "react-redux";
import { cartProduct } from "../../store/cartSlice";
import styles from './cart.module.css';
import ProductSummary from "../../components/ProductSummary";

const Cart = () => {
    const cart = useSelector(cartProduct)

    if (!cart || cart.length === 0) {
        return <div className={styles.cartContainer}> 
        <div className={styles.emptyCart}>
            Your cart is empty
        </div>
        </div>
    }

    return <div className={styles.cartContainer}>
        {JSON.stringify(cart)}

        {
            cart.map((product, index) => {
              return (
                <div key={index}>

                    <img src={product.imageURL} alt={product.name} style={{width: "200px", height:"200px"}} />
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>

                </div>
            )})
        }
      

    </div>
}

export default Cart;