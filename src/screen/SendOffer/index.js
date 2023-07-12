import React, { useEffect, useState } from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import Button from "../../components/Button";
import Headers from "../../components/Headers";
import { colors } from "../../utils/colors";
import SPItem from "../../components/SPItem";
import Input from "../../components/Input";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const SendOffer = ({ navigation }) => {
  const [loader, setLoader] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [Time, setTime] = useState("");
  const [date, setDate] = useState("");

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
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(3),
        backgroundColor: colors.main_background,
      }}
    >
      <Headers goBack={() => navigation.goBack()} />
      <SPItem
        item={{
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: mltiLanguages("arabic").login,
          isLongPress: false,
          width: 85,
          padding: 2,
        }}
        color={colors.white}
        offer={true}
      />
      <Spacer height={normalize(4)} />
      <View style={styles.detailStyle}>
        <View style={styles.valueStyle}>
          <Paragraph
            text={
              mltiLanguages("arabic").register +
              " " +
              mltiLanguages("arabic").category
            }
          />
          <Spacer height={normalize(3)} />
          <Paragraph
            text={
              mltiLanguages("arabic").register +
              " 08:00 " +
              mltiLanguages("arabic").chat +
              " 16:00 "
            }
          />
          <Spacer height={normalize(3)} />
          <Paragraph text={mltiLanguages("arabic").header} />
          <Spacer height={normalize(3)} />
          <Paragraph text={mltiLanguages("arabic").register} />
          <Spacer height={normalize(3)} />
          <Paragraph text={mltiLanguages("arabic").register} />
        </View>
        <View style={styles.titleStyle}>
          <Paragraph
            text={mltiLanguages("arabic").register}
            weight={"600"}
            color={colors.subHeading}
          />
          <Spacer height={normalize(3)} />
          <Paragraph
            text={
              mltiLanguages("arabic").register + mltiLanguages("arabic").login
            }
            weight={"600"}
            color={colors.subHeading}
          />
          <Spacer height={normalize(3)} />
          <Paragraph
            text={mltiLanguages("arabic").favorit}
            weight={"600"}
            color={colors.subHeading}
          />
          <Spacer height={normalize(3)} />
          <Paragraph
            text={mltiLanguages("arabic").category}
            weight={"600"}
            color={colors.subHeading}
          />
          <Spacer height={normalize(3)} />
          <Paragraph
            text={mltiLanguages("arabic").cart}
            weight={"600"}
            color={colors.subHeading}
          />
        </View>
      </View>
      <Spacer height={normalize(3)} />
      <View style={styles.dateContainer}>
        <TouchableOpacity
          onPress={() => showTimePicker()}
          style={styles.dateStyle}
        >
          <Paragraph
            text={"08:45 Am"}
            weight={"600"}
            color={colors.subHeading}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => showDatePicker()}
          style={styles.dateStyle}
        >
          <Paragraph
            text={"03/07/2022"}
            weight={"600"}
            color={colors.subHeading}
          />
        </TouchableOpacity>
        <Paragraph
          text={mltiLanguages("arabic").cart}
          weight={"600"}
          color={colors.subHeading}
        />
      </View>
      <View style={styles.dateContainer}>
        <Paragraph text={"50 د ن"} weight={"600"} color={colors.checkedColor} />
        <Input width={normalize(44)} height={40} placeholder={""} />
        <Paragraph
          text={mltiLanguages("arabic").cart}
          weight={"600"}
          color={colors.subHeading}
        />
      </View>
      <View style={styles.dateContainer}>
        <Input width={normalize(66)} height={40} margin={0} placeholder={""} />
        <Paragraph
          text={mltiLanguages("arabic").cart}
          weight={"600"}
          color={colors.subHeading}
        />
      </View>
      <View
        style={[
          styles.dateContainer,
          { flexDirection: "column", alignItems: "flex-end" },
        ]}
      >
        <Paragraph
          text={mltiLanguages("arabic").cart}
          weight={"600"}
          color={colors.subHeading}
          textAlign={"right"}
        />
        <Input width={normalize(94)} margin={0} height={40} placeholder={""} />
      </View>

      <View
        style={[
          styles.dateContainer,
          { flexDirection: "column", alignItems: "flex-end" },
        ]}
      >
        <Paragraph
          text={mltiLanguages("arabic").cart}
          weight={"600"}
          color={colors.subHeading}
          textAlign={"right"}
        />
        <Input
          width={normalize(94)}
          height={120}
          margin={0}
          placeholder={""}
          multiLine={true}
          numberOfLines={5}
        />
      </View>
      <Paragraph
        text={"* " + mltiLanguages("arabic").slide_desc}
        weight={"600"}
        color={colors.btnLoginGmail}
        textAlign={"right"}
      />
      <Spacer height={normalize(6)} />
      <Button
        onPress={() => navigation.navigate("Tutorial")}
        height={normalize(11)}
        width={normalize(80)}
        text={mltiLanguages("arabic").register}
        gradiantFirst={colors.gradiant1}
        gradiantSecond={colors.gradiant2}
        loader={loader}
      />
      <Spacer height={normalize(3)} />
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
    </ScrollView>
  );
};

export default SendOffer;
