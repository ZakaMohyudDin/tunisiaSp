import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../utils/colors";
import { normalize } from "../utils/helper";

const Heading = ({ text, textAlign, color, fontFamily, weight }) => {
  return (
    <Text
      style={{
        textAlign: textAlign,
        fontSize: normalize(6),
        fontWeight: weight,
        color: color || colors.dark_gray,
        fontFamily: fontFamily || "FontsFree-Net-URW-DIN-Arabic-Bold-1"
      }}
    >
      {text}
    </Text>
  );
};
export default Heading;

const styles = StyleSheet.create({});
