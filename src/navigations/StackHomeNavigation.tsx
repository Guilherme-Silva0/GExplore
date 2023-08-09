import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import PlaceDetails from '../components/placeDetails/PlaceDetails'
import { Platform } from 'react-native'
import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'

type StackNavigationProps = {
  home_screen: undefined
  place_details: undefined
}

export type StackNavigationTypes =
  NativeStackNavigationProp<StackNavigationProps>

const Stack = createStackNavigator<StackNavigationProps>()

export default function StackHomeNavigation() {
  const isAndroid = Platform.OS === 'android'
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}
    >
      <Stack.Screen name="home_screen" component={HomeScreen} />
      <Stack.Screen
        name="place_details"
        component={PlaceDetails}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  )
}
