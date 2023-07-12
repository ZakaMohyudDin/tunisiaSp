import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../utils/colors";
import { SliderBox } from "react-native-image-slider-box";
import { normalize } from "../utils/helper";

const Slider = ({ list , resizeMode}) => {
  return (
    <SliderBox
      images={list}
      dotColor={colors.primary_color}
      inactiveDotColor={colors.sliderInActiveDot}
      autoPlay={true}
      resizeMode={resizeMode || "contain"}
      ImageComponentStyle={{width: normalize(94), height: 200, borderRadius: 10, alignSelf: 'center'}} 
    />
  );
};
export default Slider;

const styles = StyleSheet.create({});
