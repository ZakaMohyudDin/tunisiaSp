import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { normalize } from "../../utils/helper";

export const styles = StyleSheet.create({
  tutorialBox: {
    marginVertical: normalize(1.5),
    marginHorizontal: normalize(1),
    borderRadius: normalize(2),
    paddingHorizontal: normalize(1),
    paddingVertical: normalize(2),
    backgroundColor: colors.flatListBg,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
