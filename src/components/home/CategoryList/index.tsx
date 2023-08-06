import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { categoryList } from '../../../constant/categoryList'
import CategoryItem from '../CategoryItem'

export default function CategoryList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione a categoria principal</Text>
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
            onPress={() => console.log(item.value)}
          />
        )}
      />
    </View>
  )
}
