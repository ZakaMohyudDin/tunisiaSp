import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import Heading from "../../components/Heading";
// import { multiLanguageVerify } from "../../utils/multiLanguage";
import Spacer from "../../components/Spacer";
import { normalize, validateEmail } from "../../utils/helper";
import Paragraph from "../../components/Paragraph";
import Input from "../../components/Input";
import { colors } from "../../utils/colors";
import Button from "../../components/Button";
import ButtonThreeGradiant from "../../components/ButtonThreeGradiant";
import { styles } from "../SplashScreen/styles";
import { MessageError } from "../../utils/showAlerts";
import { signInUserAction, getOtp } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import { multiLanguageVerify } from "../../utils/multiLanguageVerify";
import { GeneralStyles } from "../../utils/GeneralStyle";
import { multiThemeColor } from "../../utils/multiTheme";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [inLoader, setInLoader] = useState(false);
  const [instaLoader, setInstaLoader] = useState(false);

  const signInUser = () => {
    setLoader(true);
    if (!number) {
      MessageError("Please, Enter Your Phone number");
      setLoader(false);
      return;
    }
    if (!password) {
      MessageError("Please, Enter Your Password");
      setLoader(false);
      return;
    }
    var data = {
      userMobile: number,
      userPassword: password,
    };
    dispatch(
      signInUserAction(
        data,
        () => {
          navigation.replace("ServiceType");
        },
        () => {
          setLoader(false);
        }
      )
    );
  };

  const loginFn = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigation.navigate("TopTab");
    }, 500);
  };

  const sendOtp = () => {

    if (!number) {
      MessageError("Please, Enter Your Phone number");
      setLoader(false);
      return;
    }

    var otpParam = {
      userMobile: number,
    };
    dispatch(
      getOtp(otpParam, (res) => {
        navigation.navigate("OtpScreen", { otp: res, number: number });
      })
    );
  };
  const loginIn = () => {
    setInLoader(true);
    setTimeout(() => {
      setInLoader(false);
      navigation.navigate("TopTab");
    }, 500);
  };

  const loginInsta = () => {
    setInstaLoader(true);
    setTimeout(() => {
      setInstaLoader(false);
      navigation.navigate("TopTab");
    }, 500);
  };
  return (
    <ScrollView
      style={[
        GeneralStyles.container,
        { backgroundColor: multiThemeColor().main_background },
      ]}
    >
      <Spacer height={normalize(12)} />
      <Heading
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        text={multiLanguageVerify("arabic").login_title}
        textAlign={"center"}
      />
      <Spacer height={normalize(2)} />
      <Paragraph
        text={multiLanguageVerify("arabic").login_subtitle}
        textAlign={"center"}
      />
      <Spacer height={normalize(8)} />
      <Input
        text={number}
        placeholder={multiLanguageVerify("arabic").phone}
        onChangeText={(text) => setNumber(text)}
        margin={8}
      />
      <Input
        text={password}
        placeholder={multiLanguageVerify("arabic").password}
        onChangeText={(text) => setPassword(text)}
        isPassWord={true}
        margin={8}
      />
      <Spacer height={normalize(2)} />
      <TouchableOpacity onPress={() => sendOtp()}>
        <Paragraph
          text={multiLanguageVerify("arabic").forgot_psw}
          textAlign={"center"}
          color={multiThemeColor().dark_gray}
          weight={"600"}
        />
      </TouchableOpacity>
      <Spacer height={normalize(4)} />
      <Button
        onPress={() => signInUser()}
        // onPress={() => loginFn()}
        // onPress={() => navigation.navigate("TopTab")}
        width={loader ? 48 : normalize(80)}
        roundCorner={loader ? normalize(11) : 10}
        text={multiLanguageVerify("arabic").login}
        gradiantFirst={multiThemeColor().primary_color}
        gradiantSecond={multiThemeColor().primary_color}
        loader={loader}
        loaderSize={"large"}
      />
      <Spacer height={normalize(5)} />
      <View style={styles.boxHr}>
        <View style={styles.hr}></View>
        <Paragraph
          text={multiLanguageVerify("arabic").or}
          textAlign={"center"}
        />
        <View style={styles.hr}></View>
      </View>
      <Spacer height={normalize(5)} />
      <ButtonThreeGradiant
        onPress={() => loginIn()}
        width={inLoader ? 48 : normalize(80)}
        roundCorner={inLoader ? normalize(11) : 10}
        text={multiLanguageVerify("arabic").linkedin}
        gradiantFirst={"#3B76AF"}
        gradiantSecond={"#3B76AF"}
        gradiantThird={"#30608F"}
        img={require("../../assets/linkedin.png")}
        imgHeight={normalize(6)}
        imgWidth={normalize(6)}
        loader={inLoader}
        loaderSize={"large"}
      />
      <Spacer height={normalize(2.5)} />

      <Button
        onPress={() => loginInsta()}
        width={instaLoader ? 48 : normalize(80)}
        roundCorner={instaLoader ? normalize(11) : 10}
        text={multiLanguageVerify("arabic").instagram}
        gradiantFirst={multiThemeColor().blue}
        gradiantSecond={multiThemeColor().red}
        img={require("../../assets/instagram.png")}
        imgHeight={normalize(4)}
        imgWidth={normalize(5.4)}
        resizeMode={"stretch"}
        loader={instaLoader}
        loaderSize={"large"}
      />
      <Spacer height={normalize(10)} />
      <View style={styles.txtBox}>
        <Paragraph
          onPress={() => navigation.navigate("SignUpScreen")}
          text={multiLanguageVerify("arabic").register}
          textAlign={"center"}
          color={multiThemeColor().primary_color}
        />
        <View style={{ width: 10 }} />

        <Paragraph
          text={multiLanguageVerify("arabic").register_text}
          textAlign={"center"}
          color={multiThemeColor().dark_gray}
        />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
