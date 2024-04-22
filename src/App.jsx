import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
const Home = lazy(() => import ('./pages/Home'));
const Cart = lazy(() => import ('./pages/Cart'));
const Menu = lazy(() => import ('./pages/Menu'));
const About = lazy(() => import ('./pages/About'));
const Contact = lazy(() => import ('./pages/Contact'));
const PaymentSuccess = lazy(() => import ('./pages/PaymentSuccess'));
const SignUp = lazy(() => import ('./pages/Signup'));
const Login = lazy(() => import ('./pages/Login'));
import TrackingOrder from './pages/Tracking';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/menu" element={<Menu/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/sign-up" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/payment-success" element={<PaymentSuccess/>}></Route>
      <Route path="/track-order" element={<TrackingOrder/>}></Route>
    </Route>
  ))
 

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>

      
    </>
  )
}

export default App
