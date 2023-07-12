import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { normalize } from "../../utils/helper";

export const styles = StyleSheet.create({
  dateBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    alignItems: 'center'
  },
  dateStyle: {
    height: normalize(10),
    width: normalize(30),
    backgroundColor: colors.light2_gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10

  }
});
