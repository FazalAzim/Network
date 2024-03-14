import { View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { ChatHeader, Dot, H3, HomeCard, MainWrapper, PrimaryButton, ProductCard, RowWrapper, RowWrapperBasic, Text, Wrapper } from '@commons'
import { Back_Caret_Arrow, CheckMarkIcon, FbPink, IG, MenuIcon, Toggle, X } from '@assets'
import { COLORS, FONTS, IMG, ROUTES, cards, product_Cards } from '@constants'
import { styles } from './styles'
import { height, width } from '@helpers'

export const LiveProfile = ({ route, navigation }) => {
  const { profile } = route?.params;
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [selected, setSelected] = useState(0);
  const [activeTab, setActiveTab] = useState('Videos');

  const sections = [
    { title: 'Videos' },
    { title: 'Products' },
  ];

  return (
    <MainWrapper>
      <ChatHeader
        title={""} backArrow={<Back_Caret_Arrow />}
        onBackPress={() => navigation.goBack()}
        rightIcon={profile ? <MenuIcon /> : <Toggle />} onRightPress={() => { }}
      />
      <Wrapper style={{ alignItems: 'center' }}>
        <Wrapper style={[styles({}).avatarBorder, { borderColor: profile ? COLORS.LIGHT_GRAY : COLORS.RED_COLOR, }]}>
          <Image source={IMG.AVATAR1} style={styles({}).userAvatar} />
        </Wrapper>
        {!profile && (
          <PrimaryButton text={'Live'} style={styles({}).userStatusButton} />
        )}
        <RowWrapperBasic style={{ alignItems: 'center', marginTop: profile ? 2 : -3 }}>
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
        {profile ? (
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
      <Wrapper style={styles({}).buttonTabContainer}>
        <Wrapper style={styles({}).buttonTab}>
          {sections.map((data, index) => {
            return (
              <TouchableOpacity key={index}
                style={[styles({}).button, activeTab === data.title ? styles({}).activeButton : null]}
                onPress={() => {
                  setSelected(index);
                  setActiveTab(data.title)
                }}>
                <Text style={styles({}).buttonText}>{data.title}</Text>
                {activeTab === data.title && <View style={styles({}).activeIndicator} />}
              </TouchableOpacity>
            )
          })}
        </Wrapper>
      </Wrapper>
      <Wrapper style={{ flex: 1, flexDirection: 'column' }}>
        {selected === 0 ? (
          <FlatList
            data={cards}
            renderItem={({ item }) => {
              return <HomeCard item={item} />;
            }}
          />
        ) : (
          <FlatList
            data={product_Cards}
            renderItem={({ item }) => {
              return <ProductCard item={item} />;
            }}
          />
        )
        }
      </Wrapper>
    </MainWrapper>
  )
}