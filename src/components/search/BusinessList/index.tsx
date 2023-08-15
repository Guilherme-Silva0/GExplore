import { FlatList } from 'react-native'
import { styles } from './styles'
import { PlaceApiType } from '../../../types/apiTypes'
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from '../../../theme/colors'
import BusinessItem from '../BusinessItem'

export default function BusinessList({
  placeList,
}: {
  placeList: PlaceApiType[]
}) {
  return (
    <LinearGradient
      colors={['transparent', colors.white]}
      style={styles.container}
    >
      <FlatList
        data={placeList}
        renderItem={({ item }) => <BusinessItem place={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      />
    </LinearGradient>
  )
}
