import { Platform } from 'react-native'
import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import PlaceDetailsScreen from '../screens/PlaceDetailsScreen'
import SearchScreen from '../screens/SearchSreen'
import { StackNavigationProps } from './types'

const Stack = createStackNavigator<StackNavigationProps>()

export default function StackSearchNavigation() {
  const isAndroid = Platform.OS === 'android'
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}
    >
      <Stack.Screen name="search_screen" component={SearchScreen} />
      <Stack.Screen
        name="place_details"
        component={PlaceDetailsScreen}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  )
}
