import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    error: null,
    status: 'idle'
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.products = [...action.payload.data]
        })
        builder.addCase(fetchProduct.pending, (state) => {
            state.status = 'pending'
        })
    }
})

export const {getProducts} = productSlice.actions;

export default productSlice.reducer;

 export const fetchProduct = createAsyncThunk('product/fetchProduct', async () =>{
    const response = await fetch('http://localhost:3000/api/products-by-categories');
    const data = await response.json();
    console.log(data);
    return data;
})


export const selectAllProducts = state => state.products;


// // Redux setup
// import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';

// // Async thunk for fetching categories
// export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
//     const response = await fetch('http://localhost:3000/api/categories');
//     return await response.json();
// });

// // Async thunk for fetching products by category
// export const fetchProductsByCategory = createAsyncThunk('products/fetchProductsByCategory', async (categoryId) => {
//     const response = await fetch(http://localhost:3000/api/products-by-category/${categoryId});
//     return await response.json();
// });

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