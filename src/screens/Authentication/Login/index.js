import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ComponentWrapper, H1, InputWithTitle, MainWrapper, PrimaryButton, RowWrapper, RowWrapperBasic, Seperator, SocialButton, Spacer, TextButton } from '@commons'
import { Logo } from '@react-native/typescript-config'
import { COLORS, FONTS, IMG, ROUTES } from '@constants'
import { Apple, Eye, Facebook, Google } from '@assets'
import { height, width } from '@helpers'

export const Login = ({navigation}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const onIconPress = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }
  return (
  <MainWrapper style={{justifyContent:'center', backgroundColor: COLORS.WHITE}}>
    <ComponentWrapper>
      <Image source={IMG.LOGO} style={{width: 167, height: 116, resizeMode:'contain', marginLeft: -35}} />
      <Spacer />
      <H1>Welcome Back!</H1>
      <Spacer />
      <InputWithTitle placeholder={'Email'} placeholderTextColor={COLORS.DARK_GRAY}  />
      <InputWithTitle placeholder={'Password'} secureTextEntry={isPasswordVisible} placeholderTextColor={COLORS.DARK_GRAY} right={<Eye />} onPressRight={onIconPress} />
      <Spacer />
      <TextButton style={{ alignSelf: 'flex-end' }} text='Forgot Password?' onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)} />
      <Spacer />
      <PrimaryButton text={'Login'} onPress={() => {}} style={{width: width(83)}} />
      <Spacer />
      <Seperator />
       <RowWrapper>
        <SocialButton style={{borderColor: COLORS.BD_COLOR, width: width(20)}} icon={<Facebook />} />
        <SocialButton style={{borderColor: COLORS.BD_COLOR, width: width(20)}} icon={<Google />} />
        <SocialButton style={{borderColor: COLORS.BD_COLOR, width: width(20)}} icon={<Apple />} />
       </RowWrapper>
       <Spacer />
       <RowWrapperBasic style={{alignSelf: 'center', position:'absolute', bottom: -60}}>
          <Text style={{color: COLORS.BLACK, fontFamily: FONTS.URBAN_REGULAR}}>Don't have an account?</Text>
          <TextButton text="Sign up" onPress={() => navigation.navigate(ROUTES.SIGNUP)} />
        </RowWrapperBasic>
    </ComponentWrapper>
  </MainWrapper>
  )
}
