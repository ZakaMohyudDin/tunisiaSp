import React, { useEffect, useState, useRef } from "react";
import { ScrollView, View } from "react-native";
import { colors } from "../../utils/colors";
import { normalize } from "../../utils/helper";
import Heading from "../../components/Heading";
// import { multiLanguageVerify } from "../../utils/multiLanguage";
import Spacer from "../../components/Spacer";
import Paragraph from "../../components/Paragraph";
import { styles } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { MessageError } from "../../utils/showAlerts";
import { signUpUserAction } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import { multiLanguageVerify } from "../../utils/multiLanguageVerify";

var firstNo;
var secondNo;
var thirdNo;
var fourthNo;
var fifthNo;

const OtpScreen = ({ navigation, route }) => {
  const [firt, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const [fifth, setFifth] = useState("");
  const [loader, setLoader] = useState("");

  const firtRef = useRef("");
  const secondRef = useRef("");
  const thirdRef = useRef("");
  const fourthRef = useRef("");
  const fifthRef = useRef("");

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("\n\n\n====> route?.params  ", route?.params);
  }, []);

  // const signUpUser = () => {
  //   setLoader(true);
  //   if (firt + second + third + fourth + fifth !== "12345") {
  //     MessageError("Please, a Valid OTP");
  //     setLoader(false);
  //     return;
  //   }
  //   var data = {
  //     userName: route?.params?.name,
  //     userEmail: route?.params?.email,
  //     userMobile: route?.params?.cellNo,
  //     userDescription: "Please, Add Your Description",
  //     userPassword: route?.params?.password,
  //     userPicture: "No",
  //     userRoleId: route?.params?.roleId,
  //   };
  //   dispatch(
  //     signUpUserAction(
  //       data,
  //       () => {
  //         navigation.navigate("ServiceType");
  //       },
  //       () => {
  //         setLoader(false);
  //       }
  //     )
  //   );
  // };

  const checkOtp = () => {
    setLoader(true);
    if (route?.params?.otp == firt + second + third + fourth + fifth) {
      navigation.navigate("PasswordRecover", {number: route?.params?.number});
    } else {
      MessageError("Please, Enter a Valid OTP");
      setLoader(false);
    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(7),
        backgroundColor: colors.main_background,
      }}
    >
      <Spacer height={normalize(16)} />
      <Heading
        text={multiLanguageVerify("arabic").verif}
        textAlign={"center"}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
      />
      <Spacer height={normalize(2)} />
      <Paragraph
        text={multiLanguageVerify("arabic").verif_desc}
        textAlign={"center"}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: normalize(6),
        }}
      >
        <Input
          width={normalize(11)}
          textAlign={"center"}
          margin={3}
          maxLength={1}
          onChangeText={(text) => {
            setFirst(text),
              text && this.secondTextInput.focus(),
              (firstNo = text);
          }}
          refferToNext={(input) => {
            this.firstTextInput = input;
          }}
          onKeyPress={(event) => {
            event.nativeEvent.key === "Backspace" &&
              (firstNo
                ? this.firstTextInput.focus()
                : this.firstTextInput.focus());
          }}
        />
        <Input
          width={normalize(11)}
          textAlign={"center"}
          margin={3}
          maxLength={1}
          onChangeText={(text) => {
            setSecond(text),
              (secondNo = text),
              text && this.thirdTextInput.focus();
          }}
          refferToNext={(input) => {
            this.secondTextInput = input;
          }}
          onKeyPress={(event) => {
            event.nativeEvent.key === "Backspace" &&
              (secondNo
                ? this.secondTextInput.focus()
                : this.firstTextInput.focus());
          }}
        />
        <Input
          width={normalize(11)}
          textAlign={"center"}
          margin={3}
          maxLength={1}
          onChangeText={(text) => {
            setThird(text),
              (thirdNo = text),
              text && this.fourthTextInput.focus();
          }}
          refferToNext={(input) => {
            this.thirdTextInput = input;
          }}
          onKeyPress={(event) => {
            event.nativeEvent.key === "Backspace" &&
              (thirdNo
                ? this.thirdTextInput.focus()
                : this.secondTextInput.focus());
          }}
        />
        <Input
          width={normalize(11)}
          textAlign={"center"}
          margin={3}
          maxLength={1}
          onChangeText={(text) => {
            setFourth(text),
              (fourthNo = text),
              text && this.fifthTextInput.focus();
          }}
          refferToNext={(input) => {
            this.fourthTextInput = input;
          }}
          onKeyPress={(event) => {
            event.nativeEvent.key === "Backspace" &&
              (fourthNo
                ? this.fourthTextInput.focus()
                : this.thirdTextInput.focus());
          }}
        />
        <Input
          width={normalize(11)}
          textAlign={"center"}
          margin={3}
          maxLength={1}
          onChangeText={(text) => {
            setFifth("");
            setFifth(text);
            fifthNo = text;
          }}
          refferToNext={(input) => {
            this.fifthTextInput = input;
          }}
          onKeyPress={(event) => {
            event.nativeEvent.key === "Backspace" &&
              (fifthNo
                ? this.fifthTextInput.focus()
                : this.fourthTextInput.focus());
          }}
        />
      </View>
      <Spacer height={normalize(12)} />
      {/* change Paasword */}
      {route?.params?.name !== "auth" && (
        <View style={styles.txtBox}>
          <Paragraph
            text={multiLanguageVerify("arabic").verif_text + "؟"}
            textAlign={"center"}
            // color={colors.}
          />
          <View style={{ width: 10 }} />
          <Paragraph
            onPress={() => navigation.navigate("SignUpScreen")}
            text={multiLanguageVerify("arabic").verif_btn}
            textAlign={"center"}
            color={colors.primary_color}
          />
        </View>
      )}
      <Spacer height={normalize(4)} />
      <Button
        // onPress={() => signUpUser()}
        onPress={() => checkOtp()}
        height={normalize(11)}
        width={normalize(50)}
        text={multiLanguageVerify("arabic").verify}
        gradiantFirst={colors.primary_color}
        gradiantSecond={colors.primary_color}
        loader={loader}
      />

      <Spacer height={normalize(12)} />

      {/* auth time */}
      {route?.params?.name == "auth" && (
        <View style={styles.txtBox}>
          <Paragraph
            onPress={() => navigation.navigate("SignUpScreen")}
            text={multiLanguageVerify("arabic").verif_btn}
            textAlign={"center"}
            color={colors.primary_color}
          />
          <View style={{ width: 10 }} />
          <Paragraph
            text={multiLanguageVerify("arabic").verif_text}
            textAlign={"center"}
            color={colors.dark_gray}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default OtpScreen;
