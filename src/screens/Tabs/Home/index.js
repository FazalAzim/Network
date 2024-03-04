import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import { MainWrapper, MediaCard } from '@commons';
import { COLORS, cards } from '@constants';

export const Home = () => {
  const handlePress = (id) => {
    console.log(id)
  }
  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <View style={{ flexDirection: 'column' }}>
        <FlatList
          data={cards}
          renderItem={({ item }) => {
            return <MediaCard item={item} onClick={handlePress} />;
          }}
        />
      </View>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({})
