import { View, Text, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { PlaceApiType } from '../../../types/apiTypes'
import { styles } from './styles'
import { colors } from '../../../theme/colors'

export default function PlaceItem({
  place,
  index,
  onPress,
}: {
  place: PlaceApiType
  index: number
  onPress: (place: PlaceApiType) => void
}) {
  return (
    <TouchableOpacity
      onPress={() => onPress(place)}
      activeOpacity={0.8}
      style={index === 0 ? styles.bigContainer : styles.container}
    >
      <Image
        source={
          place?.photos
            ? {
                uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=900&photoreference=${place.photos[0].photo_reference}&key=${process.env.EXPO_PUBLIC_GOOGLE_API_KEY}`,
              }
            : require('../../../assets/placeholder-image.jpg')
        }
        alt="image placeholder"
        style={index === 0 ? styles.bigImage : styles.image}
      />
      <View style={styles.placeInfo}>
        <Text numberOfLines={2} style={styles.placeName}>
          {place.name}
        </Text>
        <Text numberOfLines={2} style={styles.placeVinicity}>
          {place.vicinity}
        </Text>
        <View style={styles.ratingWrapper}>
          <AntDesign name="star" size={20} color={colors.yellow} />
          <Text>{place.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
