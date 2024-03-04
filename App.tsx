
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Root } from '@navigations'
import { AuthProvider } from '@contexts'

const App = () => {
  return (
    <AuthProvider>
      <Root />
    </AuthProvider>
  )
}

export default App
