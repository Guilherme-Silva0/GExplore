import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/home/Header'
import GoogleMapView from '../../components/home/GoogleMapView'
import CategoryList from '../../components/home/CategoryList'
import { mapsApi } from '../../services/api'
import { useContext, useEffect, useState } from 'react'
import PlaceList from '../../components/home/PlaceList'
import { PlaceApiType } from '../../types/apiTypes'
import { ActivityIndicator, ScrollView } from 'react-native'
import { UserLocationContext } from '../../context/UserLocationContext'
import { colors } from '../../theme/colors'

export default function HomeScreen() {
  const [placeList, setPlaceList] = useState<PlaceApiType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { location } = useContext(UserLocationContext)

  useEffect(() => {
    if (!location?.coords && placeList.length !== 0) return
    getNearbySearchPlaces()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])
  const getNearbySearchPlaces = (selectedCategory = 'other') => {
    setIsLoading(true)
    mapsApi
      .get('nearbysearch/json', {
        params: {
          location:
            location?.coords.latitude + ',' + location?.coords.longitude,
          radius: '1500',
          type: selectedCategory === 'other' ? null : selectedCategory,
        },
      })
      .then((res) => {
        setPlaceList(res.data.results)
        console.log('Req')
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <GoogleMapView placeList={placeList} />
        <CategoryList
          setSelectedCategory={(value) => getNearbySearchPlaces(value)}
        />
        {isLoading ? (
          <ActivityIndicator
            size={50}
            color={colors.blue}
            style={{ marginTop: 40 }}
          />
        ) : (
          placeList && <PlaceList placeList={placeList} />
        )}
      </ScrollView>
    </SafeAreaView>
  )
}
