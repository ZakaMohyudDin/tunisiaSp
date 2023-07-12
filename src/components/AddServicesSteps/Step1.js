import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../utils/colors";
import { Picker } from "@react-native-picker/picker";
import { normalize } from "react-native-elements";
import Input from "../Input";
import { mltiLanguages } from "../../utils/multiLanguage";

const Step1 = ({ text }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View>
      <View style={styles.pick}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item
            label={mltiLanguages("arabic").phone}
            value={mltiLanguages("arabic").phone}
          />
          <Picker.Item
            label={mltiLanguages("arabic").register}
            value={mltiLanguages("arabic").register}
          />
        </Picker>
      </View>
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
export default Step1;

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
