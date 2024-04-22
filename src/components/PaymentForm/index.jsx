import  { useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { getOrder } from '../../store/orderSlice';
import styles from './paymentForm.module.css';
import Button from '../Button';
import { clearCart } from '../../store/cartSlice';


const Payment = () => {
    const orderID = useSelector(getOrder);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('');
    const [ paymentConfirmed, setPaymentConfirmed ] = useState(false);

    const bankAccountDetails = {
        accountNumber: '0857392048',
        accountName: 'Snakit Restaurant',
        bankName: 'MoniePoint',
    }

    const handlePaymentConfirmation = () => {
        setPaymentConfirmed(true);
        dispatch(clearCart());
        navigate('/payment-success');
    }

    const handlePayOnDelivery = () => {
        alert('Your order will be delivered shortly, Please have the payment ready for our delivery personnel.');
        dispatch(clearCart());
        navigate('/track-order');
    }

    return (
        <div className={styles.paymentwrapper}>
            <div className={styles.formInput}>
                <span> Order ID: {orderID}</span>
                <h1> Payment Option</h1>
                <p>Your payment is safe with us</p> 
                <p>Select a payment method:</p>
                <div className={styles.radio}>
                    <input
                        type='radio'
                        id="bank_transfer"
                        name="paymentMethod"
                        value="bank_transfer"
                        checked={paymentMethod === 'bank_transfer'}
                        onChange={() => setPaymentMethod('bank_transfer')}
                    />
                    <label htmlFor="bank_transfer">Direct Bank Transfer</label>
                </div>
                <div className={styles.radio}>
                    <input
                        type='radio'
                        id="pay_on_delivery"
                        name="paymentMethod"
                        value="pay_on_delivery"
                        checked={paymentMethod === 'pay_on_delivery'}
                        onChange={() => setPaymentMethod('pay_on_delivery')}
                    />
                    <label htmlFor="pay_on_delivery">Pay on Delivery</label>
                </div>
            </div>
            
            {paymentMethod === 'bank_transfer' && (
                <div className={styles.paymentModal}>
                    <p>Bank Account Details:</p>
                    <select>
                        <option value="">Select Bank Account</option>
                        <option value={bankAccountDetails.accountNumber}>{`${bankAccountDetails.accountName} - ${bankAccountDetails.bankName}`}</option>
                    </select>
                    <p>Account Number: {bankAccountDetails.accountNumber}</p>
                    <p>Account Name: {bankAccountDetails.accountName}</p>
                    <p>Bank Number: {bankAccountDetails.bankName}</p>
                    <p className={styles.message}>
                        Please make a direct bank transfer to the provided account details. 
                        Your order will be processed once payment is received.
                        <span>
                            If you have paid into the above account. Click on the button below
                        </span>
                    </p>
                    <Button variant="primary" onClick={handlePaymentConfirmation} disabled={!paymentMethod}>Done</Button>
                   
                </div>
            )}
            {paymentMethod === 'pay_on_delivery' && (
                <div className={styles.paymentModal}>
                    <p className={styles.message}>Your order will be delivered shortly. Please have the payment ready for our delivery personnel.</p>
                    <Button variant="primary" onClick={handlePayOnDelivery}>Track your Order</Button>
                    {/* <div className={styles.btnwrap}>
                        <Button variant="primary" onClick={handlePaymentConfirmation(paymentMethod)}>Track your Order</Button>
                    </div> */}
                </div>
                   
            )}

        </div>
    )
    
}

export default Payment;