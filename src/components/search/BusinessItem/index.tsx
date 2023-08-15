import { View, Text, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { PlaceApiType } from '../../../types/apiTypes'

import { styles } from './styles'
import { colors } from '../../../theme/colors'

export default function BusinessItem({ place }: { place: PlaceApiType }) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Image
        source={
          place?.photos
            ? {
                uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${process.env.EXPO_PUBLIC_GOOGLE_API_KEY}`,
              }
            : require('../../../assets/placeholder-image.jpg')
        }
        alt="image placeholder"
        style={styles.image}
      />
      <Text style={styles.placeName} numberOfLines={2}>
        {place.name}
      </Text>
      <Text style={styles.placeAddress} numberOfLines={2}>
        {place.vicinity ? place.vicinity : place.formatted_address}
      </Text>
      <View style={styles.ratingWrapper}>
        <AntDesign name="star" size={20} color={colors.yellow} />
        <Text>{place.rating}</Text>
      </View>
    </TouchableOpacity>
  )
}
