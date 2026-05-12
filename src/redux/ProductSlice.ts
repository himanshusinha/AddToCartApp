import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const ProductDetails = createAsyncThunk(
  'product/list',
  async (_, thunkApi) => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = response.json();
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
const initialState = {
  product: [],
  error: null,
  loading: false,
} as any;
export const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(ProductDetails.pending, state => {
        state.loading = true;
      })
      .addCase(ProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(ProductDetails.rejected, (state, action) => {
        state.error = action.payload || 'Something went wrong';
      });
  },
});
export default ProductSlice.reducer;
