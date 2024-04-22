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
    { message: 'Not Delivered Yet', color: 'red' }, // New step for complaints
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
    }, 5000 ); // Progress to next step every minute

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
      setComplaintMessage(''); // Clear any existing message
      setCurrentStep(index); // Set current step to the clicked step
    } else if (index < currentStep) {
      setCurrentStep(index); // Set current step to the clicked step
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

// export const TrackSteps = () => {
//   const orderProcess = [
//     { message: 'Order Confirmed', timestamp: new Date().toLocaleString(), color: 'blue' },
//     { message: 'Order in progress', timestamp: new Date().toLocaleString(), color: 'green' },
//     { message: 'Order in transit', timestamp: new Date().toLocaleString(), color: 'purple' },
//     { message: 'Delivery Successful', timestamp: new Date().toLocaleString(), color: 'green' },
//   ];

//   const [currentStep, setCurrentStep] = useState(1);
//   const [complete, setComplete] = useState(false);
  

//   const stepColors = ['orange', 'blue', 'blueviolet', 'green'];
  
//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (currentStep < orderProcess.length) {
//         setCurrentStep(prevStep => prevStep + 1);
//       } else {
//         clearInterval(timer);
//         setComplete(true);
//       }
//     }, 1000); // Progress to next step every minute

//     return () => clearInterval(timer);
//   }, [currentStep, orderProcess.length]);

//   return (
//     <div className={styles.stepper}>
//       {orderProcess.map((step, index) => (
//         <div key={index} className={styles.step}>
//           <div className={`${styles.stepIcon} `} style={{ backgroundColor: (index + 1 < currentStep || complete) && stepColors[index % stepColors.length] }} >
//             {(index + 1 < currentStep || complete) ? <TiTick size={23} /> : index + 1}
//           </div>
//           <div style={{ color: (index + 1 < currentStep || complete) && stepColors[index % stepColors.length] }}
//             className={` ${styles.stepMessage}`}
//           >
//             <p>{step.message}</p>
//             {
//               (index + 1 === currentStep) && <p>{new Date().toLocaleString()}</p>
//             }
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }




// // import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getOrder } from '../../store/orderSlice';
// import styles from './tracking.module.css';
// import { useState } from 'react';
// import { TiTick } from "react-icons/ti";


// const TrackingOrder = () => {
//   const orderID = useSelector(getOrder);

//   return (
//     <div className={styles.container}>
//       <h1>Order Tracking - Order ID: {orderID}</h1>
//       <TrackSteps/>
//     </div>
//   );
// }


// export default TrackingOrder;



// export const TrackSteps = () => {
//   const orderProcess = [
//     { message: 'Order Confirmed', timestamp: new Date().toLocaleString(), color: 'blue' }, 
//     { message: 'Order in progress', timestamp: new Date().toLocaleString(), color: 'green' }, 
//     { message: 'Order in transit', timestamp: new Date().toLocaleString(), color: 'purple' }, 
//     { message: 'Delivery Successful', timestamp: new Date().toLocaleString(), color: 'green' }, 
//   ]; 

//   const [currentStep, setCurrentStep] = useState(1);
//   const [complete, setComplete] = useState(false);
  
//   const stepColors = ['orange', 'blue', 'blueviolet', 'green'];
  

//   return (
//     <div className={styles.stepper}>
//       {
//         orderProcess?.map((step, index) => (
//           <div key={index} className={styles.step}>
//             <div className={`${styles.stepIcon} `} style={{backgroundColor: (index + 1 < currentStep || complete) && stepColors[index % stepColors.length] }} >
//               { (index + 1 < currentStep || complete) ?   <TiTick size={23}/> : index + 1 }
//             </div>
//             <div style={{color: (index + 1 < currentStep || complete) && stepColors[index % stepColors.length] }} 
//             className={` ${styles.stepMessage}`}
//             >
//               <p>{step.message}</p>
//               <p>{step.timestamp}</p>  
//             </div>
//           </div>
//         ))
//       }
//       <button onClick={()=>{
//         currentStep === orderProcess.length ? setComplete(true) : 
//         setCurrentStep((prev)=> prev + 1);
//       }}>
//         {currentStep === orderProcess.length ? "Finish" : "Next"}</button>
//     </div>
//   )

// }

// style={{ backgroundColor: stepColors[index % stepColors.length]




// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getOrder } from '../../store/orderSlice';
// import styles from './tracking.module.css';


// const TrackingOrder = () => {
//     const orderID = useSelector(getOrder);
//   const [notifications, setNotifications] = useState([]);
//   const [showComplaintLink, setShowComplaintLink] = useState(false);
//   const [paymentTimestamp, setPaymentTimestamp] = useState(null);
//   const [progress, setProgress] = useState(0); 

//   useEffect(() => {
//     const paymentConfirmationTimestamp = new Date();
//     setPaymentTimestamp(paymentConfirmationTimestamp.toLocaleString());

//     // Set up intervals for tracking notifications
//     const processIntervals = [
//       { message: 'Order is being processed', timestamp: 5000, color: 'blue' }, // 5 seconds
//       { message: 'Order in progress', timestamp: 10000, color: 'green' }, // 10 seconds
//       { message: 'Order is ready for dispatch', timestamp: 15000, color: 'orange' }, // 15 seconds
//       { message: 'Order in transit', timestamp: 20000, color: 'purple' }, // 20 seconds
//       { message: 'Order delivered', timestamp: 25000, color: 'green' }, // 25 seconds
//     ];

//     const notificationTimer = setTimeout(() => {
//       // Update notifications at intervals
//       const intervalIds = processIntervals.map((interval, index) => {
//         return setTimeout(() => {
//           setNotifications(prevNotifications => [
//             ...prevNotifications,
//             { message: interval.message, timestamp: new Date().toLocaleString(), color: interval.color }
//           ]);

//           // Update progress bar based on the current stage of the order process
//           setProgress((index + 1) * (100 / processIntervals.length));
//         }, interval.timestamp);
//       });

//       // Show complaint link after all notifications are displayed
//       setTimeout(() => {
//         setShowComplaintLink(true);
//       }, 25000); // 25 seconds (after all notifications are displayed)

//       // Cleanup interval timers
//       return () => {
//         intervalIds.forEach(intervalId => clearInterval(intervalId));
//       };
//     }, 0); // Trigger immediately on mount

//     return () => {
//       clearTimeout(notificationTimer);
//     };
//   }, []);

//   const handleComplaint = () => {
//     // Handle complaint logic
//     alert('Please enter your complaint here.');
//   };

//   return (
//     <div className={styles.container}>
//       <h1>Order Tracking - Order ID: {orderID}</h1>
//       <h2>Payment Timestamp: {paymentTimestamp}</h2>
//       <h2>Notifications</h2>
//       <div style={{ marginTop: '20px' }}>
//         <progress value={progress} max="100"></progress>
//       </div>
//       {notifications.map((notification, index) => (
//         <div key={index} style={{ backgroundColor: notification.color }}>
//           <p>{notification.message}</p>
//           <p>Timestamp: {notification.timestamp}</p>
//         </div>
//       ))}
//       {showComplaintLink && (
//         <p style={{ textDecoration: 'underline', cursor: 'pointer', marginTop: '10px' }} onClick={handleComplaint}>Not delivered yet? Click here to complain.</p>
//       )}
//     </div>
//   );
// }


// export default TrackingOrder;