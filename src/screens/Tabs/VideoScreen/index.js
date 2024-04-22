import React from 'react'
import { MainWrapper, VideoCard, TabNavbar, ScrollWrapper } from '@commons'
import { COLORS } from '@constants'
import { LiveComments, Products } from './components'

export const VideoScreen = ({ route, navigation }) => {
  const { item } = route?.params;
  const tabStyles = {
    focusText: COLORS.BLACK,
    indicatorStyle: COLORS._3030
  }

  const routes = [
    { key: 'first', title: 'Products' },
    { key: 'second', title: 'Live Comments' },
  ];

  const tabs = {
    first: () => <Products navigation={navigation} />,
    second: () => <LiveComments />,
  };

  return (
    <MainWrapper style={{flex:1, backgroundColor: COLORS.WHITE }}>
      {/* <ScrollWrapper> */}
        <VideoCard onClick={() => navigation.goBack()} paramData={item} navigation={navigation} services={false} />
        <TabNavbar routes={routes} tabs={tabs} tabStyles={tabStyles} />
      {/* </ScrollWrapper> */}
    </MainWrapper>
  )
}
