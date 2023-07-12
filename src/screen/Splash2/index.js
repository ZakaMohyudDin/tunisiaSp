import React, { useEffect } from "react";
import {  View, Dimensions } from "react-native";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import { colors } from "../../utils/colors";
import Picture from "../../components/Picture";

const windowHeight = Dimensions.get("window").height;
const Splash2 = ({ navigation }) => {

  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate("SplashScreen3")
    }, 2000);
  },[])
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: windowHeight - 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Picture
          localSource={require("../../assets/logoAnim.gif")}
          height={140}
          width={140}
        />
      </View>

      <Paragraph
        text={"جميع الحقوق محفوظة©️مهنة"}
        color={colors.textByClient}
      />
    </View>
  );
};

export default Splash2;
