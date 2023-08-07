import axios from 'axios'

export const mapsApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place/',
  params: {
    key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
    language: 'pt-BR',
  },
})
