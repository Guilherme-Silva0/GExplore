import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
  },
  bigContainer: {
    flex: 1,
    marginBottom: 15,
    gap: 10,
  },
  image: { width: 120, height: 120, borderRadius: 10 },
  placeInfo: {
    gap: 10,
    flex: 1,
  },
  bigImage: {
    width: '100%',
    height: 180,
    borderRadius: 15,
  },
  placeName: {
    fontSize: 16,
    fontFamily: 'Outfit_600SemiBold',
  },
  placeVinicity: {
    fontSize: 16,
    fontFamily: 'Outfit_400Regular',
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
})
