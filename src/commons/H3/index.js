
import React from 'react'
import { Text } from '@commons'
import { styles } from './styles'

export const H3 = ({children, style}) => {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  )
}