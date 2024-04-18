import React from 'react'
import { MainWrapper, PrimaryButton, RowWrapper, RowWrapperBasic, Text, Wrapper } from '@commons'
import { Image, ImageBackground } from 'react-native'
import { COLORS, FONTS, ICON, IMG } from '@constants'
import { height, width } from '@helpers'
import { Setting_Icon } from '@assets'
import { styles } from './styles'

export const LiveStream = ({ navigation }) => {
  return (
    <MainWrapper>
      <ImageBackground source={IMG.VIDEO} resizeMode="cover" style={{ flex: 1, position: 'relative' }}>
        <RowWrapper style={{ position: 'absolute', top: 30, width: width(90) }}>
          <ICON.Entypo name='chevron-thin-left' color={COLORS.WHITE} size={22} onPress={() => navigation.goBack()} />
          <Setting_Icon/>
        </RowWrapper>
        <Wrapper style={{ paddingHorizontal: width(5), position: 'absolute', bottom: 30, flexDirection: 'column', gap: 12, }}>
          <Text style={{ fontFamily: FONTS.URBAN_MEDIUM, fontSize: 19, color: COLORS.WHITE }}>Best Multi Angle mobile stand</Text>
          <Text style={{ fontFamily: FONTS.URBAN_REGULAR, fontWeight: '400', fontSize: 12, color: COLORS.WHITE }}>XYZ Digital SLICK Multi Angle Mobile Stand. Phone Holder. Portable,Foldable Cell Phone Stand.Perfect for Bed,Office, Home,Gift and Desktop (White) Mobile Holder</Text>
          <RowWrapperBasic style={{ gap: 8 }}>
            <RowWrapperBasic>
              <Image source={IMG.AVATAR1} style={{ width: 40, height: 40, resizeMode: 'cover', borderRadius: 100, }} />
              <Image source={IMG.AVATAR2} style={{ width: 40, height: 40, resizeMode: 'cover', borderRadius: 100, position: 'relative', right: 20 }} />
              <Image source={IMG.AVATAR3} style={{ width: 40, height: 40, resizeMode: 'cover', borderRadius: 100, position: 'relative', right: 40 }} />
              <Image source={IMG.AVATAR4} style={{ width: 40, height: 40, resizeMode: 'cover', borderRadius: 100, position: 'relative', right: 60 }} />
            </RowWrapperBasic>
            <Text style={{ fontFamily: FONTS.URBAN_REGULAR, fontWeight: '400', fontSize: 12, color: COLORS.WHITE, position: 'relative', right: 60 }}>100+ Subscribers Active Now</Text>
          </RowWrapperBasic>
          <RowWrapper style={{ marginHorizontal: width(0), width: width(90), }}>
            <PrimaryButton text={'Go Live'} style={{ width: width(60), borderRadius: 6 }} />
            <Wrapper style={{ width: height(6), height: height(6), borderRadius: 100, backgroundColor: COLORS.BLACK, justifyContent: 'center', alignItems: 'center', opacity: 0.6 }}>
              <ICON.AntDesign name='sync' color={COLORS.WHITE} size={20} />
            </Wrapper>
          </RowWrapper>
        </Wrapper>
      </ImageBackground>
    </MainWrapper>
  )
}
