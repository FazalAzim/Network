import { ProductCard, Wrapper } from '@commons'
import { product_Cards } from '@constants';
import React from 'react'
import { FlatList } from 'react-native';

export const Products = () => {
  return (
    <Wrapper style={{ flex: 1, flexDirection: 'column', marginTop: 12 }}>
      <FlatList
        data={product_Cards}
        renderItem={({ item }) => {
          return <ProductCard item={item} />;
        }}
      />
    </Wrapper>
  )
}

