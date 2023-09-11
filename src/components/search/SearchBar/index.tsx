import { Image, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'
import { colors } from '../../../theme/colors'

export default function SearchBar({
  setSearchText,
}: {
  setSearchText: (text: string) => void
}) {
  const [searchInput, setSearchInput] = useState('')
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.white, 'transparent']}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Explore</Text>
          <View style={styles.userImageWrapper}>
            <Image
              source={require('../../../assets/placeholder.jpg')}
              alt="user image"
              style={styles.userImage}
            />
          </View>
        </View>
        <View style={styles.searchBarWrapper}>
          <Ionicons name="search" size={24} color={colors.darkGray} />
          <TextInput
            placeholder="Pesquisar"
            style={styles.searchInput}
            onChangeText={(value) => setSearchInput(value)}
            onSubmitEditing={() => setSearchText(searchInput)}
          />
        </View>
      </LinearGradient>
    </View>
  )
}
