import { ChatHeader, Dot, H3, PrimaryButton, RowWrapper, RowWrapperBasic, Text, Wrapper } from '@commons'
import { COLORS, FONTS, ICON, IMG, ROUTES } from '@constants'
import { CheckMarkIcon, FbPink, IG, MenuIcon, Toggle, X } from '@assets'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { height, width } from '@helpers'
import { styles } from './styles'

export const ProfileCard = ({ type, navigation ,onPress }) => {
  const [isSubscribed, setIsSubscribed] = useState(false)

  return (
    <Wrapper>
      <ChatHeader
        title={""} backArrow={<ICON.Entypo name='chevron-thin-left' color={COLORS._3838} size={20} />}
        onBackPress={() => navigation.goBack()}
        rightIcon={type === 'provider' ? <Toggle /> : type === 'profile' ? <MenuIcon onPress={onPress} /> : <Toggle />} onRightPress={() => { }}
      />
      <Wrapper style={{ alignItems: 'center' }}>
        <Wrapper style={[styles({}).avatarBorder, { borderColor: type === 'profile' ? COLORS.LIGHT_GRAY : COLORS.RED_COLOR, }]}>
          <Image source={IMG.AVATAR1} style={styles({}).userAvatar} />
        </Wrapper>
        {type === 'provider' && (
          <PrimaryButton text={'Live'} style={styles({}).userStatusButton} />
        )}
        <RowWrapperBasic style={{ alignItems: 'center', marginTop: type === 'profile' ? 2 : -3 }}>
          <H3 style={{ marginRight: 5, }}>John Doe</H3>
          <CheckMarkIcon />
        </RowWrapperBasic>
        <RowWrapperBasic style={{ marginTop: height(1) }}>
          <RowWrapperBasic>
            <H3 style={styles({}).count}>654</H3>
            <Text style={styles({}).subscribersText}>Subscribers</Text>
          </RowWrapperBasic>
          <RowWrapperBasic style={{ alignItems: 'center' }}>
            <Dot />
            <H3 style={styles({}).videosCount}>65</H3>
            <Text style={{ color: COLORS._8181, fontSize: 13 }}>Videos</Text>
          </RowWrapperBasic>
        </RowWrapperBasic>
        <RowWrapper style={{ width: width(55), marginTop: height(1) }}>
          <RowWrapperBasic style={{ alignItems: 'center' }}>
            <X />
            <Text style={{ color: COLORS.PRIMARY_COLOR, fontFamily: FONTS.URBAN_MEDIUM, marginLeft: 4 }}>johndoe</Text>
          </RowWrapperBasic>
          <RowWrapperBasic style={{ alignItems: 'center' }}>
            <FbPink />
            <Text style={{ color: COLORS.PRIMARY_COLOR, fontFamily: FONTS.URBAN_MEDIUM, marginLeft: 4 }}>johndoe</Text>
          </RowWrapperBasic>
          <RowWrapperBasic style={{ alignItems: 'center' }}>
            <IG />
            <Text style={{ color: COLORS.PRIMARY_COLOR, fontFamily: FONTS.URBAN_MEDIUM, marginLeft: 4 }}>johndoe</Text>
          </RowWrapperBasic>
        </RowWrapper>
        {type === 'profile' ? (
          <Wrapper style={{ marginTop: height(2) }}>
            <PrimaryButton text={"Edit Profile"} style={{ width: width(25), height: height(3.5), backgroundColor: COLORS.PRIMARY_COLOR }} />
          </Wrapper>
        ) : (
          <RowWrapper style={{ width: width(55), marginTop: height(2) }}>
            <PrimaryButton onPress={() => setIsSubscribed(true)} text={isSubscribed ? "Subscribed" : "Subscribe"} style={{ width: width(25), height: height(3.5), backgroundColor: isSubscribed ? COLORS.LIGHT_PINK : COLORS.PRIMARY_COLOR }} />
            <PrimaryButton onPress={() => navigation.navigate(ROUTES.INBOX)} text="Message" style={{ width: width(25), height: height(3.4) }} />
          </RowWrapper>
        )}
      </Wrapper>
      <Wrapper style={{ marginHorizontal: width(3) }}>
        <H3>Bio</H3>
        <Text style={{ color: COLORS._7B7B, fontSize: 13, lineHeight: 21, marginTop: height(2) }}>
          I'm a marketing lead at XYZ Digital Products. With over 6 years of experience in online marketing & eCommerce, I shares my knowledge here. I'm inspired by the success of many content creators and is passionate about finding new ways how I can help others to succeed.
        </Text>
      </Wrapper>
    </Wrapper>
  )
}

