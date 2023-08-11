import { SafeAreaView } from 'react-native-safe-area-context'
import GoogleMapViewFull from '../../components/search/GoogleMapViewFull'
import SearchBar from '../../components/search/SearchBar'

export default function SearchScreen() {
  return (
    <SafeAreaView>
      <SearchBar />
      <GoogleMapViewFull placeList={[]} />
    </SafeAreaView>
  )
}
