import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './styles'
import { colors } from '../../../theme/colors'

export default function ButtonGetDirection({
  ...props
}: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props} style={styles.button} activeOpacity={0.8}>
      <>
        <MaterialCommunityIcons
          name="google-maps"
          size={24}
          color={colors.white}
        />
        <Text style={styles.buttonText}>Veja a direção no Google Maps</Text>
      </>
    </TouchableOpacity>
  )
}
