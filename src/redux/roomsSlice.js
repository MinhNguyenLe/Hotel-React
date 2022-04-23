import { createSlice } from '@reduxjs/toolkit'

const roomsReducer = createSlice({
  name: 'rooms',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
  }
})

export const { todoAdded } = roomsReducer.actions
export default roomsReducer.reducer