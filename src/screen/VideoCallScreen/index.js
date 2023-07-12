import React, { useEffect } from "react";
import { ScrollView, ImageBackground, View } from "react-native";
import { normalize } from "../../utils/helper";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Picture from "../../components/Picture";
import { colors } from "../../utils/colors";
import RoundButton from "../../components/RoundButton";
const VideoCallScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.spBg,
      }}
    >
      <ImageBackground
        source={require("../../assets/testimonials-2.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.imgContainer}>
          <Picture
            localSource={require("../../assets/testimonials-5.jpg")}
            height={normalize(30)}
            width={normalize(28)}
            roundCorner={normalize(3)}
          />
        </View>
        <View style={styles.btnContainer}>
          <RoundButton img={require("../../assets/video.png")} />
          <RoundButton
            onPress={() => navigation.goBack()}
            imgColor={colors.white}
            img={require("../../assets/end.png")}
            bgColor={colors.red}
          />
          <RoundButton img={require("../../assets/mute.png")} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default VideoCallScreen;
