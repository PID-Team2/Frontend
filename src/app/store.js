import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../app/modules/exampleModule/counterSlice';
import authReducer from './modules/auth/authSlice';
import groupsReducer from './modules/groupsManagment/groupsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    groups: groupsReducer
  },
});
