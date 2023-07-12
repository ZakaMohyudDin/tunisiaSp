import * as React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { colors } from "../utils/colors";
import { normalize } from "../utils/helper";
import Picture from "./Picture";
import Paragraph from "./Paragraph";
import { mltiLanguages } from "../utils/multiLanguage";
import Spacer from "./Spacer";

const MemberComponent = ({ text, item }) => {
  return (
    <>
      <View
        style={[
          styles.shadowByCondition,
          {
            //   width: normalize(92),
            opacity: item.opacity,
            backgroundColor: "white",
            // backgroundColor: item.opacity == 0.1 ? 'rgba(255, 0, 0, 0.1);' : colors.white
          },
        ]}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: item.opacity == "1" ? normalize(3) : 0,
          }}
        >
          <Picture
            localSource={require("../assets/testimonials-5.jpg")}
            height={item.opacity == "1" ? normalize(10) : normalize(14)}
            width={item.opacity == "1" ? normalize(10) : normalize(14)}
            resizeMode={"stretch"}
            roundCorner={normalize(2)}
          />
          {item.isOnline && <View style={styles.onLineList} />}
        </View>
        <View style={{ justifyContent: "center" }}>
          <View style={styles.listName}>
            <Paragraph
              text={mltiLanguages("arabic").register}
              color={colors.black}
              weight={"600"}
            />
            <Paragraph text={"1m ago"} fontSize={normalize(2.5)} />
          </View>
          <Spacer height={normalize(1.5)} />
          <View style={{ flexDirection: "row" }}>
            <Paragraph
              text={mltiLanguages("arabic").login_subtitle}
              textAlign={"left"}
              fontSize={12}
            />
            {item.sms && (
              <View style={styles.unreadSms}>
                <Text style={styles.unreadSmsCount}>3</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      {item.opacity == 1 && (
        <View style={styles.customPopDown}>
          <TouchableOpacity
            onPress={() => navigateToChat("AudioCallScreen")}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: normalize(3),
              paddingTop: normalize(2),
              paddingBottom: normalize(1),
            }}
          >
            <Paragraph
              text={"voice call"}
              color={colors.dark_gray}
              weight={"600"}
              fontSize={normalize(3.8)}
            />
            <Picture
              localSource={require("../assets/call.png")}
              height={normalize(5)}
              width={normalize(5)}
            />
          </TouchableOpacity>
          <View style={styles.hr} />
          <TouchableOpacity
            onPress={() => navigateToChat("VideoCallScreen")}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: normalize(3),
              paddingTop: normalize(2),
              paddingBottom: normalize(1),
            }}
          >
            <Paragraph
              text={"video call"}
              color={colors.dark_gray}
              weight={"600"}
              fontSize={normalize(3.8)}
            />
            <Picture
              localSource={require("../assets/videoOutlin.png")}
              height={normalize(3.5)}
              width={normalize(5)}
            />
          </TouchableOpacity>
          <View style={styles.hr} />
          <TouchableOpacity
            onPress={() => navigateToChat("ChatMember")}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: normalize(3),
              paddingTop: normalize(2),
              paddingBottom: normalize(1),
            }}
          >
            <Paragraph
              text={"delete conversation"}
              weight={"600"}
              fontSize={normalize(3.8)}
              color={colors.red}
            />
            <Picture
              localSource={require("../assets/delete.png")}
              height={normalize(5)}
              width={normalize(5)}
              imgColor={colors.red}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};
export default MemberComponent;

const styles = StyleSheet.create({
  item: {
    minWidth: normalize(19),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
  },
  itemMembers: {
    marginVertical: normalize(1),
    borderRadius: normalize(2),
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: normalize(2),
  },
  listName: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: normalize(68),
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  onLine: {
    height: normalize(2.5),
    width: normalize(2.5),
    backgroundColor: colors.green,
    borderRadius: normalize(2),
    position: "absolute",
    right: 8,
    borderWidth: 1,
    borderColor: colors.main_background,
  },
  onLineList: {
    height: normalize(2.5),
    width: normalize(2.5),
    backgroundColor: colors.red,
    borderRadius: normalize(2),
    position: "absolute",
    right: -6,
    top: 36,
    borderWidth: 1,
    borderColor: colors.main_background,
  },
  unreadSms: {
    height: normalize(5),
    width: normalize(5),
    borderRadius: 3,
    backgroundColor: colors.primary_color,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: normalize(2),
  },
  unreadSmsCount: {
    color: colors.white,
  },
  shadowByCondition: {
    marginVertical: normalize(1),
    // marginHorizontal: normalize(1),
    borderRadius: normalize(2),
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: normalize(2),
    marginHorizontal: normalize(2),
    height: normalize(20),
    width: normalize(94),
    paddingHorizontal: normalize(8),

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  customPopDown: {
    width: normalize(50),
    backgroundColor: colors.main_background,
    // position: "absolute",
    // top: normalize(20),
    borderRadius: 10,
    opacity: 1,
    margin: normalize(2),

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
  },
  hr: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light1_gray,
  },
});
