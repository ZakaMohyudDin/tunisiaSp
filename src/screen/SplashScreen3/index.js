import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import Slider from "../../components/Slider";
import Button from "../../components/Button";
import { colors } from "../../utils/colors";
import SubHeading from "../../components/SubHeading";
import ThemeToggle from "../../../ThemeToggle";
import { multiThemeColor } from "../../utils/multiTheme";
import { useDispatch, useSelector } from "react-redux";
import {
  getSlidersAction,
  getWelcomeTextAction,
} from "../../redux/actions/authAction";

const imagList = [
  require("../../assets/Rock.png"),
  require("../../assets/Rock.png"),
  require("../../assets/rockcontent.png"),
];
const SplashScreen3 = ({ navigation }) => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const { welcomeSlider, welcomeText } = useSelector(
    ({ authReducer }) => authReducer
  );

  useEffect(() => {
    dispatch(getSlidersAction());
    dispatch(getWelcomeTextAction());
  }, []);

  const onSetBtnPress = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigation.navigate("LoginScreen");
    }, 1000);
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: multiThemeColor().main_background,
        paddingHorizontal: 20,
      }}
    >
      <Spacer height={normalize(8)} />
      <Slider list={imagList} />
      <Spacer height={normalize(2)} />
      <SubHeading
        text={welcomeText?.applicationShortText}
        color={colors.dark_gray}
        fontSize={normalize(6)}
        textAlign={"center"}
      />
      <Spacer height={normalize(6)} />
      <Paragraph text={welcomeText?.applicationAbout} textAlign={"center"} />
      <Spacer height={normalize(8)} />
      <Button
        onPress={() => onSetBtnPress()}
        width={normalize(20)}
        roundCorner={10}
        img={require("../../assets/backArrow.png")}
        imgHeight={normalize(4)}
        imgWidth={normalize(4)}
        gradiantFirst={multiThemeColor().primary_color}
        gradiantSecond={multiThemeColor().primary_color}
        loader={loader}
        loaderSize={"large"}
      />

      {/* <ThemeToggle /> */}
    </ScrollView>
  );
};

export default SplashScreen3;
