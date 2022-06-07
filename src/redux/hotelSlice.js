import { createSlice } from '@reduxjs/toolkit'

const hotelReducer = createSlice({
  name: 'hotel',
  initialState: {
    overview: {
      overviewSections: []
    },
    propertyDescription: {
      localisedAddress: {},
      address: {},
      name: "",
      starRatingTitle: "",
      starRating: "",
      featuredPrice: {},
      mapWidget: {},
      roomTypeNames: [],
      tagline: [],
      freebies: []
    },
    atAGlance: {
      keyFacts: {
        hotelSize: [],
        arrivingLeaving: [],
        specialCheckInInstructions: [],
        requiredAtCheckIn: []
      },
      travellingOrInternet: {
        travelling: {
          pet: [],
        },
        internet: []
      },
      transportAndOther: {
        transport: {
          parking: []
        },
        otherInformation: []
      }
    },
    amenities: [],
    hygieneAndCleanliness: {
      title: "",
      healthAndSafetyMeasures: {
        title: "",
        description: "",
        measures: []
      }
    },
    transportation: {
      transportLocations: []
    },
    listImages: [],
  },
  reducers: {
    setDefaultHotelInformation(state, action) {
      state.overview = action.payload.data.body.overview
      state.propertyDescription = action.payload.data.body.propertyDescription
      state.atAGlance = action.payload.data.body.atAGlance
      state.amenities = action.payload.data.body.amenities
      state.hygieneAndCleanliness = action.payload.data.body.hygieneAndCleanliness
      state.transportation = action.payload.transportation
    },
    setListImages(state, action) {
      state.listImages = action.payload
    }
  }
})

export const { setDefaultHotelInformation, setListImages } = hotelReducer.actions
export default hotelReducer.reducer