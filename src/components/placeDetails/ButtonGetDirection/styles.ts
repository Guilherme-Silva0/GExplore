import { StyleSheet } from 'react-native'
import { colors } from '../../../theme/colors'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    flexDirection: 'row',
    padding: 15,
    marginTop: 15,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    gap: 5,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Outfit_400Regular',
    color: colors.white,
  },
})
