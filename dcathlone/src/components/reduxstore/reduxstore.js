import React from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartTotalItemsArray: [],
    SingleProductDetail: null,
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    viewProductDetailFunction: (state, action) => {
      console.log(action.payload);
      state.SingleProductDetail = action.payload;
    },

    addItemIncartFunction: (state, action) => {
      console.log(action.payload);
      state.cartTotalItemsArray.push(action.payload);
      state.totalPrice = state.cartTotalItemsArray
        .map((item) => item.price)
        .reduce((a, b) => a + b, 0);
    },
    fetchFromDatabaseFunction: (state, action) => {
      state.cartTotalItemsArray = action.payload;
      state.totalPrice = state.cartTotalItemsArray
        .map((item) => item.price)
        .reduce((a, b) => a + b, 0);
    },

    removeItemFromCartFunction: (state, action) => {
      state.cartTotalItemsArray = state.cartTotalItemsArray.filter(
        (item) => item.id !== action.payload
      );
      state.totalPrice = state.cartTotalItemsArray
        .map((item) => item.price)
        .reduce((a, b) => a + b, 0);
    },
  },
});
const store = configureStore({
  reducer: {
    itemInDetailPage: cartSlice.reducer,
  },
});
export const cartReduxActions = cartSlice.actions;
export default store;
