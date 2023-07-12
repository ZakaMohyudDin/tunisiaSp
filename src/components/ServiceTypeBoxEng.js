import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";
import { normalize } from "../utils/helper";
import Picture from "./Picture";
import SubHeading from "./SubHeading";
import Paragraph from "./Paragraph";
const ServiceTypeBoxEng = ({
  text,
  title,
  img,
  imgHeight,
  imgWidth,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Picture localSource={img} height={imgHeight} width={imgWidth} resizeMode={"contain"} />
      <View style={{ width: normalize(56) }}>
        <SubHeading text={title} fontSize={normalize(4)} textAlign={"left"} fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}/>
        <Paragraph text={text} fontSize={normalize(3.2)} />
      </View>
    </TouchableOpacity>
  );
};
export default ServiceTypeBoxEng;

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
