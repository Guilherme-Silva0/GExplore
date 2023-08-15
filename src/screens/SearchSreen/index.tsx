import { SafeAreaView } from 'react-native-safe-area-context'
import GoogleMapViewFull from '../../components/search/GoogleMapViewFull'
import SearchBar from '../../components/search/SearchBar'
import { useEffect, useState } from 'react'
import { PlaceApiType } from '../../types/apiTypes'
import { mapsApi } from '../../services/api'
import BusinessList from '../../components/search/BusinessList'

export default function SearchScreen() {
  const [placeList, setPlaceList] = useState<PlaceApiType[]>([])

  useEffect(() => {
    if (placeList.length !== 0) return
    getNearbySearchPlaces()
  })

  const getNearbySearchPlaces = (query = 'restaurant') => {
    mapsApi
      .get('textsearch/json', {
        params: {
          query,
        },
      })
      .then((res) => {
        setPlaceList(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        console.log('req')
      })
  }

  return (
    <SafeAreaView>
      <SearchBar />
      <GoogleMapViewFull placeList={placeList} />
      <BusinessList placeList={placeList} />
    </SafeAreaView>
  )
}
