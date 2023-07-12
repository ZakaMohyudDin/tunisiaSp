import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../utils/colors';
import {normalize} from '../utils/helper';

const Paragraph = ({text, textAlign, color, weight, onPress, fontSize, marginLeft, marginRight}) => {
  return (
    <Text onPress={onPress}
      style={{
        textAlign: textAlign,
        fontSize: fontSize || normalize(3.5),
        color: color || colors.light1_gray,
        fontWeight: weight,
        marginLeft: marginLeft,
        marginRight: marginRight,
        fontFamily: 'FontsFree-Net-URW-DIN-Arabic-1'
      }}>
      {text}
    </Text>
  );
};
export default Paragraph;

const styles = StyleSheet.create({});