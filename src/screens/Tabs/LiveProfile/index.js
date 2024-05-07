import React from 'react'
import { HomeCard, MainWrapper, ProductCard, ProfileCard, TabNavbar, Text, Wrapper } from '@commons'
import { COLORS, FONTS, cards, product_Cards } from '@constants'
import { styles } from './styles'
import { FlatList } from 'react-native'
import { Empty_Icon } from '@assets'


const Products = () => {
  return (
    <Wrapper style={{ flex: 1, flexDirection: 'column', marginTop: 12 }}>
      {
        product_Cards.length !== 0 ? (
          <FlatList
            data={product_Cards}
            renderItem={({ item }) => {
              return <ProductCard item={item} />;
            }}
          />
        ) : (
          <Wrapper style={{ alignItems: 'center', paddingTop: 25, }}>
            <Empty_Icon />
            <Text style={{ paddingTop: 8, fontFamily: FONTS.URBAN_REGULAR, color: COLORS._6262, fontSize: 13 }}>No videos found</Text>
          </Wrapper>
        )
      }
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


export const LiveProfile = ({ navigation }) => {

  const routes = [
    { key: 'first', title: 'Videos' },
    { key: 'second', title: 'Products' },
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <Products navigation={navigation} />;
      case 'second':
        return <Videos />;
      default:
        return null;
    }
  };

  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <ProfileCard navigation={navigation} type={'provider'} />
      <TabNavbar routes={routes} tabs={renderScene} styles={COLORS.BLACK} />
    </MainWrapper>
  )
}