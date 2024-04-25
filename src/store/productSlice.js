import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    error: null,
    status: 'idle'  
};

export const fetchProduct = createAsyncThunk('products/fetchProduct', async () => {
    const response = await fetch('http://localhost:3000/api/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
});

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'pending';
                state.error = null; 
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.products = action.payload.data; 
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
                state.products = [];
            });
    }
});

export default productSlice.reducer;

export const selectAllProducts = state => state.products.products;