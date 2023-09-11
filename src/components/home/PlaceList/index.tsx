import { View, Text, FlatList } from 'react-native'
import { PlaceApiType } from '../../../types/apiTypes'
import { styles } from './styles'
import PlaceItem from '../PlaceItem'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationTypes } from '../../../navigations/types'

export default function PlaceList({
  placeList,
}: {
  placeList: PlaceApiType[]
}) {
  const navigator = useNavigation<StackNavigationTypes>()

  const handlePressPlace = (place: PlaceApiType) => {
    navigator.navigate('place_details', { place })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Encontrado {placeList.length} lugares</Text>
      <FlatList
        data={placeList}
        scrollEnabled={false}
        renderItem={({ item, index }) => (
          <PlaceItem
            place={item}
            key={index}
            index={index}
            onPress={(place) => handlePressPlace(place)}
          />
        )}
        showsVerticalScrollIndicator={false}
        style={styles.list}
      />
    </View>
  )
}
