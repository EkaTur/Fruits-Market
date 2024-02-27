import { configureStore } from '@reduxjs/toolkit';
import fruits from './fruitsSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        fruits,
        cart
  },
})
