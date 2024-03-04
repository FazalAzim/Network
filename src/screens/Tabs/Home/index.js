import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import { MainWrapper, MediaCard } from '@commons';
import { COLORS, cards } from '@constants';
// import { MediaCard } from '@commons';

export const Home = () => {
  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <View style={{ flexDirection: 'column' }}>
        <FlatList
          data={cards}
          renderItem={({ item }) => {
            console.log(item);
            return <MediaCard item={item} />;
          }}
        />
      </View>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({})
