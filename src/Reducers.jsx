import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  tax: 0,
  shipping: 0,
  subTotal: 0,
  total: 0,
};
export const cartReducer = createReducer(initialState, {
  addToCart: (state, action) => {
    if (state.cartItems.length != 0) {
      const elem = state.cartItems.find((elem) => elem.id == action.payload.id);
      if (elem) {
        elem.qty++;
      } else state.cartItems.push(action.payload);
    } else state.cartItems.push(action.payload);

    const { shipping, tax, price } = action.payload;
    state.tax += tax;
    state.shipping += shipping;
    state.subTotal += price;
    state.total = state.total + price + tax + shipping;
  },

  increment: (state, action) => {
    let elem = state.cartItems.find((elem) => elem.id == action.payload);
    elem.qty++;

    const { shipping, tax, price } = elem;
    state.tax += tax;
    state.shipping += shipping;
    state.subTotal += price;
    state.total = state.total + price + tax + shipping;
  },
  decrement: (state, action) => {
    let elem = state.cartItems.find((elem) => elem.id == action.payload);
    if (elem.qty > 1) {
      elem.qty--;

      const { shipping, tax, price } = elem;
      state.tax -= tax;
      state.shipping -= shipping;
      state.subTotal -= price;
      state.total = state.total - price - tax - shipping;
    }
  },
  delete: (state, action) => {
    let safe = state.cartItems.filter((elem) => elem.id != action.payload);
    state.cartItems = safe;

    if (state.cartItems.length != 0) {
      state.cartItems.forEach(({ qty, tax, shipping, price }) => {
        state.tax = qty * tax;
        state.shipping = qty * shipping;
        state.subTotal = qty * price;
        state.total = qty * (price + tax + shipping);
      });
    } else {
      state.tax = 0;
      state.shipping = 0;
      state.subTotal = 0;
      state.total = 0;
    }
  },
});
