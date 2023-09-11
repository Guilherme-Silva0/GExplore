import { Share } from 'react-native'
import { PlaceApiType } from '../types/apiTypes'

export function sharePlace(place: PlaceApiType) {
  Share.share({
    title: 'Compartilhe este lugar',
    message: `Nome do lugar: ${place.name}\nEndereço: ${
      place.vicinity ? place.vicinity : place.formatted_address
    }`,
  })
}
