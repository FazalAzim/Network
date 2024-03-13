import React from 'react';
import { View, Image, Text } from 'react-native';
import { Rating } from 'react-native-ratings';
import { styles } from './styles';

export const RatingCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image
          source={item.image}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <View style={styles.textColumn}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Rating ratingCount={5} imageSize={18} defaultRating={4} />
          </View>
        </View>
      </View>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
    </View>
  );
};
