import { useSelector } from "react-redux";
import { cartProduct } from "../../store/cartSlice";
import styles from './priceTotal.module.css';


const PriceTotal = () => {
    const cart = useSelector(cartProduct)
    const sumTotal = cart.reduce((total, item) => {
        const itemTotal = item.price * item.amount;
        return total + itemTotal;
    }, 0);
    
    const VAT = 3.95
    const Total = sumTotal +  VAT;
    
    return <div className={styles.wrapper}>
        <table className={styles.table}>
            <tbody>
                <tr>
                    <th>SubTotal</th>
                    <td>₦{(sumTotal).toLocaleString()}</td>
                </tr>
                <tr>
                    <th>VAT</th>
                    <td>₦{VAT}</td>
                </tr>
                <tr>
                    <th>Delivery</th>
                    <td>0.00</td>
                </tr>
                <tr>
                    <th>Total</th>
                    <td>₦{Total.toLocaleString()}</td>
                </tr>
            </tbody>
            
        </table>

    </div>
}

export default PriceTotal;