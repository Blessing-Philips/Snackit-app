import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getOrder } from '../../store/orderSlice';
import styles from './tracking.module.css';
import { TiTick } from "react-icons/ti";

const TrackingOrder = () => {
  const orderID = useSelector(getOrder);

  return (
    <div className={styles.container}>
      <h1>Order Tracking - Order ID: {orderID}</h1>
      <TrackSteps />
    </div>
  );
}

export default TrackingOrder;

export const TrackSteps = () => {
  const orderProcess = [
    { message: 'Order Confirmed', color: 'blue' },
    { message: 'Order in progress', color: 'green' },
    { message: 'Order in transit', color: 'purple' },
    { message: 'Delivery Successful', color: 'green' },
    { message: 'Not Delivered Yet', color: 'red' }, 
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [complete, setComplete] = useState(false);
  const [timestamps, setTimestamps] = useState(Array(orderProcess.length).fill(''));
  const [complaintMessage, setComplaintMessage] = useState('');

  const stepColors = ['orange', 'blue', 'blueviolet', 'green', '#c50c0c'];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentStep < orderProcess.length - 1) {
        setCurrentStep(prevStep => prevStep + 1);
      } else {
        clearInterval(timer);
        setComplete(true);
      }
    }, 5000 ); 

    return () => clearInterval(timer);
  }, [currentStep, orderProcess.length]);

  useEffect(() => {
    if (currentStep > 0 && !timestamps[currentStep - 1]) {
      const newTimestamps = [...timestamps];
      newTimestamps[currentStep - 1] = new Date().toLocaleString();
      setTimestamps(newTimestamps);
    }
  }, [currentStep, timestamps]);

  const handleStepClick = (index) => {
    if (index === orderProcess.length - 1) {
      setComplaintMessage(''); 
      setCurrentStep(index); 
    } else if (index < currentStep) {
      setCurrentStep(index);
    }
  };

  const handleComplaintMessageChange = (event) => {
    setComplaintMessage(event.target.value);
  };

  return (
    <div>
      {orderProcess.map((step, index) => (
        <div key={index} className={`${styles.step} ${styles.active} ${styles.complete}`} style={{ display: index < currentStep || complete ? 'flex' : 'disabled' }} onClick={() => handleStepClick(index)}
        >
          <div className={`${styles.stepIcon} `} style={{ backgroundColor: (index < currentStep || complete) && stepColors[index % stepColors.length] }}>
            {(index < currentStep || complete) ? <TiTick size={23} /> : index + 1}
          </div>
          <div style={{ color: (index < currentStep || complete) && stepColors[index % stepColors.length] }}
            className={` ${styles.stepMessage}`}
          >
            <p>{step.message}</p>
            {(timestamps[index] || complete) && <p>{timestamps[index]}</p>}
          {index === orderProcess.length - 1 && currentStep === index && (
            <textarea
              value={complaintMessage}
              onChange={handleComplaintMessageChange}
              placeholder="Add your message to the admin..."
              rows={4}
              cols={50}
              style={{ display: currentStep === index ? 'flex' : 'none' }}
            />
          )}
          </div>
        </div>
      ))}
    </div>
  )
}
