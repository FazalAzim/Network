import React from 'react'
import { InputWithTitle, MainWrapper, ScrollWrapper, SocialButton, Text, Wrapper } from '@commons'
import { height, width } from '@helpers'
import { COLORS, FONTS, ICON, IMG } from '@constants'

export const GoLive = () => {
  return (
    <MainWrapper>
      <ScrollWrapper>
        <Text style={{ marginTop: height(2), fontSize: 15, fontFamily: FONTS.URBAN_MEDIUM }}>Content Title</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='Best Multi Angle mobile stand' placeholderTextColor={COLORS._3C3C} inputStyle={{ backgroundColor: COLORS._E8EC, borderRadius: 7, borderColor: COLORS.LIGHT_GRAY, borderWidth: 1, height: height(8) }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
        <Text style={{ marginTop: height(4), fontSize: 15, fontFamily: FONTS.URBAN_MEDIUM }}>Content description</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='XYZ Digital SLICK Multi Angle Mobile Stand. Phone Holder. Portable,Foldable Cell Phone Stand.Perfect for Bed,Office, Home,Gift and Desktop (White) Mobile Holder' placeholderTextColor={COLORS._3C3C} numberOfLines={8} multiline={true} inputStyle={{ height: height(16), textAlignVertical: 'top', backgroundColor: COLORS._E8EC, borderRadius: 7, borderColor: COLORS.LIGHT_GRAY, borderWidth: 1, }} containerStyle={{ marginBottom: height(0), height: height(16) }} />
        </Wrapper>
        <Text style={{ marginTop: height(2), fontSize: 15, fontFamily: FONTS.URBAN_MEDIUM }}>Choose product</Text>
        <Wrapper style={{ paddingHorizontal: width(3), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: height(2), backgroundColor: COLORS._E8EC, borderRadius: 7, borderColor: COLORS.LIGHT_GRAY, borderWidth: 1, height: height(8) }}>
          <Text style={{ fontSize: 14, fontFamily: FONTS.URBAN_MEDIUM, color: COLORS._3C3C }}>Browse Product</Text>
          <ICON.Entypo name='chevron-thin-right' color={COLORS._3C3C} size={14} />
        </Wrapper>
      </ScrollWrapper>
      <SocialButton text={'Go Live'} style={{ width: width(95), borderRadius: 6, borderWidth: 0, backgroundColor: COLORS._EFEF }} styleText={{ color: COLORS._9595, fontSize: 16, fontFamily: FONTS.URBAN_MEDIUM, }} />
    </MainWrapper>
  )
}