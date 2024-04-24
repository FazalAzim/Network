import { CartCard, MainWrapper, PrimaryButton, SocialButton, Text, Wrapper } from '@commons'
import { COLORS, FONTS, ICON, product_Cards } from '@constants';
import { width } from '@helpers';
import { LocationIcon } from '@assets';
import React from 'react'
import { FlatList } from 'react-native';
import { styles } from './styles';

export const ProductCheckout = ({ navigation }) => {
  return (
    <MainWrapper style={styles.container}>
      <Wrapper style={styles.header}>
        <ICON.Entypo name='chevron-thin-left' color={'#383838'} size={22} onPress={() => navigation.goBack()} />
        <Wrapper style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.headerText}>Checkout</Text>
        </Wrapper>
      </Wrapper>
      <Wrapper style={styles.deliveryContainer}>
        <Wrapper style={styles.deliveryRow}>
          <LocationIcon />
          <Text style={styles.deliveryText}>DELIVER TO</Text>
        </Wrapper>
        <Wrapper style={styles.addressContainer}>
          <Wrapper style={{ flex: 1 }}>
            <Text style={styles.addressText}>3696 CrestWrapper Terrace, Eagle Pass, TX 78852</Text>
          </Wrapper>
          {/* <Wrapper style={{ flex: 1, flexDirection: 'row-reverse' }}> */}
          <SocialButton style={{ borderColor: COLORS.WHITE, backgroundColor: COLORS._F7F1, width: width(22), height: 22, borderRadius: 4, }} text={"Change"} styleText={{ color: COLORS.PRIMARY_COLOR, fontSize: 11, fontFamily: FONTS.URBAN_MEDIUM }} />
          {/* </Wrapper> */}
        </Wrapper>
      </Wrapper>
      <Wrapper style={{ width: width(95), flex: 1 }}>
        <FlatList
          data={product_Cards}
          renderItem={({ item }) => <CartCard item={item} countButton={false} />}
        />
      </Wrapper>
      <Wrapper style={styles.checkoutButtonContainer}>
        <Wrapper style={styles.subtotalContainer}>
          <Wrapper style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
            <Text style={styles.subtotalText}>Subtotal</Text>
            <Text style={{ ...styles.subtotalText }}>(2 items)</Text>
          </Wrapper>
          <Text style={styles.totalAmountText}>$500.00</Text>
        </Wrapper>
        <Wrapper style={{ width: width(90), paddingVertical: 10, paddingHorizontal: 4, flexDirection: 'column', gap: 6, borderBottomWidth: 1, borderColor: '#EAEAEA' }}>
          <Wrapper style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.priceTitle}>Shipping fee</Text>
            <Text style={styles.PriceTotal}>$10.00</Text>
          </Wrapper>
          <Wrapper style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.priceTitle}>Shipping fee discount</Text>
            <Text style={styles.PriceTotal}>$2.00</Text>
          </Wrapper>
        </Wrapper>
        <Wrapper style={{ width: width(90), paddingVertical: 10, paddingHorizontal: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Wrapper style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
            <Text style={styles.priceTitle}>TOTAL</Text>
            <Text style={{ color: '#989898', fontSize: 10, fontFamily: FONTS.URBAN_BOLD }}>(incl. of all taxes)</Text>
          </Wrapper>
          <Text style={{ color: '#1E1F3D', fontSize: 14, fontFamily: FONTS.URBAN_BOLD }}>$508.00</Text>
        </Wrapper>
        <PrimaryButton text={'Checkout'} style={{ width: '100%', height: 44 }} />
      </Wrapper >
    </MainWrapper >
  )
}

