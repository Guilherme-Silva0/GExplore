import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../../theme/colors'

export const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  placeName: {
    fontSize: 22,
    fontFamily: 'Outfit_600SemiBold',
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height * 0.23,
    borderRadius: 15,
    marginTop: 15,
  },
  placeVinicity: {
    fontSize: 16,
    fontFamily: 'Outfit_400Regular',
    marginTop: 15,
    color: colors.darkGray,
  },
  placeOpeningHours: {
    fontFamily: 'Outfit_400Regular',
  },
  actionsContainer: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: colors.white,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    elevation: 2,
  },
  actionButtonText: {
    fontSize: 16,
    fontFamily: 'Outfit_400Regular',
  },
})
