import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { normalize } from "../../utils/helper";

export const styles = StyleSheet.create({
  itemMembers: {
    marginVertical: normalize(1.5),
    marginHorizontal: normalize(1),
    borderRadius: normalize(2),
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: colors.flatListBg,
    padding: normalize(2),
  },
  listName: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: normalize(68),
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
