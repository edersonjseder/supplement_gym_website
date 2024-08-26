import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/features/productsSlice";
import categoryReducer from "../redux/features/categoriesSlice";
import bannerReducer from "../redux/features/bannersSlice";
import brandReducer from "../redux/features/brandsSlice";
import bestSellersReducer from "../redux/features/bestSellersSlice";
import popularProductsReducer from "../redux/features/popularProductsSlice";
import filterReducer from "../redux/features/filterSlice";
import cartReducer from "../redux/features/cart";

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    banners: bannerReducer,
    brands: brandReducer,
    bestSellers: bestSellersReducer,
    popularProducts: popularProductsReducer,
    cart: cartReducer,
    filterProducts: filterReducer,
  },
});
