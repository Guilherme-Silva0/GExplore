import { View, Image, TextInput } from 'react-native'
import { styles } from './style'

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo.png')}
        alt="logo image"
        style={styles.logo}
      />
      <TextInput placeholder="Pesquisar" style={styles.searchBar} />
      <Image
        source={require('../../../assets/placeholder.jpg')}
        alt="user image"
        style={styles.userImage}
      />
    </View>
  )
}
