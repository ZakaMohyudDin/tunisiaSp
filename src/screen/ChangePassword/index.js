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
import { useDispatch, useSelector } from "react-redux";
import { MessageError } from "../../utils/showAlerts";
import { resetPasswordAction } from "../../redux/actions/resetPasswordAction";

const ChangePassword = ({ navigation }) => {
  const { token } = useSelector(({ authReducer }) => authReducer);
  const dispatch = useDispatch();
  const [oldPassword, setOldPasswor] = useState("")
  const [newPassword, setNewPasswor] = useState("")
  const [newPasswordVerify, setNewPasswordVerify] = useState("")


  const restPassword = () => {
    if (!oldPassword) {
      MessageError("Please, Enter Your Old Password")
      return;
    }
    if (!newPassword) {
      MessageError("Please, Enter Your New Password")
      return;
    }
    if (!newPasswordVerify) {
      MessageError("Please, Enter Your New Password For Verify")
      return;
    }
    if (newPasswordVerify !== newPassword) {
      MessageError("Please, Enter Same Password")
      return;
    }
    var data = {
      userPassword: newPassword
    }
    dispatch(resetPasswordAction(token, data, () => {
      navigation.navigate("Home")
    }))
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(3),
        backgroundColor: colors.main_background,
      }}
    >
      <Headers goBack={() => navigation.navigate("Setting")} />
      <Spacer height={normalize(4)} />
      <Heading text={mltiLanguages("arabic").sub_header} textAlign={"center"} fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"} />
      <Spacer height={normalize(2)} />
      <Paragraph
        text={mltiLanguages("arabic").slide_desc}
        textAlign={"center"}
      />
      <Spacer height={normalize(6)} />
      <Input
        placeholder={mltiLanguages("arabic").password}
        bgColor={colors.white}
        width={normalize(90)}
        textAlign={"left"}
        text={oldPassword}
        onChangeText={(text) => setOldPasswor(text)}
      />
      <Input
        placeholder={mltiLanguages("arabic").sub_header}
        bgColor={colors.white}
        width={normalize(90)}
        textAlign={"left"}
        text={newPassword}
        onChangeText={(text) => setNewPasswor(text)}
      />
      <Input
        placeholder={mltiLanguages("arabic").sub_header}
        bgColor={colors.white}
        width={normalize(90)}
        textAlign={"left"}
        text={newPasswordVerify}
        onChangeText={(text) => setNewPasswordVerify(text)}
      />
      <Spacer height={normalize(8)} />
      <Button
        onPress={() => restPassword()}
        // height={normalize(11)}
        width={normalize(70)}
        text={mltiLanguages("arabic").register}
        gradiantFirst={colors.primary_color}
        gradiantSecond={colors.primary_color}
      />
    </ScrollView>
  );
};

export default ChangePassword;
