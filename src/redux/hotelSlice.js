import { createSlice } from '@reduxjs/toolkit'

const hotelReducer = createSlice({
  name: 'hotel',
  initialState: [],
  reducers: {
    setDefaultHotelInformation(state, action) {
      state.push({
        ...action.payload
      })
    },
  }
})

export const { setDefaultHotelInformation } = hotelReducer.actions
export default hotelReducer.reducer