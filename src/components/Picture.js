import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { colors } from "../utils/colors";

const Picture = ({
  localSource,
  uriSourc,
  height,
  width,
  imgColor,
  alignSelf,
  roundCorner,
  resizeMode,
}) => {
  return (
    <>
      {uriSourc ? (
        <Image
          style={{
            height: height,
            width: width,
            tintColor: imgColor,
            alignSelf: alignSelf,
            borderRadius: roundCorner || 0,
            backgroundColor: colors.inputBg,
          }}
          source={{
            uri: uriSourc,
          }}
          resizeMode={resizeMode || "cover"}
        />
      ) : (
        <Image
          style={{
            height: height,
            width: width,
            tintColor: imgColor,
            alignSelf: alignSelf,
            borderRadius: roundCorner || 0,
          }}
          source={localSource}
          resizeMode={resizeMode || "cover"}
        />
      )}
    </>
  );
};
export default Picture;

const styles = StyleSheet.create({});
