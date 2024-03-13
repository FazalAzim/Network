import { View, Image } from 'react-native'
import React, { useState } from 'react'
import { ChatHeader, Dot, H3, MainWrapper, PrimaryButton, RowWrapper, RowWrapperBasic, Text, Wrapper } from '@commons'
import { Back_Caret_Arrow, CheckMarkIcon, FbPink, IG, Toggle, X } from '@assets'
import { COLORS, FONTS, IMG, ROUTES } from '@constants'
import { styles } from './styles'
import { height, width } from '@helpers'

export const LiveProfile = ({navigation}) => {
    const [isSubscribed, setIsSubscribed] = useState(false)
  return (
   <MainWrapper>
    <ChatHeader 
        title={""} backArrow={<Back_Caret_Arrow />} 
        onBackPress={() => navigation.goBack()} 
        rightIcon={<Toggle />} onRightPress={() => {}} 
    />
    <Wrapper style={{alignItems: 'center'}}>
        <Wrapper style={styles({}).avatarBorder}>
        <Image source={IMG.AVATAR4} style={styles({}).userAvatar} />
    </Wrapper>
        <PrimaryButton text={'Live'} style={styles({}).userStatusButton} />
        <RowWrapperBasic style={{alignItems:'center'}}>
            <H3 style={{marginRight: 5}}>John Doe</H3>
            <CheckMarkIcon />
        </RowWrapperBasic>
        <RowWrapperBasic style={{marginTop: height(1)}}>
            <RowWrapperBasic>
                <H3 style={styles({}).count}>654</H3>
                <Text style={styles({}).subscribersText}>Subscribers</Text>
            </RowWrapperBasic>
            <RowWrapperBasic style={{alignItems:'center'}}>
                <Dot />
                <H3 style={styles({}).videosCount}>65</H3>
                <Text style={{color: COLORS._8181, fontSize: 13}}>Videos</Text>
            </RowWrapperBasic>
        </RowWrapperBasic>
        <RowWrapper style={{width: width(55), marginTop: height(1)}}>
            <RowWrapperBasic style={{alignItems:'center'}}>
                <X />
                <Text style={{color: COLORS.PRIMARY_COLOR, fontFamily: FONTS.URBAN_MEDIUM, marginLeft: 4}}>johndoe</Text>
            </RowWrapperBasic>
             <RowWrapperBasic style={{alignItems:'center'}}>
                <FbPink />
                <Text style={{color: COLORS.PRIMARY_COLOR, fontFamily: FONTS.URBAN_MEDIUM, marginLeft: 4}}>johndoe</Text>
            </RowWrapperBasic>
             <RowWrapperBasic style={{alignItems:'center'}}>
                <IG />
                <Text style={{color: COLORS.PRIMARY_COLOR, fontFamily: FONTS.URBAN_MEDIUM, marginLeft: 4}}>johndoe</Text>
            </RowWrapperBasic>
        </RowWrapper>
        <RowWrapper style={{width: width(55), marginTop: height(1)}}>
            <PrimaryButton onPress={() => setIsSubscribed(true)} text={isSubscribed ? "Subscribed": "Subscribe"} style={{width: width(25), height: height(4), backgroundColor: isSubscribed ? COLORS.LIGHT_PINK : COLORS.PRIMARY_COLOR}} />
            <PrimaryButton onPress={() => navigation.navigate(ROUTES.INBOX)} text="Message" style={{width: width(25), height: height(4)}} />
        </RowWrapper>
    </Wrapper>
    <Wrapper style={{marginHorizontal: width(3)}}>
        <H3>Bio</H3>
        <Text style={{color: COLORS._7B7B, fontSize: 13, lineHeight: 21, marginTop: height(1)}}>
            I'm a marketing lead at XYZ Digital Products. With over 6 years of experience in online marketing & eCommerce, I shares my knowledge here. I'm inspired by the success of many content creators and is passionate about finding new ways how I can help others to succeed.
        </Text>
    </Wrapper>
   </MainWrapper>
  )
}
