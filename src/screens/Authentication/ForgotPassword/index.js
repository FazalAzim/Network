import { View, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './styles'
import { 
  ComponentWrapper, 
  H1, 
  HeaderPrimary, 
  InputWithTitle, 
  MainWrapper, 
  PrimaryButton, 
  RowWrapper, 
  RowWrapperBasic, 
  Seperator, 
  SocialButton, 
  Spacer, 
  Text, TextButton } from '@commons'
import { Logo } from '@react-native/typescript-config'
import { COLORS, FONTS, IMG, ROUTES } from '@constants'
import { Apple, Back_Caret_Arrow, Eye, Facebook, Google } from '@assets'
import { height, width } from '@helpers'


export const ForgotPassword = ({navigation}) => {
 
  return (
   <MainWrapper style={{ backgroundColor: COLORS.WHITE, }}>
     <HeaderPrimary
          // title={'Support'}
          both={true}
          backArrow={<Back_Caret_Arrow />}
          backArrowPress ={() => navigation.goBack()}
          style={{marginTop: 20}}
        />
    <ComponentWrapper style={{paddingTop: height(10)}}>
      {/* <Image source={IMG.LOGO} style={{width: 167, height: 116, resizeMode:'contain', marginLeft: -35}} /> */}
      <Spacer />
      <H1>Forgot Password?</H1>
      <Spacer  />
      <Text style={styles.description}>Don't worry! It happens. Please enter the email address linked with your account.</Text>
      <Spacer />
    
      <InputWithTitle placeholder={'Enter your email'} placeholderTextColor={COLORS.DARK_GRAY}  />
      <Spacer />
     <PrimaryButton text={'Submit'} onPress={() => navigation.navigate(ROUTES.RESET_PASSWORD)} style={{width: width(83)}} />
    </ComponentWrapper>
  </MainWrapper>
  )
}
