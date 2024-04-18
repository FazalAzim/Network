import React, { useContext, useState } from 'react'
import { MainWrapper, PrimaryButton, RowWrapper, RowWrapperBasic, SocialButton, Text, Wrapper } from '@commons'
import { Animated, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, ICON, IMG } from '@constants'
import { height, width } from '@helpers'
import { Setting_Icon, ViewIcon } from '@assets'
import { ProductContext } from '@contexts'
import { styles } from './styles'

const ProductCard = ({ item }) => {
  const [viewPrice, setViewPrice] = useState(item.priceView);

  return (
    <Wrapper style={{ gap: 8, paddingVertical: height(2), }}>
      <Wrapper style={{ justifyContent: 'center', alignItems: 'center', width: width(50), height: width(50), borderWidth: 1, backgroundColor: '#edf5f2', borderColor: '#b3e8dc', borderRadius: 0, }}>
        <Image source={item.image} style={{ width: width(49), height: width(49), resizeMode: 'cover', borderRadius: 0 }} />
      </Wrapper>
      <Wrapper>
        <Text style={{ fontSize: 14, fontFamily: FONTS.URBAN_MEDIUM, color: COLORS._3C3C }}>{item.title}</Text>
      </Wrapper>
      <Wrapper>
        {viewPrice ? (
          <Wrapper style={{ flexDirection: 'row', gap: 10 }}>
            <Text style={{ fontSize: 14, fontFamily: FONTS.URBAN_SEMIBOLD }}>${item.price}</Text>
            <Text style={{ color: COLORS.GRAY, fontSize: 14, fontFamily: FONTS.URBAN_SEMIBOLD, textDecorationLine: 'line-through', }}>${item.actual_price}</Text>
          </Wrapper>
        ) : (
          <Wrapper style={{ flexDirection: 'column', gap: 4 }}>
            <SocialButton style={{ borderColor: COLORS.BD_COLOR, width: width(22), height: 22, alignSelf: 'flex-start', marginBottom: 2 }} icon={<ViewIcon />} text={"View Price"} styleText={{ fontSize: 10 }} onPress={() => setViewPrice(!viewPrice)} />
            <Text style={{ color: COLORS._6262, fontSize: 10, fontFamily: FONTS.URBAN_REGULAR, }}>You’ll be taken to vendor's website.</Text>
          </Wrapper>
        )}
      </Wrapper>
    </Wrapper>
  )
}

export const LiveStream = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { productItems } = useContext(ProductContext)
  const slideAnim = useState(new Animated.Value(-300))[0];

  const toggleSideView = () => {
    setIsOpen(!isOpen);
    Animated.timing(
      slideAnim,
      {
        toValue: isOpen ? -300 : 0,
        duration: 300,
        useNativeDriver: false,
      }
    ).start();
  };
  return (
    <MainWrapper>
      <ImageBackground source={IMG.VIDEO} resizeMode="cover" style={{ flex: 1, position: 'relative' }}>
        <RowWrapper style={{ position: 'absolute', top: 30, width: width(90) }}>
          <ICON.Entypo name='chevron-thin-left' color={COLORS.WHITE} size={22} onPress={() => navigation.goBack()} />
          <Setting_Icon />
        </RowWrapper>
        <Wrapper style={{ paddingHorizontal: width(5), position: 'absolute', bottom: 30, flexDirection: 'column', gap: 12, }}>
          <Text style={{ fontFamily: FONTS.URBAN_MEDIUM, fontSize: 19, color: COLORS.WHITE }}>Best Multi Angle mobile stand</Text>
          <Text style={{ fontFamily: FONTS.URBAN_REGULAR, fontWeight: '400', fontSize: 12, color: COLORS.WHITE }}>XYZ Digital SLICK Multi Angle Mobile Stand. Phone Holder. Portable,Foldable Cell Phone Stand.Perfect for Bed,Office, Home,Gift and Desktop (White) Mobile Holder</Text>
          <RowWrapperBasic style={{ gap: 8 }}>
            <RowWrapperBasic>
              <Image source={IMG.AVATAR1} style={{ width: 40, height: 40, resizeMode: 'cover', borderRadius: 100, }} />
              <Image source={IMG.AVATAR2} style={{ width: 40, height: 40, resizeMode: 'cover', borderRadius: 100, position: 'relative', right: 20 }} />
              <Image source={IMG.AVATAR3} style={{ width: 40, height: 40, resizeMode: 'cover', borderRadius: 100, position: 'relative', right: 40 }} />
              <Image source={IMG.AVATAR4} style={{ width: 40, height: 40, resizeMode: 'cover', borderRadius: 100, position: 'relative', right: 60 }} />
            </RowWrapperBasic>
            <Text style={{ fontFamily: FONTS.URBAN_REGULAR, fontWeight: '400', fontSize: 12, color: COLORS.WHITE, position: 'relative', right: 60 }}>100+ Subscribers Active Now</Text>
          </RowWrapperBasic>
          <RowWrapper style={{ marginHorizontal: width(0), width: width(90), }}>
            <PrimaryButton text={'Go Live'} style={{ width: width(60), borderRadius: 6 }} />
            <Wrapper style={{ width: height(6), height: height(6), borderRadius: 100, backgroundColor: COLORS.BLACK, justifyContent: 'center', alignItems: 'center', opacity: 0.6 }}>
              <ICON.AntDesign name='sync' color={COLORS.WHITE} size={20} />
            </Wrapper>
          </RowWrapper>
        </Wrapper>
        <Wrapper style={styles.container}>
          <Wrapper style={[styles.mainContent, { left: -55 }]}>
            <TouchableOpacity onPress={toggleSideView} style={styles.centerButton}>
              <Text>See Product</Text>
              <ICON.Entypo name='chevron-thin-up' color={COLORS.BLACK} size={16} />
            </TouchableOpacity>
          </Wrapper>
          <Animated.View style={[styles.sideView, { left: slideAnim }]}>
            <Wrapper style={[styles.mainContent, { right: -78 }]}>
              <TouchableOpacity onPress={toggleSideView} style={styles.centerButton}>
                <Text>See Product</Text>
                <ICON.Entypo name='chevron-thin-down' color={COLORS.BLACK} size={16} />
              </TouchableOpacity>
            </Wrapper>
            <Wrapper style={{ flex: 1, }}>
              {isOpen &&
                <FlatList
                  data={productItems}
                  renderItem={({ item }) => {
                    return <ProductCard item={item} />;
                  }}
                />
              }
            </Wrapper>
          </Animated.View>
        </Wrapper>
      </ImageBackground>
    </MainWrapper>
  )
}

