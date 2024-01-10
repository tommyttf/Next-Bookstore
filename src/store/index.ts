import {configureStore} from "@reduxjs/toolkit";
import bookModalDetailReducer from "@/store/bookModal";
import bookListSliceReducer from "@/store/bookList";
import messageSliceReducer from "@/store/message"

import {IReduxStore} from "@/interface/redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const makeStore = () => {
  return configureStore<IReduxStore>({
    reducer: {
      bookModalDetail: bookModalDetailReducer,
      bookList: bookListSliceReducer,
      message: messageSliceReducer
    },
  });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
