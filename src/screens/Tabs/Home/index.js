import {
  View,
  StyleSheet,
  FlatList

} from 'react-native';
import React from 'react';
import { HomeCard, HomeHeader, MainWrapper } from '@commons';
import { COLORS, ICON, IMG, ROUTES, cards } from '@constants';

export const Home = ({ navigation }) => {
  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <HomeHeader logo={IMG.LOGO} profile={IMG.AVATAR1} icon={<ICON.AntDesign name='bells' color={COLORS.BLACK} size={20} />} />
      <View style={{ flexDirection: 'column' }}>
        <FlatList
          data={cards}
          renderItem={({ item }) => {
            return <HomeCard item={item} onClick={() => navigation.navigate(ROUTES.VIDEO_SCREEN, { item })} navigation={navigation} />;
          }}
        />
      </View>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({})
