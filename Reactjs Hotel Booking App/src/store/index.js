import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from './login';
import { registerReducer } from './register';

const store = configureStore({
  reducer: {
    logic: loginReducer,
    register: registerReducer,
  },
});

export default store;
