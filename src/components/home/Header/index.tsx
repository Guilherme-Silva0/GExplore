import { View, Image, TextInput } from 'react-native'
import { styles } from './style'

export default function Header({
  handleSearch,
}: {
  handleSearch: (text: string) => void
}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo.png')}
        alt="logo image"
        style={styles.logo}
      />
      <TextInput
        placeholder="Pesquise pelo nome do local"
        style={styles.searchBar}
        onChangeText={(text) => handleSearch(text)}
      />
      <Image
        source={require('../../../assets/placeholder.jpg')}
        alt="user image"
        style={styles.userImage}
      />
    </View>
  )
}
