import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../utils/colors";
import { Picker } from "@react-native-picker/picker";
import { normalize } from "react-native-elements";
import Input from "../Input";
import { mltiLanguages } from "../../utils/multiLanguage";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";

const Step1 = ({
  text,
  serviceTypes,
  onNextPress,
  onPrePress,
  shortDesc,
  setShortDesc,
  longDesc,
  setLongDesc,
  experiance,
  setExperiance,
  selectedService,
  setSelectedService,
}) => {
  const { serviceTypesList } = useSelector(
    ({ serviceReducer }) => serviceReducer
  );
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.pick}>
        <Picker
          selectedValue={selectedService}
          onValueChange={setSelectedService}
        >
          {serviceTypesList?.map((service) => (
            <Picker.Item label={service.serviceTypeName} value={service.id} />
          ))}
        </Picker>
      </View>
      <Input
        bgColor={colors.white}
        text={experiance}
        onChangeText={setExperiance}
        width={"100%"}
        placeholder={mltiLanguages("arabic").phone}
        margin={normalize(6)}
      />
      <Input
        bgColor={colors.white}
        text={shortDesc}
        onChangeText={setShortDesc}
        width={"100%"}
        margin={normalize(6)}
        placeholder={mltiLanguages("arabic").phone}
      />

      {/* <Input
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
      /> */}
      <Input
        bgColor={colors.white}
        text={longDesc}
        onChangeText={setLongDesc}
        width={"100%"}
        placeholder={mltiLanguages("arabic").phone}
        multiLine={true}
        textAlign={"left"}
        height={normalize(90)}
        numberOfLines={4}
        margin={normalize(6)}
      />

      <View style={styles.btnContainers}>
        <Button
          onPress={onNextPress}
          height={50}
          width={100}
          text={mltiLanguages("arabic").profile}
          gradiantFirst={colors.primary_color}
          gradiantSecond={colors.primary_color}
          //   loader={loader}
        />

        <Button
          onPress={onPrePress}
          height={50}
          width={100}
          text={mltiLanguages("arabic").profile}
          textColor={colors.dark_gray}
          gradiantFirst={"#EAE4FB"}
          gradiantSecond={"#EAE4FB"}
          //   loader={loader}
        />
      </View>
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
  btnContainers: {
    flexDirection: "row",
    marginTop: normalize(10),
    marginBottom: normalize(4),
    justifyContent: "space-between",
  },
});
