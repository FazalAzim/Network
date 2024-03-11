import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES, ICON, COLORS, FONTS } from '@constants';
import { Add, Cart, Home, Inbox, Search, VideoScreen, ProductDetail } from '@screens';

const Tab = createBottomTabNavigator();
const {Navigator, Screen} = Tab;

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: 3,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow
    }}
    onPress={onPress}
  >
    <View style={{
      width: 50,
      height: 50,
      borderRadius: 35,
      backgroundColor: COLORS.PRIMARY_COLOR
    }}>
      {children}
    </View>
  </TouchableOpacity>
);


export const Tabs = () => {
  return (
    <Navigator
      screenOptions={{
        // showLabel: false,
        style: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          // height: 110,
          // borderWidth: 1,
          ...styles.shadow
        },
        tabBarAllowFontScaling: false,
        tabBarLabelStyle: {
          color: COLORS.BLACK,
          fontFamily: FONTS.URBAN_REGULAR,
          fontSize: 12
        },
        headerShown: false,
        tabBarStyle: {
          borderWidth: 1,
          height: Platform.OS === 'android' ? 64 : 80
        }
      }}
    >
      <Screen name={ROUTES.HOME} component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <ICON.MaterialCommunity name="home" size={32} color={focused ? COLORS.PRIMARY_COLOR : COLORS.BLACK} />
        ),
        tabBarLabel: 'Home'
      }} />
      <Screen name={ROUTES.SEARCH} component={Search} options={{
        tabBarIcon: ({ focused }) => (
          <ICON.AntDesign name="search1" size={32} color={focused ? COLORS.PRIMARY_COLOR : COLORS.BLACK} />
        ),
        tabBarLabel: 'Search'
      }} />
      <Screen name={ROUTES.ADD} component={Add} options={{
        tabBarIcon: ({ focused }) => (
          <ICON.AntDesign name="plus" size={32} color="#FFF" />
        ),
        tabBarLabel: () => null,
        tabBarButton: (props) => (
          <CustomTabBarButton {...props} />
        )
      }} />
      <Screen name={ROUTES.CART} component={Cart} options={{
        tabBarIcon: ({ focused }) => (
          <ICON.MaterialCommunity name="shopping-outline" size={32} color={focused ? COLORS.PRIMARY_COLOR : COLORS.BLACK} />
        ),
        tabBarLabel: 'Cart'
      }} />
      <Screen name={ROUTES.INBOX} component={Inbox} options={{
        tabBarIcon: ({ focused }) => (
          <ICON.Ionicons name="chatbubble-ellipses-outline" size={32} color={focused ? COLORS.PRIMARY_COLOR : COLORS.BLACK} />
        ),
        tabBarLabel: 'Messages'
      }} />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});

