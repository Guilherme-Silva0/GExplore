import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Outfit_600SemiBold',
    marginBottom: 15,
    width: Dimensions.get('window').width * 0.9,
    textAlign: 'left',
  },
  mapWarpper: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  map: {
    width: Dimensions.get('window').width * 0.95,
    height: Dimensions.get('window').height * 0.23,
  },
})
