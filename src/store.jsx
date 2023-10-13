import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Reducers";

export const cart = configureStore({
  reducer: { cart: cartReducer },
});
