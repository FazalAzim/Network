import {
  View,
  StyleSheet,
  FlatList

} from 'react-native';
import React from 'react';
import { HomeCard, MainWrapper } from '@commons';
import { COLORS, ROUTES, cards } from '@constants';

export const Home = ({ navigation }) => {
  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <View style={{ flexDirection: 'column' }}>
        <FlatList
          data={cards}
          renderItem={({ item }) => {
            return <HomeCard item={item} onClick={() => navigation.navigate(ROUTES.VIDEO_SCREEN, {item})} navigation={navigation} />;
          }}
        />
      </View>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({})
