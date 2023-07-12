import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { colors } from "../utils/colors";
import { normalize } from "../utils/helper";
import LinearGradient from "react-native-linear-gradient";
import Picture from "./Picture";

const ButtonThreeGradiant = ({
  text,
  height,
  width,
  textAlign,
  img,
  imgHeight,
  imgWidth,
  gradiantFirst,
  gradiantSecond,
  gradiantThird,
  onPress,
  loader,
  textFont,
  textWeight,
  textColor,
  roundCorner,
  loaderSize,
  resizeMode,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[gradiantFirst, gradiantSecond, gradiantThird]}
        style={{
          height: height || 48,
          width: width,
          borderRadius: roundCorner || 10,
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {loader ? (
          <ActivityIndicator size={loaderSize || "small"} color={colors.white} />
        ) : (
          <>
            {text && (
              <Text
                style={{
                  textAlign: textAlign,
                  fontSize: textFont || normalize(3.7),
                  color: textColor || colors.white,
                  marginRight: img ? normalize(1) : 0,
                  fontWeight: textWeight || '400',
                  fontFamily: "FontsFree-Net-URW-DIN-Arabic-1"
                }}
              >
                {text}
              </Text>
            )}
          </>
        )}
        {img && !loader && (
          <Picture
            localSource={img}
            height={imgHeight}
            width={imgWidth}
            imgColor={colors.white}
            resizeMode={resizeMode}
          />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default ButtonThreeGradiant;

const styles = StyleSheet.create({});