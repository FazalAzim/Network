import {
  View,
  StyleSheet,
  FlatList

} from 'react-native';
import React from 'react';
import { MainWrapper, MediaCard } from '@commons';
import { COLORS, ROUTES, cards } from '@constants';

export const Home = ({ navigation }) => {
  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <View style={{ flexDirection: 'column' }}>
        <FlatList
          data={cards}
          renderItem={({ item }) => {
            return <MediaCard item={item} onClick={() => navigation.navigate(ROUTES.VIDEO_SCREEN)} />;
          }}
        />
      </View>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({})
