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
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      // destructured action.payload here itself

      // ALTER
      // state.cartItems = state.cartItems.map((item) => {
      //   if (item.id === payload) {
      //     return { ...item, amount: item.amount + 1 };
      //   }
      //   return item;
      // });
      const item = state.cartItems.find((item) => item.id === payload);
      item.amount += 1;
    },
    decrease: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload);
      item.amount -= 1;
    },
    calculateTotals: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        total += item.amount;
        amount += item.amount * item.price;
      });
      state.total = total;
      state.amount = amount;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  ClearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
