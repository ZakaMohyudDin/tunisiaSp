import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils/colors";
import { normalize } from "../../utils/helper";
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  flatImgStyle: {
    marginHorizontal: normalize(2),
  },
  backgroundVideo: {
   height: normalize(60),
   width: normalize(92),
   borderRadius: normalize(2),
   alignSelf: 'center'
  },
  btnPlacement: {
    position: 'absolute',
    width: '100%',
    top: windowHeight - 160,
  }
});
