import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS } from '@constants'
import { ViewIcon, Blue_Star } from '@assets'
import { SocialButton } from '@commons'
import { styles } from './styles'
import { width } from '@helpers'


export const ProductCard = ({ item, onClick }) => {
  const [viewPrice, setViewPrice] = useState(item.priceView);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={{ width: 63, height: 63, resizeMode: 'cover', borderRadius: 6 }} />
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection: 'column', gap: 8 }}>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#3C3C3C' }}>{item.title}</Text>
        </View>
        {viewPrice ? (
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Text style={styles.priceText}>${item.price}</Text>
              <Text style={styles.discountedPriceText}>${item.actual_price}</Text>
            </View>
            <View style={styles.starsContainer}>
              <Text style={{ color: COLORS.BLACK, fontSize: 12, fontWeight: '500' }}>{item.stars}</Text>
              <Blue_Star />
            </View>
          </View>
        ) : (
          <View style={styles.viewPriceContainer}>
            <SocialButton style={{ borderColor: COLORS.BD_COLOR, width: width(22), height: 22, alignSelf: 'flex-start', marginBottom: 2 }} icon={<ViewIcon />} text={"View Price"} productText={true} onPress={() => setViewPrice(!viewPrice)} />
            <Text style={styles.vendorText}>You’ll be taken to vendor's website.</Text>
          </View>
        )}
      </View>
    </View>
  );
};