import { createSlice } from '@reduxjs/toolkit'

const roomsReducer = createSlice({
  name: 'rooms',
  initialState: {
    list: []
  },
  reducers: {
    setDefaultData(state, action) {
      state.list = action.payload
    },
  }
})

export const { setDefaultData } = roomsReducer.actions
export default roomsReducer.reducer