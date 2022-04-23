import axios from "axios";

const xRapidAPIHostPriceline = 'priceline-com.p.rapidapi.com'
const xRapidAPIHostHotels4 = 'hotels4.p.rapidapi.com'
const xRapidAPIHostLeejaew = 'leejaew-hotels-in-singapore-v1.p.rapidapi.com'

const xRapidAPIKey = 'ba8d6cbb50mshfad1812a9aa6a3ap1cbb40jsn20457f3ee1b1'
const header = {
  'X-RapidAPI-Host': xRapidAPIHostHotels4,
  'X-RapidAPI-Key': xRapidAPIKey
}

const urlPriceline = 'https://priceline-com.p.rapidapi.com/'
const urlHotels4 = 'https://hotels4.p.rapidapi.com/'
const urlLeejaew = 'https://leejaew-hotels-in-singapore-v1.p.rapidapi.com/'

export const getMetaData = (params) => {
  return axios.request({
    method: 'GET',
    url: urlHotels4 + 'get-meta-data',
    params: params || {},
    headers: header
  })
}

export const locationsV2Search = (params) => {
  // should params
  return axios.request({
    method: 'GET',
    url: urlHotels4 + 'locations/v2/search',
    params: params || {},
    headers: header
  })
}


export const locationsSearchDeprecated = (params) => {
  // should params
  return axios.request({
    method: 'GET',
    url: urlHotels4 + 'locations/search',
    params: params || {},
    headers: header
  })
}

export const propertiesList = (params) => {
  // should params
  return axios.request({
    method: 'GET',
    url: urlHotels4 + 'properties/list',
    params: params || {},
    headers: header
  })
}

export const propertiesGetDetails = (params) => {
  // should params
  return axios.request({
    method: 'GET',
    url: urlHotels4 + 'properties/get-details',
    params: params || {},
    headers: header
  })
}

export const propertiesGetHotelPhotos = (params) => {
  // should params
  return axios.request({
    method: 'GET',
    url: urlHotels4 + 'properties/get-hotel-photos',
    params: params || {},
    headers: header
  })
}

export const reviewsList = (params) => {
  // should params
  return axios.request({
    method: 'GET',
    url: urlHotels4 + 'reviews/list',
    params: params || {},
    headers: header
  })
}

export const reviewsV2List = (params) => {
  // should params
  return axios.request({
    method: 'GET',
    url: urlHotels4 + 'reviews/v2/list',
    params: params || {},
    headers: header
  })
}
