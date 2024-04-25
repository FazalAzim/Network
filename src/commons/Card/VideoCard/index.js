import { COLORS, FONTS, ICON, ROUTES } from '@constants'
import { PrimaryButton, Wrapper } from '@commons'
import React, { useCallback, useState } from 'react'
import { Image, ImageBackground, Pressable, Text } from 'react-native'
import { Volume, Full_Screen, CheckMarkIcon, Chat, Heart, ChatIcon, Toggle, Setting_White } from '@assets'
import { styles } from './styles'
import { height } from '@helpers'

export const VideoCard = ({ onClick, paramData, navigation, services }) => {
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  }

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 4);
  }, []);

  const text = 'Buy PC & Gaming Gear at Deep Discounts. Direct from Manufacturer Pricing. Satisfaction Guaranteed. We have Gaming Chairs, PC Gaming Controllers, PC Gaming Peripherals like joystick, gamepad and In literary theory, a text is any object that can be  whether this object is a work of literature,'

  return (
    <Wrapper>
      <Wrapper style={{ height: 227.25 }}>
        <ImageBackground
          source={paramData.image}
          resizeMode="cover"
          blurRadius={services ? 10 : 0}
          style={[styles.backgroundImage, { position: 'relative' }]}>
          <Wrapper style={styles.backgroundImage_top}>
            <ICON.Entypo name='chevron-thin-left' color={COLORS.WHITE} size={20} onPress={onClick} />
            <Wrapper style={styles.backgroundImage_top_right}>
              <Volume />
              <Text
                style={[styles.backgroundImage_stream, {
                  color: paramData.stream === 'Ad' ? '#1D1D1D' : COLORS.WHITE,
                  backgroundColor: paramData.stream === 'Ad' ? COLORS.WHITE : 'red',
                }]}>
                {paramData.stream}
              </Text>
            </Wrapper>
          </Wrapper>
          <Wrapper style={styles.backgroundImage_bottom}>
            <Text style={{ color: COLORS.WHITE, fontSize: 11, fontFamily: FONTS.URBAN_BOLD }}>{paramData.watching} Watching</Text>
            <Wrapper style={styles.backgroundImage_bottom_icon}>
              <Setting_White />
              <Full_Screen />
            </Wrapper>
          </Wrapper>
          {services &&
            <Wrapper style={{ position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Wrapper style={{ flexDirection: 'column', gap: 12 }}>
                <Text style={{ color: COLORS.WHITE, fontSize: 14, fontWeight: '400', fontFamily: FONTS.URBAN_REGULAR, lineHeight: 16 }}>Subscribe to watch video</Text>
                <PrimaryButton text={'Subscribe $10/Month '} style={{ width: 160, height: 30 }} styleText={{ fontSize: 12, fontWeight: '600', fontFamily: FONTS.URBAN_REGULAR, lineHeight: 14 }} />
              </Wrapper>
            </Wrapper>
          }
        </ImageBackground >
      </Wrapper >
      <Wrapper style={styles.middle_bar}>
        <Wrapper
          style={styles.middle_bar_content}>
          <Pressable onPress={() => navigation.navigate(ROUTES.PROVIDER_PROFILE)}>
            <Wrapper style={{ flexDirection: 'row' }}>
              <Image
                source={paramData.imageIcon}
                style={styles.middle_bar_image}
              />
              <Wrapper style={{ marginLeft: 8 }}>
                <Text style={{ color: COLORS._2626, fontSize: 17, fontFamily: FONTS.URBAN_BOLD }}>{paramData.title}</Text>
                < Wrapper style={{ flexDirection: 'row' }}>
                  <Text style={styles.middle_bar_status}>{paramData.status}</Text>
                  <Wrapper style={styles.middle_bar_status_icon}><CheckMarkIcon /></Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Pressable>
          <Wrapper style={styles.middle_bar_button}>
            <PrimaryButton text={'Subscribe'} style={{ width: 90, height: height(4), borderRadius: 3, }} onPress={() => navigation.navigate(ROUTES.SUBSCRIPTIONS)} />
          </Wrapper>
        </Wrapper>
        <Text style={styles.content_description}>{paramData.description}</Text>
        <Wrapper style={{ flexDirection: 'row' }}>
          <Text
            onTextLayout={onTextLayout}
            numberOfLines={textShown ? undefined : 4}
            style={{ color: COLORS._4A4A, fontSize: 12, fontFamily: FONTS.URBAN_REGULAR, flex: 1, alignItems: 'center' }}>{text}
          </Text>
          {
            lengthMore ? <Text
              onPress={toggleNumberOfLines}
              style={{ color: COLORS.PRIMARY_COLOR, fontSize: 12, fontFamily: FONTS.URBAN_REGULAR, alignSelf: 'flex-end' }}>{textShown ? 'Read less' : 'Read more'}</Text>
              : null
          }
        </Wrapper>
        <Wrapper style={{ marginTop: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Wrapper style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
            <Chat />
            <Text style={{ color: COLORS.PRIMARY_COLOR, fontSize: 12, fontFamily: FONTS.URBAN_SEMIBOLD }}>Message</Text>
          </Wrapper>
          <Wrapper style={styles.card_bottom_bar_content}>
            <Wrapper style={styles.card_bottom_bar_button_common}>
              <Heart />
              <Text style={{ color: COLORS._6262, fontFamily: FONTS.URBAN_REGULAR, fontSize: 15 }}>
                {paramData.likes}
              </Text>
            </Wrapper>
            <Wrapper style={styles.card_bottom_bar_button_common}>
              <ChatIcon />
              <Text style={{ color: COLORS._6262, fontFamily: FONTS.URBAN_REGULAR, fontSize: 15 }}>
                {paramData.comments}
              </Text>
            </Wrapper>
            <Toggle />
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper >
  )
}