import { InputWithTitle, MainWrapper, PrimaryButton, RowWrapperBasic, Text, Wrapper } from '@commons'
import { COLORS, FONTS, ICON, ROUTES, product_Cards } from '@constants'
import { width, height } from '@helpers'
import React, { useState } from 'react'
import { FlatList, Image} from 'react-native'

const ProductCard = ({item}) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <RowWrapperBasic style={{ gap: 14, borderBottomWidth: 1, borderColor: COLORS._B3E8, paddingVertical: height(2), }}>
      <Text>icon</Text>
      <Wrapper style={{ justifyContent: 'center', alignItems: 'center', width: 76, height: 76, borderWidth: 1, backgroundColor: '#edf5f2', borderColor: '#b3e8dc', borderRadius: 6, }}>
        <Image source={item.image} style={{ width: 63, height: 63, resizeMode: 'cover', borderRadius: 6 }} />
      </Wrapper>
      <Wrapper style={{ flex: 1 }}>
        <Text style={{ fontSize: 14, fontFamily: FONTS.URBAN_MEDIUM, color: COLORS._3C3C }}>{item.title}</Text>
      </Wrapper>
    </RowWrapperBasic>
  )
}

export const SelectProduct = ({ navigation }) => {
  const [selected, setSelected] = useState(0);

  return (
    <MainWrapper style={{ paddingHorizontal: width(3), backgroundColor: COLORS.WHITE }}>
      <RowWrapperBasic style={{ marginVertical: 20, gap: 4 }}>
        <ICON.Entypo name='chevron-thin-left' color={COLORS._3838} size={22} onPress={() => navigation.goBack()} />
        <Wrapper style={{ flex: 1, }}>
          <InputWithTitle placeholder='Search Product' placeholderTextColor={COLORS._C4C4} inputStyle={{ backgroundColor: COLORS._F8F8, borderRadius: 7, height: height(6) }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
      </RowWrapperBasic>
      <Wrapper style={{ paddingHorizontal: width(2) ,flex:1}}>
        <FlatList
          data={product_Cards}
          renderItem={({ item }) => {
            return <ProductCard item={item}/>;
          }}
        />
      </Wrapper>
      <PrimaryButton text={'Submit'} style={{ borderRadius: 6 }} onPress={() => navigation.navigate(ROUTES.LIVE_PRODUCT)} />
    </MainWrapper >
  )
}
