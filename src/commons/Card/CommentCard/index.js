import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';
import { Text, Wrapper } from '@commons';

export const CommentCard = ({ item }) => {
  return (
    <Wrapper style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Wrapper style={styles.textContainer}>
        <Wrapper style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </Wrapper>
        <Wrapper style={{ width: 264 }}>
          <Text style={styles.description}>{item.description}</Text>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};