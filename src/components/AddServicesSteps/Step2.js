import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { colors } from "../../utils/colors";
import { Picker } from "@react-native-picker/picker";
import { normalize } from "react-native-elements";
import Input from "../Input";
import { mltiLanguages } from "../../utils/multiLanguage";
import Paragraph from "../Paragraph";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Spacer from "../Spacer";
import ModalDays from "../ModalDays";

const Step2 = ({ text }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [Time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDays, setSelectedDays] = useState("الایام");


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const handleConfirmDate = (selectedDate) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const handleConfirmTime = (selectedDate) => {
    setTime(selectedDate);
    hideTimePicker();
  };
  return (
    <View>
      {/* <View style={styles.uperBox}>
        <View style={[styles.pick, {width: normalize(100)}]}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item
              label={mltiLanguages('arabic').phone}
              value={mltiLanguages('arabic').phone}
            />
            <Picker.Item
              label={mltiLanguages('arabic').register}
              value={mltiLanguages('arabic').register}
            />
          </Picker>
        </View>
        <Paragraph text={mltiLanguages('arabic').phone} />
        <View style={[styles.pick, {width: normalize(100)}]}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item
              label={mltiLanguages('arabic').phone}
              value={mltiLanguages('arabic').phone}
            />
            <Picker.Item
              label={mltiLanguages('arabic').register}
              value={mltiLanguages('arabic').register}
            />
          </Picker>
        </View>
        <Paragraph text={mltiLanguages('arabic').phone} />
      </View> */}
      <Spacer height={normalize(2)} />
      <Paragraph
        text={mltiLanguages("arabic").phone}
        textAlign={"left"}
        color={colors.dark_gray}
      />
      <TouchableOpacity style={styles.daysStyles} onPress={()=> setModalVisible(true)}>
        <Paragraph text={selectedDays} color={colors.dark_gray}/>
      </TouchableOpacity>
      <View style={styles.uperBox}>
        <Paragraph text={mltiLanguages("arabic").phone} />
        <TouchableOpacity
          onPress={() => showTimePicker()}
          style={styles.dateStyle}
        >
          <Paragraph
            text={"08:45 Am"}
            weight={"700"}
            color={colors.subHeading}
          />
        </TouchableOpacity>

        <Paragraph text={mltiLanguages("arabic").phone} />
        <TouchableOpacity
          onPress={() => showTimePicker()}
          style={styles.dateStyle}
        >
          <Paragraph
            text={"08:45 Am"}
            weight={"700"}
            color={colors.subHeading}
          />
        </TouchableOpacity>
      </View>

      <Input
        bgColor={colors.white}
        width={"100%"}
        placeholder={mltiLanguages("arabic").phone}
        margin={normalize(6)}
      />

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

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideDatePicker}
      />
      {/* setMyState([...myState, newValue]); */}
      <ModalDays 
       visible={modalVisible}
       storDays={(res)=>setSelectedDays(res)}
       onClose={() => setModalVisible(false)}
      />
    </View>
  );
};
export default Step2;

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
  uperBox: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 8,
  },
  dateStyle: {
    backgroundColor: colors.light2_gray,
    borderRadius: normalize(2),
    height: normalize(40),
    width: normalize(90),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(8),
  },
  daysStyles: {
    height: 48,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 16

  }
});
