import * as React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../utils/colors";
import { normalize } from "../utils/helper";
import Picture from "./Picture";
const windowHeight = Dimensions.get("window").height;

const RoundButton = ({
  text,
  bgColor,
  img,
  imgColor,
  imgHeight,
  imgWidth,
  height,
  width,
  roundCorner,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: bgColor || colors.white,
          height: height || normalize(12),
          width: width || normalize(12),
          borderRadius: roundCorner || normalize(12),
        },
      ]}
    >
      <Picture
        localSource={img || require("../assets/call.png")}
        height={imgHeight || normalize(5)}
        width={imgWidth || normalize(5)}
        imgColor={imgColor}
      />
    </TouchableOpacity>
  );
};
export default RoundButton;

const styles = StyleSheet.create({
  container: {
    height: normalize(12),
    width: normalize(12),
    borderRadius: normalize(12),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
