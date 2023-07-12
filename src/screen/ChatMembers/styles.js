import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { normalize } from "../../utils/helper";

export const styles = StyleSheet.create({
  item: {
    // height: normalize(20),
    minWidth: normalize(19),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
  },
  itemMembers: {
    marginVertical: normalize(1),
    // marginHorizontal: normalize(1),
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
    width: '100%',
    height: 1,
    backgroundColor: colors.light1_gray
  }
});
