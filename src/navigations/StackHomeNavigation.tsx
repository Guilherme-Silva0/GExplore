import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import { Platform } from 'react-native'
import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import { PlaceApiType } from '../types/apiTypes'
import { RouteProp } from '@react-navigation/native'
import PlaceDetailsScreen from '../screens/PlaceDetailsScreen'

type StackNavigationProps = {
  home_screen: undefined
  place_details: {
    place: PlaceApiType
  }
}

export type StackPlaceDetailsParamsType = RouteProp<
  StackNavigationProps,
  'place_details'
>

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
        component={PlaceDetailsScreen}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  )
}
