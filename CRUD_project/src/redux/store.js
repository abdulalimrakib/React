import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

export const store = configureStore({
  reducer: {
    booksReducer: bookReducer,
  },
});
