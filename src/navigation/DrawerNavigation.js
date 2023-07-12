import { createDrawerNavigator } from "@react-navigation/drawer";
import TopTab from "./TopTab";
import LoginStack from "./LoginStack";
import CustomDrawerContent from "../components/CustomDrawerDesign";
import React from "react";
import { useSelector } from "react-redux";
import { normalize } from "react-native-elements";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const { isDrawerOppened } = useSelector(({ authReducer }) => authReducer);
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        // drawerPosition: "right",
        drawerType: "back",
        overlayColor: 0,
        drawerStyle: {
          width: normalize(204),
          backgroundColor: "#fff",
        },
        sceneContainerStyle: {
          marginVertical: isDrawerOppened ? normalize(24) : 0,
          marginLeft: isDrawerOppened ? normalize(8) : 0,
          // borderRadius: isDrawerOppened ? 30 :0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
        },
      }}
    >
      <Drawer.Screen name="LoginStack" component={LoginStack} />
      <Drawer.Screen name="TopTab" component={TopTab} />
    </Drawer.Navigator>
  );
}
