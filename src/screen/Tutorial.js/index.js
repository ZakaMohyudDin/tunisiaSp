import React, { useState } from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import SPItem from "../../components/SPItem";
import Picture from "../../components/Picture";
import SubHeading from "../../components/SubHeading";

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
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: mltiLanguages("arabic").chat,
    isLongPress: false,
    width: 85,
    padding: 2,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbde41aa97f63",
    title: mltiLanguages("arabic").verif,
    isLongPress: false,
    width: 85,
    padding: 2,
  },
  {
    id: "58694a0f-3da1-471f-bd96-14557qw29d72",
    title: mltiLanguages("arabic").chat,
    isLongPress: false,
    width: 85,
    padding: 2,
  },
  {
    id: "58694a0f-3ee1-471f-bd96-145571e29d72",
    title: mltiLanguages("arabic").chat,
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
const Tutorial = ({ navigation }) => {
  const [showMenu, setShowMenue] = useState(false);
  const Item = ({ item }) => (
    <View style={styles.tutorialBox}>
      <TouchableOpacity onPress={() => navigation.navigate("VideoLecture")}>
        <Picture
          localSource={require("../../assets/add1.png")}
          height={normalize(38)}
          width={normalize(88)}
          alignSelf={"center"}
          roundCorner={normalize(1)}
        />
      </TouchableOpacity>
      <Spacer height={normalize(2)} />
      <View style={styles.title}>
        <Paragraph text={"01:20"} marginLeft={4} />
        <SubHeading
          text={mltiLanguages("arabic").sub_header + " Reactjs"}
          color={colors.subHeading}
          weight={"600"}
          marginRight={4}
        />
      </View>
      <SPItem
        item={item}
        padding={0}
        onPress={() => navigation.navigate("ServiceProviderDetail")}
      />
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: normalize(3),
        backgroundColor: colors.white,
      }}
    >
      <Headers
        filter={() => setShowMenue(!showMenu)}
        goBack={() => navigation.navigate("ServiceProviderList")}
      />

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        style={{ paddingBottom: 10 }}
      />
    </View>
  );
};

export default Tutorial;
