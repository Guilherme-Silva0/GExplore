import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { PlaceApiType } from '../types/apiTypes'
import { RouteProp } from '@react-navigation/native'

export type StackNavigationProps = {
  home_screen: undefined
  search_screen: undefined
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
