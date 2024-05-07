import { MainWrapper, RowWrapperBasic, TabNavbar, Text } from '@commons'
import { COLORS, FONTS, ICON } from '@constants'
import { width } from '@helpers'
import React from 'react'
import { styles } from './styles'
import { ExternalVendor, OwnProduct } from './components'

export const MyProduct = ({ navigation }) => {

  const routes = [
    { key: 'first', title: 'Own Product' },
    { key: 'second', title: 'External Vendor' },
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <OwnProduct navigation={navigation} />;
      case 'second':
        return <ExternalVendor />;
      default:
        return null;
    }
  };
  
  return (
    <MainWrapper style={{ paddingHorizontal: width(3), backgroundColor: COLORS.WHITE }}>
      <RowWrapperBasic style={{ marginVertical: 20 }}>
        <ICON.Entypo name='chevron-thin-left' color={COLORS._3838} size={22} onPress={() => navigation.goBack()} />
        <Text style={{ flex: 1, textAlign: 'center', fontFamily: FONTS.URBAN_BOLD, fontSize: 20, color: COLORS._1E1F }}>Add Products</Text>
      </RowWrapperBasic>
      <TabNavbar routes={routes} tabs={renderScene} styles={COLORS.PRIMARY_COLOR} />
    </MainWrapper >
  )
}
