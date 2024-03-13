import { CartCard, MainWrapper, PrimaryButton, SocialButton } from '@commons'
import { COLORS, FONTS, ICON, product_Cards } from '@constants';
import { width } from '@helpers';
import { LocationIcon } from '@assets';
import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';

export const ProductCheckout = ({ navigation }) => {
  return (
    <MainWrapper style={styles.container}>
      <View style={styles.header}>
        <ICON.Entypo name='chevron-thin-left' color={'#383838'} size={22} onPress={() => navigation.goBack()} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.headerText}>Checkout</Text>
        </View>
      </View>
      <View style={styles.deliveryContainer}>
        <View style={styles.deliveryRow}>
          <LocationIcon />
          <Text style={styles.deliveryText}>DELIVER TO</Text>
        </View>
        <View style={styles.addressContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.addressText}>3696 Crestview Terrace, Eagle Pass, TX 78852</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
            <SocialButton style={{ borderColor: COLORS.WHITE, backgroundColor: COLORS.BD_COLOR, width: width(22), height: 22 }} text={"Change"} styleText={{ color: '#9344FC', fontSize: 11, fontWeight: '500' }} />
          </View>
        </View>
      </View>
      <View style={{ width: width(95), flex: 1 }}>
        <FlatList
          data={product_Cards}
          renderItem={({ item }) => <CartCard item={item} countButton={false} />}
        />
      </View>
      <View style={styles.checkoutButtonContainer}>
        <View style={styles.subtotalContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
            <Text style={styles.subtotalText}>Subtotal</Text>
            <Text style={{ ...styles.subtotalText, fontSize: 10 }}>(2 items)</Text>
          </View>
          <Text style={styles.totalAmountText}>$500.00</Text>
        </View>
        <View style={{ width: width(90), paddingVertical: 10, paddingHorizontal: 4, flexDirection: 'column', gap: 6, borderBottomWidth: 1, borderColor: '#b3e8dc' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.priceTitle}>Shipping fee</Text>
            <Text style={styles.PriceTotal}>$10.00</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.priceTitle}>Shipping fee discount</Text>
            <Text style={styles.PriceTotal}>$2.00</Text>
          </View>
        </View>
        <View style={{ width: width(90), paddingVertical: 10, paddingHorizontal: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
            <Text style={styles.priceTitle}>TOTAL</Text>
            <Text style={{ color: '#989898', fontSize: 10, fontWeight: '700', fontFamily: FONTS.URBAN_REGULAR }}>(incl. of all taxes)</Text>
          </View>
          <Text style={{ color: '#989898', fontSize: 14, fontWeight: '700', fontFamily: FONTS.URBAN_REGULAR }}>$508.00</Text>
        </View>
        <PrimaryButton text={'Checkout'} style={{ width: '100%', height: 44 }} />
      </View >
    </MainWrapper >
  )
}

