import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    products: {},
    loadingCategories: false,
    loadingProducts: false,
    errors: {}
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await fetch('http://localhost:3000/api/categories');
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    const data = response.json();
    return data;
});

export const fetchProductsByCategory = createAsyncThunk(
    "products/fetchProductsByCategory",
    async (categoryId, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:3000/api/products-by-categories/${categoryId}`);
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loadingCategories = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload.data;
                state.loadingCategories = false;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loadingCategories = false;
                state.errors.categories = action.error.message;
            })
            .addCase(fetchProductsByCategory.pending, (state, { meta }) => {
                state.loadingProducts = true;
                // Initialize or reset products state for specific category
                state.products[meta.arg] = [];
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.products[action.meta.arg] = action.payload.data;
                state.loadingProducts = false;
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.loadingProducts = false;
                state.errors.products = { ...state.errors.products, [action.meta.arg]: action.payload };
            });
    }
});

export default categorySlice.reducer;



