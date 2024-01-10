import {createSlice} from '@reduxjs/toolkit'
import {books} from "@/data/bookList";

const bookListSlice = createSlice({
  name: 'bookList',
  initialState: books,
  reducers: {
    updateBook: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload.id);
      const newState = [...state]
      newState[index] = action.payload;

      return newState;
    },
    addBook: (state, action) => state.concat(action.payload),
    deleteBook: (state, action) => state.filter((book) => book.id !== action.payload.deleteId)
  },
});
export const {updateBook, addBook, deleteBook} = bookListSlice.actions;
export default bookListSlice.reducer;