import axios from "axios";

const xRapidAPIHostHotels4 = 'hotels4.p.rapidapi.com'
const urlHotels4 = 'https://hotels4.p.rapidapi.com/'

const xRapidAPIKey = 'ba8d6cbb50mshfad1812a9aa6a3ap1cbb40jsn20457f3ee1b1'
const header = {
  'X-RapidAPI-Host': xRapidAPIHostHotels4,
  'X-RapidAPI-Key': xRapidAPIKey
}

const idHotel = "1434013472"
const locale = "vi_VN"
const currency = "USD"

export const propertiesGetDetails = () => {
  return axios.request({
    method: 'GET',
    url: urlHotels4 + 'properties/get-details',
    params: {
      id: idHotel,
      checkIn: '2020-01-08',
      checkOut: '2022-01-15',
      adults1: '1',
      currency: currency,
      locale: locale
    },
    headers: header
  })
}

export const propertiesGetHotelPhotos = () => {
  return axios.request({
    method: 'GET',
    url: urlHotels4 + 'properties/get-hotel-photos',
    params: {
      id: idHotel
    },
    headers: header
  })
}

export const reviewsList = () => {
  return axios.request({
    method: 'GET',
    url: urlHotels4 + 'reviews/list',
    params: { id: idHotel, page: '5', loc: locale },
    headers: header
  })
}

export const reviewsV2List = () => {
  return axios.request({
    method: 'GET',
    url: urlHotels4 + 'reviews/v2/list',
    params: { hotelId: idHotel, reviewOrder: 'date_newest_first', tripTypeFilter: 'all' },
    headers: header
  })
}
