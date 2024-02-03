import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'
import { FullScreenWrapper } from '@commons'
import { LargeLogo } from '@assets'
import { ROUTES } from '@constants'

export const SplashScreen = ({navigation}) => {
  useEffect(() => {
   setTimeout(() => {
    navigation.navigate(ROUTES.ONBOARDING)
   }, 2000);
  }, [])
  
  return (
    <FullScreenWrapper style={{justifyContent: 'center', alignItems: 'center'}}>
      <LargeLogo />
    </FullScreenWrapper>
  )
}
