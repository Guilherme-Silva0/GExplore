import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
