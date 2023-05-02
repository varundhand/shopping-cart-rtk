import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { userAPI } from "./userAPI";
import axios from "axios";

const initialState = {
  cartItems: [],
  amount: 1, // each item specific count
  total: 0,
  isLoading: true,
};

const url = `https://course-api.com/react-useReducer-cart-project`;

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (thunkAPI) => {
    // thunkAPI is an object passed as an argument which provides us with methods such as distpacth, getState, extra, etc
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    // these are LIFE CYCLE ACTIONS
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.cartItems = action.payload;
    });
    builder.addCase(getCartItems.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const { ClearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
