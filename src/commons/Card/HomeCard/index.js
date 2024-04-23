import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { BarIcon, ChatIcon, Heart, Toggle, CheckMarkIcon } from '@assets';
import { COLORS, FONTS } from '@constants';
import { PrimaryButton, Wrapper } from '@commons';

export const HomeCard = ({ item, onClick, provider }) => {
  return (
    <Wrapper style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <Wrapper style={{ height: 160 }}>
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            blurRadius={provider ? 10 : 1}
            imageStyle={{ borderRadius: 8 }}
            style={[styles.backgroundImage, { position: 'relative' }]}>
            <Wrapper style={{ alignItems: 'flex-end' }}>
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
            </Wrapper>
            <Wrapper
              style={[styles.backgroundImage_content, { display: provider ? 'none' : 'flex' }]}>
              <Wrapper style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Image
                  source={item.imageIcon}
                  style={styles.backgroundImage_content_image}
                />
                <Wrapper>
                  <Text style={{ color: COLORS.WHITE, fontFamily: FONTS.URBAN_BOLD, fontSize: 12 }}>{item.title}</Text>
                  <Wrapper style={{ flexDirection: 'row' }}>
                    <Text style={styles.backgroundImage_status}>{item.status}</Text>
                    <Wrapper style={styles.backgroundImage_status_icon}><CheckMarkIcon /></Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
              <Wrapper style={styles.backgroundImage_barIcon}>
                <BarIcon />
              </Wrapper>
            </Wrapper>
            {provider && (
              <Wrapper style={{ position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Wrapper style={{ flexDirection: 'column', gap: 12 }}>
                  <Text style={{ color: COLORS.WHITE, fontSize: 14, fontWeight: '400', fontFamily: FONTS.URBAN_REGULAR, lineHeight: 16 }}>Subscribe to watch video</Text>
                  <PrimaryButton text={'Subscribe $10/Month '} style={{ width: 160, height: 30 }} styleText={{ fontSize: 12, fontWeight: '600', fontFamily: FONTS.URBAN_REGULAR, lineHeight: 14 }} />
                </Wrapper>
              </Wrapper>
            )}
          </ImageBackground>
        </Wrapper >
      </TouchableOpacity>
      <Wrapper
        style={styles.card_bar}>
        <Wrapper>
          <Text style={{ color: COLORS.BLACK, fontFamily: FONTS.URBAN_MEDIUM, fontSize: 14, }}>{item.description}</Text>
          <Text style={{ color: COLORS._7A7A, fontFamily: FONTS.URBAN_REGULAR, }}>{item.watching} watching</Text>
        </Wrapper>
        <Wrapper style={styles.card_bar_content}>
          <Wrapper style={styles.card_bar_button_common}>
            <Wrapper style={{ paddingTop: 2 }}><Heart /></Wrapper>
            <Wrapper>
              <Text style={{ color: COLORS._6262, fontFamily: FONTS.URBAN_REGULAR, fontSize: 15 }}>
                {item.likes}
              </Text>
            </Wrapper>
          </Wrapper>
          <Wrapper style={styles.card_bar_button_common}>
            <Wrapper style={{ paddingTop: 2 }}><ChatIcon /></Wrapper>
            <Wrapper>
              <Text style={{ color: COLORS._6262, fontFamily: FONTS.URBAN_REGULAR, fontSize: 15 }}>
                {item.comments}
              </Text>
            </Wrapper>
          </Wrapper>
          <Wrapper>
            <View style={{ paddingTop: 2 }}><Toggle /></View>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper >
  );
};
