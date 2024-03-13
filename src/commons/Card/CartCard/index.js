import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SocialButton } from '@commons';
import { Delete, Toggle } from '@assets';
import { styles } from './styles';

export const CartCard = ({ item, countButton }) => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity> */}
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
      {/* </TouchableOpacity> */}
      <View style={{ flexDirection: 'column', gap: 2, flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ width: 240 }}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <Toggle />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ paddingVertical: 2, flexDirection: 'row', gap: 12 }}>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.oldPrice}>${item.actual_price}</Text>
            <Text style={styles.discount}>{item.discount}%Off</Text>
          </View>
          <Text style={styles.shipping}>Eligible for FREE Shipping</Text>
        </View>
        {countButton && (
          <View style={styles.buttonContainer}>
            <View style={styles.countContainer}>
              <SocialButton onPress={() => setCount(count - 1)} style={styles.socialButton} text={"-"} styleText={{ color: '#1E1F3D', fontSize: 14 }} />
              <Text style={{ color: '#1E1F3D', fontSize: 14, fontWeight: '500' }}>{count}</Text>
              <SocialButton onPress={() => setCount(count + 1)} style={styles.socialButton} text={"+"} styleText={{ color: '#1E1F3D', fontSize: 14 }} />
            </View>
            <Delete />
          </View>
        )}
      </View>
    </View>
  );
};
