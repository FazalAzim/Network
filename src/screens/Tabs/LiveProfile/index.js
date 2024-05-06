import React, { useState } from 'react'
import { HomeCard, MainWrapper, ProductCard, ProfileCard, Text, Wrapper } from '@commons'
import { COLORS, FONTS, cards, product_Cards } from '@constants'
import { styles } from './styles'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { FlatList } from 'react-native'
import { width } from '@helpers'


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

const renderScene = SceneMap({
  first: Videos,
  second: Products,
});

export const LiveProfile = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const routes = [
    { key: 'first', title: 'Videos' },
    { key: 'second', title: 'Products' },
  ];

  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <ProfileCard navigation={navigation} type={'provider'} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: width(100) }}
        renderTabBar={props => <TabBar {...props} renderLabel={({ route, color, focused }) => (
          <Text style={{ color: COLORS.BLACK, fontSize: 15, fontFamily: FONTS.URBAN_REGULAR }}>
            {route.title}
          </Text>
        )} indicatorStyle={{ backgroundColor: COLORS._3030, borderRadius: 16, marginBottom: -1.5, padding: 1, }} style={{
          backgroundColor: COLORS.WHITE, borderBottomWidth: 1,
          borderColor: COLORS._D7D7, elevation: 0
        }} />}
      />
    </MainWrapper>
  )
}