import React, { useState } from 'react'
import { MainWrapper, PrimaryButton, ProductSlider, RatingCard, ScrollWrapper, SocialButton, Text, Wrapper } from '@commons'
import { FlatList, Image } from 'react-native'
import { COLORS, FONTS, IMG, ROUTES, reviews_Cards } from '@constants'
import { height, width } from '@helpers'
import { Rating } from 'react-native-ratings'
import { CheckMarkIcon, Minus_Icon, Plus_Icon } from '@assets'

export const ProductDetail = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [reviewVisibility, setReviewVisibility] = useState(false)

  const images = [IMG.AVATAR4, IMG.AVATAR1, IMG.AVATAR2, IMG.AVATAR3];

  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating)
  }

  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <Wrapper>
        <ProductSlider images={images} onClick={() => navigation.goBack()} />
      </Wrapper>
      <ScrollWrapper>
        <Wrapper style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Wrapper style={{ width: width(90), flexDirection: 'column', gap: 8 }}>
            <Wrapper style={{ width: width(80) }}>
              <Text style={{ fontSize: 17, fontFamily: FONTS.URBAN_MEDIUM }}>
                ELV DIRECT SLICK Multi Angle Mobile Stand.
              </Text>
            </Wrapper>
            <Wrapper style={{ alignItems: 'flex-start' }}>
              <Rating
                type='custom'
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                imageSize={20}
                // defaultRating={4}
                onFinishRating={ratingCompleted}
              />
            </Wrapper>
            <Wrapper style={{ paddingVertical: 6, flexDirection: 'row', gap: 8 }}>
              <Text style={{ fontSize: 20, fontFamily: FONTS.URBAN_BOLD }}>$179.00</Text>
              <Text style={{ color: COLORS._A3A3, fontSize: 20, fontFamily: FONTS.URBAN_MEDIUM, textDecorationLine: 'line-through', }}>$299.00</Text>
              <Text style={{ paddingLeft: 14, color: COLORS._00C2, fontSize: 20, fontFamily: FONTS.URBAN_BOLD }}>40%Off</Text></Wrapper>
            <Wrapper style={{ width: width(90) }}>
              <Text style={{ fontSize: 12, fontFamily: FONTS.URBAN_LIGHTL }}>MoDesk is an Stainless Steel body desk mobile holder which is rust
                and corrosion proof. This product is a Premium Quality Mobile
                Holder for your Office Desks. The antiskid silicon pads on the body
                prevent accidental slips and protection from scratches.</Text>
            </Wrapper>
            <Wrapper style={{ marginTop: height(2), flexDirection: 'row', gap: 1 }}>
              <SocialButton onPress={() => setCount(count - 1)} style={{ borderRadius: 8, borderColor: COLORS.BD_COLOR, width: width(10), height: height(5), alignSelf: 'flex-start', marginBottom: 2 }} icon={<Minus_Icon />} />
              <Wrapper style={{ width: width(10), height: height(5), justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontFamily: FONTS.URBAN_MEDIUM, fontSize: 14, color: COLORS.PRIMARY_COLOR }}>{count}</Text>
              </Wrapper>
              <SocialButton onPress={() => setCount(count + 1)} style={{ borderRadius: 8, borderColor: COLORS.BD_COLOR, width: width(10), height: height(5), alignSelf: 'flex-start', marginBottom: 2 }} icon={<Plus_Icon />} />
            </Wrapper>
            <Wrapper style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Wrapper style={{ flex: 1 }}>
                <Text style={{ paddingVertical: 12, fontSize: 12, fontFamily: FONTS.URBAN_REGULAR, }}>Deliver to: 3696 CrestWrapper Terrace,
                  Eagle Pass, TX 78852</Text>
              </Wrapper>
              <Wrapper style={{ flex: 1, flexDirection: 'row-reverse' }}>
                <SocialButton style={{ borderColor: COLORS.WHITE, backgroundColor: COLORS._F7F1, width: width(22), height: 25, borderRadius: 4 }} text={"Change"} styleText={{ color: COLORS.PRIMARY_COLOR, fontSize: 10, fontFamily: FONTS.URBAN_REGULAR }} />
              </Wrapper>
            </Wrapper>
            <Wrapper>
              <Wrapper style={{ flexDirection: 'row' }}>
                <Image
                  source={IMG.SLIDE1}
                  style={{ width: 40, height: 40, resizeMode: 'cover', borderRadius: 100, }}
                />
                <Wrapper style={{ marginLeft: 8, justifyContent: 'center' }}>
                  <Wrapper style={{ flexDirection: 'row', gap: 2 }}>
                    <Text style={{ color: COLORS._2626, fontSize: 12, fontFamily: FONTS.URBAN_BOLD }}>Meliaya Elix</Text>
                    <Wrapper style={{ justifyContent: 'center' }}><CheckMarkIcon /></Wrapper>
                  </Wrapper>
                  <Text style={{ color: COLORS._8F8F, fontSize: 11, fontFamily: FONTS.URBAN_REGULAR }}>Seller</Text>
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Wrapper>
              <Wrapper style={{ paddingTop: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#161616', fontSize: 14, fontWeight: '700', fontFamily: FONTS.URBAN_SEMIBOLD }}>
                  Customer ReWrappers
                </Text>
                <SocialButton onPress={() => setReviewVisibility(!reviewVisibility)} style={{ borderColor: COLORS.WHITE, width: width(22), height: 22 }} text={reviewVisibility ? "Less More" : "See More"} styleText={{ color: COLORS.PRIMARY_COLOR, fontSize: 14, fontFamily: FONTS.URBAN_REGULAR }} />
              </Wrapper>
              <Wrapper style={{marginTop:-8, flexDirection: 'row', gap: 4 }}>
                <Text style={{ color: COLORS._9098, fontSize: 12, fontFamily: FONTS.URBAN_BOLD }}>4.5</Text>
                <Text style={{ color: COLORS._9098, fontSize: 12, fontFamily: FONTS.URBAN_REGULAR }}>(5 ReWrappers)</Text>
              </Wrapper>
            </Wrapper>
            {
              reviewVisibility && (
                <Wrapper style={{ flexDirection: 'column', paddingBottom: 60 }}>
                  {reviews_Cards.map((item, index) => {
                    return <RatingCard key={index} item={item} />
                  })}
                </Wrapper>
              )
            }
          </Wrapper>
        </Wrapper>
      </ScrollWrapper>
      <Wrapper style={{ width: '100%', position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
        <Wrapper style={{ width: width(90), flexDirection: 'row', justifyContent: 'space-around' }}>
          <PrimaryButton text={'Buy Now'} style={{ width: 160, height: 44 }} />
          <SocialButton style={{ borderColor: COLORS.PRIMARY_COLOR, backgroundColor: COLORS.WHITE, width: 160, height: 44 }} text={"Add to Cart"} styleText={{ color: '#9344FC', fontSize: 13 }} onPress={() => navigation.navigate(ROUTES.CART)} />
        </Wrapper>
      </Wrapper>
    </MainWrapper >
  )
}
