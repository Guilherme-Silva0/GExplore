import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Outfit_400Regular',
    width: Dimensions.get('window').width * 0.9,
    marginBottom: 15,
  },
  list: {
    width: Dimensions.get('window').width * 0.9,
    paddingBottom: 125,
  },
})
