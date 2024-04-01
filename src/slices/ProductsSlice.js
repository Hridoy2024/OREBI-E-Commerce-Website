import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "Products",
  initialState: {
    products: [],
  },
  reducers: {
    productsReducer: (state, action) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { productsReducer } = productSlice.actions;

export default productSlice.reducer;
