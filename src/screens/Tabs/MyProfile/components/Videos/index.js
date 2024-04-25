import { HomeCard, Wrapper } from '@commons'
import { cards } from '@constants';
import React from 'react'
import { FlatList } from 'react-native';

export const Videos = () => {
  return (
    <Wrapper style={{ flex: 1, flexDirection: 'column', marginTop: 12 }}>
      <FlatList
        data={cards}
        renderItem={({ item }) => {
          return <HomeCard item={item} />;
        }}
      />
    </Wrapper>
  )
}

