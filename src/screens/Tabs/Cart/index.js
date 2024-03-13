import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { MainWrapper, PrimaryButton, CartCard } from '@commons';
import { ICON, ROUTES, product_Cards } from '@constants';
import { styles } from './styles'; 

export const Cart = ({ navigation }) => {
  return (
    <MainWrapper style={styles.container}>
      <View style={styles.header}>
        <ICON.Entypo name='chevron-thin-left' color={'#383838'} size={22} onPress={() => navigation.goBack()} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.title}>My Cart</Text>
        </View>
      </View>
      <View style={styles.productList}>
        <FlatList
          data={product_Cards}
          renderItem={({ item }) => {
            return <CartCard item={item} />
          }}
        />
      </View>
      <View style={styles.totalContainer}>
        <View style={styles.totalContent}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
            <Text style={styles.totalText}>TOTAL</Text>
            <Text style={styles.totalTaxes}>(incl. of all taxes)</Text>
          </View>
          <Text style={styles.totalPrice}>$500.00</Text>
        </View>
        <PrimaryButton text={'Proceed to Payment'} style={{ width: '100%', height: 44 }} onPress={() => navigation.navigate(ROUTES.PRODUCT_CHECKOUT)} />
      </View>
    </MainWrapper>
  )
}
