import {createSlice, SliceCaseReducers, SliceSelectors} from '@reduxjs/toolkit'
import {IBookModalDetail} from "@/interface/redux";

const bookModalDetailSlice = createSlice<IBookModalDetail, SliceCaseReducers<IBookModalDetail>, "bookModalDetail", SliceSelectors<IBookModalDetail>, "bookModalDetail">({
  name: 'bookModalDetail',
  initialState: {
    isOpen: false,
    selectedId: undefined
  },
  reducers: {
    open: () => ({isOpen: true, selectedId: undefined}),
    close: () => ({isOpen: false, selectedId: undefined}),
    edit: (state, action) => ({isOpen: true, selectedId: action.payload.selectedId}),
  },
});
export const {open, close, edit} = bookModalDetailSlice.actions;
export default bookModalDetailSlice.reducer;