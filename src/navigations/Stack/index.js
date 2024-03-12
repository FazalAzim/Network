import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ROUTES} from '@constants';
import {
    Chat,
  ForgotPassword,
  LiveProfile,
  Login,
  Onboarding,
  ProductDetail,
  Signup,
  SplashScreen,
  VerifyCode,
  VideoScreen,
} from '@screens';
import {useAuth} from '@contexts';
import {useEffect, useState} from 'react';
import {Tabs} from '../Tabs';

const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;

export const AuthStack = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
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
      <Screen name={ROUTES.LIVE_PROFILE} component={LiveProfile} />
    </Navigator>
  );
}

export const Root = () => {
  const {currentUser} = useAuth();
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
