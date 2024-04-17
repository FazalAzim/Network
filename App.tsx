
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Root } from '@navigations'
import { AuthProvider, ProductProvider } from '@contexts'

const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <Root />
      </ProductProvider>
    </AuthProvider>
  )
}

export default App
