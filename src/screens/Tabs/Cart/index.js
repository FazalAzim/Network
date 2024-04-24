import React from 'react';
import { FlatList } from 'react-native';
import { MainWrapper, PrimaryButton, CartCard, Wrapper, Text } from '@commons';
import { FONTS, ICON, ROUTES, product_Cards } from '@constants';
import { styles } from './styles';
import { width } from '@helpers';

export const Cart = ({ navigation }) => {
  return (
    <MainWrapper style={styles.container}>
      <Wrapper style={styles.header}>
        <ICON.Entypo name='chevron-thin-left' color={'#383838'} size={22} onPress={() => navigation.goBack()} />
        <Wrapper style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.title}>My Cart</Text>
        </Wrapper>
      </Wrapper>
      <Wrapper style={styles.productList}>
        <FlatList
          data={product_Cards}
          renderItem={({ item }) => {
            return <CartCard item={item} countButton={true} />
          }}
        />
      </Wrapper>
      <Wrapper style={styles.totalContainer}>
        <Wrapper style={styles.totalContent}>
          <Wrapper style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
            <Text style={styles.totalText}>TOTAL</Text>
            <Text style={styles.totalTaxes}>(incl. of all taxes)</Text>
          </Wrapper>
          <Text style={styles.totalPrice}>$500.00</Text>
        </Wrapper>
        <PrimaryButton text={'Proceed to Payment'} style={{ width: width(95), height: 44, borderRadius: 4 }} onPress={() => navigation.navigate(ROUTES.PRODUCT_CHECKOUT)} styleText={{ fontFamily: FONTS.URBAN_MEDIUM, fontSize: 16 }} />
      </Wrapper>
    </MainWrapper>
  )
}
