import React from 'react';
import { Image } from 'react-native';
import { Rating } from 'react-native-ratings';
import { styles } from './styles';
import { Text, Wrapper } from '@commons';

export const RatingCard = ({ item }) => {
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating)
  }
  return (
    <Wrapper style={styles.container}>
      <Wrapper style={styles.rowContainer}>
        <Image
          source={item.image}
          style={styles.profileImage}
        />
        <Wrapper style={styles.textContainer}>
          <Wrapper style={styles.textColumn}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Rating
              type='custom'
              ratingBackgroundColor='#c8c7c8'
              ratingCount={5}
              imageSize={18}
              // defaultRating={4}
              onFinishRating={ratingCompleted}
            />
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
    </Wrapper>
  );
};
