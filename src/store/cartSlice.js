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








// export const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             let products = [...state.products];
//             let foundProduct = products.find(prod => prod.name === action.payload.name);

//             if (foundProduct) {
//                 foundProduct.amount++;
//             } else {
//                 action.payload.amount = 1;
//                 products.push(action.payload);
//             }
//         },        
//         clearCart: (state) => {
//             state.products = [];
//         },

//         incrementProductAmount: (state, action) => {
//             // Ensure the action contains an id
//             const product = state.products.find(product => product.id === action.payload.id);
//             if (product) {
//                 product.amount += 1;
//             }
//         },

//         decrementProductAmount: (state, action) => {
//             const product = state.products.find(product => product.id === action.payload.id);
//             if (product && product.amount > 1) {
//                 product.amount -= 1;
//             }
//         },

//         removeProduct: (state, action) => {
//             // const itemIdToRemove = action.payload;
//             // state.products = state.products.filter(item => item.id !== itemIdToRemove);
            
//             // delete state.products[action.payload.id];

//             state.products = state.products.filter(product => product.id !== action.payload.id);
//         }
//     }
// });

// export const { addToCart, clearCart, incrementProductAmount, decrementProductAmount, removeProduct } = cartSlice.actions;

// export const cartProduct = state => state.cart.products;

// export default cartSlice.reducer;







