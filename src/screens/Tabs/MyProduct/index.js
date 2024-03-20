import { MainWrapper, RowWrapperBasic, Text } from '@commons'
import { COLORS, FONTS, ICON } from '@constants'
import { width } from '@helpers'
import React from 'react'

export const MyProduct = () => {
  return (
    <MainWrapper style={{ paddingHorizontal: width(3) }}>
      <RowWrapperBasic style={{ marginVertical: 20 }}>
        <ICON.Entypo name='chevron-thin-left' color={COLORS._3838} size={22} onPress={() => navigation.goBack()} />
        <Text style={{ flex: 1, textAlign: 'center', fontFamily: FONTS.URBAN_BOLD, fontSize: 20, color: COLORS._1E1F }}>Add Products</Text>
      </RowWrapperBasic>
    </MainWrapper>
  )
}

