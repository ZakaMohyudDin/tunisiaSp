import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";

const AboutScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.main_background,
        paddingHorizontal: normalize(2),
      }}
    >
      <Headers addService={true} openDrawer={() => navigation.openDrawer()} />

      <View style={{paddingHorizontal: normalize(2)}}>
        <Paragraph
          text={"من نحن؟"}
          textAlign={"left"}
          color={colors.dark_gray}
          fontSize={normalize(4)}
        />
        <Spacer height={normalize(8)}/>
        <Paragraph
          text={"من نحن؟"}
          textAlign={"left"}
          color={colors.dark_gray}
          fontSize={normalize(3.8)}
        />
        <Paragraph
          text={mltiLanguages("arabic").slide_desc + mltiLanguages("arabic").slide_desc}
          textAlign={"left"}
          color={colors.dark_gray}
          fontSize={normalize(3.8)}
        />
      </View>
    </ScrollView>
  );
};

export default AboutScreen;
