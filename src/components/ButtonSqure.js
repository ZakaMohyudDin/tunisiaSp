import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../utils/colors";
import Picture from "./Picture";
import { normalize } from "../utils/helper";
import Paragraph from "./Paragraph";
import Spacer from "./Spacer";

const ButtonSqure = ({ text, img, onPress, imgHeight, imgWidth }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Picture
          localSource={img}
          height={imgHeight || normalize(6)}
          width={imgWidth || normalize(6)}
          imgColor={colors.dark_gray}
        />
      </TouchableOpacity>
      <Spacer height={normalize(1)} />
      <Paragraph text={text} />
    </View>
  );
};
export default ButtonSqure;

const styles = StyleSheet.create({
  container: {
    height: normalize(20),
    width: normalize(20),
    backgroundColor: colors.white,
    borderRadius: normalize(3),
    justifyContent: "center",
    alignItems: "center",
  },
});
