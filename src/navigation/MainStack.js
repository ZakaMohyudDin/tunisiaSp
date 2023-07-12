import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopTab from "./TopTab";
import SplashScreen from "../screen/SplashScreen";
import LoginScreen from "../screen/LoginScreen";
import SignUpScreen from "../screen/SignUpScreen";
import OtpScreen from "../screen/OtpScreen";
import Splash2 from "../screen/Splash2";
import SplashScreen3 from "../screen/SplashScreen3";
import DrawerNavigation from "./DrawerNavigation";
import ServiceType from "../screen/ServiceTypes";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const { token } = useSelector(({ authReducer }) => authReducer);
  return (
    <>
      {token ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SplashScreen3" component={SplashScreen3} />
          <Stack.Screen name="Splash2" component={Splash2} />
          <Stack.Screen name="TopTab" component={TopTab} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          <Stack.Screen name="ServiceType" component={ServiceType} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default MainStack;
