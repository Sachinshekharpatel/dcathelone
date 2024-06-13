import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartTotalItemsArray: [],
    wishListArray: [],
    SingleProductDetail: null,
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    viewProductDetailFunction: (state, action) => {
      console.log(action.payload);
      state.SingleProductDetail = action.payload;
    },
    fetchFromDatabaseWishListFunction: (state, action) => {
      state.wishListArray = action.payload;
    },
    addItemInWishlistFunction: (state, action) => {
      state.wishListArray.push(action.payload);
    },

    singleProductImageChangeHandler: (state, action) => {
       const data = {...state.SingleProductDetail,image:action.payload};
      state.SingleProductDetail = data;
    },
    addItemIncartFunction: (state, action) => {
      console.log(action.payload);
      state.cartTotalItemsArray.push(action.payload);
      if (state.cartTotalItemsArray.length > 0) {
        state.totalPrice = state.cartTotalItemsArray.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);
      }
    },
    fetchFromDatabaseFunction: (state, action) => {
      state.cartTotalItemsArray = action.payload;
      if (state.cartTotalItemsArray.length > 0) {
        state.totalPrice = state.cartTotalItemsArray.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);
      }
    },

    removeItemFromCartFunction: (state, action) => {
      state.cartTotalItemsArray = state.cartTotalItemsArray.filter(
        (item) => item.id !== action.payload
      );
      if (state.cartTotalItemsArray.length > 0) {
        state.totalPrice = state.cartTotalItemsArray.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);
      }
    },

    updateSizeOfProductHandler: (state, action) => {
      state.cartTotalItemsArray = state.cartTotalItemsArray.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            size: action.payload.size,
          };
        }
        return item;
      });
      state.totalPrice = state.cartTotalItemsArray.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },

    updateQuantityOfProductHandler: (state, action) => {
      state.cartTotalItemsArray = state.cartTotalItemsArray.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }

        return item;
      });
      state.totalPrice = state.cartTotalItemsArray.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
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
