import PropTypes from 'prop-types';
import { Formik } from 'formik';
import styles from './deliverycard.module.css';
import * as Yup from 'yup';
import Button from '../Button';
import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { generateOrderID } from '../../store/orderSlice';


const Delivery = ({ navigateToPayment }) => {

    Delivery.propTypes = {
        navigateToPayment: PropTypes.any.isRequired,
    };

    const dispatch = useDispatch();
    const [orderID, setOrderID] = useState(''); // State for orderID

    useEffect(() => {
        const newOrderID = generateRandomID();
        dispatch(generateOrderID(newOrderID));
        setOrderID(newOrderID);
    }, [dispatch]);

    const generateRandomID = () => {
        const min = 10000; 
        const max = 999999; 
        return String(Math.floor(Math.random() * (max - min + 1)) + min);
    };

    const defaultValues = {
        phoneNo: "",
        address: "",
        city: "",
        comment: '',
        saveInfo: false,
        orderNo: orderID,
    }

    const signInSchema = Yup.object({
        phoneNo: Yup.string().required('Enter your phone number')
        .min(11, 'Too Short!')
        .max(11, 'Too Long!')
        .required('Required'),
        address: Yup.string().required('Enter your address')
        .required('Required'),
        city: Yup.string() 
    })

    const onSubmitHandler =(values)=>{
        console.log("Form submitted:", values);
        if (values.saveInfo) {
            localStorage.setItem("deliveryDetails", JSON.stringify(values));
        } else {
            localStorage.removeItem("deliveryDetails");
        }
        navigateToPayment()
          
    }

    return <div className={styles.container}>
            <div className={styles.orderID}>Order ID: {orderID}</div>

            <div >
            <Formik 
                initialValues={defaultValues} 
                validationSchema={signInSchema}
                onSubmit={onSubmitHandler}
            >
                { ({
                    values,
                    handleChange, 
                    errors,
                    handleSubmit,               
                }) => {
                    return <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.address}>
                            <label htmlFor='street address'>Street Address</label>
                            <input 
                                type="text" 
                                name="address"
                                placeholder="Street Address" 
                                onChange={handleChange}
                                id="street address" 
                            />
                            <span>{errors.address}</span>
                        </div>
                        <div className={styles.number}>
                            <label htmlFor='phoneNo'>Phone Number</label>
                            <input 
                                value={values.username}
                                name="phoneNo"
                                type="text" 
                                onChange={handleChange}
                                placeholder="phone number" 
                                id="phoneNo" 
                            />
                            <span>{errors.username}</span>
                        </div>
                        <div className={styles. combined}> 
                            <div className={styles.city}>
                                <label htmlFor='city'>City</label> 
                                <input 
                                    value={orderID}
                                    name="city"
                                    type="text" 
                                    onChange={handleChange}
                                    placeholder="City" 
                                    id="city" 
                                />
                            </div> 
                            <div className={styles.order}>                      
                                <label htmlFor='order-no'>Order No</label> 
                                <input 
                                    value={orderID}
                                    disabled
                                    name="order-no"
                                    type="text" 
                                    onChange={handleChange}
                                    placeholder="order no" 
                                    id="order-no" 
                                /> 
                            </div>                        
                        </div>
                            <div className={styles.message}>                      
                                <label htmlFor='comment'>Comment</label> 
                                <textarea 
                                    name="comment"
                                    type="text" 
                                    onChange={handleChange}
                                    placeholder="additional information" 
                                    id="comment" 
                                /> 
                            </div>   
                            <div className={styles.check}>                      
                                <input 
                                    name="saveInfo"
                                    type="checkbox" 
                                    onChange={handleChange}
                                    checked={values.saveInfo}
                                    id="saveInfo" 
                                /> 
                                <label htmlFor='saveInfo'>Save details</label> 
                            </div>
                        <div className={styles.btnwrap}>
                            <Button type="submit" variant="primary">Proceed to payment</Button>
                        </div> 
                    </form> 
                }}
            </Formik>
            </div>
        </div>
}

export default Delivery;
