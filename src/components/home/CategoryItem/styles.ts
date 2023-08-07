import { StyleSheet } from 'react-native'
import { colors } from '../../../theme/colors'

export const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 4,
    marginRight: 6,
    width: 100,
    height: 100,
    backgroundColor: colors.white,
    justifyContent: 'center',
    elevation: 2,
    borderRadius: 10,
    gap: 4,
  },
  icon: {
    width: 50,
    height: 50,
  },
  nameCategory: {
    fontSize: 13,
    fontFamily: 'Outfit_400Regular',
  },
})
