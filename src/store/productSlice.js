import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state with clear separation of concerns
const initialState = {
    products: [],
    error: null,
    status: 'idle'  // can be 'idle', 'pending', 'fulfilled', or 'rejected'
};

// Asynchronous thunk for fetching products
export const fetchProduct = createAsyncThunk('products/fetchProduct', async () => {
    const response = await fetch('http://localhost:3000/api/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    // Optionally, handle logging or further data transformation here
    return data;
});

// Slice definition with handlers for all relevant states
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // Add reducers here if needed in the future
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'pending';
                state.error = null;  // Clear previous errors on new request
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.products = action.payload.data;  // Assuming the data is nested under 'data'
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;  // Store the error message
                state.products = [];  // Clear products on error
            });
    }
});

export default productSlice.reducer;

// Selector to access the products array in the state
export const selectAllProducts = state => state.products.products;  // Ensure the path is correct based on the store setup




// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//     products: [],
//     error: null,
//     status: 'idle'
// }

// export const fetchProduct = createAsyncThunk('products/fetchProduct', async () =>{
//    const response = await fetch('http://localhost:3000/api/products');
//    if (!response.ok) {
//     throw new Error('Failed to fetch categories');
//     }
//    const data = await response.json();
//    console.log(data, "This is the data");
//    return data;
// })

// export const productSlice = createSlice({
//     name: 'products',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(fetchProduct.fulfilled, (state, action) => {
//             state.status = 'fulfilled'
//             state.products = action.payload.data
//             // state.products = [...action.payload.data]
//         })
//         builder.addCase(fetchProduct.pending, (state) => {
//             state.status = 'pending'
//         })
//         builder.addCase(fetchProduct.rejected, (state, action) => {
//             state.status = 'rejected'
//             state.products = action.error.message;

//         })

//     }
// })

// export const {getProducts} = productSlice.actions;

// export default productSlice.reducer;


// export const selectAllProducts = state => state.products;


// // Redux setup
// import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';



// const categorySlice = createSlice({
//     name: 'categories',
//     initialState: { categories: [], products: {}, loading: false },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchCategories.fulfilled, (state, action) => {
//                 state.categories = action.payload;
//             })
//             .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
//                 state.products[action.meta.arg] = action.payload;
//             });
//     }
// });

// const store = configureStore({
//     reducer: {
//         categories: categorySlice.reducer
//     }
// });

// // React Component to display categories and handle clicks
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// const CategoriesComponent = () => {
//     const dispatch = useDispatch();
//     const { categories, products } = useSelector(state => state.categories);

//     useEffect(() => {
//         dispatch(fetchCategories());
//     }, [dispatch]);

//     const handleCategoryClick = (categoryId) => {
//         dispatch(fetchProductsByCategory(categoryId));
//     };

//     return (
//         <div>
//             <h1>Categories</h1>
//             <ul>
//                 {categories.map(category => (
//                     <li key={category._id} onClick={() => handleCategoryClick(category._id)}>
//                         {category.name}
//                     </li>
//                 ))}
//             </ul>
//             <h2>Products</h2>
//             {Object.entries(products).map(([key, value]) => (
//                 <div key={key}>
//                     <h3>Category {key}</h3>
//                     <ul>
//                         {value.data.map(product => (
//                             <li key={product._id}>{product.name}</li>
//                         ))}
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CategoriesComponent;