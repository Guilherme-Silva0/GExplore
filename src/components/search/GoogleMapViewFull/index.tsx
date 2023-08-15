import { View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { UserLocationContext } from '../../../context/UserLocationContext'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { styles } from './styles'
import { PlaceApiType } from '../../../types/apiTypes'

export default function GoogleMapViewFull({
  placeList,
}: {
  placeList: PlaceApiType[]
}) {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0552,
    longitudeDelta: 0.0421,
  })

  const { location } = useContext(UserLocationContext)

  useEffect(() => {
    if (location) {
      setMapRegion((oldMapRegion) => ({
        ...oldMapRegion,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }))
    }
  }, [location])

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      >
        <Marker title="Você" coordinate={mapRegion} />
        {placeList.map((place, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: place.geometry.location.lat,
              longitude: place.geometry.location.lng,
            }}
            title={place.name}
            description={place.vicinity}
          />
        ))}
      </MapView>
    </View>
  )
}
