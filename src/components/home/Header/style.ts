import { StyleSheet } from 'react-native'
import { colors } from '../../../theme/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: colors.white,
    padding: 10,
    paddingBottom: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 8,
  },
  logo: {
    width: 45,
    height: 45,
  },
  searchBar: {
    fontFamily: 'Outfit_400Regular',
    borderWidth: 1,
    borderColor: colors.black,
    padding: 4,
    borderRadius: 50,
    paddingLeft: 15,
    flex: 1,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
})
