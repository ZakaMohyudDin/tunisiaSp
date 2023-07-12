import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { normalize } from "../../utils/helper";

export const styles = StyleSheet.create({
  detailStyle: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  valueStyle: {
    width: normalize(50),
    minHeight: normalize(2),
  },
  titleStyle: {
    width: normalize(40),
    minHeight: normalize(2),
  },
  dateContainer: {
    width: "100%",
    minHeight: normalize(2),
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dateStyle: {
    paddingVertical: normalize(2),
    paddingHorizontal: normalize(4),
    backgroundColor: colors.inputBg,
    borderRadius: normalize(2)
  }
});
