import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import productReducer from './productSlice';
 

const rootReducer = (
    {
    cart: cartReducer,
    products: productReducer,
    }
)

export default rootReducer;