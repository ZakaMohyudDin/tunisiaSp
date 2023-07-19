import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { normalize } from "../utils/helper";
import { colors } from "../utils/colors";
import Spacer from "./Spacer";
import Paragraph from "./Paragraph";
import Picture from "./Picture";

var DATA = [
  {
    id: 1,
    day: "الاثنين",
    isSelected: false,
  },
  {
    id: 2,
    day: "الثلاثاء",
    isSelected: false,
  },
  {
    id: 3,
    day: "الأربعاء",
    isSelected: false,
  },
  {
    id: 4,
    day: "الخميس",
    isSelected: false,
  },
  {
    id: 5,
    day: "الجمعة",
    isSelected: false,
  },
];

const ModalDays = ({ visible, onClose, storDays, days, storeDaysIds }) => {
  const position = useRef(new Animated.Value(0)).current;
  const [daysList, setDaysList] = useState(days);

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

  const selectDay = (index) => {
    var daysData = daysList;
    daysData[index].isSelected = !daysData[index].isSelected;
    setDaysList([...daysData]);
    var selectedday = daysData
      .filter((obj) => obj.isSelected == true)
      .map((obj) => obj.daysName);

      var selecteddayId = daysData
      .filter((obj) => obj.isSelected == true)
      .map((obj) => obj.id);
    console.log(selecteddayId);
    storeDaysIds(selecteddayId)
    storDays(selectedday.join(" ' "));
  };

  const Item = ({ item, index }) => (
    <>
      <TouchableOpacity
        onPress={() => selectDay(index)}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Paragraph
          text={item.daysName}
          textAlign={"left"}
          color={colors.dark_gray}
          fontSize={normalize(3.7)}
          weight={"600"}
        />

        {item.isSelected && (
          <Picture
            localSource={require("../assets/tick.png")}
            height={normalize(4)}
            width={normalize(4)}
            imgColor={colors.primary_color}
          />
        )}
      </TouchableOpacity>
      <Spacer height={normalize(4)} />
    </>
  );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.mainBox}>
          <View style={{ paddingHorizontal: 24 }}>
            <FlatList
              data={daysList}
              renderItem={({ item, index }) => (
                <Item item={item} index={index} />
              )}
              keyExtractor={(item) => item.id}
              style={{ paddingBottom: 10 }}
            />
          </View>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.light2_gray,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 24,
              paddingVertical: 12,
            }}
          >
            <TouchableOpacity>
              <Paragraph
                text={"الغاء"}
                textAlign={"left"}
                color={colors.light1_gray}
                fontSize={normalize(3.7)}
                weight={"600"}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Paragraph
                text={"تم"}
                textAlign={"left"}
                color={colors.primary_color}
                fontSize={normalize(3.7)}
                weight={"600"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
  },
  mainBox: {
    width: normalize(75),
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingTop: 24,
  },
});

export default ModalDays;
