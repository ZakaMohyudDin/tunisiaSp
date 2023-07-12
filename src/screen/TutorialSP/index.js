import React, { useState } from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import Slider from "../../components/Slider";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import Picture from "../../components/Picture";
import SubHeading from "../../components/SubHeading";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: mltiLanguages("arabic").login,
    isShow: false,
    width: 85,
    padding: 2,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: mltiLanguages("arabic").verif,
    isShow: false,
    width: 85,
    padding: 2,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: mltiLanguages("arabic").chat,
    isShow: false,
    width: 85,
    padding: 2,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbde41aa97f63",
    title: mltiLanguages("arabic").verif,
    isShow: false,
    width: 85,
    padding: 2,
  },
  {
    id: "58694a0f-3da1-471f-bd96-14557qw29d72",
    title: mltiLanguages("arabic").chat,
    isShow: false,
    width: 85,
    padding: 2,
  },
  {
    id: "58694a0f-3ee1-471f-bd96-145571e29d72",
    title: mltiLanguages("arabic").chat,
    isShow: false,
    width: 85,
    padding: 2,
  },
  {
    id: "3ac68afc-c6ww-48d3-a4f8-fbde41aa97f63",
    title: mltiLanguages("arabic").verif,
    isShow: false,
    width: 85,
    padding: 2,
  },
  {
    id: "58694a0f-3da1-47q2-bd96-14557qw29d72",
    title: mltiLanguages("arabic").chat,
    isShow: false,
    width: 85,
    padding: 2,
  },
];
const TutorialSP = ({ navigation }) => {
  const [showMenu, setShowMenue] = useState(false);
  const [tutorialList, setTutorialList] = useState(DATA);

  const showDetail = (index) => {
    var tutorialData = tutorialList;
    tutorialData[index].isShow = !tutorialData[index].isShow;
    setTutorialList([...tutorialData]);
  };

  const Item = ({ item, index }) => (
    <View style={styles.tutorialBox}>
      <TouchableOpacity onPress={() => navigation.navigate("VideoLecture")}>
        <Picture
          localSource={require("../../assets/slider2.jpeg")}
          height={normalize(38)}
          width={normalize(88)}
          alignSelf={"center"}
          roundCorner={10}
        />
      </TouchableOpacity>
      <Spacer height={normalize(2)} />
      <TouchableOpacity onPress={() => showDetail(index)} style={styles.title}>
        {item.isShow ? (
          <Picture
            localSource={require("../../assets/uparro.png")}
            height={normalize(4)}
            width={normalize(4)}
          />
        ) : (
          <Picture
            localSource={require("../../assets/down_arrow.png")}
            height={normalize(4)}
            width={normalize(4)}
          />
        )}

        <Paragraph
          // fontSize={normalize(4.2)}
          text={" 30" + mltiLanguages("arabic").day}
          // weight={"600"}
          textAlign={"left"}
          color={colors.light1_gray}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        />

        <SubHeading
          fontSize={normalize(4.2)}
          text={mltiLanguages("arabic").sub_header + " Reactjs"}
          weight={"600"}
          textAlign={"left"}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        />
      </TouchableOpacity>

      {item.isShow && (
        <Paragraph
          text={
            mltiLanguages("arabic").slide_desc +
            mltiLanguages("arabic").slide_desc +
            mltiLanguages("arabic").slide_desc
          }
        />
      )}
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: normalize(3),
        backgroundColor: colors.main_background,
      }}
    >
      <Headers
        filter={() => setShowMenue(!showMenu)}
        goBack={() => navigation.navigate("ServiceProviderList")}
      />

      <FlatList
        data={tutorialList}
        renderItem={({ item, index }) => <Item item={item} index={index} />}
        keyExtractor={(item) => item.id}
        style={{ paddingBottom: 10 }}
      />
    </View>
  );
};

export default TutorialSP;
