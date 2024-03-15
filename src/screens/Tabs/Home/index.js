import {
  View,
  StyleSheet,
  FlatList

} from 'react-native';
import React, { useState } from 'react';
import { HomeCard, HomeHeader, MainWrapper, PrimaryButton, RowWrapper, RowWrapperBasic, SocialButton, Wrapper } from '@commons';
import { COLORS, ICON, IMG, ROUTES, cards } from '@constants';
import { height, width } from '@helpers';

export const Home = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Live');

  const button = [
    { title: "Live" },
    { title: "Previously Live" },
    { title: "Subscriptions" },
    { title: "For You" },
    { title: "About" },
    { title: "Product" },
  ];
  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <HomeHeader logo={IMG.LOGO} profile={IMG.AVATAR1} icon={<ICON.AntDesign name='bells' color={COLORS.BLACK} size={20} />} profileClick={() => navigation.navigate(ROUTES.LIVE_PROFILE, { profile: true, })} providerClick={() => navigation.navigate(ROUTES.PROVIDER_DETAILS)} />
      <Wrapper style={{ marginTop: 12 }}>
        <FlatList
          horizontal
          data={button}
          renderItem={({ item }) => {
            return (<Wrapper style={{ marginRight: 5 }}>
              <SocialButton onPress={() => setActiveTab(item.title)} style={{ borderColor: COLORS.WHITE, backgroundColor: activeTab === item.title ? COLORS.PRIMARY_COLOR : COLORS.BD_COLOR, width: width(25), height: height(4) }} text={item.title} styleText={{ color: activeTab === item.title ? COLORS.WHITE : '#242424', fontSize: 12 }} />
            </Wrapper>)
          }}
        />
      </Wrapper>
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
