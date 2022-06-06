import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {},
  reducers: {},
});

export const actionsLogin = loginSlice.actions;
export default loginSlice.reducer;
