import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from '@constants';
import {
  Cart,
  Chat,
  ForgotPassword,
  LiveProfile,
  Login,
  Onboarding,
  ProductCheckout,
  ProductDetail,
  Signup,
  SplashScreen,
  VerifyCode,
  VideoScreen,
  ProviderDetails,
  CreatorProfile,
  VerificationSubmit,
  Subscriptions,
  ProductList,
  MyProduct,
  LiveProduct,
} from '@screens';
import { useAuth } from '@contexts';
import { useEffect, useState } from 'react';
import { Tabs } from '../Tabs';

const Stack = createNativeStackNavigator();
const { Navigator, Screen } = Stack;

export const AuthStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={ROUTES.SPLASH_SCREEN} component={SplashScreen} />
      <Screen name={ROUTES.ONBOARDING} component={Onboarding} />
      <Screen name={ROUTES.LOGIN} component={Login} />
      <Screen name={ROUTES.SIGNUP} component={Signup} />
      <Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      <Screen name={ROUTES.RESET_PASSWORD} component={VerifyCode} />
    </Navigator>
  );
};

export const TabStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={ROUTES.HOME_STACK} component={Tabs} />
      <Screen name={ROUTES.VIDEO_SCREEN} component={VideoScreen} />
      <Screen name={ROUTES.PRODUCT_DETAIL} component={ProductDetail} />
      <Screen name={ROUTES.CHAT} component={Chat} />
      <Screen name={ROUTES.CART} component={Cart} />
      <Screen name={ROUTES.PRODUCT_CHECKOUT} component={ProductCheckout} />
      <Screen name={ROUTES.LIVE_PROFILE} component={LiveProfile} />
      <Screen name={ROUTES.PROVIDER_DETAILS} component={ProviderDetails} />
      <Screen name={ROUTES.CREATOR_PROFILE} component={CreatorProfile} />
      <Screen name={ROUTES.VERIFICATION_SUBMIT} component={VerificationSubmit} />
      <Screen name={ROUTES.SUBSCRIPTIONS} component={Subscriptions} />
      <Screen name={ROUTES.PRODUCT_LIST} component={ProductList} />
      <Screen name={ROUTES.MY_PRODUCT} component={MyProduct} />
      <Screen name={ROUTES.LIVE_PRODUCT} component={LiveProduct} />
    </Navigator>
  );
}

export const Root = () => {
  const { currentUser } = useAuth();
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    setIsUser(currentUser);
  }, [currentUser]);

  return (
    <NavigationContainer>
      {currentUser ? <TabStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
