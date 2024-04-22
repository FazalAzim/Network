import { MainWrapper, RowWrapperBasic, TabNavbar, Text } from '@commons'
import { COLORS, FONTS, ICON } from '@constants'
import { width } from '@helpers'
import React from 'react'
import { ExternalVendor, OwnProduct } from './components'
import { styles } from './styles'

export const MyProduct = ({ navigation }) => {

  const tabStyles = {
    focusText: COLORS.PRIMARY_COLOR,
    indicatorStyle: COLORS.PRIMARY_COLOR,
  }

  const routes = [
    { key: 'first', title: 'Own Product' },
    { key: 'second', title: 'External Vendor' },
  ];

  const tabs = {
    first: () => <OwnProduct />,
    second: () => <ExternalVendor />,
  };
  
  return (
    <MainWrapper style={{ paddingHorizontal: width(3), backgroundColor: COLORS.WHITE }}>
      <RowWrapperBasic style={{ marginVertical: 20 }}>
        <ICON.Entypo name='chevron-thin-left' color={COLORS._3838} size={22} onPress={() => navigation.goBack()} />
        <Text style={{ flex: 1, textAlign: 'center', fontFamily: FONTS.URBAN_BOLD, fontSize: 20, color: COLORS._1E1F }}>Add Products</Text>
      </RowWrapperBasic>
      <TabNavbar routes={routes} tabs={tabs} tabStyles={tabStyles}/>
    </MainWrapper >
  )
}
