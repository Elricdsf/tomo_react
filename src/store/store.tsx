import { configureStore } from "@reduxjs/toolkit";
import { dishesReducer, dishDetailReducer } from "./dishSlice";

export const store = configureStore({
  reducer: {
    dishDetail: dishDetailReducer,
    dishes: dishesReducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
  devTools: true,
});
store.subscribe(() => {
  console.log("Redux Store Updated:", store.getState());
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
