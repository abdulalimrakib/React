// url : https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyA227ggBwt9ow5MqJsOxRx97uEYhiE0-Nw

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  books: [],
  error: null,
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const res = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyA227ggBwt9ow5MqJsOxRx97uEYhiE0-Nw"
  );
  return res.data.items;
});

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    deleteData: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export const { deleteData } = bookSlice.actions;

export default bookSlice.reducer;
