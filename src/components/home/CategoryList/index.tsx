import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { categoryList } from '../../../constant/categoryList'
import CategoryItem from '../CategoryItem'

export default function CategoryList({
  setSelectedCategory,
}: {
  setSelectedCategory: (value: string) => void
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtre por uma categoria</Text>
      <FlatList
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categoryList}
        renderItem={({ item }) => (
          <CategoryItem
            name={item.name}
            key={item.id}
            icon={item.icon}
            onPress={() => setSelectedCategory(item.value)}
          />
        )}
      />
    </View>
  )
}
