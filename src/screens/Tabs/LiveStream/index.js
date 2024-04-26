import React, { useContext, useState } from 'react'
import { MainWrapper, PrimaryButton, RowWrapper, RowWrapperBasic, Text, Wrapper } from '@commons'
import { Animated, FlatList, Image, ImageBackground, Pressable, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, ICON, IMG, chat_Data } from '@constants'
import { height, width } from '@helpers'
import { Heart_Gray, Message_Gray, Send_Icon, Setting_Icon, Share, } from '@assets'
import { ProductContext } from '@contexts'
import { styles } from './styles'
import { TextInput } from '@core-ui';
import { ProductCard } from './components'
import LinearGradient from 'react-native-linear-gradient';

export const LiveStream = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [waiting, setWaiting] = useState(true);
  const [chat, setChat] = useState(chat_Data);
  const [message, setMessage] = useState('');

  const { productItems } = useContext(ProductContext)

  const subscriber = [{ sub: IMG.AVATAR1 }, { sub: IMG.AVATAR2 }, { sub: IMG.AVATAR3 }, { sub: IMG.AVATAR4 }, { sub: IMG.AVATAR4 }, { sub: IMG.AVATAR4 },]

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

  const handleMessage = () => {
    if (message !== '') {
      setChat((preMessage) => [{ title: 'John Deo', message: message }, ...preMessage]);
      setMessage('');
    }
  }

  return (
    <MainWrapper>
      <ImageBackground source={IMG.VIDEO} resizeMode="stretch" style={{ flex: 1, position: 'relative' }}>
        <RowWrapper style={{ position: 'absolute', top: 30, zIndex: 5, width: width(90) }}>
          <ICON.Entypo name='chevron-thin-left' color={COLORS.WHITE} size={22} onPress={() => navigation.goBack()} />
          <Setting_Icon />
        </RowWrapper>
        <Wrapper style={{ paddingHorizontal: width(5), position: 'absolute', zIndex: 3, bottom: waiting ? 30 : 10, }}>
          {waiting ? (
            <Wrapper style={{ flexDirection: 'column', gap: 12, }}>
              <Text style={{ fontFamily: FONTS.URBAN_MEDIUM, fontSize: 19, color: COLORS.WHITE }}>Best Multi Angle mobile stand</Text>
              <Text style={{ fontFamily: FONTS.URBAN_REGULAR, fontWeight: '400', fontSize: 12, color: COLORS.WHITE }}>XYZ Digital SLICK Multi Angle Mobile Stand. Phone Holder. Portable,Foldable Cell Phone Stand.Perfect for Bed,Office, Home,Gift and Desktop (White) Mobile Holder</Text>
              <RowWrapperBasic style={{ gap: 8 }}>
                <RowWrapperBasic>
                  {subscriber.map((item, index) => {
                    return (
                      index < 4 && (
                        <Image key={index} source={item.sub} style={{ width: 38, height: 38, resizeMode: 'cover', borderRadius: 100, position: 'relative', right: index * 20 }} />
                      )
                    )
                  })}
                </RowWrapperBasic>
                <Text style={{ fontFamily: FONTS.URBAN_REGULAR, fontSize: 12, color: COLORS.WHITE, position: 'relative', right: 60 }}>100+ Subscribers Active Now</Text>
              </RowWrapperBasic>
              <RowWrapper style={{ marginHorizontal: width(0), width: width(90), alignItems: 'cetner' }}>
                <PrimaryButton onPress={() => setWaiting(!waiting)} text={'Go Live'} style={{ width: width(60), borderRadius: 6 }} />
                <Wrapper style={{ width: height(6), height: height(6), borderRadius: 100, backgroundColor: COLORS.BLACK, justifyContent: 'center', alignItems: 'center', opacity: 0.6 }}>
                  <ICON.AntDesign name='sync' color={COLORS.WHITE} size={20} />
                </Wrapper>
              </RowWrapper>
            </Wrapper>
          ) : (
            <Wrapper style={{ width: width(90) }}>
              <RowWrapper style={{ marginHorizontal: width(1) }}>
                <Wrapper style={{ alignSelf: 'flex-end', gap: 16 }}>
                  <Wrapper style={{ flexDirection: 'column-reverse', gap: 2 }}>
                    {chat.map((item, index) => {
                      return (
                        index < 7 && (
                          <Wrapper key={index} style={{ flexDirection: 'row', gap: 2, alignItems: 'center', opacity: 0.9 - `0.${index}` }}>
                            <Text style={{ fontFamily: FONTS.URBAN_SEMIBOLD, fontSize: 14, color: COLORS.WHITE }}>{item.title}:</Text>
                            <Text style={{ fontFamily: FONTS.URBAN_REGULAR, fontSize: 14, color: COLORS.WHITE }}>{item.message}</Text>
                          </Wrapper>
                        )
                      )
                    })}
                  </Wrapper>
                  <PrimaryButton onPress={() => setWaiting(!waiting)} text={'End Live'} style={{ width: width(60), borderRadius: 6, backgroundColor: COLORS.RED_COLOR }} />
                </Wrapper>
                <Wrapper style={{ flexDirection: 'column', gap: 20, alignSelf: 'flex-end' }} >
                  <Wrapper style={{flexDirection:'column',alignItems:'center',gap:2,}}>
                    <Heart_Gray/>
                    {/* <ICON.AntDesign name='hearto' color={COLORS.WHITE} size={22} /> */}
                    <Text style={{ textAlign: 'center', fontFamily: FONTS.URBAN_REGULAR, fontSize: 13, color: COLORS.WHITE }}>2.1K</Text>
                  </Wrapper>
                  <Wrapper style={{flexDirection:'column',alignItems:'center',gap:2,}}>
                    <Message_Gray />
                    {/* <ICON.AntDesign name='message1' color={COLORS.WHITE} size={22} /> */}
                    <Text style={{ textAlign: 'center', fontFamily: FONTS.URBAN_REGULAR, fontSize: 13, color: COLORS.WHITE }}>1K</Text>
                  </Wrapper>
                  <Wrapper>
                    <Share />
                    {/* <ICON.FontAwesome name='share' color={COLORS.WHITE} size={22} /> */}
                  </Wrapper>
                </Wrapper>
              </RowWrapper>
              <RowWrapperBasic style={{ alignSelf: 'center', marginTop: height(2) }}>
                <TextInput value={message} onChangeText={setMessage} placeholder='Hi Alex, y|' style={{ height: 38, color: COLORS.WHITE, width: width(80), marginHorizontal: width(2), borderRadius: 4, backgroundColor: 'rgba(255,255,255, 0.1)', }} />
                <Pressable onPress={handleMessage} >
                  <Send_Icon />
                </Pressable>
              </RowWrapperBasic>
            </Wrapper>
          )}
        </Wrapper>
        <Wrapper style={[styles.container, { zIndex: isOpen ? 10 : 2 }]}>
          <Wrapper style={[styles.mainContent, { left: -57 }]}>
            <TouchableOpacity onPress={toggleSideView} style={styles.centerButton}>
              <Text>See Product</Text>
              <ICON.Entypo name='chevron-thin-up' color={COLORS.BLACK} size={16} />
            </TouchableOpacity>
          </Wrapper>
          <Animated.View style={[styles.sideView, { left: slideAnim }]}>
            <Wrapper style={[styles.mainContent, { right: -76 }]}>
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
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
      </ImageBackground>
    </MainWrapper >
  )
}

