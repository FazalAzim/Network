import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

export const H1 = ({children, style}) => {
  return (
    <Text style={[styles.text, style]}>
        {children}
    </Text>
  )
}
