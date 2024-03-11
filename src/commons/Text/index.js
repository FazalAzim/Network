import { View, Text as RNText } from 'react-native'
import React from 'react'
import { styles } from './styles'

export const Text = ({children, multiline, numOfLines, style}) => {
  return (
    <RNText
    numOfLines={numOfLines || 1}
    multiline={multiline || true}
     style={[styles.text, style]}>
        {children}
    </RNText>
  )
}
