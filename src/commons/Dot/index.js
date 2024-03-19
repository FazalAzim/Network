import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '@constants'

export const Dot = ({style}) => {
  return (
    <View style={[{width: 6, height: 6, borderRadius: 50, backgroundColor: COLORS._D9D9},style]} />
  )
}