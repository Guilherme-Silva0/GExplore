import {
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import React from 'react'
import { styles } from './styles'
import { categoryList } from '../../../constant/categoryList'

type CategoryItemProps = TouchableOpacityProps & {
  name: string
  icon: (typeof categoryList)[0]['icon']
}

export default function CategoryItem({
  name,
  icon,
  ...rest
}: CategoryItemProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <Image source={icon} alt="Category image" style={styles.icon} />
      <Text style={styles.nameCategory}>{name}</Text>
    </TouchableOpacity>
  )
}
