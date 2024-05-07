import React from 'react'
import { HomeCard, MainWrapper, ProductCard, ProfileCard, TabNavbar, Text, Wrapper } from '@commons'
import { COLORS, FONTS, cards, product_Cards } from '@constants'
import { styles } from './styles'
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