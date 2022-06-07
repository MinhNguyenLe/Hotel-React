import { createSlice } from '@reduxjs/toolkit'

const bookingReducer = createSlice({
  name: 'booking',
  initialState: [],
  reducers: {
    book(state, action) {
      state.push({
        ...action.payload
      })
    },
  }
})

export const { book } = bookingReducer.actions
export default bookingReducer.reducer