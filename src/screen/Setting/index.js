import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import SubHeading from "../../components/SubHeading";
import Picture from "../../components/Picture";
import { Switch } from "react-native-elements";
import SettingComponent from "../../components/SettingComponent";

const Setting = ({ navigation }) => {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(3),
        backgroundColor: colors.main_background,
      }}
    >
      <Headers openDrawer={() => navigation.openDrawer()} />
      <Spacer height={normalize(4)} />
      <SubHeading
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        fontSize={normalize(4.2)}
        weight={"600"}
        textAlign={"left"}
        text={mltiLanguages("arabic").password}
      />
      <Spacer height={normalize(3)} />

      <View style={styles.introBox}>
        <Picture
          localSource={require("../../assets/testimonials-5.jpg")}
          height={normalize(24)}
          width={normalize(24)}
          roundCorner={normalize(4)}
        />
        <View style={styles.introText}>
          <SubHeading
            fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
            fontSize={normalize(4.2)}
            weight={"600"}
            textAlign={"left"}
            text={mltiLanguages("arabic").password}
          />
          <Paragraph text={"mohamed-ali@gmail.com"} textAlign={"left"} />
          <Paragraph
            text={mltiLanguages("arabic").password}
            color={colors.primary_color}
            textAlign={"left"}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: normalize(6),
        }}
      >
        <Switch value={checked} onValueChange={(value) => setChecked(value)} />
        <SubHeading
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
          fontSize={normalize(4.2)}
          weight={"600"}
          textAlign={"left"}
          text={mltiLanguages("arabic").password}
        />
      </View>
      <Spacer height={normalize(4)} />
      <SettingComponent
        text={mltiLanguages("arabic").register}
        contact={"+03039393393"}
        onPress={() => navigation.navigate("ChangePassword")}
        img={require("../../assets/password.png")}
      />
      <Spacer height={normalize(4)} />
      <SettingComponent
        onPress={() => navigation.navigate("ChangeNumber")}
        text={mltiLanguages("arabic").register}
        contact={"+03039393393"}
        img={require("../../assets/cell.png")}
      />

      <Spacer height={normalize(4)} />
      <SettingComponent
        text={mltiLanguages("arabic").register}
        contact={"+03039393393"}
        img={require("../../assets/mail.png")}
      />

      <Spacer height={normalize(4)} />
      <SettingComponent
        onPress={() => navigation.navigate("DeleteAccount")}
        text={mltiLanguages("arabic").register}
        contact={"+03039393393"}
        img={require("../../assets/delete.png")}
      />

      <Spacer height={normalize(4)} />
      <SettingComponent
        onPress={() => navigation.navigate("LockAccount")}
        text={mltiLanguages("arabic").register}
        contact={"+03039393393"}
        img={require("../../assets/lock.png")}
      />

      <Spacer height={normalize(4)} />
      <SettingComponent
        onPress={() => navigation.navigate("ServiceType")}
        text={mltiLanguages("arabic").register}
        contact={"+03039393393"}
        img={require("../../assets/refresh.png")}
      />

      <Spacer height={normalize(4)} />
      <SettingComponent
        text={mltiLanguages("arabic").register}
        contact={"+03039393393"}
        img={require("../../assets/exit.png")}
      />
    </ScrollView>
  );
};

export default Setting;
