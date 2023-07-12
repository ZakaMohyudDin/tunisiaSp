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
import SubHeading from "../../components/SubHeading";
import ContactInfoBox from "../../components/ContactInfoBox";
import Input from "../../components/Input";

const ContactUs = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(3),
        backgroundColor: colors.main_background,
      }}
    >
      <Spacer height={normalize(1)} />
      <Headers addService={true} openDrawer={() => navigation.openDrawer()} />
      <Spacer height={normalize(4)} />
      <SubHeading
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        fontSize={normalize(4.2)}
        weight={"600"}
        textAlign={"center"}
        text={mltiLanguages("arabic").register}
      />
      <Spacer height={normalize(3)} />
      <Paragraph
        text={mltiLanguages("arabic").slide_desc}
        textAlign={"center"}
        // fontSize={normalize(4)}
      />

      <Spacer height={normalize(6)} />
      <ContactInfoBox
        text={mltiLanguages("arabic").register}
        contact={"+03039393393"}
        img={require("../../assets/cell.png")}
      />

      <Spacer height={normalize(4)} />
      <ContactInfoBox
        text={mltiLanguages("arabic").register}
        contact={"+03039393393"}
        img={require("../../assets/call.png")}
      />

      <Spacer height={normalize(4)} />
      <ContactInfoBox
        text={mltiLanguages("arabic").register}
        contact={"example@gmail.com"}
        img={require("../../assets/mail.png")}
      />

      <Spacer height={normalize(4)} />
      <ContactInfoBox
        text={mltiLanguages("arabic").register}
        contact={
          mltiLanguages("arabic").register +
          " - " +
          mltiLanguages("arabic").register
        }
        img={require("../../assets/pin.png")}
      />

      <Spacer height={normalize(4)} />
      <ContactInfoBox
        text={mltiLanguages("arabic").register}
        contact={
          mltiLanguages("arabic").register +
          " " +
          mltiLanguages("arabic").register
        }
        img={require("../../assets/globe.png")}
      />

      <Spacer height={normalize(8)} />
      <SubHeading
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        fontSize={normalize(4.2)}
        weight={"600"}
        textAlign={"center"}
        text={mltiLanguages("arabic").register}
      />
      <Input
        placeholder={mltiLanguages("arabic").register}
        bgColor={colors.white}
        width={normalize(95)}
        textAlign={"center"}
      />

      <SubHeading
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        fontSize={normalize(4.2)}
        weight={"600"}
        textAlign={"center"}
        text={mltiLanguages("arabic").register}
      />
      <Input
        placeholder={mltiLanguages("arabic").register}
        bgColor={colors.white}
        width={normalize(95)}
        multiLine={true}
        numberOfLines={4}
        textAlign={"center"}
        height={normalize(24)}
      />

      <Spacer height={normalize(6)} />
      <Button
        // onPress={() => signInUser()}
        // height={normalize(11)}
        width={normalize(70)}
        text={mltiLanguages("arabic").chat}
        gradiantFirst={colors.primary_color}
        gradiantSecond={colors.primary_color}
      />
      <Spacer height={normalize(4)} />
    </ScrollView>
  );
};

export default ContactUs;
