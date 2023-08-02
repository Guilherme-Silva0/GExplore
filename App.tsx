import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import TabNavigation from './src/navigations/TabNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
      <StatusBar style="dark" translucent backgroundColor="#fff" />
    </NavigationContainer>
  )
}
