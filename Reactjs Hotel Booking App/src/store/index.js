import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import logoutReducer from './logoutSlice';

const store = configureStore({
  reducer: {
    logic: loginReducer,
    logout: logoutReducer,
  },
});

export default store;
