import * as React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../utils/colors";
import Picture from "./Picture";
import Paragraph from "./Paragraph";
import { normalize } from "../utils/helper";
const ContactInfoBox = ({ text, img, contact }) => {
  return (
    <View style={styles.containner}>
      <Paragraph
        text={contact}
        color={colors.subHeading}
        fontSize={normalize(4)}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Paragraph
          text={text}
          color={colors.subHeading}
          fontSize={normalize(4)}
        />
        <View style={{ width: normalize(2) }} />
        <Picture
          localSource={img}
          height={normalize(5)}
          width={normalize(5)}
          imgColor={colors.subHeading}
        />
      </View>
    </View>
  );
};
export default ContactInfoBox;

const styles = StyleSheet.create({
  containner: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    alignSelf: "flex-end",
  },
});