import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export const CommentCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={{ width: 264 }}>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};