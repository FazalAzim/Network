import React from 'react'
import { MainWrapper, VideoCard, ScrollWrapper, Wrapper, ProductCard, CommentCard, TabNavbar, InputWithTitle } from '@commons'
import { COLORS, ROUTES, comment_Cards, product_Cards } from '@constants'
import { FlatList } from 'react-native'
import { Plane } from '@assets'


const Products = ({ navigation }) => {
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


export const VideoScreen = ({ route, navigation }) => {

  const { item } = route?.params;

  const routes = [
    { key: 'first', title: 'Products' },
    { key: 'second', title: 'Live Comments' },
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <Products navigation={navigation} />;
      case 'second':
        return <LiveComments />;
      default:
        return null;
    }
  };

  return (
    <MainWrapper style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      {/* <ScrollWrapper> */}
      <VideoCard onClick={() => navigation.goBack()} paramData={item} navigation={navigation} services={false} />
      <TabNavbar routes={routes} tabs={renderScene} styles={COLORS.BLACK} />
      {/* </ScrollWrapper> */}
    </MainWrapper>
  )
}
