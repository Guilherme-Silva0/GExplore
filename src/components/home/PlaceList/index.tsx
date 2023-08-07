import { View, Text, FlatList } from 'react-native'
import { PlaceApiType } from '../../../types/apiTypes'
import { styles } from './styles'
import PlaceItem from '../../PlaceItem'

export default function PlaceList({
  placeList,
}: {
  placeList: PlaceApiType[]
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Encontrado {placeList.length} lugares</Text>
      <FlatList
        data={placeList}
        scrollEnabled={false}
        renderItem={({ item, index }) => (
          <PlaceItem place={item} key={index} index={index} />
        )}
        showsVerticalScrollIndicator={false}
        style={styles.list}
      />
    </View>
  )
}
