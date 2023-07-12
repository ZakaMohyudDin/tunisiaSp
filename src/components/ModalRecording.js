import React, { useEffect, useRef, useState } from "react";
import { Animated, Modal, View, TouchableOpacity, Text } from "react-native";
import { colors } from "../utils/colors";
import { normalize } from "../utils/helper";
import Paragraph from "./Paragraph";
import Picture from "./Picture";
import Spacer from "./Spacer";
import { mltiLanguages } from "../utils/multiLanguage";

var num = 0;
var interval;
const ModalRecording = ({ visible, onClose }) => {
  const position = useRef(new Animated.Value(0)).current;
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    num = 0;
  }, []);
  useEffect(() => {
    if (visible) {
      Animated.timing(position, {
        toValue: 1,
        duration: 300, // Adjust the duration as needed
        useNativeDriver: true,
      }).start();
    }
    interval = setInterval(() => {
      num = num + 1;
      setCounter(num);
    }, 500);
    return () => clearInterval(interval);
  }, [visible]);

  const translateY = position.interpolate({
    inputRange: [0, 1],
    outputRange: [600, 0], // Adjust the distance of animation
  });

  const closeInterval = () => {
    num = 0;
    clearInterval(interval);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Animated.View
          style={[styles.modalContent, { transform: [{ translateY }] }]}
        >
          <Paragraph text={counter} />
          <Spacer height={normalize(2)} />
          <Picture
            localSource={require("../assets/radio.png")}
            height={normalize(36)}
            width={normalize(36)}
            imgColor={colors.gradiant1}
          />
          <Spacer height={normalize(2)} />

          <TouchableOpacity onPress={closeInterval}>
            <Paragraph text={mltiLanguages("arabic").cart} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderTopEndRadius: normalize(12),
    borderTopLeftRadius: normalize(12),
    paddingTop: normalize(12),
    alignItems: "center",
  },
};

export default ModalRecording;
