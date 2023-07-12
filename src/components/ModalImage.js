import React, { useEffect, useRef } from "react";
import { Animated, Modal, View, StyleSheet } from "react-native";
import { normalize } from "../utils/helper";
import { colors } from "../utils/colors";
import Button from "./Button";
import Spacer from "./Spacer";

const ModalImage = ({ visible, onClose, cameraRoll, launchLibrary }) => {
  const position = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(position, {
        toValue: 1,
        duration: 300, // Adjust the duration as needed
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const translateY = position.interpolate({
    inputRange: [0, 1],
    outputRange: [600, 0], // Adjust the distance of animation
  });

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View
          style={{
            backgroundColor: colors.white,
            width: normalize(90),
            alignSelf: "center",
            borderRadius: normalize(2),
          }}
        >
          <Button
            onPress={cameraRoll}
            height={normalize(11)}
            width={normalize(90)}
            text={"Camera roll"}
            textFont={normalize(5)}
            gradiantFirst={colors.inputBg}
            gradiantSecond={colors.inputBg}
            textColor={colors.primary_color}
            textWeight={"500"}
            // loader={loader}
          />
          <View
            style={{
              height: 2,
              backgroundColor: colors.inActive,
              width: normalize(90),
              alignSelf: "center",
            }}
          />
          <Button
            onPress={launchLibrary}
            height={normalize(11)}
            width={normalize(90)}
            text={"Image library"}
            textFont={normalize(5)}
            gradiantFirst={colors.inputBg}
            gradiantSecond={colors.inputBg}
            textColor={colors.primary_color}
            textWeight={"500"}
            // loader={loader}
          />
        </View>
        <Spacer height={normalize(2)} />
        <Button
          onPress={onClose}
          height={normalize(11)}
          width={normalize(90)}
          text={"Cancel"}
          textFont={normalize(5)}
          gradiantFirst={colors.inputBg}
          gradiantSecond={colors.inputBg}
          textColor={colors.primary_color}
          textWeight={"500"}
          // loader={loader}
        />
        <Spacer height={normalize(3)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
  },
});

export default ModalImage;
