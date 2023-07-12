import React, { useEffect } from "react";
import { View } from "react-native";
import { colors } from "../../utils/colors";
import Picture from "../../components/Picture";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Splash2");
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.spBg,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Picture
        localSource={require("../../assets/purplelogo.png")}
        height={160}
        width={160}
      />
    </View>
  );
};

export default SplashScreen;
