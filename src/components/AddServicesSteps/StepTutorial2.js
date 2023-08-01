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
import Button from "../Button";
import moment from "moment";

const StepTutorial2 = ({
  text,
  onNextPress,
  onPrePress,
  days,
  selectedDaysToReturn,
  returnSelectedDaysId,
  setFromTimeReturn,
  setToTimeReturn,
  cities,
  setSelectedCity,
  selectedCity,
}) => {
  const [toTime, setToTime] = useState([]);
  const [fromTime, setFromTime] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDays, setSelectedDays] = useState("الایام");

  const [isToTimePickerVisible, setToTimePickerVisibility] = useState(false);
  const [isFromTimePickerVisible, setFromTimePickerVisibility] =
    useState(false);
  const hideFromTimePicker = () => {
    setFromTimePickerVisibility(false);
  };
  const showFromTimePicker = () => {
    setFromTimePickerVisibility(true);
  };
  const handleConfirmFromTime = (selectedDate) => {
    setFromTime(+selectedDate);
    setFromTimeReturn(+selectedDate);
    hideFromTimePicker();
  };

  const hideToTimePicker = () => {
    setToTimePickerVisibility(false);
  };
  const showTimePicker = () => {
    setToTimePickerVisibility(true);
  };
  const handleConfirmToTime = (selectedDate) => {
    setToTime(+selectedDate);
    setToTimeReturn(+selectedDate);
    hideToTimePicker();
  };

  const returnSelectedDays = (res) => {
    setSelectedDays(res);
    selectedDaysToReturn(res);
  };

  const returnIdOfDays = (res) => {
    returnSelectedDaysId(res);
  };
  return (
    <View>
      <Spacer height={normalize(2)} />
      <Paragraph
        text={mltiLanguages("arabic").phone}
        textAlign={"left"}
        color={colors.dark_gray}
      />
      <TouchableOpacity
        style={styles.daysStyles}
        onPress={() => setModalVisible(true)}
      >
        <Paragraph text={selectedDays} color={colors.dark_gray} />
      </TouchableOpacity>
      <View style={styles.uperBox}>
        <Paragraph text={mltiLanguages("arabic").phone} />
        <TouchableOpacity
          onPress={() => showTimePicker()}
          style={styles.dateStyle}
        >
          <Paragraph
            text={toTime ? moment(toTime).format("hh:mm A") : "08:45 Am"}
            weight={"700"}
            color={colors.subHeading}
          />
        </TouchableOpacity>

        <Paragraph text={mltiLanguages("arabic").phone} />
        <TouchableOpacity
          onPress={() => showFromTimePicker()}
          style={styles.dateStyle}
        >
          <Paragraph
            text={fromTime ? moment(fromTime).format("hh:mm A") : "08:45 Am"}
            weight={"700"}
            color={colors.subHeading}
          />
        </TouchableOpacity>
      </View>

      {/* <Input
        bgColor={colors.white}
        width={"100%"}
        placeholder={mltiLanguages("arabic").phone}
        margin={normalize(6)}
      /> */}

      <View style={styles.pick}>
        <Picker
          selectedValue={selectedCity}
          onValueChange={setSelectedCity}
        >
          {cities &&
            <>
              {cities.map((city) => (
                <Picker.Item label={city?.addressCityName} value={city?.id} />
              ))}
            </>
          }
        </Picker>
      </View>

      <DateTimePickerModal
        isVisible={isFromTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmFromTime}
        onCancel={hideFromTimePicker}
      />
      <DateTimePickerModal
        isVisible={isToTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmToTime}
        onCancel={hideToTimePicker}
      />
      {/* setMyState([...myState, newValue]); */}
      <ModalDays
        visible={modalVisible}
        days={days}
        storDays={(res) => returnSelectedDays(res)}
        storeDaysIds={(res) => returnIdOfDays(res)}
        onClose={() => setModalVisible(false)}
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
export default StepTutorial2;

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
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  btnContainers: {
    flexDirection: "row",
    marginTop: normalize(30),
    marginBottom: normalize(4),
    justifyContent: "space-between",
  },
});
