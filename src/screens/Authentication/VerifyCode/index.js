import { View, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import { ComponentWrapper, H1, HeaderPrimary, InputWithTitle, MainWrapper, PrimaryButton, RowWrapper, RowWrapperBasic, Seperator, SocialButton, Spacer, Text, TextButton } from '@commons'
import { Logo } from '@react-native/typescript-config'
import { COLORS, FONTS, IMG, ROUTES } from '@constants'
import { Apple, Back_Caret_Arrow, Eye, Facebook, Google } from '@assets'
import { height, width } from '@helpers'

import OTPTextView from 'react-native-otp-textinput';

export const VerifyCode = () => {
   let otpInput = useRef(null);
    const [seconds, setSeconds] = useState(59);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 0) {
            setIsActive(false); // Stop the timer when it reaches 0
            return prevSeconds;
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

    const clearText = () => {
        otpInput.current.clear();
    }

    const setText = () => {
        otpInput.current.setValue("1234");
    }
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
      <H1>Verification Code</H1>
      <Spacer  />
      <Text style={styles.description}>Enter the verification code we just sent to your email address.</Text>
      <Spacer />
        <OTPTextView
          ref={otpInput}
          tintColor={COLORS.PRIMARY_COLOR}
          textInputStyle={{borderWidth: 1, borderBottomWidth: 1, borderRadius: 8,width: 60}}
          // containerStyle={{borderWidth: 1}}
          // handleTextChange={setOtpInput}
          // handleCellTextChange={handleCellTextChange}
          inputCount={4}
          keyboardType="numeric"
          
        />
      {/* <InputWithTitle placeholder={'Enter your email'} placeholderTextColor={COLORS.DARK_GRAY}  /> */}
      <Spacer />
      <Text style={styles.description}>Time remaining {seconds < 10 ? '0:0' + seconds +'s' : '0:'+seconds+'s'}</Text>
      <Spacer />
     <PrimaryButton text={'Verify'} onPress={() => {}} style={{width: width(83)}} />
     <Spacer />
     <TextButton text={'Resend Code'} onPress={() => {}} textBtnStyle={{color: COLORS.DARK_GRAY, fontSize: 15, fontFamily: FONTS.URBAN_MEDIUM, textAlign: 'center'}}  />
    </ComponentWrapper>
  </MainWrapper>
  )
}
