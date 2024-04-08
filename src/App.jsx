import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Menu from './pages/Menu';
import About from './pages/About';
import PaymentSuccess from './pages/PaymentSuccess'

import Layout from './components/Layout';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/menu" element={<Menu/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/payment-success" element={<PaymentSuccess/>}></Route>
    </Route>
  ))
 

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
      
    </>
  )
}

export default App
