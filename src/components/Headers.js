import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { colors } from "../utils/colors";
import { normalize } from "../utils/helper";
import Picture from "./Picture";
import Heading from "./Heading";
import Popover from "react-native-popover-view";
import { mltiLanguages } from "../utils/multiLanguage";

const Headers = ({
  text,
  onPress,
  goBack,
  title,
  filter,
  openDrawer,
  videoCall,
  addService,
  goToAddService,
}) => {
  return (
    <View style={styles.container}>
      {goBack && (
        <TouchableOpacity
          onPress={goBack}
        >
          <Picture
            localSource={require("../assets/backArrow.png")}
            height={normalize(4)}
            width={normalize(5)}
            imgColor={colors.dark_gray}
          />
        </TouchableOpacity>
      )}
       {title && <Heading text={title} fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}/>}
      {!title && (
        <TouchableOpacity
          onPress={openDrawer}
          style={{ marginRight: normalize(4) }}
        >
          {!goBack && (
            <Picture
              localSource={require("../assets/drawer.png")}
              height={normalize(6)}
              width={normalize(6)}
              imgColor={colors.dark_gray}
            />
          )}
        </TouchableOpacity>
      )}
      {title && (
        <TouchableOpacity>
          <Picture
            localSource={require("../assets/search.png")}
            height={normalize(6)}
            width={normalize(6)}
            imgColor={colors.dark_gray}
          />
        </TouchableOpacity>
      )}
      {filter && (
        <View style={styles.leftSide}>
          <TouchableOpacity>
            <Picture
              localSource={require("../assets/search.png")}
              height={normalize(6)}
              width={normalize(6)}
              imgColor={colors.dark_gray}
            />
          </TouchableOpacity>
          <Popover
            from={
              <TouchableOpacity onPress={filter} style={{ marginLeft: 12 }}>
                <Picture
                  localSource={require("../assets/filter.png")}
                  height={normalize(6)}
                  width={normalize(6)}
                />
              </TouchableOpacity>
            }
          >
            <TouchableOpacity style={styles.menuStyle}>
              <Text>{mltiLanguages("arabic").header}</Text>
            </TouchableOpacity>
            <View
              style={{
                height: 1,
                backgroundColor: colors.paragraphClr,
                width: "76%",
                alignSelf: "center",
              }}
            />
            <TouchableOpacity style={styles.menuStyle}>
              <Text>{mltiLanguages("arabic").register}</Text>
            </TouchableOpacity>
            <View
              style={{
                height: 1,
                backgroundColor: colors.paragraphClr,
                width: "76%",
                alignSelf: "center",
              }}
            />
            <TouchableOpacity style={styles.menuStyle}>
              <Text>{mltiLanguages("arabic").header}</Text>
            </TouchableOpacity>
            <View
              style={{
                height: 1,
                backgroundColor: colors.paragraphClr,
                width: "76%",
                alignSelf: "center",
                marginBottom: 20,
              }}
            />
          </Popover>
        </View>
      )}
      {!goBack && (
        <View style={styles.leftSide}>
          {!addService && (
            <TouchableOpacity onPress={goToAddService}>
              <Picture
                localSource={require("../assets/more.png")}
                height={normalize(5)}
                width={normalize(5)}
                imgColor={colors.dark_gray}
              />
            </TouchableOpacity>
          )}
          <View style={{ width: normalize(8) }} />
          <TouchableOpacity>
            <Picture
              localSource={require("../assets/search.png")}
              height={normalize(5)}
              width={normalize(5)}
              imgColor={colors.dark_gray}
            />
          </TouchableOpacity>
        </View>
      )}
     
    </View>
  );
};
export default Headers;

const styles = StyleSheet.create({
  container: {
    width: normalize(94),
    height: normalize(14),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: normalize(1.5),
    backgroundColor: colors.main_background,
  },
  leftSide: {
    flexDirection: "row",
  },
  menuStyle: {
    paddingVertical: 10,
    paddingHorizontal: 48,
    alignSelf: "center",
  },
});
