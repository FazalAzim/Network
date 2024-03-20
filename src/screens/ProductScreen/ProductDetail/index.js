import React, { useState } from 'react'
import { MainWrapper, PrimaryButton, ProductSlider, RatingCard, SocialButton, Wrapper } from '@commons'
import { FlatList, Image, Text, View } from 'react-native'
import { COLORS, FONTS, IMG, ROUTES, reviews_Cards } from '@constants'
import { height, width } from '@helpers'
import { Rating } from 'react-native-ratings'
import { CheckMarkIcon, Minus_Icon, Plus_Icon } from '@assets'

export const ProductDetail = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [reviewVisibility, setReviewVisibility] = useState(false)

  const images = [IMG.PRODUCT_MOBILE, IMG.SLIDE1, IMG.SLIDE2, IMG.PRODUCT_MOBILE, IMG.SLIDE1];

  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
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
          <View style={{ alignItems: 'flex-start' }}>
            <Rating ratingCount={5}
              imageSize={20}
              defaultRating={4}
            />
          </View>
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
          <Wrapper style={{ marginTop: height(2), flexDirection: 'row', gap: 1 }}>
            <SocialButton onPress={() => setCount(count - 1)} style={{ borderRadius: 8, borderColor: COLORS.BD_COLOR, width: width(10), height: height(5), alignSelf: 'flex-start', marginBottom: 2 }} icon={<Minus_Icon />} />
            <Wrapper style={{ width: width(10), height: height(5), justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontFamily: FONTS.URBAN_MEDIUM, fontSize: 14, color: COLORS.PRIMARY_COLOR }}>{count}</Text>
            </Wrapper>
            <SocialButton onPress={() => setCount(count + 1)} style={{ borderRadius: 8, borderColor: COLORS.BD_COLOR, width: width(10), height: height(5), alignSelf: 'flex-start', marginBottom: 2 }} icon={<Plus_Icon />} />
          </Wrapper>
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
                  }}><CheckMarkIcon /></View>
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
              <SocialButton onPress={() => setReviewVisibility(true)} style={{ borderColor: COLORS.WHITE, width: width(22), height: 22 }} text={"See More"} styleText={{ color: '#40BFFF', fontSize: 14, fontWeight: '500', fontFamily: FONTS.URBAN_REGULAR }} />
            </View>
            <View style={{ flexDirection: 'row', gap: 4 }}>
              <Text style={{ color: '#9098B1', fontSize: 12, fontWeight: '700', fontFamily: FONTS.URBAN_BOLD }}>4.5</Text>
              <Text style={{ color: '#9098B1', fontSize: 12, fontWeight: '700', fontFamily: FONTS.URBAN_REGULAR }}>(5 Reviews)</Text>
            </View>
          </View>
          {
            reviewVisibility && (
              <View style={{ height: 120, flexDirection: 'column' }}>
                <FlatList
                  data={reviews_Cards}
                  renderItem={({ item }) => {
                    return <RatingCard item={item} />
                  }}
                />
              </View>
            )
          }
        </View>
      </View>
      <View style={{ width: '100%', position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: width(90), flexDirection: 'row', justifyContent: 'space-around' }}>
          <PrimaryButton text={'Buy Now'} style={{ width: 160, height: 44 }} />
          <SocialButton style={{ borderColor: COLORS.PRIMARY_COLOR, backgroundColor: COLORS.WHITE, width: 160, height: 44 }} text={"Add to Cart"} styleText={{ color: '#9344FC', fontSize: 13 }} onPress={() => navigation.navigate(ROUTES.CART)} />
        </View>
      </View>
    </MainWrapper>
  )
}
