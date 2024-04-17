import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartArray: localStorage.getItem("orebiCart")
      ? JSON.parse(localStorage.getItem("orebiCart"))
      : [],
  },
  reducers: {
    CartReducer: (state, action) => {
      state.cartArray = [...state.cartArray, action.payload];
      localStorage.setItem("orebiCart", JSON.stringify(state.cartArray));
    },
  },
});

// Action creators are generated for each case reducer function
export const { CartReducer } = CartSlice.actions;

export default CartSlice.reducer;
