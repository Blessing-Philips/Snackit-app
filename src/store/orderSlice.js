import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderID: null,
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        generateOrderID: (state, action) =>{
            state.orderID = action.payload
        }
    }

})

export const { generateOrderID } = orderSlice.actions;

export const getOrder = state => state.order.orderID;
 
export default orderSlice.reducer;
