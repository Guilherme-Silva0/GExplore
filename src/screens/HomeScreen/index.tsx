import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/home/Header'
import GoogleMapView from '../../components/home/GoogleMapView'
import CategoryList from '../../components/home/CategoryList'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Header />
      <GoogleMapView />
      <CategoryList />
    </SafeAreaView>
  )
}
