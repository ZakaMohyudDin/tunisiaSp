import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import Button from "../../components/Button";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import StepIndicator from "react-native-step-indicator";
import Heading from "../../components/Heading";
import Step1 from "../../components/AddServicesSteps/Step1";
import Step2 from "../../components/AddServicesSteps/Step2";
import Step3 from "../../components/AddServicesSteps/Step3";
import Step4 from "../../components/AddServicesSteps/Step4";
import StepInitial from "../../components/AddServicesSteps/StepInitial";

const AddServicesFive = ({ navigation }) => {
  const [screenNo, setScreenNo] = useState(0);

  const labels = ["", "", "", "", ""];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: colors.primary_color,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: colors.primary_color,
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: colors.primary_color,
    separatorUnFinishedColor: "#aaaaaa",
    stepIndicatorFinishedColor: colors.primary_color,
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: "#ffffff",
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: colors.primary_color,
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",
    labelColor: "#999999",
    labelSize: 13,
    currentStepLabelColor: colors.primary_color,
  };

  const nextScreen = () => {
    if (screenNo >= 4) {
      navigation.navigate("Subscription")
      return};
    setScreenNo(screenNo + 1);
  };
  const preScreen = () => {
    if (screenNo <= 0) return;
    setScreenNo(screenNo - 1);
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
      <Heading
        text={mltiLanguages("arabic").phone}
        textAlign={"center"}
        weight={600}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
      />
      <Spacer height={normalize(2)} />
      <Paragraph
        text={
          mltiLanguages("arabic").verif_desc + mltiLanguages("arabic").phone
        }
        textAlign={"center"}
      />
      <Spacer height={normalize(3)} />
      <StepIndicator
        customStyles={customStyles}
        currentPosition={screenNo}
        labels={labels}
        stepCount={5}
      />

      {screenNo == 0 && <StepInitial text={"nnnnnnn"} />}
      {screenNo == 1 && <Step1 text={"nnnnnnn"} />}
      {screenNo == 2 && <Step2 text={"nnnnnnn"} />}
      {screenNo == 3 && <Step3 text={"nnnnnnn"} />}
      {screenNo == 4 && <Step4 text={"nnnnnnn"} />}

      <View style={styles.btnContainer}>
        <Button
          onPress={() => nextScreen()}
          // height={normalize(11)}
          width={normalize(28)}
          text={mltiLanguages("arabic").profile}
          gradiantFirst={colors.primary_color}
          gradiantSecond={colors.primary_color}
          //   loader={loader}
        />

        {screenNo !== 0 && (
          <Button
            onPress={() => preScreen()}
            width={normalize(28)}
            textColor={colors.dark_gray}
            text={mltiLanguages("arabic").profile}
            gradiantFirst={"#EAE4FB"}
            gradiantSecond={"#EAE4FB"}
            //   loader={loader}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default AddServicesFive;
