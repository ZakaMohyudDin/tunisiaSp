import * as React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { normalize } from "../utils/helper";
import Spacer from "../components/Spacer";
import { mltiLanguages } from "../utils/multiLanguage";
import Paragraph from "../components/Paragraph";
import Picture from "../components/Picture";
import { Rating } from "react-native-elements";
import SubHeading from "./SubHeading";

const ReviewItems = ({ item, longPress, onPress }) => {
  return (
    <View style={[styles.itemMembers, { backgroundColor: colors.white }]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Picture
          localSource={require("../assets/testimonials-5.jpg")}
          height={normalize(18)}
          width={normalize(18)}
          resizeMode={"stretch"}
          roundCorner={normalize(2)}
        />
        <View style={{ width: normalize(50) }}>
          <SubHeading
            text={mltiLanguages("arabic").register}
            fontSize={normalize(4.2)}
            weight={"600"}
            textAlign={"left"}
            fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
          />
          <Paragraph
            text={mltiLanguages("arabic").register}
            textAlign={"left"}
            fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
          />
        </View>
        <Rating
          type="custom"
          ratingCount={5}
          imageSize={normalize(3)}
          ratingColor={colors.primary_color}
          readonly
          startingValue={4}
          onFinishRating={this.ratingCompleted}
        />
      </View>
      <Spacer height={normalize(3)} />
      <Paragraph text={mltiLanguages("arabic").slide_desc} textAlign={"left"} />
      <Spacer height={normalize(1)} />
    </View>
  );
};
export default ReviewItems;

const styles = StyleSheet.create({
  itemMembers: {
    marginVertical: normalize(1.5),
    marginHorizontal: normalize(1),
    borderRadius: normalize(2),
    justifyContent: "space-between",
    padding: normalize(2),
  },
  listName: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: normalize(68),
  },
});
