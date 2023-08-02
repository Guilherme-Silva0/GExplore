import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SearchScreen from '../screens/SearchSreen'
import FavScreen from '../screens/FavScreen'
import { Text, View } from 'react-native'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 35,
          // elevation: 5,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <MaterialIcons name="home" size={size} color={color} />
              {focused && <Text style={{ fontSize: 12, color }}>Início</Text>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <MaterialIcons name="search" size={size} color={color} />
              {focused && (
                <Text style={{ fontSize: 12, color }}>Pesquisar</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Fav"
        component={FavScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <MaterialIcons
                name="favorite-outline"
                size={size}
                color={color}
              />
              {focused && (
                <Text style={{ fontSize: 12, color }}>Favoritos</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <MaterialIcons name="person-outline" size={size} color={color} />
              {focused && <Text style={{ fontSize: 12, color }}>Perfil</Text>}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}
