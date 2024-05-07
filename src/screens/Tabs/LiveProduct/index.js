import { MainWrapper, RowWrapperBasic, TabNavbar } from '@commons'
import { COLORS, ICON } from '@constants'
import { width } from '@helpers'
import React from 'react'
import { GoLive, Schedule } from './components'
import { styles } from './styles'

export const LiveProduct = ({ navigation }) => {
  const routes = [
    { key: 'first', title: 'Go Live' },
    { key: 'second', title: 'Schedule' },
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <GoLive navigation={navigation} />;
      case 'second':
        return <Schedule />;
      default:
        return null;
    }
  };


  return (
    <MainWrapper style={{ paddingHorizontal: width(3), backgroundColor: COLORS.WHITE }}>
      <RowWrapperBasic style={{ marginVertical: 20 }}>
        <ICON.Entypo name='chevron-thin-left' color={COLORS._3838} size={22} onPress={() => navigation.goBack()} />
      </RowWrapperBasic>
      <TabNavbar routes={routes} tabs={renderScene} styles={COLORS.PRIMARY_COLOR} />
    </MainWrapper >
  )
}


