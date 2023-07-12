import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";
import { normalize } from "../utils/helper";
import Picture from "./Picture";
import SubHeading from "./SubHeading";
import Paragraph from "./Paragraph";
const ServiceTypeBox = ({ text, title, img, imgHeight, imgWidth, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={{ width: normalize(56) }}>
        <SubHeading text={title} />
        <Paragraph text={text} />
      </View>
      <Picture localSource={img} height={imgHeight} width={imgWidth} />
    </TouchableOpacity>
  );
};
export default ServiceTypeBox;

const styles = StyleSheet.create({
  container: {
    width: normalize(92),
    alignSelf: "center",
    backgroundColor: colors.white,
    padding: normalize(2),
    borderRadius: normalize(2),
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
