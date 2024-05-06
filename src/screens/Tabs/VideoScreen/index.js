import React, { useState } from 'react'
import { MainWrapper, VideoCard, ScrollWrapper, Wrapper, ProductCard, CommentCard, Text, InputWithTitle } from '@commons'
import { COLORS, FONTS, comment_Cards, product_Cards } from '@constants'
import { FlatList } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { width } from '@helpers'
import { Plane } from '@assets'

const Products = () => {
  return (
    <Wrapper style={{ flex: 1, flexDirection: 'column', marginTop: 12 }}>
      <FlatList
        data={product_Cards}
        renderItem={({ item }) => {
          return <ProductCard item={item} onClick={() => navigation.navigate(ROUTES.PRODUCT_DETAIL)} />;
        }}
      />
    </Wrapper>
  )
}

const LiveComments = () => {
  return (
    <Wrapper style={{ flex: 1, flexDirection: 'column', marginTop: 12 }}>
      <FlatList
        data={comment_Cards}
        renderItem={({ item }) => {
          return <CommentCard item={item} />;
        }}
      />
      {/* <InputWithTitle placeholder={'Type your comment'} placeholderTextColor={COLORS.DARK_GRAY} right={<Plane />} /> */}
    </Wrapper>
  )
}

const renderScene = SceneMap({
  first: Products,
  second: LiveComments,
});

export const VideoScreen = ({ route, navigation }) => {
  const { item } = route?.params;
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'first', title: 'Products' },
    { key: 'second', title: 'Live Comments' },
  ];

  return (
    <MainWrapper style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      {/* <ScrollWrapper> */}
      <VideoCard onClick={() => navigation.goBack()} paramData={item} navigation={navigation} services={false} />
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
      {/* </ScrollWrapper> */}
    </MainWrapper>
  )
}
