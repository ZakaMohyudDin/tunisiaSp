import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../utils/colors";
import SubHeading from "./SubHeading";
import { mltiLanguages } from "../utils/multiLanguage";
import Paragraph from "./Paragraph";
import { CheckBox } from "react-native-elements";
import { normalize } from "../utils/helper";
import Picture from "./Picture";
import Spacer from "./Spacer";
import moment from "moment";

const SubscriptionBox = ({ text, item }) => {
  const [check4, setCheck4] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <CheckBox
          center
          checkedIcon={
            <Picture
              localSource={require("../assets/unCheck.png")}
              height={normalize(8)}
              width={normalize(8)}
              imgColor={colors.gradiant1}
            />
          }
          uncheckedIcon={
            <Picture
              localSource={require("../assets/check.png")}
              height={normalize(8)}
              width={normalize(8)}
              imgColor={colors.gradiant1}
            />
          }
          checked={check4}
          onPress={() => setCheck4(!check4)}
        />
      </View>
      <View style={{ width: normalize(60) }}>
        <SubHeading
          text={item?.Type?.typeName}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
          fontSize={normalize(4.2)}
          textAlign={"left"}
          weight={"600"}
        />
        <Spacer height={normalize(2)} />
        <Paragraph text={item?.Type?.typeDescription} textAlign={"left"} />
      </View>

      <View>
        <SubHeading
          text={(moment(item?.createdAt).diff(new Date(), 'days')) + " " + mltiLanguages("arabic").day}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
          fontSize={normalize(4.2)}
          weight={"600"}
        />
      </View>
    </View>
  );
};
export default SubscriptionBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    backgroundColor: colors.white,
    margin: normalize(1),
    paddingRight: normalize(4),
    paddingVertical: normalize(4),
    borderRadius: normalize(3),
    shadowColor: "#000",
  },
});
