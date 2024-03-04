import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ROUTES } from "@constants";
import { ForgotPassword, Login, Onboarding, Signup, SplashScreen, VerifyCode } from "@screens";
import { useAuth } from "@contexts";
import { useEffect, useState } from "react";
import { Tabs } from "../Tabs";

const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;

export const AuthStack = () => {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name={ROUTES.SPLASH_SCREEN} component={SplashScreen} />
            <Screen name={ROUTES.ONBOARDING} component={Onboarding} />
            <Screen name={ROUTES.LOGIN} component={Login} />
            <Screen name={ROUTES.SIGNUP} component={Signup} />
            <Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
            <Screen name={ROUTES.RESET_PASSWORD} component={VerifyCode} />
        </Navigator>        
    )
}

export const Root = () => {
    const {currentUser} = useAuth();
    const [isUser, setIsUser] = useState(false)
    useEffect(() => {
        setIsUser(currentUser)
    }, [currentUser])
    
    return(
        <NavigationContainer>
            {currentUser ? <Tabs /> : <AuthStack />}
        </NavigationContainer>
    )
}