import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import { normalize } from "react-native-elements";
import Input from "../Input";
import { mltiLanguages } from "../../utils/multiLanguage";
import SubHeading from "../SubHeading";
import Spacer from "../Spacer";
import Picture from "../Picture";

const StepTutorial3 = ({ text }) => {
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

      <View style={{flexDirection:'row', width: '100%'}}>
        <Input
          bgColor={colors.white}
          width={"48%"}
          placeholder={mltiLanguages("arabic").phone}
          margin={normalize(6)}
        />
        <Input
          bgColor={colors.white}
          width={"48%"}
          placeholder={mltiLanguages("arabic").phone}
          margin={normalize(6)}
        />
      </View>
      <Input
        bgColor={colors.white}
        width={"100%"}
        placeholder={mltiLanguages("arabic").phone}
        multiLine={true}
        textAlign={"left"}
        height={normalize(70)}
        numberOfLines={4}
        margin={normalize(6)}
      />
      <Spacer height={4} />
      <SubHeading
        text={mltiLanguages("arabic").phone}
        fontSize={16}
        weight={"600"}
        textAlign={"right"}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
      />
      <Spacer height={4} />

      <TouchableOpacity style={styles.videoBtn}>
        <Picture localSource={require("../../assets/Oval.png")} height={36} width={36}/>
      </TouchableOpacity>
    </View>
  );
};
export default StepTutorial3;

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
  videoBtn: {
    height: 100,
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
