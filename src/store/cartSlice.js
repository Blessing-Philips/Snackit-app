import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            return { products: [...state.products, {...action.payload, amount: 1}]}

        },

        clearCart: (state) => {
            state.products = [];
        },

        incrementProductAmount: (state, action) => {
            // Ensure the action contains an id
            const product = state.products.find(product => product._id === action.payload.id);
            if (product) {
                product.amount += 1;
            }
        },

        decrementProductAmount: (state, action) => {
            const product = state.products.find(product => product._id === action.payload.id);
            if (product && product.amount > 1) {
                product.amount -= 1;
            }
        },

        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload.id);
        }
    }
});

export const { addToCart, clearCart, incrementProductAmount, decrementProductAmount, removeProduct } = cartSlice.actions;

export const cartProduct = state => state.cart.products;

export default cartSlice.reducer;



