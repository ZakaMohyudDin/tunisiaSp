import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../utils/colors";
import { Picker } from "@react-native-picker/picker";
import { normalize } from "react-native-elements";
import Input from "../Input";
import { mltiLanguages } from "../../utils/multiLanguage";
import SubHeading from "../SubHeading";

const StepTutorial1 = ({ text }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View>
      <SubHeading
        text={mltiLanguages("arabic").phone}
        fontSize={16}
        weight={"600"}
        textAlign={"right"}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
      />

      <Input
        bgColor={colors.white}
        width={"100%"}
        margin={normalize(6)}
        placeholder={mltiLanguages("arabic").phone}
      />

      <Input
        bgColor={colors.white}
        width={"100%"}
        placeholder={mltiLanguages("arabic").phone}
        margin={normalize(6)}
      />
      <Input
        bgColor={colors.white}
        width={"100%"}
        placeholder={mltiLanguages("arabic").phone}
        margin={normalize(6)}
      />
      <Input
        bgColor={colors.white}
        width={"100%"}
        placeholder={mltiLanguages("arabic").phone}
        multiLine={true}
        textAlign={"left"}
        height={normalize(90)}
        numberOfLines={4}
        margin={normalize(6)}
      />
    </View>
  );
};
export default StepTutorial1;

const styles = StyleSheet.create({
  pick: {
    backgroundColor: colors.white,
    borderRadius: normalize(12),
    marginTop: normalize(12),
    marginBottom: normalize(6),
  },
  btnContainer: {
    flexDirection: "row",
  },
});
