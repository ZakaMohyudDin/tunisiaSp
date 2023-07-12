import React, { useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import { colors } from "../../utils/colors";
import VideoPlayerComponent from "../../components/VideoPlayerComponent";
import SubHeading from "../../components/SubHeading";
import Picture from "../../components/Picture";
import Headers from "../../components/Headers";
import VideoPlayer from "react-native-video-player";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: mltiLanguages("arabic").login,
    isLongPress: false,
    width: 85,
    padding: 2,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: mltiLanguages("arabic").verif,
    isLongPress: false,
    width: 85,
    padding: 2,
  },
  {
    id: "3ac68afc-c6ww-48d3-a4f8-fbde41aa97f63",
    title: mltiLanguages("arabic").verif,
    isLongPress: false,
    width: 85,
    padding: 2,
  },
  {
    id: "58694a0f-3da1-47q2-bd96-14557qw29d72",
    title: mltiLanguages("arabic").chat,
    isLongPress: false,
    width: 85,
    padding: 2,
  },
];
const VideoLecture = ({ navigation }) => {
  const Item = ({ item }) => (
    <TouchableOpacity style={styles.videoListBox}>
      <View style={{ justifyContent: "space-around" }}>
        <Paragraph text={"00:45"} />
        <Paragraph text={mltiLanguages("arabic").verify} />
      </View>
      <View style={{ justifyContent: "space-around", width: normalize(32) }}>
        <Paragraph
          text={mltiLanguages("arabic").verif_desc}
          weight={"600"}
          color={colors.dark_gray}
        />
        <Paragraph text={"25 " + mltiLanguages("arabic").verify} />
      </View>
      <View
        style={{
          width: 150,
          borderRadius: 10,
          backgroundColor: colors.black,
          padding: 5,
        }}
      >
        <VideoPlayer
          video={require("../../assets/SplashScreenVideo.mp4")}
          videoWidth={500}
          videoHeight={300}
          thumbnail={require("../../assets/add1.png")}
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: normalize(3),
        backgroundColor: colors.main_background,
      }}
    >
      <Headers goBack={() => navigation.goBack()} />
      <View style={styles.headerText}>
        <View style={styles.leftTitle}>
          <SubHeading
            text={mltiLanguages("arabic").register}
            color={colors.primary_color}
            fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
          />
          <View style={{ width: 4 }} />
          <Picture
            localSource={require("../../assets/plus.png")}
            height={normalize(3)}
            width={normalize(3)}
            imgColor={colors.primary_color}
          />
        </View>
        <SubHeading
          text={mltiLanguages("arabic").register}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        />
      </View>
      <Spacer height={normalize(2)} />
      <VideoPlayerComponent />
      <Spacer height={normalize(2)} />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        style={{ paddingBottom: 10 }}
      />
    </View>
  );
};

export default VideoLecture;
