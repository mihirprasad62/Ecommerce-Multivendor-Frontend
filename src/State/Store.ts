import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";
import sellerSlice from "./seller/sellerSlice"

const rootReducer = combineReducers({

    seller:sellerSlice

});

const store = configureStore({

    reducer: rootReducer

});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;