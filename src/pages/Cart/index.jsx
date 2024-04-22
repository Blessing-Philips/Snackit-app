import { useSelector } from "react-redux";
import { cartProduct } from "../../store/cartSlice";
import styles from './cart.module.css';
// import ProductSummary from "../../components/ProductSummary";
import CartSummary from "../../components/CartSummary";
import Button from "../../components/Button";
import useTabSwitch from "../../components/TabHooks/useTabSwitch";
import Tabs from "../../components/TabHooks/Tabs";
import Delivery from "../../components/Delivery";
import PriceTotal from "../../components/PriceTotal";
import Payment from "../../components/PaymentForm";

const Cart = () => {
    const cart = useSelector(cartProduct)
    const tabs= ['Summary', 'Delivery', 'Payment'];
    const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');

    
    const navigateToPayment = () => {
        handleTabSwitch('Payment'); // Switch to the payment tab
    };
    if (!cart || cart.length === 0) {
        return <div className={styles.cartContainer}> 
        <div className={styles.emptyCart}>
            Your cart is empty
        </div>
        </div>
    }

    return <div className={styles.cartContainer}>
        <Tabs list={tabs} 
        onTabSwitch={handleTabSwitch} 
        activeTab={currentTab} />

        {/* {JSON.stringify(cart)} */}
        <div className={`${currentTab !== 'Summary' ? styles.hidden : ''}`}>
            {
                cart && cart?.map((product, index) => {
                    return (
                        <CartSummary key={index} product={product}/>
                )})
            }
            <div className={styles.btnWrap}>        
                <Button variant="secondary" onClick={()=>handleTabSwitch('Delivery')}>Checkout</Button>
            </div>
        </div>
        <div className={`${currentTab !== 'Delivery' ? styles.hidden : ''}`}>
            <div className={styles.deliveryContainer }>
                {/* <p>Delivery</p> */}
                <PriceTotal/>
                <Delivery navigateToPayment={navigateToPayment}/>

            </div>
            
        </div>
        <div className={`${currentTab !== 'Payment' ? styles.hidden : ''}`}>
            <div className={styles.deliveryContainer }>
                {/* <p>Delivery</p> */}
                <Payment/>
            </div>
            
        </div>

    </div>
}

export default Cart;


// import { useSelector } from "react-redux";
// import { cartProduct } from "../../store/cartSlice";
// import styles from './cart.module.css';
// // import ProductSummary from "../../components/ProductSummary";
// import CartSummary from "../../components/CartSummary";
// import Button from "../../components/Button";

// const Cart = () => {
//     const cart = useSelector(cartProduct)

//     const handleTab = ()=>{}

//     if (!cart || cart.length === 0) {
//         return <div className={styles.cartContainer}> 
//         <div className={styles.emptyCart}>
//             Your cart is empty
//         </div>
//         </div>
//     }

//     return <div className={styles.cartContainer}>
//         {JSON.stringify(cart)}

//         {
//             cart && cart?.map((product, index) => {
//               return (
//                 <CartSummary key={index} product={product}/>
                
//             )})
//         }
//         <div className={styles.btnWrap}>        
//             <Button variant="secondary" onClick={handleTab}>Next</Button>
//         </div>
      

//     </div>
// }

// export default Cart;


