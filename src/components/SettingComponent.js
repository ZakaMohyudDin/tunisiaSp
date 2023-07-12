import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";
import Picture from "./Picture";
import Paragraph from "./Paragraph";
import { normalize } from "../utils/helper";
const SettingComponent = ({ text, img, contact, onPress }) => {
  return (
    <View style={styles.containner}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Picture
          localSource={img}
          height={normalize(5)}
          width={normalize(5)}
          imgColor={colors.dark_gray}
        />
        <View style={{ width: normalize(2) }} />
        <Paragraph
          text={text}
          color={colors.dark_gray}
          fontSize={normalize(4)}
        />
      </View>
      <TouchableOpacity onPress={onPress}>
        <Picture
          localSource={require("../assets/next.png")}
          height={normalize(4)}
          width={normalize(4)}
          resizeMode={"stretch"}
          imgColor={colors.dark_gray}
        />
      </TouchableOpacity>
    </View>
  );
};
export default SettingComponent;

const styles = StyleSheet.create({
  containner: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignSelf: "flex-end",
  },
});
