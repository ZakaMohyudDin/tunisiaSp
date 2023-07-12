import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import History from "../screen/History";
import React, { useEffect } from "react";
import Home from "../screen/Home";
import { colors } from "../utils/colors";
import { Image } from "react-native";
import Notifictaion from "../screen/Notifictions";
import ChatMembers from "../screen/ChatMembers";
import Profile from "../screen/Profile";
import { useDrawerStatus } from "@react-navigation/drawer";
import { setDrawerState } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "react-native-paper";
const Tab = createMaterialBottomTabNavigator();

export default function TopTab() {
  const dispatch = useDispatch();
  const { isBlur, token } = useSelector(({ authReducer }) => authReducer);
  const isDrawerOpen = useDrawerStatus();
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent";
  React.useEffect(() => {
    console.log("Drawer : ", isDrawerOpen);
    dispatch(setDrawerState(isDrawerOpen == "open" ? true : false));
  }, [isDrawerOpen]);
  return (
    <Tab.Navigator
      initialRouteName="CategoryStack"
      activeColor={colors.primary_color}
      inactiveColor={colors.inActive}
      barStyle={{ backgroundColor: colors.main_background, opacity: isBlur ? 0.1 : 1 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <>
                {focused ? (
                  <Image
                    source={require("../assets/homepage.png")}
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: color,
                    }}
                  />
                ) : (
                  <Image
                    source={require("../assets/Home.png")}
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: color,
                    }}
                  />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <>
                {focused ? (
                  <Image
                    source={require("../assets/category.png")}
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: color,
                    }}
                  />
                ) : (
                  <Image
                    source={require("../assets/cat3.png")}
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: color,
                    }}
                  />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Notifictaion"
        component={Notifictaion}
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <>
              {focused ? (
                <Image
                  source={require("../assets/notification.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: color,
                  }}
                />
              ) : (
                <Image
                  source={require("../assets/bell.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: color,
                  }}
                />
              )}
            </>
            );
          },
        }}
      />
      <Tab.Screen
        name="ChatMembers"
        component={ChatMembers}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <>
              {focused ? (
                <Image
                  source={require("../assets/smsFill.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: color,
                  }}
                />
              ) : (
                <Image
                  source={require("../assets/Chat.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: color,
                  }}
                />
              )}
            </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <>
              {focused ? (
                <Image
                  source={require("../assets/profilrFill.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: color,
                  }}
                />
              ) : (
                <Image
                  source={require("../assets/Profile.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: color,
                  }}
                />
              )}
            </>
            
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
