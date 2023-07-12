import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { colors } from "../../utils/colors";
import { normalize } from "react-native-elements";
import { mltiLanguages } from "../../utils/multiLanguage";
import Paragraph from "../Paragraph";
import ImagePicker from "react-native-image-crop-picker";
import VideoPlayer from "../VideoPlayerComponent";
import Spacer from "../Spacer";
import ModalImage from "../ModalImage";
import { launchCamera } from "react-native-image-picker";

let options = {
  mediaType: "video",
  durationLimit: 3,
  videoQuality: "high",
};
const Step3 = ({ text }) => {
  const [vedio, setVideo] = useState("");
  const [videoModal, setVideoModal] = useState(false);

  const recordVideo = async () => {
    const result = await launchCamera(options);
    console.log(result);
  };

  const pickVideo = () => {
    ImagePicker.openPicker({
      mediaType: "video",
    }).then((video) => {
      console.log(video.path);
      // setVideo(video.path);
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setVideoModal(true)} style={styles.imgPickStyle}>
        <Paragraph text={mltiLanguages("arabic").phone} />
      </TouchableOpacity>
      <Spacer height={normalize(8)} />
      <VideoPlayer source={vedio} />

      <ModalImage
        visible={videoModal}
        onClose={() => setVideoModal(false)}
        cameraRoll={() => recordVideo()}
        launchLibrary={() => pickVideo()}
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
