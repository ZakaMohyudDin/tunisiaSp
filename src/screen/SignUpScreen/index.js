import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import Heading from "../../components/Heading";
// import {multiLanguageVerify} from '../../utils/multiLanguage';
import Spacer from "../../components/Spacer";
import { normalize, validateEmail } from "../../utils/helper";
import Paragraph from "../../components/Paragraph";
import Input from "../../components/Input";
import { colors } from "../../utils/colors";
import Button from "../../components/Button";
import { styles } from "../SplashScreen/styles";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { MessageError } from "../../utils/showAlerts";
import { multiLanguageVerify } from "../../utils/multiLanguageVerify";
import ButtonThreeGradiant from "../../components/ButtonThreeGradiant";
import { useDispatch } from "react-redux";
import {
  getRolesAction,
  getOtp,
  signUpUserAction,
} from "../../redux/actions/authAction";

const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [cellNo, setCellNo] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [loader, setLoader] = useState(false);
  const [inLoader, setInLoader] = useState(false);
  const [instaLoader, setInstaLoader] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "617983437479-822l2d68dssfpknnnabf4su2b8su3mcb.apps.googleusercontent.com",
      offlineAccess: true,
    });
  }, []);
  const GoogleSingUp = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      await GoogleSignin.signIn().then((result) => {
        navigation.navigate("OtpScreen");
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert("User cancelled the login flow !");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert("Signin in progress");
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert("Google play services not available or outdated !");
        // play services not available or outdated
      } else {
        console.log(error);
      }
    }
  };

  const authentication = () => {
    setLoader(true);
    if (!name) {
      MessageError("Please, Enter Your Name");
      setLoader(false);
      return;
    }
    if (!email) {
      MessageError("Please, Enter Your Email");
      setLoader(false);
      return;
    }
    if (!validateEmail(email)) {
      MessageError("Please, Enter a Valid Email");
      setLoader(false);
      return;
    }
    if (!password) {
      MessageError("Please, Enter Your Password");
      setLoader(false);
      return;
    }
    if (!cellNo) {
      MessageError("Please, Enter Your Phone No");
      setLoader(false);
      return;
    }
    dispatch(
      getRolesAction((roleId) => {
        var data = {
          userName: name,
          userEmail: email.toLowerCase(),
          userMobile: cellNo,
          userDescription: "Please, Add Your Description",
          userPassword: password,
          userPicture: "No",
          userRoleId: roleId[0],
        };
        dispatch(
          signUpUserAction(
            data,
            () => {
              navigation.replace("ServiceType");
            },
            () => {
              setLoader(false);
            }
          )
        );
      })
    );
  };

  const signUpFn = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigation.navigate("OtpScreen", { name: "auth" });
    }, 500);
  };

  const loginIn = () => {
    setInLoader(true);
    setTimeout(() => {
      setInLoader(false);
      navigation.navigate("OtpScreen", { name: "auth" });
    }, 500);
  };

  const loginInsta = () => {
    setInstaLoader(true);
    setTimeout(() => {
      setInstaLoader(false);
      navigation.navigate("OtpScreen", { name: "auth" });
    }, 500);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.main_background }}>
      <Spacer height={normalize(12)} />
      <Heading
        text={multiLanguageVerify("arabic").login_title}
        textAlign={"center"}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
      />
      <Spacer height={normalize(2)} />
      <Paragraph
        text={multiLanguageVerify("arabic").register_subtitle}
        textAlign={"center"}
      />
      <Spacer height={normalize(8)} />
      <Input
        text={name}
        placeholder={multiLanguageVerify("arabic").name}
        onChangeText={(text) => setName(text)}
        margin={8}
      />
      <Input
        text={email}
        placeholder={multiLanguageVerify("arabic").email}
        onChangeText={(text) => setEmail(text)}
        margin={8}
      />

      <Input
        text={cellNo}
        placeholder={multiLanguageVerify("arabic").phone}
        onChangeText={(text) => setCellNo(text)}
        margin={8}
      />

      <Input
        text={password}
        placeholder={multiLanguageVerify("arabic").password}
        onChangeText={(text) => setPassword(text)}
        isPassWord={true}
        margin={8}
      />

      <Spacer height={normalize(4.5)} />
      <Button
        onPress={() => authentication()}
        // onPress={() => signUpFn()}
        // onPress={() => navigation.navigate("OtpScreen")}
        width={loader ? 48 : normalize(80)}
        roundCorner={loader ? normalize(11) : 10}
        text={multiLanguageVerify("arabic").register}
        gradiantFirst={colors.primary_color}
        gradiantSecond={colors.primary_color}
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
      <Spacer height={normalize(2)} />
      <Button
        onPress={() => loginInsta()}
        width={instaLoader ? 48 : normalize(80)}
        roundCorner={instaLoader ? normalize(11) : 10}
        text={multiLanguageVerify("arabic").instagram}
        gradiantFirst={colors.blue}
        gradiantSecond={colors.red}
        // gradiantThird={colors.red}
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
          onPress={() => navigation.navigate("LoginScreen")}
          text={multiLanguageVerify("arabic").login}
          textAlign={"center"}
          color={colors.primary_color}
        />
        <View style={{ width: 10 }} />
        <Paragraph
          text={multiLanguageVerify("arabic").login_text}
          textAlign={"center"}
          color={colors.dark_gray}
        />
      </View>
      <Spacer height={normalize(4)} />
    </ScrollView>
  );
};

export default SignUpScreen;
