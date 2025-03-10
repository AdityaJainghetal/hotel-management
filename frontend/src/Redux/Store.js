// store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from "../Redux/Slice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
