import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/home/Header'
import GoogleMapView from '../../components/home/GoogleMapView'
import CategoryList from '../../components/home/CategoryList'
import { mapsApi } from '../../services/api'
import { useContext, useEffect, useMemo, useState } from 'react'
import PlaceList from '../../components/home/PlaceList'
import { PlaceApiType } from '../../types/apiTypes'
import { ActivityIndicator, ScrollView } from 'react-native'
import { UserLocationContext } from '../../context/UserLocationContext'
import { colors } from '../../theme/colors'

export default function HomeScreen() {
  const [placeList, setPlaceList] = useState<PlaceApiType[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { location } = useContext(UserLocationContext)

  useEffect(() => {
    if (!location?.coords || placeList.length !== 0) return
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
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const filteredPlaces = useMemo(() => {
    if (searchTerm.trim().length > 2) {
      return placeList.filter(
        (place) =>
          place?.name?.toLowerCase().includes(searchTerm.toLowerCase().trim()),
      )
    }
    return placeList
  }, [placeList, searchTerm])

  return (
    <SafeAreaView>
      <ScrollView>
        <Header handleSearch={setSearchTerm} />
        <GoogleMapView
          placeList={filteredPlaces}
          title="Principais locais proximos"
        />
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
          filteredPlaces && <PlaceList placeList={filteredPlaces} />
        )}
      </ScrollView>
    </SafeAreaView>
  )
}
