import React, { useState } from 'react'
import {Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS } from '@constants'
import { ViewIcon, Blue_Star } from '@assets'
import { SocialButton, Text, Wrapper } from '@commons'
import { styles } from './styles'
import { width } from '@helpers'


export const ProductCard = ({ item, onClick }) => {
  const [viewPrice, setViewPrice] = useState(item.priceView);

  return (
    <TouchableOpacity onPress={onClick}>
      <Wrapper style={styles.container}>
        <Wrapper style={styles.imageContainer}>
          <Image source={item.image} style={{ width: 63, height: 63, resizeMode: 'cover', borderRadius: 6 }} />
        </Wrapper>
        <Wrapper style={{ flexDirection: 'column', gap: 8 }}>
          <Wrapper style={styles.titleContainer}>
            <Text style={{ fontSize: 14, fontFamily:FONTS.URBAN_MEDIUM, color:COLORS._3C3C }}>{item.title}</Text>
          </Wrapper>
          {viewPrice ? (
            <Wrapper style={styles.priceContainer}>
              <Wrapper style={{ flexDirection: 'row', gap: 10 }}>
                <Text style={styles.priceText}>${item.price}</Text>
                <Text style={styles.discountedPriceText}>${item.actual_price}</Text>
              </Wrapper>
              <Wrapper style={styles.starsContainer}>
                <Text style={{ color: COLORS.BLACK, fontSize: 12,fontFamily:FONTS.URBAN_MEDIUM }}>{item.stars}</Text>
                <Blue_Star />
              </Wrapper>
            </Wrapper>
          ) : (
            <Wrapper style={styles.viewPriceContainer}>
              <SocialButton style={{ borderColor: COLORS.BD_COLOR, width: width(22), height: 22, alignSelf: 'flex-start', marginBottom: 2 }} icon={<ViewIcon />} text={"View Price"} styleText={{ fontSize: 10 }} onPress={() => setViewPrice(!viewPrice)} />
              <Text style={styles.vendorText}>You’ll be taken to vendor's website.</Text>
            </Wrapper>
          )}
        </Wrapper>
      </Wrapper>
    </TouchableOpacity>
  );
};