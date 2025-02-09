import { InputWithTitle, MainWrapper, RowWrapperBasic, ScrollWrapper, SocialButton, Text, Wrapper } from '@commons'
import { COLORS, FONTS, ICON, ROUTES } from '@constants'
import { height, width } from '@helpers'
import React, { useContext } from 'react'
import { ProductContext } from '@contexts'
import { Image, Pressable, TouchableOpacity } from 'react-native'
import { Cross_Icon } from '@assets'

const ProductCard = ({ item }) => {
  const { removeFromList } = useContext(ProductContext)

  const toggleCheckbox = () => {
    removeFromList(item)
  }

  return (
    <RowWrapperBasic style={{ gap: 14, paddingVertical: height(2), }}>
      <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', }} onPress={toggleCheckbox}>
        <Wrapper style={{ width: 25, height: 25, borderRadius: 6, backgroundColor: COLORS.INPUT_COLOR, alignItems: 'center', justifyContent: 'center', }}>
          <Cross_Icon />
        </Wrapper>
      </TouchableOpacity>
      <Wrapper style={{ justifyContent: 'center', alignItems: 'center', width: 76, height: 76, borderWidth: 1, backgroundColor: COLORS.WHITE, borderColor: COLORS._B3E8, borderRadius: 6, }}>
        <Image source={item.image} style={{ width: 63, height: 63, resizeMode: 'cover', borderRadius: 6 }} />
      </Wrapper>
      <Wrapper style={{ flex: 1 }}>
        <Text style={{ fontSize: 14, fontFamily: FONTS.URBAN_MEDIUM, color: COLORS._3C3C }}>{item.title}</Text>
      </Wrapper>
    </RowWrapperBasic>
  )
}

export const GoLive = ({ navigation }) => {
  const { productItems } = useContext(ProductContext);

  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <ScrollWrapper>
        <Text style={{ marginTop: height(2), fontSize: 15, fontFamily: FONTS.URBAN_MEDIUM }}>Content Title</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='Best Multi Angle mobile stand' placeholderTextColor={COLORS._3C3C} inputStyle={{ borderColor: COLORS._E8EC, borderRadius: 7, borderWidth: 1, height: height(8) }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
        <Text style={{ marginTop: height(4), fontSize: 15, fontFamily: FONTS.URBAN_MEDIUM }}>Content description</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='XYZ Digital SLICK Multi Angle Mobile Stand. Phone Holder. Portable,Foldable Cell Phone Stand.Perfect for Bed,Office, Home,Gift and Desktop (White) Mobile Holder' placeholderTextColor={COLORS._3C3C} numberOfLines={8} multiline={true} inputStyle={{ height: height(16), textAlignVertical: 'top', borderColor: COLORS._E8EC, borderRadius: 7, borderWidth: 1, }} containerStyle={{ marginBottom: height(0), height: height(16) }} />
        </Wrapper>
        <Text style={{ marginTop: height(2), fontSize: 15, fontFamily: FONTS.URBAN_MEDIUM }}>Choose product</Text>
        <Pressable onPress={() => navigation.navigate(ROUTES.SELECT_PRODUCT)}>
          <Wrapper style={{ paddingHorizontal: width(3), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: height(2), backgroundColor: COLORS.INPUT_COLOR, borderRadius: 7, borderColor: COLORS._E8EC, borderWidth: 1, height: height(8) }}>
            <Text style={{ fontSize: 14, fontFamily: FONTS.URBAN_MEDIUM, color: COLORS._3C3C }}>Browse Product</Text>
            <ICON.Entypo name='chevron-thin-right' color={COLORS._3C3C} size={14} />
          </Wrapper>
        </Pressable>
        {productItems.length !== 0 &&
          <Wrapper style={{ paddingBottom: height(1), paddingHorizontal: width(2), flex: 1, }}>
            {productItems.map((item, index) => {
              return <ProductCard key={index} item={item} />
            })}
            {/* <FlatList
              data={productItems}
              renderItem={({ item }) => {
                return <ProductCard item={item} />;
              }}
            /> */}
          </Wrapper>
        }
      </ScrollWrapper>
      <SocialButton onPress={() => navigation.navigate(ROUTES.LIVESTREAM)} text={'Go Live'} style={{ width: width(95), borderRadius: 6, borderWidth: 0, backgroundColor: productItems.length > 0 ? COLORS.PRIMARY_COLOR : COLORS._EFEF }} styleText={{ color: productItems.length > 0 ? COLORS.WHITE : COLORS._9595, fontSize: 16, fontFamily: FONTS.URBAN_MEDIUM, }} />
    </MainWrapper>
  )
}



