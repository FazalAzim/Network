import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { BarIcon, ChatIcon, Heart, Toggle, CheckMarkIcon } from '@assets';
import { COLORS, FONTS } from '@constants';
import { PrimaryButton, Wrapper } from '@commons';

export const HomeCard = ({ item, onClick, provider }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <View style={{ height: 160 }}>
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            blurRadius={provider ? 10 : 1}
            imageStyle={{ borderRadius: 8 }}
            style={[styles.backgroundImage, { position: 'relative' }]}>
            <View style={{ alignItems: 'flex-end' }}>
              {provider ?
                <Text style={[styles.backgroundImage_stream, { color: COLORS.WHITE, fontFamily: FONTS.URBAN_REGULAR, fontSize: 11, fontWeight: '400', lineHeight: 13 }]}>
                  2 days ago
                </Text>
                :
                <Text
                  style={[{
                    color: item.stream === 'Ad' ? '#1D1D1D' : COLORS.WHITE,
                    backgroundColor: item.stream === 'Ad' ? COLORS.WHITE : 'red',
                  }, styles.backgroundImage_stream]}>
                  {item.stream}
                </Text>
              }
            </View>
            <View
              style={[styles.backgroundImage_content, { display: provider ? 'none' : 'flex' }]}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={item.imageIcon}
                  style={styles.backgroundImage_content_image}
                />
                <View style={{ marginLeft: 8 }}>
                  <Text style={{ color: COLORS.WHITE }}>{item.title}</Text>
                  < View style={{ flexDirection: 'row' }}>
                    <Text style={styles.backgroundImage_status}>{item.status}</Text>
                    <View style={styles.backgroundImage_status_icon}><CheckMarkIcon /></View>
                  </View>
                </View>
              </View>
              <View style={styles.backgroundImage_barIcon}>
                <Text><BarIcon /></Text>
              </View>
            </View>
            {provider && (
              <Wrapper style={{ position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Wrapper style={{ flexDirection: 'column', gap: 12 }}>
                  <Text style={{ color: COLORS.WHITE, fontSize: 14, fontWeight: '400', fontFamily: FONTS.URBAN_REGULAR, lineHeight: 16 }}>Subscribe to watch video</Text>
                  <PrimaryButton text={'Subscribe $10/Month '} style={{ width: 160, height: 30 }} styleText={{ fontSize: 12, fontWeight: '600', fontFamily: FONTS.URBAN_REGULAR, lineHeight: 14 }} />
                </Wrapper>
              </Wrapper>
            )}
          </ImageBackground>
        </View >
      </TouchableOpacity>
      <View
        style={styles.card_bar}>
        <View>
          <Text style={{ color: COLORS.BLACK }}>{item.description}</Text>
          <Text style={{ color: '#7A7A7A' }}>{item.watching} watching</Text>
        </View>
        <View style={styles.card_bar_content}>
          <View style={styles.card_bar_button_common}>
            <View style={{ paddingTop: 2 }}><Heart /></View>
            <View>
              <Text style={{ color: '#626262' }}>
                {item.likes}
              </Text>
            </View>
          </View>
          <View style={styles.card_bar_button_common}>
            <View style={{ paddingTop: 2 }}><ChatIcon /></View>
            <View>
              <Text style={{ color: '#626262' }}>
                {item.comments}
              </Text>
            </View>
          </View>
          <View>
            <View style={{ paddingTop: 2 }}><Toggle /></View>
          </View>
        </View>
      </View>
    </View >
  );
};
