import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../app/modules/exampleModule/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
