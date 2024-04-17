import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/ProductsSlice";
import CartSlice from "./slices/CartSlice";

export default configureStore({
  reducer: {
    allProducts: productsReducer,
    cart: CartSlice,
  },
});
