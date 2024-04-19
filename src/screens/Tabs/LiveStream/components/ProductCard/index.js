import React, { useState } from 'react';
import { Image } from 'react-native';
import { SocialButton, Text, Wrapper } from '@commons';
import { ViewIcon } from '@assets';
import { styles } from './styles';

export const ProductCard = ({ item }) => {
  const [viewPrice, setViewPrice] = useState(item.priceView);

  return (
    <Wrapper style={styles.container}>
      <Wrapper style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </Wrapper>
      <Wrapper>
        <Text style={styles.title}>{item.title}</Text>
      </Wrapper>
      <Wrapper>
        {viewPrice ? (
          <Wrapper style={styles.priceContainer}>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.actualPrice}>${item.actual_price}</Text>
          </Wrapper>
        ) : (
          <Wrapper style={styles.buttonContainer}>
            <SocialButton
              style={styles.viewPriceButton}
              icon={<ViewIcon />}
              text={"View Price"}
              styleText={styles.viewPriceButtonText}
              onPress={() => setViewPrice(!viewPrice)}
            />
            <Text style={styles.vendorInfo}>You’ll be taken to the vendor's website.</Text>
          </Wrapper>
        )}
      </Wrapper>
    </Wrapper>
  );
};