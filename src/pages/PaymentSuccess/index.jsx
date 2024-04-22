import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './paymentSuccess.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/Button';
import PaymentGif from '../../assets/paymentImage.gif';


const PaymentSuccess = () => {    
    const navigate = useNavigate()

    useEffect(()=>{
        handleOnMount()
    }, [])
    
    const handleOnMount = () => {
        toast.success('payment was succcessful');
    }

    const handleTrackOder = () =>{
        navigate('/track-order');
    }



    return <div className={styles.container}>
        <ToastContainer/>
        <div className={styles.success}>
            <img src={PaymentGif} alt="git image"/>
            <h2>Payment Confirmed!</h2>
            <p>your payment was successful!</p>
            <div className={styles.btn}>
            <Button variant="primary" onClick={handleTrackOder}>Track order</Button>
            </div>
        </div>

    </div>
}

export default PaymentSuccess;