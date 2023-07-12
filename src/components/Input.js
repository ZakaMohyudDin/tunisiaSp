import * as React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

const Input = ({
  text,
  placeholder,
  editable,
  onChangeText,
  isPassWord,
  height,
  width,
  textAlign,
  margin,
  refferToNext,
  onSubmitEditing,
  multiLine,
  numberOfLines,
  bgColor,
  onKeyPress,
  maxLength,
}) => {
  return (
    <TextInput
      style={[
        styles.input,
        {
          height: height || 48,
          width: width || '88%',
          margin: margin || 12,
          backgroundColor: bgColor || colors.white,
          fontFamily: "FontsFree-Net-URW-DIN-Arabic-1"
        },
      ]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={isPassWord}
      value={text}
      textAlign={textAlign || 'right'}
      placeholderTextColor={colors.light1_gray}
      ref={refferToNext}
      onSubmitEditing={onSubmitEditing}
      multiline={multiLine}
      editable={editable}
      numberOfLines={numberOfLines}
      onKeyPress={onKeyPress}
      maxLength={maxLength}
    />
  );
};
export default Input;

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderRadius: 12,
    alignSelf: 'center',
  },
});
