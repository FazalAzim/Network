import React, { useState } from 'react'
import { InputWithTitle, MainWrapper, PrimaryButton, RowWrapperBasic, ScrollWrapper, SocialButton, Text, Wrapper } from '@commons'
import { height, width } from '@helpers'
import { COLORS, FONTS, IMG } from '@constants'
import { Minus_Icon, Plus_Blue, Plus_Icon } from '@assets'
import { FlatList, Image } from 'react-native'
// import ImagePicker from 'react-native-image-crop-picker';


export const OwnProduct = () => {
  const [count, setCount] = useState(0);
  // const [imageUri, setImageUri] = useState(null);
  const [images, setImages] = useState([])

  const pickImage = () => {
    setImages([...images, { image: IMG.PRODUCT_MOBILE }])
  }

  const handleRemoveImage = (index) => {
    images.filter((item, index) => {
      return index == index
    })
  }
  // console.log(images)
  return (
    <MainWrapper>
      <ScrollWrapper>
        <Text style={{ marginTop: height(2), fontSize: 15, fontFamily: FONTS.URBAN_MEDIUM }}>Product name</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='XYZ Digital  SLICK Multi Angle ' placeholderTextColor={COLORS._3C3C} inputStyle={{ backgroundColor: COLORS._E8EC, borderRadius: 7, borderColor: COLORS.LIGHT_GRAY, borderWidth: 1, height: height(8) }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
        <Text style={{ marginTop: height(4), fontSize: 15, fontFamily: FONTS.URBAN_MEDIUM }}>Product name</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='XYZ Digital SLICK Multi Angle Mobile Stand. Phone Holder. Portable,Foldable Cell Phone Stand.Perfect for Bed,Office, Home,Gift and Desktop (White) Mobile Holder' placeholderTextColor={COLORS._3C3C} numberOfLines={8} multiline={true} inputStyle={{ height: height(16), textAlignVertical: 'top', backgroundColor: COLORS._E8EC, borderRadius: 7, borderColor: COLORS.LIGHT_GRAY, borderWidth: 1, }} containerStyle={{ marginBottom: height(0), height: height(16) }} />
        </Wrapper>
        <Text style={{ marginTop: height(2), fontSize: 15, fontFamily: FONTS.URBAN_MEDIUM }}>Price</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='$200' placeholderTextColor={COLORS._3C3C} inputStyle={{ backgroundColor: COLORS._E8EC, borderRadius: 7, borderColor: COLORS.LIGHT_GRAY, borderWidth: 1, height: height(8) }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
        <Text style={{ marginTop: height(4), fontSize: 15, fontFamily: FONTS.URBAN_MEDIUM }}>Sell price</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='$190' placeholderTextColor={COLORS._3C3C} inputStyle={{ backgroundColor: COLORS._E8EC, borderRadius: 7, borderColor: COLORS.LIGHT_GRAY, borderWidth: 1, height: height(8) }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
        <Text style={{ marginTop: height(4), fontSize: 15, fontFamily: FONTS.URBAN_MEDIUM }}>Upload product images</Text>
        <Wrapper style={{ marginTop: height(3), flexDirection: 'row', gap: 6 }}>
          <FlatList
            horizontal
            data={images}
            renderItem={({ item }) => {
              return (
                <RowWrapperBasic style={{ marginRight: 4, gap: 6 }}>
                  <Wrapper style={{ flexDirection: 'column', gap: 5 }}>
                    <Wrapper style={{ justifyContent: 'center', alignItems: 'center', width: 72, height: 72, borderWidth: 1, borderColor: COLORS._B3E8, borderRadius: 6, }}>
                      <Image source={item.image} style={{ width: 66, height: 66, resizeMode: 'cover' }} />
                    </Wrapper>
                    <SocialButton onPress={() => handleRemoveImage(item.index)} style={{ borderColor: COLORS.BD_COLOR, backgroundColor: COLORS._E8EC, width: 72, height: 21, borderRadius: 3, }} text={"Remove"} styleText={{ color: COLORS.RED_COLOR, fontSize: 11 }} />
                  </Wrapper>
                </RowWrapperBasic>
              )
            }}
          />
          <SocialButton onPress={pickImage} style={{ width: 72, height: 72, marginBottom: height(5), borderColor: COLORS._B3E8 }} icon={<Plus_Blue />} />
        </Wrapper>
        <Text style={{ marginTop: height(2), fontSize: 15, fontFamily: FONTS.URBAN_MEDIUM }}>Quantity</Text>
        <Wrapper style={{ marginBottom: height(6), marginTop: height(2), flexDirection: 'row', gap: 1 }}>
          <SocialButton onPress={() => setCount(count - 1)} style={{ borderRadius: 8, borderColor: COLORS.BD_COLOR, width: width(10), height: height(5), alignSelf: 'flex-start', marginBottom: 2 }} icon={<Minus_Icon />} />
          <Wrapper style={{ width: width(10), height: height(5), justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontFamily: FONTS.URBAN_MEDIUM, fontSize: 14, color: COLORS.PRIMARY_COLOR }}>{count}</Text>
          </Wrapper>
          <SocialButton onPress={() => setCount(count + 1)} style={{ borderRadius: 8, borderColor: COLORS.BD_COLOR, width: width(10), height: height(5), alignSelf: 'flex-start', marginBottom: 2 }} icon={<Plus_Icon />} />
        </Wrapper>
      </ScrollWrapper>
      <PrimaryButton text={'Save'} style={{ width: width(95), borderRadius: 6 }} />
    </MainWrapper>
  )
}


