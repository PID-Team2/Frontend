import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../app/modules/exampleModule/counterSlice';
import authReducer from './modules/auth/authSlice';
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  middleware: [thunkMiddleware],
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
});
