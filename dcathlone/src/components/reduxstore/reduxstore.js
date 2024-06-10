import React from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartTotalItemsArray: [],
    SingleProductDetail: null,
    quantity: 0,
    totalPrice  : 0
  },
  reducers: {
    viewProductDetailFunction: (state, action) => {     
      console.log(action.payload);
      state.SingleProductDetail = action.payload;     
    },

    addItemIncartFunction: (state, action) => {
      console.log(action.payload);
      state.cartTotalItemsArray.push(action.payload);
    },  
    fetchFromDatabaseFunction: (state, action) => {
      console.log(action.payload);
      state.totalPrice = action.payload.map((item)=> item.price).reduce((a,b) => a+b, 0)
      state.cartTotalItemsArray = action.payload;
    },  

    removeItemFromCartFunction: (state, action) => {       
     console.log('action.payload', action.payload ,"removebuttonclicked");
      state.cartTotalItemsArray = state.cartTotalItemsArray.filter(item => item.id !== action.payload);
    }
  },
});
const store = configureStore({ reducer: {
  itemInDetailPage: cartSlice.reducer
}});
export const cartReduxActions = cartSlice.actions;
export default store;
