import { View, Text, Image, TouchableOpacity } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { PlaceApiType } from '../../../types/apiTypes'
import { styles } from './styles'
import { colors } from '../../../theme/colors'
import { sharePlace } from '../../../services/share'

export default function PlaceDetailsItem({
  place,
  handlePressPlaceDirection,
}: {
  place: PlaceApiType
  handlePressPlaceDirection: () => void
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.placeName}>{place.name}</Text>
      <View style={styles.ratingWrapper}>
        <AntDesign name="star" size={20} color={colors.yellow} />
        <Text>{place.rating}</Text>
      </View>
      <Image
        source={
          place?.photos
            ? {
                uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photoreference=${place.photos[0].photo_reference}&key=${process.env.EXPO_PUBLIC_GOOGLE_API_KEY}`,
              }
            : require('../../../assets/placeholder-image.jpg')
        }
        alt="image placeholder"
        style={styles.image}
      />
      <Text style={styles.placeVinicity}>
        {place.vicinity ? place.vicinity : place.formatted_address}
      </Text>
      {place.opening_hours && (
        <Text style={styles.placeOpeningHours}>
          {place.opening_hours?.open_now ? 'Aberto' : 'Fechado'}
        </Text>
      )}
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handlePressPlaceDirection}
          style={styles.actionButton}
        >
          <Ionicons
            name="navigate-circle-outline"
            size={24}
            color={colors.black}
          />
          <Text style={styles.actionButtonText}>Direção</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => sharePlace(place)}
          style={styles.actionButton}
        >
          <Ionicons name="md-share-outline" size={24} color={colors.black} />
          <Text style={styles.actionButtonText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
