import { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import { styles } from './styles'
import { UserLocationContext } from '../../../context/UserLocationContext'

export default function GoogleMapView() {
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
      <Text style={styles.title}>Principais lugares próximos</Text>
      <View style={styles.mapWarpper}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
          <Marker title="Você" coordinate={mapRegion} />
        </MapView>
      </View>
    </View>
  )
}
