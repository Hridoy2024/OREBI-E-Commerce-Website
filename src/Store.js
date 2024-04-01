import { configureStore } from "@reduxjs/toolkit";
import  productsReducer  from "./slices/ProductsSlice";

export default configureStore({
  reducer: {
    allProducts: productsReducer,
  },
});
