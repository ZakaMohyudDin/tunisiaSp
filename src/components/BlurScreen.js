import * as React from "react";
import { BlurView } from "@react-native-community/blur";

const BlurScreen = ({ children }) => {
  return (
    <BlurView
      style={{
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
      blurType="light"
      blurAmount={10}
      reducedTransparencyFallbackColor="white"
    >
      {children}
    </BlurView>
  );
};
export default BlurScreen;
