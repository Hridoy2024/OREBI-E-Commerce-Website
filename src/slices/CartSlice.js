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
      let productIndex = state.cartArray.findIndex(
        (item) => item.id == action.payload.id
      );

      if (productIndex == -1) {
        state.cartArray = [...state.cartArray, action.payload];
        localStorage.setItem("orebiCart", JSON.stringify(state.cartArray));
      } else {
        state.cartArray[productIndex].qun++;
        localStorage.setItem("orebiCart", JSON.stringify(state.cartArray));
      }
    },

    updateQuantity: (state, action) => {
      state.cartArray[action.payload.i].qun =
        state.cartArray[action.payload.i].qun + action.payload.num;

      if (state.cartArray[action.payload.i].qun == 0) {
        state.cartArray[action.payload.i].qun = 1;
      }

      localStorage.setItem("orebiCart", JSON.stringify(state.cartArray));
    },

    productRemove: (state, action) => {
      let filteredData = state.cartArray.filter(
        (item) => item.id !== action.payload
      );

      state.cartArray = filteredData;

      localStorage.setItem("orebiCart", JSON.stringify(state.cartArray));
    },
  },
});

// Action creators are generated for each case reducer function
export const { CartReducer, updateQuantity, productRemove } = CartSlice.actions;

export default CartSlice.reducer;
