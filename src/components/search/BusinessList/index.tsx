import { FlatList } from 'react-native'
import { styles } from './styles'
import { PlaceApiType } from '../../../types/apiTypes'
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from '../../../theme/colors'
import BusinessItem from '../BusinessItem'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationTypes } from '../../../navigations/types'

export default function BusinessList({
  placeList,
}: {
  placeList: PlaceApiType[]
}) {
  const { navigate } = useNavigation<StackNavigationTypes>()

  const handlePressBusiness = (place: PlaceApiType) => {
    navigate('place_details', { place })
  }
  return (
    <LinearGradient
      colors={['transparent', colors.white]}
      style={styles.container}
    >
      <FlatList
        data={placeList}
        renderItem={({ item, index }) => (
          <BusinessItem
            place={item}
            key={index}
            onPress={handlePressBusiness}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      />
    </LinearGradient>
  )
}
