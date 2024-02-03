import { View, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ComponentWrapper, H1, InputWithTitle, MainWrapper, PrimaryButton, RowWrapper, RowWrapperBasic, Seperator, SocialButton, Spacer, Text, TextButton } from '@commons'
import { Logo } from '@react-native/typescript-config'
import { COLORS, FONTS, IMG, ROUTES } from '@constants'
import { Apple, Eye, Facebook, Google } from '@assets'
import { height, width } from '@helpers'


export const ForgotPassword = () => {
  return (
   <MainWrapper style={{ backgroundColor: COLORS.WHITE, }}>
    <ComponentWrapper style={{paddingTop: height(10)}}>
      {/* <Image source={IMG.LOGO} style={{width: 167, height: 116, resizeMode:'contain', marginLeft: -35}} /> */}
      <Spacer />
      <H1>Forgot Password?</H1>
      <Spacer  />
      <Text style={styles.description}>Don't worry! It happens. Please enter the email address linked with your account.</Text>
      <Spacer />
      <InputWithTitle placeholder={'Enter your email'} placeholderTextColor={COLORS.DARK_GRAY}  />
      <Spacer />
     <PrimaryButton text={'Submit'} onPress={() => {}} style={{width: width(83)}} />
    </ComponentWrapper>
  </MainWrapper>
  )
}
