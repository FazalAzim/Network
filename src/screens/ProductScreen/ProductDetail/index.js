import React, { useState } from 'react'
import { MainWrapper, ProductSlider, RatingCard, SocialButton } from '@commons'
import { Image, Text, View } from 'react-native'
import { COLORS, FONTS, IMG } from '@constants'
import { height, width } from '@helpers'
import { StarActive, StarUnactive, Vector } from '@assets'

export const ProductDetail = ({ navigation }) => {
  const [count, setCount] = useState(0)

  const images = [IMG.PRODUCT_MOBILE, IMG.SLIDE1, IMG.SLIDE2, IMG.PRODUCT_MOBILE, IMG.SLIDE1];

  return (
    <MainWrapper style={{ backgroundColor: 'white' }}>
      <View>
        <ProductSlider images={images} onClick={() => navigation.goBack()} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: width(90), flexDirection: 'column', gap: 8 }}>
          <View style={{ width: width(80) }}>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: '600', fontFamily: FONTS.URBAN_MEDIUM }}>
              ELV DIRECT SLICK Multi Angle Mobile Stand.
            </Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 3 }}><StarActive /><StarActive /><StarActive /><StarActive /><StarUnactive /></View>
          <View style={{ paddingVertical: 6, flexDirection: 'row', gap: 8 }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: '600', fontFamily: FONTS.URBAN_MEDIUM }}>$179.00</Text>
            <Text style={{ color: '#A3A3A3', fontSize: 20, fontWeight: '700', fontFamily: FONTS.URBAN_MEDIUM, textDecorationLine: 'line-through', }}>$299.00</Text>
            <Text style={{ paddingLeft: 14, color: '#00C262', fontSize: 20, fontWeight: '700', fontFamily: FONTS.URBAN_MEDIUM }}>40%Off</Text></View>
          <View style={{ width: width(90) }}>
            <Text style={{ color: 'black', fontSize: 12, fontWeight: '300', fontFamily: FONTS.URBAN_REGULAR, }}>MoDesk is an Stainless Steel body desk mobile holder which is rust
              and corrosion proof. This product is a Premium Quality Mobile
              Holder for your Office Desks. The antiskid silicon pads on the body
              prevent accidental slips and protection from scratches.</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <SocialButton onPress={() => setCount(count - 1)} style={{ borderColor: COLORS.BD_COLOR, width: width(10), height: height(4), alignSelf: 'flex-start', marginBottom: 2 }} text={"-"} styleText={{ color: '#1E1F3D', fontSize: 14 }} />
            <Text style={{ color: '#1E1F3D', fontSize: 14, fontWeight: '500' }}>{count}</Text>
            <SocialButton onPress={() => setCount(count + 1)} style={{ borderColor: COLORS.BD_COLOR, width: width(10), height: height(4), alignSelf: 'flex-start', marginBottom: 2 }} text={"+"} styleText={{ color: '#1E1F3D', fontSize: 14 }} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ paddingVertical: 12, color: 'black', fontSize: 12, fontWeight: '400', fontFamily: FONTS.URBAN_REGULAR, }}>Deliver to: 3696 Crestview Terrace,
                Eagle Pass, TX 78852</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
              <SocialButton style={{ borderColor: COLORS.WHITE, backgroundColor: COLORS.BD_COLOR, width: width(22), height: 22 }} text={"Change"} styleText={{ color: '#9344FC', fontSize: 10 }} />
            </View>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={IMG.SLIDE1}
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: 'cover',
                  borderRadius: 100,
                }}
              />
              <View style={{ marginLeft: 8, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 2 }}>
                  <Text style={{ color: '#262626', fontSize: 12, fontWeight: '700', fontFamily: FONTS.URBAN_REGULAR }}>Meliaya Elix</Text>
                  <View style={{
                    justifyContent: 'center'
                  }}><Vector /></View>
                </View>
                <Text style={{
                  color: '#8F8F8F',
                  fontSize: 11
                }}>Seller</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{ paddingTop: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#161616', fontSize: 14, fontWeight: '700', fontFamily: FONTS.URBAN_SEMIBOLD }}>
                Customer Reviews
              </Text>
              <SocialButton style={{ borderColor: COLORS.WHITE, width: width(22), height: 22 }} text={"See More"} styleText={{ color: '#40BFFF', fontSize: 14, fontWeight: '500', fontFamily: FONTS.URBAN_REGULAR }} />
            </View>
            <View style={{ flexDirection: 'row', gap: 4 }}>
              <Text style={{ color: '#9098B1', fontSize: 12, fontWeight: '700', fontFamily: FONTS.URBAN_BOLD }}>4.5</Text>
              <Text style={{ color: '#9098B1', fontSize: 12, fontWeight: '700', fontFamily: FONTS.URBAN_REGULAR }}>(5 Reviews)</Text>
            </View>
          </View>
          <View style={{flexDirection:'column'}}>
            <RatingCard/>
          </View>
        </View>
      </View>
    </MainWrapper>
  )
}
