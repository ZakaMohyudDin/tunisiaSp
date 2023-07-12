import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { colors } from "../../utils/colors";
import { mltiLanguages } from "../../utils/multiLanguage";
import { getCategory } from "../../redux/actions/serviceAction";
import Spacer from "../Spacer";
import SubHeading from "../SubHeading";
import Picture from "../Picture";
import Paragraph from "../Paragraph";
import { normalize } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";

var Data = [
  {
    id: 1,
    title: "Technicians",
    isSelected: false,
    image: require("../../assets/person2.png")
  },
  {
    id: 2,
    title: "Technicians",
    isSelected: false,
    image: require("../../assets/profesion1.png")
  },
  {
    id: 3,
    title: "Technicians",
    isSelected: false,
    image: require("../../assets/profesion1.png")
  },
  {
    id: 4,
    title: "Technicians",
    isSelected: false,
    image: require("../../assets/person2.png")
  },
];
const StepInitial = ({ text }) => {
  const dispatch = useDispatch();
  const { token } = useSelector(({ authReducer }) => authReducer);
  const [categoryData, setCategoryData] = useState(Data);

  useEffect(() => {
    dispatch(getCategory(token));
  }, []);

  const selectedItem = (index) => {
    var dataList = categoryData;
    dataList?.map((obj) => (obj.isSelected = false));
    dataList[index].isSelected = !dataList[index].isSelected;
    setCategoryData([...dataList]);
  };

  const Item = ({ item, index }) => (
    <TouchableOpacity onPress={() => selectedItem(index)}>
      <View
        style={[
          styles.item,
          {
            backgroundColor: item.isSelected ? colors.stepBtnBG : colors.white,
          },
        ]}
      >
        <Spacer height={normalize(2)} />
        <Paragraph
          text={item.title}
          weight={"600"}
          textAlign={"center"}
          color={colors.dark_gray}
        />

        <Picture
          localSource={item.image}
          height={normalize(33)}
          width={normalize(33)}
          roundCorner={normalize(2)}
          resizeMode={"contain"}
          alignSelf={"center"}
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <Spacer height={normalize(4)} />
      <SubHeading
        text={mltiLanguages("arabic").sub_header}
        textAlign={"center"}
        fontSize={normalize(4.2)}
        weight={"600"}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
      />
      <Spacer height={normalize(1)} />
      <FlatList
        data={categoryData}
        numColumns={2}
        renderItem={({ item, index }) => <Item item={item} index={index} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default StepInitial;

const styles = StyleSheet.create({
  pick: {
    backgroundColor: colors.white,
    borderRadius: normalize(12),
    marginTop: normalize(12),
    marginBottom: normalize(6),
  },
  btnContainer: {
    flexDirection: "row",
  },
  item: {
    marginVertical: normalize(1.3),
    height: normalize(48),
    width: normalize(41),
    marginHorizontal: normalize(3),
    borderRadius: normalize(2),
    justifyContent: "space-between",
    
  },
});
