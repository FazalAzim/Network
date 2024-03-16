import {
  View,
  StyleSheet,
  FlatList

} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { H1, H3, HomeCard, HomeHeader, MainWrapper, PrimaryButton, RowWrapper, RowWrapperBasic, SocialButton, Text, Wrapper } from '@commons';
import { COLORS, FONTS, ICON, IMG, ROUTES, cards } from '@constants';
import { height, width } from '@helpers';
import RBSheet from 'react-native-raw-bottom-sheet';

export const Home = ({ navigation }) => {
  const refRBSheet = useRef();
  const [activeTab, setActiveTab] = useState('Live');
  useEffect(() => refRBSheet.current.open(), [])
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
      <HomeHeader logo={IMG.LOGO} profile={IMG.AVATAR1} icon={<ICON.AntDesign name='bells' color={COLORS.BLACK} size={20} />} profileClick={() => navigation.navigate(ROUTES.LIVE_PROFILE, { profile: true, provider: false, })} providerClick={() => navigation.navigate(ROUTES.PROVIDER_DETAILS)} providerProfile={() => navigation.navigate(ROUTES.LIVE_PROFILE, { profile: true, provider: true })} />
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
      <Wrapper>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={height(32)}
          customStyles={{
            container: {
              borderRadius: 10,
            },
            draggableIcon: {
              backgroundColor: "#D9D9D9",
              width: 42,
              height: 3,
            }
          }}
        >
          <Wrapper style={{ marginTop: 6, marginHorizontal: width(4), flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
            <H3 style={{ color: COLORS._1E1F, fontSize: 17 }}>Verify your SkyyLytes account </H3>
            <Text style={{ width: width(66), fontSize: 13, textAlign: 'center', fontFamily: FONTS.URBAN_MEDIUM }}>You must verify your account before you can
              create any content.</Text>
            <Text style={{ width: width(90), fontSize: 13, textAlign: "center", fontFamily: FONTS.URBAN_REGULAR }}>Verified accounts have a tick mark next to their names. This shows that SkyyLytes has confirmed that an account is the authentic presence of that content creator. This helps us to keep the application authentic and safe. </Text>
            <PrimaryButton text={'Verify Account'} style={{ marginTop: width(2) }} onPress={() => navigation.navigate(ROUTES.CREATOR_PROFILE)} />
          </Wrapper>
        </RBSheet>
      </Wrapper>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({})
