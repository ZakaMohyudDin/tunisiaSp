import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { normalize } from "../../utils/helper";

export const styles = StyleSheet.create({
  tutorialBox: {
    marginVertical: normalize(1.5),
    marginHorizontal: normalize(0.5),
    borderRadius: normalize(2),
    paddingHorizontal: normalize(2),
    paddingVertical: normalize(3),
    backgroundColor: colors.white,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
