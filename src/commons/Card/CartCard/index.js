import React, { useState } from 'react';
import { Image } from 'react-native';
import { SocialButton, Text, Wrapper } from '@commons';
import { Delete, Toggle } from '@assets';
import { styles } from './styles';

export const CartCard = ({ item, countButton, product }) => {
  const [count, setCount] = useState(0);

  return (
    <Wrapper style={styles.container}>
      <Wrapper style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </Wrapper>
      <Wrapper style={{ flexDirection: 'column', gap: product === 'owner' ? 14 : 2, flex: 1 }}>
        <Wrapper style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <Wrapper style={{ width: 240, }}>
            <Text style={styles.title}>{item.title}</Text>
          </Wrapper>
          <Wrapper style={{ marginTop: 4 }}>
            <Toggle />
          </Wrapper>
        </Wrapper>
        <Wrapper style={{ flexDirection: 'column' }}>
          <Wrapper style={{ paddingVertical: 2, flexDirection: 'row', gap: 12 }}>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.oldPrice}>${item.actual_price}</Text>
            <Text style={styles.discount}>{item.discount}%Off</Text>
          </Wrapper>
          <Text style={[styles.shipping, { display: product === 'owner' ? 'none' : 'flex' }]}>Eligible for FREE Shipping</Text>
        </Wrapper>
        {countButton && (
          <Wrapper style={styles.buttonContainer}>
            <Wrapper style={styles.countContainer}>
              <SocialButton onPress={() => setCount(count - 1)} style={styles.socialButton} text={"-"} styleText={{ color: '#1E1F3D', fontSize: 14 }} />
              <Text style={{ color: '#1E1F3D', fontSize: 14, fontWeight: '500' }}>{count}</Text>
              <SocialButton onPress={() => setCount(count + 1)} style={styles.socialButton} text={"+"} styleText={{ color: '#1E1F3D', fontSize: 14 }} />
            </Wrapper>
            <Wrapper style={{marginTop:10}}>
              <Delete />
            </Wrapper>
          </Wrapper>
        )}
      </Wrapper>
    </Wrapper >
  );
};
