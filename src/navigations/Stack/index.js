import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ROUTES } from "@constants";
import { ForgotPassword, Login, Onboarding, Signup, SplashScreen, VerifyCode, Tabs, Home } from "@screens";

const Stack = createNativeStackNavigator();
const { Navigator, Screen } = Stack;

export const AuthStack = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			{/* <Screen name={ROUTES.SPLASH_SCREEN} component={SplashScreen} /> */}
			{/* <Screen name={ROUTES.ONBOARDING} component={Onboarding} /> */}
			{/* <Screen name={ROUTES.LOGIN} component={Login} /> */}
			{/* <Screen name={ROUTES.SIGNUP} component={Signup} /> */}
			{/* <Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} /> */}
			{/* <Screen name={ROUTES.RESET_PASSWORD} component={VerifyCode} /> */}
			<Screen name={ROUTES.HOME} component={Home} />
		</Navigator>
	)
}

export const Root = () => {
	return (
		<NavigationContainer>
			<AuthStack />
		</NavigationContainer>
	)
}