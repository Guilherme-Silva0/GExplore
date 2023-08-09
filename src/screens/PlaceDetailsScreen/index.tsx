import { useRoute } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Linking, Platform, View } from 'react-native'
import { StackPlaceDetailsParamsType } from '../../navigations/StackHomeNavigation'
import PlaceDetailsItem from '../../components/placeDetails/PlaceDetailsItem'
import ScrollDownIndicator from '../../components/placeDetails/ScrollDownIndicator'
import GoogleMapView from '../../components/home/GoogleMapView'
import ButtonGetDirection from '../../components/placeDetails/ButtonGetDirection'

export default function PlaceDetailsScreen() {
  const {
    params: { place },
  } = useRoute<StackPlaceDetailsParamsType>()

  const handlePressPlaceDirection = () => {
    const url =
      Platform.OS === 'ios'
        ? `maps:${place.geometry.location.lat},${place.geometry.location.lng}?q=${place.vicinity}`
        : `geo:${place.geometry.location.lat},${place.geometry.location.lng}?q=${place.vicinity}`
    Linking.openURL(url)
  }

  return (
    <View>
      <ScrollDownIndicator />
      <PlaceDetailsItem
        place={place}
        handlePressPlaceDirection={handlePressPlaceDirection}
      />
      <GoogleMapView placeList={[place]} title="Localização no mapa" />
      <ButtonGetDirection onPress={handlePressPlaceDirection} />
      <StatusBar style="light" translucent />
    </View>
  )
}
