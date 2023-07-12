import * as React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { colors } from "../utils/colors";
import BlurScreen from "./BlurScreen";

const ScreenLoader = ({}) => {
  return (
    <BlurScreen>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={colors.primary_color} />
      </View>
    </BlurScreen>
  );
};
export default ScreenLoader;

const styles = StyleSheet.create({});
