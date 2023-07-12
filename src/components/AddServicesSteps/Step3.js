import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { colors } from "../../utils/colors";
import { normalize } from "react-native-elements";
import { mltiLanguages } from "../../utils/multiLanguage";
import Paragraph from "../Paragraph";
import ImagePicker from "react-native-image-crop-picker";
import Picture from "../Picture";
import Spacer from "../Spacer";

const Step3 = ({ text }) => {
  const [images, setImages] = useState();

  const pickImage = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then((images) => {
      setImages(images);
    });
  };
  const Item = ({ item }) => (
    <View style={{ margin: normalize(4) }}>
      <Picture
        uriSourc={item?.path}
        height={normalize(80)}
        width={normalize(80)}
        roundCorner={normalize(8)}
      />
    </View>
  );
  return (
    <View>
      <TouchableOpacity onPress={() => pickImage()} style={styles.imgPickStyle}>
        <Paragraph text={mltiLanguages("arabic").phone} />
      </TouchableOpacity>
      <View style={styles.imgsConatainer}>
        <FlatList
          data={images}
          horizontal
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>

      <TouchableOpacity onPress={() => pickImage()} style={styles.imgPickStyle}>
        <Paragraph text={mltiLanguages("arabic").phone} />
      </TouchableOpacity>
      <View style={styles.imgsConatainer}>
        <FlatList
          data={images}
          horizontal
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Spacer height={16} />
      <Paragraph
        text={"*" + mltiLanguages("arabic").phone}
        color={colors.green}
        fontSize={12}
        textAlign={"left"}
      />
      <Paragraph
        text={"*" + mltiLanguages("arabic").slide_desc}
        color={colors.green}
        fontSize={12}
        textAlign={"left"}
      />
    </View>
  );
};
export default Step3;

const styles = StyleSheet.create({
  pick: {
    backgroundColor: colors.white,
    borderRadius: normalize(12),
    marginTop: normalize(12),
    marginBottom: normalize(6),
  },
  imgPickStyle: {
    marginTop: normalize(10),
  },
  imgsConatainer: {
    width: "100%",
    backgroundColor: colors.white,
    height: normalize(100),
    padding: normalize(5),
    alignItems: "flex-end",
    borderRadius: normalize(10),
    marginTop: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
