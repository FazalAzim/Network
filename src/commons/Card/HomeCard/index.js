import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { BarIcon, ChatIcon, Heart, Toggle, Vector } from '@assets';
import { COLORS } from '@constants';

export const HomeCard = ({ item, onClick }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <View style={{ height: 160 }}>
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            imageStyle={{ borderRadius: 8 }}
            style={styles.backgroundImage}>
            <View style={{ alignItems: 'flex-end' }}>
              <Text
                style={[{
                  color: item.stream === 'Ad' ? '#1D1D1D' : COLORS.WHITE,
                  backgroundColor: item.stream === 'Ad' ? COLORS.WHITE : 'red',
                }, styles.backgroundImage_stream]}>
                {item.stream}
              </Text>
            </View>
            <View
              style={styles.backgroundImage_content}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={item.imageIcon}
                  style={styles.backgroundImage_content_image}
                />
                <View style={{ marginLeft: 8 }}>
                  <Text style={{ color: COLORS.WHITE }}>{item.title}</Text>
                  < View style={{ flexDirection: 'row' }}>
                    <Text style={styles.backgroundImage_status}>{item.status}</Text>
                    <View style={styles.backgroundImage_status_icon}><Vector /></View>
                  </View>
                </View>
              </View>
              <View style={styles.backgroundImage_barIcon}>
                <Text><BarIcon /></Text>
              </View>
            </View>
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
