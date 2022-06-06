import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {},
  reducers: {},
});

export const actionsRegister = registerSlice.actions;
export default registerSlice.reducer;
