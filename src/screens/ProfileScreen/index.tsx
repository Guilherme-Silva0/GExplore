import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ProfileScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  )
}
