import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/home/Header'
import GoogleMapView from '../../components/home/GoogleMapView'
import CategoryList from '../../components/home/CategoryList'
import { mapsApi } from '../../services/api'
import { useEffect, useState } from 'react'
import PlaceList from '../../components/home/PlaceList'
import { PlaceApiType } from '../../types/apiTypes'
import { ScrollView } from 'react-native'

export default function HomeScreen() {
  const [placeList, setPlaceList] = useState<PlaceApiType[]>([])

  useEffect(() => {
    getNearbySearchPlaces()
  }, [])
  const getNearbySearchPlaces = () => {
    mapsApi
      .get('nearbysearch/json', {
        params: {
          location: '37.78825,-122.4324',
          radius: '1500',
          type: 'restaurant',
        },
      })
      .then((res) => {
        setPlaceList(res.data.results)
        console.log('Req')
      })
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <GoogleMapView />
        <CategoryList />
        {placeList && <PlaceList placeList={placeList} />}
      </ScrollView>
    </SafeAreaView>
  )
}
