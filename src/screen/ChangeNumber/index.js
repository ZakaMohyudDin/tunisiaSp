import React from "react";
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

const ChangeNumber = ({ navigation }) => {
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
      <Heading text={"إنشاء رقم هاتف جديد"} textAlign={"center"} 
      fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}/>
      <Spacer height={normalize(2)} />
      <Paragraph
        text={"يجب أن يكون رقم الهاتف الجديد مختلفة عن رقم الهاتف المستخدم سابقا"}
        textAlign={"center"}
      />
      <Spacer height={normalize(6)} />
      <Input
        placeholder={mltiLanguages("arabic").password}
        bgColor={colors.white}
        width={normalize(90)}
        textAlign={"left"}
      />
      <Spacer height={normalize(8)} />
      <Button
        onPress={() => navigation.navigate("OtpScreen")}
        // height={normalize(11)}
        width={normalize(70)}
        text={mltiLanguages("arabic").register}
        gradiantFirst={colors.primary_color}
        gradiantSecond={colors.primary_color}
      />
    </ScrollView>
  );
};

export default ChangeNumber;
