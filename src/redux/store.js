import { configureStore } from '@reduxjs/toolkit'
import roomsReducer from './roomsSlice'
import hotelReducer from './hotelSlice'
import bookingReducer from './bookingSlice'

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    hotel: hotelReducer,
    booking: bookingReducer
  }
})