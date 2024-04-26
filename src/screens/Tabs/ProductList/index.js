import { CartCard, MainWrapper, PrimaryButton, RowWrapperBasic, Text, Wrapper } from '@commons'
import { width } from '@helpers'
import { COLORS, FONTS, ICON, ROUTES, product_Cards } from '@constants'
import React from 'react'
import { FlatList } from 'react-native'

export const ProductList = ({ navigation }) => {
  return (
    <MainWrapper style={{ paddingHorizontal: width(3), backgroundColor: COLORS.WHITE, }}>
      <RowWrapperBasic style={{ marginVertical: 20 }}>
        <ICON.Entypo name='chevron-thin-left' color={COLORS._3838} size={22} onPress={() => navigation.goBack()} />
        <Text style={{ flex: 1, textAlign: 'center', fontFamily: FONTS.URBAN_BOLD, fontSize: 20, color: COLORS._1E1F }}>My Products</Text>
      </RowWrapperBasic>
      <Wrapper style={{ marginTop: 8, flex: 1 }}>
        <FlatList
          data={product_Cards}
          renderItem={({ item }) => <CartCard item={item} countButton={false} product='owner' />}
        />
      </Wrapper>
      <PrimaryButton text={'Add Product'} style={{ borderRadius: 6 }} onPress={() => navigation.navigate(ROUTES.MY_PRODUCT)} />
    </MainWrapper>
  )

}

