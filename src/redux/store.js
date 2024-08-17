import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/features/productsSlice";
import filterReducer from "../redux/features/filterSlice";
import cartReducer from "../redux/features/cart";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    filterProducts: filterReducer,
  },
});
