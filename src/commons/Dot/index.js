import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '@constants'

export const Dot = () => {
  return (
    <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: COLORS._D9D9}} />
  )
}