// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDMawvwowGvJ75OJemfHTZJ2dZ_wYS14Rc",
  authDomain: "snackit-app-b9215.firebaseapp.com",
  projectId: "snackit-app-b9215",
  storageBucket: "snackit-app-b9215.appspot.com",
  messagingSenderId: "589202640813",
  appId: "1:589202640813:web:80bd778c84603701111b24",
  measurementId: "G-5GZXNF7T1S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);