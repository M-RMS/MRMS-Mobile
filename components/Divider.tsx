import React from 'react'
import { View } from 'react-native'

export default ({ distance = 5 }: { distance?: number }) => (
  <View
    style={{
      marginVertical: distance,
      height: 1,
      backgroundColor: '#eaeaea'
    }}
  />
)
