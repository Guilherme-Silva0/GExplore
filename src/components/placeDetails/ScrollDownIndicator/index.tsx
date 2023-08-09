import { View } from 'react-native'
import { styles } from './styles'

export default function ScrollDownIndicator() {
  return (
    <View style={styles.container}>
      <View style={styles.indicator} />
    </View>
  )
}
