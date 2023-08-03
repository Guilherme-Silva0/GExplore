import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import TabNavigation from './src/navigations/TabNavigation'
import { colors } from './src/theme/colors'

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
      <StatusBar style="dark" translucent backgroundColor={colors.white} />
    </NavigationContainer>
  )
}
