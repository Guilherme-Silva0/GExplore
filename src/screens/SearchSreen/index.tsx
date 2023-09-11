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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getNearbySearchPlaces = (query = 'restaurant') => {
    mapsApi
      .get('textsearch/json', {
        params: {
          query: query === '' ? 'restaurant' : query,
        },
      })
      .then((res) => {
        setPlaceList(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <SafeAreaView>
      <SearchBar setSearchText={(text) => getNearbySearchPlaces(text)} />
      <GoogleMapViewFull placeList={placeList} />
      <BusinessList placeList={placeList} />
    </SafeAreaView>
  )
}
