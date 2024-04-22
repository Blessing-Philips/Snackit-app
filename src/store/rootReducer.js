import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import categoryReducer from './categorySlice';
import orderReducer from './orderSlice';
 

const rootReducer = (
    {
    cart: cartReducer,
    products: productReducer,
    categories: categoryReducer,
    order: orderReducer,
    }
)

export default rootReducer;