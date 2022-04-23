import { createSlice } from '@reduxjs/toolkit'

const roomsReducer = createSlice({
  name: 'rooms',
  initialState: [],
  reducers: {
    addRoom(state, action) {
      console.log(action.payload)
      state.push({
        ...action.payload
      })
    },
  }
})

export const { addRoom } = roomsReducer.actions
export default roomsReducer.reducer