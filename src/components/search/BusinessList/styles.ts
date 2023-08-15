import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 20,
    bottom: 0,
    paddingBottom: 90,
    width: Dimensions.get('screen').width,
  },
  list: {
    marginHorizontal: 10,
  },
})
