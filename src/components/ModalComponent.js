import * as React from "react";
import { StyleSheet, Modal, View, TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";
import Picture from "./Picture";
import Paragraph from "./Paragraph";
import Spacer from "./Spacer";
import { normalize } from "../utils/helper";
import { mltiLanguages } from "../utils/multiLanguage";

const ModalComponent = ({ modalVisible, onPress }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onPress}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Spacer height={normalize(2)} />
          <TouchableOpacity onPress={onPress}>
            <Picture
              localSource={require("../assets/cross.png")}
              height={normalize(6)}
              width={normalize(6)}
            />
          </TouchableOpacity>

          <View style={styles.itemTransaction}>
            <Picture
              localSource={require("../assets/testimonials-1.jpg")}
              height={normalize(14)}
              width={normalize(14)}
              roundCorner={normalize(3)}
            />

            <View style={{ width: normalize(45) }}>
              <Paragraph
                text={mltiLanguages("arabic").register}
                textAlign={"left"}
                color={colors.black}
              />
              <Spacer height={normalize(1)} />
              <Paragraph
                text={mltiLanguages("arabic").verif_desc}
                fontSize={normalize(3)}
                textAlign={"left"}
              />
            </View>
            <View style={{ width: normalize(22) }}>
              <Paragraph text={"27-03-23 11:30"} fontSize={normalize(3)} />
              <Spacer height={normalize(1)} />
              <Paragraph
                text={mltiLanguages("arabic").more}
                fontSize={14}
                color={colors.primary_color}
              />
            </View>
          </View>
          <Spacer height={normalize(4)} />
          <Paragraph
            text={
              mltiLanguages("arabic").slide_desc +
              mltiLanguages("arabic").slide_desc
            }
            color={colors.dark_gray}
            fontSize={normalize(4)}
            weight={"600"}
          />
        </View>
      </View>
    </Modal>
  );
};
export default ModalComponent;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    backgroundColor: colors.main_background,
    paddingHorizontal: normalize(3),
    paddingTop: normalize(4),
    height: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  itemTransaction: {
    marginVertical: normalize(1),
    width: normalize(96),
    borderRadius: normalize(2),
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.main_background,
    flexDirection: "row",
    padding: normalize(2),
    alignSelf: "center",
  },
});
