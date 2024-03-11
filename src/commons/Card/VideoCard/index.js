import { COLORS, FONTS, ICON } from '@constants'
import { PrimaryButton } from '@commons'
import React, { useCallback, useState } from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { Volume, Full_Screen, CheckMarkIcon, Chat, Heart, ChatIcon, Toggle } from '@assets'
import { styles } from './styles'

export const VideoCard = ({ onClick, paramData }) => {
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
    <View>
      <View style={{ height: 227.25 }}>
        <ImageBackground
          source={paramData.image}
          resizeMode="cover"
          style={styles.backgroundImage}>
          <View style={styles.backgroundImage_top}>
            <ICON.Entypo name='chevron-thin-left' color={COLORS.WHITE} size={20} onPress={onClick}/>
              <View style={styles.backgroundImage_top_right}>
                <Text><Volume /></Text>
                <Text
                  style={[{
                    color: paramData.stream === 'Ad' ? '#1D1D1D' : COLORS.WHITE,
                    backgroundColor: paramData.stream === 'Ad' ? COLORS.WHITE : 'red',
                  }, styles.backgroundImage_stream]}>
                  {paramData.stream}
                </Text>
              </View>
          </View>
          <View style={styles.backgroundImage_bottom}>
            <Text style={{ color: 'white', fontSize: 11 }}>{paramData.watching} Watching</Text>
            <View style={styles.backgroundImage_bottom_icon}>
              <ICON.AntDesign name='setting' color={COLORS.WHITE} size={20} />
              <Full_Screen />
            </View>
          </View>
        </ImageBackground >
      </View >
      <View style={styles.middle_bar}>
        <View
          style={styles.middle_bar_content}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={paramData.imageIcon}
              style={styles.middle_bar_image}
            />
            <View style={{ marginLeft: 8 }}>
              <Text style={{ color: '#262626', fontSize: 17 }}>{paramData.title}</Text>
              < View style={{ flexDirection: 'row' }}>
                <Text style={styles.middle_bar_status}>{paramData.status}</Text>
                <View style={styles.middle_bar_status_icon}><CheckMarkIcon /></View>
              </View>
            </View>
          </View>
          <View style={styles.middle_bar_button}>
            <PrimaryButton text={'Subscribe'} style={{ width: 90, height: 35 }} />
          </View>
        </View>
        <Text style={styles.content_description}>{paramData.description}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text
            onTextLayout={onTextLayout}
            numberOfLines={textShown ? undefined : 4}
            style={{ color: '#4A4A4A', fontSize: 12, fontWeight: '400',fontFamily:FONTS.URBAN_REGULAR, flex: 1, alignItems: 'center' }}>{text}
          </Text>
          {
            lengthMore ? <Text
              onPress={toggleNumberOfLines}
              style={{ color: '#26a1c7', fontSize: 12, fontWeight: '400', alignSelf: 'flex-end' }}>{textShown ? 'Read less' : 'Read more'}</Text>
              : null
          }
        </View>
        <View style={{ marginTop: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
            <Chat />
            <Text style={{ color: '#9344FC', fontSize: 12, fontWeight: '600' }}>Message</Text>
          </View>
          <View style={styles.card_bottom_bar_content}>
            <View style={styles.card_bottom_bar_button_common}>
              <View style={{ paddingTop: 2 }}><Heart /></View>
              <View>
                <Text style={{ color: '#626262' }}>
                  {paramData.likes}
                </Text>
              </View>
            </View>
            <View style={styles.card_bottom_bar_button_common}>
              <View style={{ paddingTop: 2 }}><ChatIcon /></View>
              <View>
                <Text style={{ color: '#626262' }}>
                  {paramData.comments}
                </Text>
              </View>
            </View>
            <View>
              <View style={{ paddingTop: 2 }}><Toggle /></View>
            </View>
          </View>
        </View>
      </View>
    </View >
  )
}

