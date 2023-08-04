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

  useEffect(() => {
    ;(async () => {
      const { status } = await requestForegroundPermissionsAsync()
      if (status !== 'granted') return

      const location = await getCurrentPositionAsync({})

      setLocation(location)
    })()
  }, [])

  return (
    <UserLocationContext.Provider value={{ location, setLocation }}>
      {children}
    </UserLocationContext.Provider>
  )
}
