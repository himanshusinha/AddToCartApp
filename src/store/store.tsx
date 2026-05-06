import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../redux/ProductSlice';
import CartReducer from '../redux/CartSlice';
export const store = configureStore({
  reducer: {
    ProductList: ProductReducer,
    Cart: CartReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
