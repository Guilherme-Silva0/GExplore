import { StyleSheet } from 'react-native'
import { colors } from '../../../theme/colors'

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  indicator: {
    width: '25%',
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.gray,
  },
})
