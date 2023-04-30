import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems, //TODO: for now till we dont have api configured
  amount: 1, // each item specific count
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // immer mutates the state for us behind the scenes
    },
    decrement: (state) => {
      state.value -= 1;
    },
    ClearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, ClearCart } = cartSlice.actions;

export default cartSlice.reducer;
