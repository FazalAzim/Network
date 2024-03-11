import React from 'react';
import Swiper from 'react-native-swiper';
import { View, Image } from 'react-native';
import { ICON } from '@constants';
import { Favorite, Share } from '@assets';
import {styles} from './styles';

export const ProductSlider = ({ images, onClick }) => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={3}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>
      <View style={{ position: 'absolute', top: 12, left: 12 }}>
        <ICON.Entypo name='chevron-thin-left' color={'#383838'} size={20} onPress={onClick} />
      </View>
      <View style={styles.button}>
        <View style={styles.buttonIcon}>
          <Favorite />
        </View>
        <View style={styles.buttonIcon}>
          <Share />
        </View>
      </View>
    </View>
  );
};


