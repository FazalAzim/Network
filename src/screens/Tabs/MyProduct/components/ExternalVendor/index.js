import { InputWithTitle, MainWrapper, PrimaryButton, RowWrapperBasic, ScrollWrapper, SocialButton, Text, Wrapper } from '@commons'
import { COLORS, FONTS, ICON, IMG } from '@constants'
import { height, width } from '@helpers'
import React, { useState } from 'react'
import { Plus_Blue } from '@assets'
import { styles } from './styles'
import { Image } from 'react-native'

export const ExternalVendor = () => {
  // const [imageUri, setImageUri] = useState(null);
  const [images, setImages] = useState([])

  const pickImage = () => {
    setImages([...images, { image: IMG.PRODUCT }])
  }

  const handleRemoveImage = (id) => {
    setImages(preState =>
      preState.filter((item, index) => index !== id),
    );
  }

  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <ScrollWrapper>
        <Text style={{ marginTop: height(2), fontSize: 15, fontFamily: FONTS.URBAN_MEDIUM }}>Product name</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='XYZ Digital  SLICK Multi Angle ' placeholderTextColor={COLORS._3C3C} inputStyle={{ borderRadius: 7, borderColor: COLORS._E8EC, borderWidth: 1, height: height(8) }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
        <Text style={{ marginTop: height(4), fontSize: 15, fontFamily: FONTS.URBAN_MEDIUM }}>Product Link</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='https://www.amazon.in/STRIFF-Mobile-Android.....' placeholderTextColor={COLORS._3C3C} inputStyle={{ borderColor: COLORS._E8EC, borderRadius: 7, borderWidth: 1, height: height(8) }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
        <Text style={{ marginTop: height(4), fontSize: 15, fontFamily: FONTS.URBAN_MEDIUM }}>Upload product images</Text>
        <Wrapper style={{ marginTop: height(3), flexDirection: 'row', flexWrap: 'wrap' }}>
          {images.map((item, index) => {
            return (
              <RowWrapperBasic key={index} style={{ marginRight: 4, gap: 6, }}>
                <Wrapper style={{ flexDirection: 'column', gap: 5 }}>
                  <Wrapper style={{ justifyContent: 'center', alignItems: 'center', width: 72, height: 72, borderWidth: 1, borderColor: COLORS._B3E8, borderRadius: 6, marginRight: 2, }}>
                    <Image source={item.image} style={{ width: 66, height: 66, resizeMode: 'cover' }} />
                  </Wrapper>
                  <SocialButton onPress={() => handleRemoveImage(index)} style={{ borderColor: COLORS.BD_COLOR, backgroundColor: COLORS._E8EC, width: 72, height: 21, borderRadius: 3, }} text={"Remove"} styleText={{ color: COLORS.RED_COLOR, fontSize: 11 }} />
                </Wrapper>
              </RowWrapperBasic>
            )
          })}
          <SocialButton onPress={pickImage} style={{ width: 72, height: 72, marginBottom: height(5), borderColor: COLORS._B3E8, alignSelf: 'flex-start' }} icon={<Plus_Blue />} />
        </Wrapper>
      </ScrollWrapper>
      <PrimaryButton text={'Save'} style={{ width: width(95), borderRadius: 6 }} />
    </MainWrapper>
  )
}
