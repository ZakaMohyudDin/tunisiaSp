import React, { useState } from "react";
import { ScrollView } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import Button from "../../components/Button";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import { MessageError } from "../../utils/showAlerts";
import { resetPasswordAction } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";

const PasswordRecover = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confiremPassword, setConfiremPassword] = useState("");
  const [loader, setLoader] = useState("");

  const resetPassword = () => {
    setLoader(true);
    if (!password) {
      MessageError("Please, Enter Your Your Password");
      setLoader(false);
      return;
    }
    if (!confiremPassword) {
      MessageError("Please, Enter Your Your Confirm Password");
      setLoader(false);
      return;
    }
    if (confiremPassword !== password) {
      MessageError("Please, Enter Same Password And Confirm Password");
      setLoader(false);
      return;
    }
    var data = {
      userPassword: password,
    };
    dispatch(
      resetPasswordAction(
        route?.params?.number,
        data,
        () => {
          navigation.navigate("LoginScreen");
        },
        () => {
          setLoader(false);
        }
      )
    );
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
      <Spacer height={normalize(4)} />
      <Heading
        text={mltiLanguages("arabic").sub_header}
        textAlign={"center"}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
      />
      <Spacer height={normalize(2)} />
      <Paragraph
        text={mltiLanguages("arabic").slide_desc}
        textAlign={"center"}
      />
      <Spacer height={normalize(6)} />
      <Input
        placeholder={mltiLanguages("arabic").password}
        bgColor={colors.white}
        text={password}
        onChangeText={(text) => setPassword(text)}
        width={normalize(90)}
        textAlign={"left"}
        isPassWord={true}
      />
      <Input
        placeholder={mltiLanguages("arabic").sub_header}
        bgColor={colors.white}
        text={confiremPassword}
        onChangeText={(text) => setConfiremPassword(text)}
        width={normalize(90)}
        textAlign={"left"}
        isPassWord={true}
      />

      <Spacer height={normalize(8)} />
      <Button
        onPress={() => resetPassword()}
        // height={normalize(11)}
        width={normalize(70)}
        text={mltiLanguages("arabic").register}
        gradiantFirst={colors.primary_color}
        gradiantSecond={colors.primary_color}
        loader={loader}
        loaderSize={"large"}
      />
    </ScrollView>
  );
};

export default PasswordRecover;
