import * as React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { normalize } from "../utils/helper";
import Spacer from "../components/Spacer";
import { mltiLanguages } from "../utils/multiLanguage";
import Paragraph from "../components/Paragraph";
import Picture from "../components/Picture";
import { Rating } from "react-native-elements";

const SPItem = ({
  item,
  color,
  longPress,
  onPress,
  offer,
  padding,
  opacity,
  disable,
  menuNavigate,
}) => {
  return (
    <>
      <TouchableOpacity
        disabled={disable}
        onLongPress={longPress}
        onPress={onPress}
      >
        <View
          style={[
            opacity == 1 || opacity == 0.99
              ? styles.shadowStyle
              : styles.itemMembers,
            {
              backgroundColor: color || colors.white,
              padding: padding == 0 ? 0 : normalize(2),
              opacity: opacity || 1,
            },
          ]}
        >
          <Picture
            localSource={require("../assets/testimonials-5.jpg")}
            height={normalize(18)}
            width={normalize(18)}
            resizeMode={"stretch"}
            roundCorner={normalize(2)}
          />
          <View style={{ justifyContent: "center" }}>
            <View style={styles.listName}>
              <View style={{ flexDirection: "row" }}>
                {item.UserService?.isVerified ?
                <Picture
                  localSource={require("../assets/checked.png")}
                  height={normalize(3.5)}
                  width={normalize(3.5)}
                  imgColor={colors.primary_color}
                  /> : null}
                <View style={{ width: 2 }} />

                <Paragraph
                  text={"technical..."}
                  color={colors.dark_gray}
                  weight={"600"}
                />
              </View>
              <Paragraph
                text={"4 " + mltiLanguages("arabic").header}
                fontSize={normalize(3)}
              />
            </View>
            <Spacer height={normalize(1.5)} />
            <View style={styles.listName}>
              <Paragraph text={"Decor Designer"} />

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Picture
                  localSource={require("../assets/card.png")}
                  height={normalize(3)}
                  width={normalize(4)}
                  // resizeMode={"stretch"}
                  imgColor={colors.paragraphClr}
                />
                <View style={{ width: 4 }} />
                <Paragraph
                  text={mltiLanguages("arabic").password}
                  fontSize={normalize(3)}
                />
              </View>
            </View>
            <View style={styles.listName}>
              <View
                style={[
                  styles.listName,
                  { width: normalize(22), alignSelf: "flex-start" },
                ]}
              >
                <Rating
                  type="custom"
                  ratingCount={5}
                  imageSize={13}
                  ratingColor={colors.primary_color}
                  ratingBackgroundColor={colors.main_background}
                  tintColor={colors.white}
                  readonly
                  startingValue={item.UserService?.userServiceRate}
                  onFinishRating={this.ratingCompleted}
                />
                <Paragraph text={item.UserService?.userServiceNumberReviews} />
              </View>
              {!offer ? (
                <Paragraph
                  text={"30 " + mltiLanguages("arabic").header}
                  fontSize={normalize(3)}
                  color={colors.dark_gray}
                />
              ) : (
                <View />
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {opacity == 1 && (
        <View style={styles.actionMenu}>
          <TouchableOpacity onPress={menuNavigate} style={styles.optionBox}>
            <Picture
              localSource={require("../assets/video.png")}
              width={normalize(5)}
              height={normalize(5)}
            />
            <Text>Option 1</Text>
          </TouchableOpacity>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.dark_gray,
            }}
          />
          <TouchableOpacity style={styles.optionBox}>
            <Picture
              localSource={require("../assets/call.png")}
              width={normalize(5)}
              height={normalize(5)}
            />
            <Text>Option 1</Text>
          </TouchableOpacity>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.dark_gray,
            }}
          />
          <TouchableOpacity style={styles.optionBox}>
            <Picture
              localSource={require("../assets/call.png")}
              width={normalize(5)}
              height={normalize(5)}
            />
            <Text>Option 1</Text>
          </TouchableOpacity>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.dark_gray,
            }}
          />
          <TouchableOpacity style={styles.optionBox}>
            <Picture
              localSource={require("../assets/delete.png")}
              width={normalize(5)}
              height={normalize(5)}
            />
            <Text>Option 1</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};
export default SPItem;

const styles = StyleSheet.create({
  itemMembers: {
    marginVertical: normalize(1.5),
    marginHorizontal: normalize(1),
    borderRadius: normalize(2),
    justifyContent: "space-between",
    flexDirection: "row",
    width: normalize(92),
    alignSelf: "center",
  },
  listName: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: normalize(68),
  },
  actionMenu: {
    backgroundColor: colors.white,
    width: normalize(55),
    padding: normalize(2),
    borderRadius: normalize(2),
    margin: normalize(2),
    opacity: 1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  shadowStyle: {
    marginVertical: normalize(1.5),
    marginHorizontal: normalize(1),
    borderRadius: normalize(2),
    width: normalize(96),
    paddingVertical: normalize(3),
    paddingHorizontal: normalize(3),
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  optionBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: normalize(1),
    marginVertical: normalize(2),
  },
});
