import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { colors } from "../../utils/colors";
import { normalize } from "react-native-elements";
import { mltiLanguages } from "../../utils/multiLanguage";
import Paragraph from "../Paragraph";
import ImagePicker from "react-native-image-crop-picker";
import VideoPlayerComponent from "../VideoPlayerComponent";
import Spacer from "../Spacer";
import ModalImage from "../ModalImage";
import { launchCamera } from "react-native-image-picker";
import Button from "../Button";
import AWS from "aws-sdk";
import RNFetchBlob from "rn-fetch-blob";

let options = {
  mediaType: "video",
  durationLimit: 3,
  videoQuality: "high",
};
const StepTutorial3 = ({ text, onNextPress, onPrePress, setVideoUrl }) => {
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
      uploadVideoToS3(video.path)
      setVideo(video.path);
    });
  };

  AWS.config.update({
    accessKeyId: "AKIAUVWYCSDKBR2UK473",
    secretAccessKey: "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",
    region: "ap-southeast-1",
  });

  const uploadVideoToS3 = (uri) => {
    const fileUri = uri;

    // Generate a unique filename or use a specific name if desired
    const fileName = `video_${Date.now()}.mp4`;

    // Create an S3 instance
    const s3 = new AWS.S3();

    // Get the file extension
    const fileExtension = fileUri.split(".").pop();

    // Prepare the S3 upload parameters
    const params = {
      Bucket: "medical-globe",
      Key: `temp/mehna/${fileName}`,
      Body: RNFetchBlob.wrap(fileUri),
      ContentType: `video/${fileExtension}`,
    };

    // Initiate the upload
    s3.upload(params, (err, data) => {
      if (err) {
        console.log("Error uploading video:", err);
      } else {
        console.log("Video uploaded successfully:", data.Location);
        setVideoUrl(data.Location)
        // Perform any additional actions after successful upload
      }
    });
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setVideoModal(true)}
        style={styles.imgPickStyle}
      >
        <Paragraph text={mltiLanguages("arabic").phone} />
      </TouchableOpacity>
      <Spacer height={normalize(8)} />
      <VideoPlayerComponent source={vedio} />

      <ModalImage
        visible={videoModal}
        onClose={() => setVideoModal(false)}
        cameraRoll={() => recordVideo()}
        launchLibrary={() => pickVideo()}
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
export default StepTutorial3;

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
