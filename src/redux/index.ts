import { combineReducers, configureStore } from "@reduxjs/toolkit";
import noteReducer, { noteMiddleware } from "./notes"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

const rootReducer = combineReducers({
  noteReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(noteMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
