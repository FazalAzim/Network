import React from 'react'
import { MainWrapper, ProfileCard, TabNavbar } from '@commons'
import { COLORS } from '@constants'
import { styles } from './styles'
import { Products, Videos } from './components'

export const LiveProfile = ({ navigation }) => {

  const tabStyles = {
    focusText: COLORS.BLACK,
    indicatorStyle: COLORS._3030
  }

  const routes = [
    { key: 'first', title: 'Videos' },
    { key: 'second', title: 'Products' },
  ];

  const tabs = {
    first: () => <Videos />,
    second: () => <Products />,
  };

  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <ProfileCard navigation={navigation} type={'provider'} />
      <TabNavbar routes={routes} tabs={tabs} tabStyles={tabStyles} />
    </MainWrapper>
  )
}