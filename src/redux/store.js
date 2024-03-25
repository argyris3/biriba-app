import { configureStore } from '@reduxjs/toolkit';
// import numberReducer from "./features/numberSlice";
import valueReducer from './features/inputSlice';
import valueReducer1 from './features/input1Slice';

export const store = configureStore({
  reducer: {
    // number: numberReducer,
    value: valueReducer,
    value1: valueReducer1,
  },
});
