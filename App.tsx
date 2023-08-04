/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './src/navigations/TabNavigation'
import { colors } from './src/theme/colors'
import { UserLocationProvider } from './src/context/UserLocationContext'
import {
  Outfit_400Regular,
  Outfit_600SemiBold,
  useFonts,
} from '@expo-google-fonts/outfit'

export default function App() {
  const [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_600SemiBold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <UserLocationProvider>
        <TabNavigation />
        <StatusBar style="dark" translucent backgroundColor={colors.white} />
      </UserLocationProvider>
    </NavigationContainer>
  )
}
