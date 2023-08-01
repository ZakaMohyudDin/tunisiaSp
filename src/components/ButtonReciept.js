import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";
import { normalize } from "../utils/helper";
import Paragraph from "./Paragraph";
import Picture from "./Picture";

const ButtonReciept = ({ heading, text, onPress }) => {
  return (
    <View style={styles.container}>
      <Paragraph
        fontSize={normalize(3.8)}
        text={heading}
        textAlign={"left"}
        color={colors.dark_gray}
      />
      <View style={{ flexDirection: "row", alignItems: 'center' }}>
        <Paragraph text={text} fontSize={normalize(3.8)} />
        <TouchableOpacity
          onPress={onPress}
          style={{ marginLeft: normalize(5),  }}
        >
          <Picture
            localSource={require("../assets/next.png")}
            height={normalize(4)}
            width={normalize(4)}
            imgColor={colors.light1_gray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ButtonReciept;

const styles = StyleSheet.create({
  container: {
    width: normalize(93),
    minHeight: normalize(15),
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf:'center',
    paddingHorizontal: normalize(4),
    borderRadius: normalize(2),
  },
});