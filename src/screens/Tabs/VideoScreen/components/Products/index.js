import { ProductCard, Wrapper } from '@commons'
import { ROUTES, product_Cards } from '@constants';
import React from 'react'
import { FlatList } from 'react-native';

export const Products = ({navigation}) => {
  return (
    <Wrapper style={{ flex: 1, flexDirection: 'column', marginTop: 12 }}>
      <FlatList
        data={product_Cards}
        renderItem={({ item }) => {
          return <ProductCard item={item} onClick={() => navigation.navigate(ROUTES.PRODUCT_DETAIL)} />;
        }}
      />
    </Wrapper>
  )
}

