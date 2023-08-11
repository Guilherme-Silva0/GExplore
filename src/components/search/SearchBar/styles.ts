import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../../theme/colors'

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 20,
    top: Dimensions.get('screen').height * 0.042,
  },
  gradient: {
    padding: 20,
    width: Dimensions.get('screen').width,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleHeader: {
    fontSize: 32,
    fontFamily: 'Outfit_600SemiBold',
  },
  userImageWrapper: {
    elevation: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  userImage: {
    width: 50,
    height: 50,
  },
  searchBarWrapper: {
    display: 'flex',
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 5,
    elevation: 2,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 40,
  },
  searchInput: {
    backgroundColor: colors.white,
    width: '80%',
    height: 40,
  },
})
