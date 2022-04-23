import axios from "axios";

export const getMetaData = (params) => {
  const options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/get-meta-data',
    params: params || {},
    headers: {
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
      'X-RapidAPI-Key': 'ba8d6cbb50mshfad1812a9aa6a3ap1cbb40jsn20457f3ee1b1'
    }
  };

  return axios.request(options)
}