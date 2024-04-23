import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ComponentWrapper, H1, HeaderPrimary, InputWithTitle, MainWrapper, PrimaryButton, RowWrapper, RowWrapperBasic, Seperator, SocialButton, Spacer, TextButton, Wrapper } from '@commons'
import { Logo } from '@react-native/typescript-config'
import { COLORS, FONTS, ICON, IMG, ROUTES } from '@constants'
import { Apple, Back_Caret_Arrow, Eye, Facebook, Google } from '@assets'
import { height, width } from '@helpers'

export const Signup = ({navigation}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const onIconPress = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }
  return (
     <MainWrapper style={{ backgroundColor: COLORS.WHITE}}>
      <HeaderPrimary
          // title={'Support'}
          both={true}
          backArrow={<Back_Caret_Arrow />}
          backArrowPress ={() => navigation.goBack()}
          style={{marginTop: 20,marginLeft:10}}
        />
      <Spacer isHeaderHeight={true}/>
    <ComponentWrapper>
      {/* <Image source={IMG.LOGO} style={{width: 167, height: 116, resizeMode:'contain', marginLeft: -35}} /> */}
      {/* <Spacer /> */}
      <H1>Join Skyylytes</H1>
      <Spacer isDoubleBase={true} />
      <InputWithTitle title={"Name"} placeholder={'John Mandel'} placeholderTextColor={COLORS.DARK_GRAY}  />
      <InputWithTitle title={"Email"} placeholder={'Email'} placeholderTextColor={COLORS.DARK_GRAY}  />
      <InputWithTitle title={"Password"} placeholder={'Password'} secureTextEntry={isPasswordVisible} placeholderTextColor={COLORS.DARK_GRAY} right={<Eye />} onPressRight={onIconPress} />
      <Spacer />
      {/* <TextButton style={{ alignSelf: 'flex-end' }} text='Forgot Password?' onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)} />
      <Spacer /> */}
      <PrimaryButton text={'Sign Up'} onPress={() => {}} style={{width: width(83)}} />
      <Spacer />
      <Seperator />
       <RowWrapper style={{justifyContent:'center', gap:12}}>
        <SocialButton style={{borderColor: COLORS.BD_COLOR, width: width(20)}} icon={<Facebook />} />
        <SocialButton style={{borderColor: COLORS.BD_COLOR, width: width(20)}} icon={<Google />} />
        <SocialButton style={{borderColor: COLORS.BD_COLOR, width: width(20)}} icon={<Apple />} />
       </RowWrapper>
       <Spacer />
       <RowWrapperBasic style={{alignSelf: 'center', position:'absolute', bottom: -60, gap:2}}>
          <Text style={{color: COLORS.BLACK, fontFamily: FONTS.URBAN_REGULAR}}>Don't have an account?</Text>
          <TextButton text="Sign In"  onPress={() => navigation.navigate(ROUTES.LOGIN)} />
        </RowWrapperBasic>
    </ComponentWrapper>
  </MainWrapper>
  )
}
