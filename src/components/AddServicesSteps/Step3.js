import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { colors } from "../../utils/colors";
import { normalize } from "react-native-elements";
import { mltiLanguages } from "../../utils/multiLanguage";
import Paragraph from "../Paragraph";
import ImagePicker from "react-native-image-crop-picker";
import Picture from "../Picture";
import Spacer from "../Spacer";
import Button from "../Button";
import { RNS3 } from "react-native-aws3";
import { generateUID } from "../../utils/helper";

const Step3 = ({ text, onNextPress, onPrePress, setImagUrl }) => {
  const [images, setImages] = useState();

  const pickImage = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then((images) => {
      console.log(images[0].path);
      setImages(images);
      uploadImageToS3(images[0].path);
    });
  };

  // upload image to S3
  function uploadImageToS3(uri) {
    const file = {
      uri: uri,
      name: generateUID() + ".jpg",
      type: "image/jpeg",
    };
    const options = {
      keyPrefix: "temp/mehna",
      bucket: "medical-globe",
      region: "ap-southeast-1",
      accessKey: "AKIAUVWYCSDKBR2UK473",
      secretKey: "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",
      successActionStatus: 201,
    };
    console.log("options : ", options);
    RNS3.put(file, options).then((response) => {
      if (response.status !== 201) {
        throw new Error("Failed to upload image to S3");
        return;
      } else {
        console.log("\n\n\n\n\n  s3", response?.body?.postResponse?.location);
        setImagUrl(response?.body?.postResponse?.location)
      }
    });
  }

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

      <View style={styles.btnContainers}>
        <Button
          onPress={onNextPress}
          height={50}
          width={100}
          text={mltiLanguages("arabic").profile}
          gradiantFirst={colors.primary_color}
          gradiantSecond={colors.primary_color}
          //   loader={loader}
        />

        <Button
          onPress={onPrePress}
          height={50}
          width={100}
          text={mltiLanguages("arabic").profile}
          textColor={colors.dark_gray}
          gradiantFirst={"#EAE4FB"}
          gradiantSecond={"#EAE4FB"}
          //   loader={loader}
        />
      </View>
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
  btnContainers: {
    flexDirection: "row",
    marginTop: normalize(10),
    marginBottom: normalize(4),
    justifyContent: "space-between",
  },
});
