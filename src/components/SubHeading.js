import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../utils/colors";
import { normalize } from "../utils/helper";

const SubHeading = ({ text, textAlign, color, marginLeft, marginRight, weight, fontSize, fontFamily }) => {
  return (
    <Text
      style={{
        textAlign: textAlign || "right",
        fontSize: fontSize || normalize(5),
        color: color || colors.dark_gray,
        marginLeft: marginLeft,
        marginRight: marginRight,
        fontWeight: weight,
        fontFamily: fontFamily || 'FontsFree-Net-URW-DIN-Arabic-Bold-1'
      }}
    >
      {text}
    </Text>
  );
};
export default SubHeading;

const styles = StyleSheet.create({});
