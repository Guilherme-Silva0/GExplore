import { StyleSheet } from 'react-native'
import { colors } from '../../../theme/colors'

export const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: colors.white,
    padding: 15,
    margin: 5,
    marginBottom: 10,
    elevation: 1,
    borderRadius: 10,
  },
  image: { width: 120, height: 80, borderRadius: 8 },
  placeName: {
    fontSize: 16,
    fontFamily: 'Outfit_600SemiBold',
    marginTop: 5,
  },
  placeAddress: {
    fontSize: 13,
    fontFamily: 'Outfit_400Regular',
    color: colors.darkGray,
    marginTop: 5,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 5,
  },
})
