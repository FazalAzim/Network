import { CartCard, MainWrapper, PrimaryButton, SocialButton } from '@commons'
import { COLORS, FONTS, ICON, product_Cards } from '@constants';
import { width } from '@helpers';
import { LocationIcon } from '@assets';
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';


export const ProductCheckout = ({ navigation }) => {
  return (
    <MainWrapper style={{
      backgroundColor: COLORS.WHITE,
      alignItems: 'center',
    }}>
      <View style={styles.header}>
        <ICON.Entypo name='chevron-thin-left' color={'#383838'} size={22} onPress={() => navigation.goBack()} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.title}>Checkout</Text>
        </View>
      </View>
      <View style={{ width: width(95), flexDirection: 'column', gap: 3 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <LocationIcon />
          <Text style={{ color: COLORS.BLACK, fontSize: 12, fontWeight: '400', fontFamily: FONTS.URBAN_REGULAR, }}>DELIVER TO
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ paddingLeft: 18, color: '#1E1F3D', fontSize: 14, fontWeight: '500', fontFamily: FONTS.URBAN_REGULAR, }}>3696 Crestview Terrace,
              Eagle Pass, TX 78852</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
            <SocialButton style={{ borderColor: COLORS.WHITE, backgroundColor: COLORS.BD_COLOR, width: width(22), height: 22 }} text={"Change"} styleText={{ color: '#9344FC', fontSize: 11, fontWeight: '500' }} />
          </View>
        </View>
      </View>
      <View style={{
        width: width(95),
        flex: 1,
      }}>
        <FlatList
          data={product_Cards}
          renderItem={({ item }) => {
            return <CartCard item={item} countButton={false} />
          }}
        />
      </View>
      <View style={{
        width: width(90), justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.WHITE,
      }}>
        <View style={{
          width: width(90),
          paddingVertical: 10,
          paddingHorizontal: 4,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderColor: '#b3e8dc',
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
            <Text style={styles.totalText}>Subtotal</Text>
            <Text style={styles.totalTaxes}>(2 items)</Text>
          </View>
          <Text style={styles.totalPrice}>$500.00</Text>
        </View>
        <View style={{
          width: width(90),
          paddingVertical: 10,
          paddingHorizontal: 4,
          flexDirection: 'column',
          gap: 6,
          borderBottomWidth: 1,
          borderColor: '#b3e8dc',
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Text style={styles.totalText}>Shipping fee</Text>
            <Text style={styles.totalPrice}>$10.00</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Text style={styles.totalText}>Shipping fee discount</Text>
            <Text style={styles.totalPrice}>$2.00</Text>
          </View>
        </View>
        <View style={{
          width: width(90),
          paddingVertical: 10,
          paddingHorizontal: 4,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
            <Text style={styles.totalText}>TOTAL</Text>
            <Text style={styles.totalTaxes}>(incl. of all taxes)</Text>
          </View>
          <Text style={styles.totalPrice}>$508.00</Text>
        </View>
        <PrimaryButton text={'Checkout'} style={{ width: '100%', height: 44 }} />
      </View>
    </MainWrapper>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
  },
  header: {
    width: width(95),
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#1E1F3D',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: FONTS.URBAN_REGULAR,
  },
  productList: {

    width: width(95),
    flex: 1,
  },
  totalContainer: {
    width: width(90),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
  totalContent: {
    width: width(90),
    paddingVertical: 10,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText: {
    color: '#989898',
    fontSize: 13,
    fontWeight: '400',
    fontFamily: FONTS.URBAN_REGULAR,
  },
  totalTaxes: {
    color: '#989898',
    fontSize: 10,
    fontWeight: '700',
    fontFamily: FONTS.URBAN_REGULAR,
  },
  totalPrice: {
    color: '#1E1F3D',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: FONTS.URBAN_REGULAR,
  },
});
