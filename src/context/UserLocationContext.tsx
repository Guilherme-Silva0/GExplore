import {
  LocationObject,
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'

type UserLocationContextType = {
  location: null | LocationObject
  setLocation: Dispatch<SetStateAction<LocationObject | null>>
}

export const UserLocationContext = createContext({} as UserLocationContextType)

export function UserLocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<null | LocationObject>(null)

  const getLocation = async () => {
    const { status } = await requestForegroundPermissionsAsync()
    if (status !== 'granted') return

    const location = await getCurrentPositionAsync({})

    setLocation(location)
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <UserLocationContext.Provider value={{ location, setLocation }}>
      {children}
    </UserLocationContext.Provider>
  )
}
