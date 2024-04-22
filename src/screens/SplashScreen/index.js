import { Image } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'
import { FullScreenWrapper } from '@commons'
import { IMG, ROUTES } from '@constants'

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ROUTES.ONBOARDING)
    }, 2000);
  }, [])

  return (
    <FullScreenWrapper style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image source={IMG.SPLASH_LOGO} />
    </FullScreenWrapper>
  )
}
