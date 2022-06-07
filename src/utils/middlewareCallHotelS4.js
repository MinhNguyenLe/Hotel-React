import { formatBaseUrlFromAPI } from "./formatBaseUrlFromAPI"

export function listImagesHotel(arr) {
  return arr.map(image => formatBaseUrlFromAPI(image.baseUrl))
}

export function listRoomImages(arrImages, arrNames) {
  return arrImages.map((item, index) => {
    return {
      name: arrNames[index],
      roomId: item.roomId,
      images: item.images.map(image => formatBaseUrlFromAPI(image.baseUrl))
    }
  })
}
