import React, { useEffect, useState } from "react";
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
import StepTutorial1 from "../../components/AddServicesSteps/StepTutorial1";
import StepTutorial2 from "../../components/AddServicesSteps/StepTutorial2";
import StepTutorial3 from "../../components/AddServicesSteps/StepTutorial3";

const AddServicesTutorial = ({ navigation }) => {
  const [screenNo, setScreenNo] = useState(0);

  const labels = ["", "", ""];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: colors.gradiant1,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: colors.gradiant1,
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: colors.gradiant1,
    separatorUnFinishedColor: "#aaaaaa",
    stepIndicatorFinishedColor: colors.gradiant1,
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: "#ffffff",
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: colors.gradiant1,
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",
    labelColor: "#999999",
    labelSize: 13,
    currentStepLabelColor: colors.gradiant1,
  };

  const nextScreen = () => {
    if (screenNo >= 2) return;
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
        stepCount={3}
      />

      {screenNo == 0 && <StepTutorial1 text={"nnnnnnn"} />}
      {screenNo == 1 && <StepTutorial2 text={"nnnnnnn"} />}
      {screenNo == 2 && <StepTutorial3 text={"nnnnnnn"} />}

      <View style={styles.btnContainer}>
        <Button
          onPress={() => nextScreen()}
          height={normalize(11)}
          width={normalize(24)}
          text={mltiLanguages("arabic").profile}
          gradiantFirst={colors.primary_color}
          gradiantSecond={colors.primary_color}
          //   loader={loader}
        />

        <Button
          onPress={() => preScreen()}
          height={normalize(11)}
          width={normalize(24)}
          text={mltiLanguages("arabic").profile}
          textColor={colors.dark_gray}
          gradiantFirst={"#EAE4FB"}
          gradiantSecond={"#EAE4FB"}
          //   loader={loader}
        />
      </View>
    </ScrollView>
  );
};

export default AddServicesTutorial;
