import { configureStore } from "@reduxjs/toolkit";
import { dishesReducer, dishDetailReducer } from "./dishSlice";

export const store = configureStore({
  reducer: {
    dishDetail: dishDetailReducer,
    dishes: dishesReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
