import React, { useRef } from 'react'
import { HomeCard, MainWrapper, ProductCard, ProfileCard, SocialButton, TabNavbar, Text, Wrapper } from '@commons'
import { AddressBook, Bag_Icon, Box_Icon, Favorate_Sheet, Play_Icon, Schedules, Setting, Star, } from '@assets'
import { COLORS, FONTS, ROUTES, cards, product_Cards, } from '@constants'
import { styles } from './styles'
import { height, width } from '@helpers'
import RBSheet from "react-native-raw-bottom-sheet";
import { FlatList } from 'react-native'

const Products = () => {
  return (
    <Wrapper style={{ flex: 1, flexDirection: 'column', marginTop: 12 }}>
      <FlatList
        data={product_Cards}
        renderItem={({ item }) => {
          return <ProductCard item={item} />;
        }}
      />
    </Wrapper>
  )
}

const Videos = () => {
  return (
    <Wrapper style={{ flex: 1, flexDirection: 'column', marginTop: 12 }}>
      <FlatList
        data={cards}
        renderItem={({ item }) => {
          return <HomeCard item={item} />;
        }}
      />
    </Wrapper>
  )
}

export const MyProfile = ({ navigation }) => {
  const refRBSheet = useRef();

  const routes = [
    { key: 'first', title: 'Videos' },
    { key: 'second', title: 'Products' },
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <Products />;
      case 'second':
        return <Videos />;
      default:
        return null;
    }
  };

  const sheetButton = [
    { title: 'My Videos', icon: <Play_Icon /> },
    { title: 'My Products', icon: <Box_Icon /> },
    { title: 'My Schedules ', icon: <Schedules />, click: () => navigation.navigate(ROUTES.PRODUCT_DETAIL) },
    { title: 'Subscriptions', icon: <Star /> },
    { title: 'My Orders', icon: <Bag_Icon /> },
    { title: 'Saved Videos', icon: <Favorate_Sheet /> },
    { title: 'Address Book', icon: <AddressBook /> },
    { title: 'Settings', icon: <Setting /> },
  ]

  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <ProfileCard navigation={navigation} type={'profile'} onPress={() => refRBSheet.current.open()} />
      <TabNavbar routes={routes} tabs={renderScene} styles={COLORS.BLACK} />
      <Wrapper>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={height(50)}
          customStyles={{
            container: {
              borderRadius: 10,
            },
            draggableIcon: {
              backgroundColor: "#D9D9D9",
              width: 42,
              height: 3,
            }
          }}
        >
          <Wrapper style={{ marginTop: 6, marginHorizontal: width(4), flexDirection: 'column' }}>
            {sheetButton.map((item, index) => {
              return <SocialButton onPress={item.click} key={index} style={{ height: height(4), borderColor: COLORS.WHITE, alignSelf: 'flex-start', }} icon={item.icon} text={item.title} styleText={{ lineHeight: 19, fontSize: 16, fontWeight: '500', fontFamily: FONTS.URBAN_REGULAR, marginLeft: 8 }} />
            })}
          </Wrapper>
        </RBSheet>
      </Wrapper>
    </MainWrapper>
  )
}