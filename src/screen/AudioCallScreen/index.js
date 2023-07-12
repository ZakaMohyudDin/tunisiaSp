import React from "react";
import { View } from "react-native";
import { normalize } from "../../utils/helper";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import { colors } from "../../utils/colors";
import SubHeading from "../../components/SubHeading";
import RoundButton from "../../components/RoundButton";

const AudioCallScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.callBg,
      }}
    >
      <SubHeading
        text={mltiLanguages("arabic").cart}
        color={colors.white}
        textAlign={"center"}
      />
      <Paragraph
        text={mltiLanguages("arabic").verif_desc}
        textAlign={"center"}
      />
      <View style={styles.btnContainer}>
        <View style={styles.btnTxt}>
          <RoundButton
            bgColor={colors.audioBtn}
            height={normalize(16)}
            width={normalize(16)}
            imgColor={colors.white}
            img={require("../../assets/sound.png")}
          />
          <Paragraph text={mltiLanguages("arabic").cart} />
        </View>
        <View style={styles.btnTxt}>
          <RoundButton
            bgColor={colors.audioBtn}
            height={normalize(16)}
            width={normalize(16)}
            imgColor={colors.white}
            img={require("../../assets/video.png")}
          />
          <Paragraph text={mltiLanguages("arabic").cart} />
        </View>
        <View style={styles.btnTxt}>
          <RoundButton
            bgColor={colors.audioBtn}
            height={normalize(16)}
            width={normalize(16)}
            imgColor={colors.white}
            img={require("../../assets/mute.png")}
          />
          <Paragraph text={mltiLanguages("arabic").cart} />
        </View>
      </View>

      <View style={styles.endCallBtn}>
        <RoundButton
          onPress={() => navigation.goBack()}
          bgColor={colors.red}
          height={normalize(16)}
          width={normalize(16)}
          imgColor={colors.white}
          imgHeight={normalize(8)}
          imgWidth={normalize(8)}
          img={require("../../assets/end.png")}
        />
      </View>
    </View>
  );
};

export default AudioCallScreen;
