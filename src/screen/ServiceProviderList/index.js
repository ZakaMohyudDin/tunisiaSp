import React, { useState } from "react";
import { FlatList, TouchableOpacity, View} from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import Picture from "../../components/Picture";
import { Rating } from "react-native-elements";
import SPItem from "../../components/SPItem";
import SubHeading from "../../components/SubHeading";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: mltiLanguages("arabic").login,
    isLongPress: false,
    width: 85,
    padding: 2,
    opacity: 0.99,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: mltiLanguages("arabic").verif,
    isLongPress: false,
    width: 85,
    padding: 2,
    opacity: 0.99,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: mltiLanguages("arabic").chat,
    isLongPress: false,
    width: 85,
    padding: 2,
    opacity: 0.99,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbde41aa97f63",
    title: mltiLanguages("arabic").verif,
    isLongPress: false,
    width: 85,
    padding: 2,
    opacity: 0.99,
  },
  {
    id: "58694a0f-3da1-471f-bd96-14557qw29d72",
    title: mltiLanguages("arabic").chat,
    isLongPress: false,
    width: 85,
    padding: 2,
    opacity: 0.99,
  },
  {
    id: "58694a0f-3ee1-471f-bd96-145571e29d72",
    title: mltiLanguages("arabic").chat,
    isLongPress: false,
    width: 85,
    padding: 2,
    opacity: 0.99,
  },
  {
    id: "3ac68afc-c6ww-48d3-a4f8-fbde41aa97f63",
    title: mltiLanguages("arabic").verif,
    isLongPress: false,
    width: 85,
    padding: 2,
    opacity: 0.99,
  },
  {
    id: "58694a0f-3da1-47q2-bd96-14557qw29d72",
    title: mltiLanguages("arabic").chat,
    isLongPress: false,
    width: 85,
    padding: 2,
    opacity: 0.99,
  },
];
const ServiceProviderList = ({ navigation }) => {
  const [showMenu, setShowMenue] = useState(false);
  const [spList, setSpList] = useState(DATA);
  const [opacityTogle, setOpacityTogle] = useState(1);

  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };

  const openMenu = (index) => {
    var updateList = spList;
    updateList.map((obj) => (obj.opacity = 0.1));
    updateList[index].opacity = 1;
    setSpList([...updateList]);
    setOpacityTogle(0.1);
  };
  const navigateToTutorial = () => {
    navigation.navigate("TutorialSP");
    var updateList = spList;
    updateList.map((obj) => (obj.opacity = 0.99));
    setSpList([...updateList]);
    setOpacityTogle(1);
  };
  const Item = ({ item, index }) => (
    <SPItem
      item={item}
      offer={true}
      menuNavigate={() => navigateToTutorial()}
      disable={item.opacity == 0.99 ? false : true}
      color={colors.white}
      longPress={() => openMenu(index)}
      opacity={item.opacity}
      onPress={() => navigation.navigate("ServiceProviderDetail")}
    />
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.main_background,
      }}
    >
      <View style={{ opacity: opacityTogle, paddingHorizontal: normalize(3) }}>
        <Spacer height={normalize(1)} />
        <Headers addService={true} openDrawer={() => navigation.openDrawer()} />
        <Spacer height={normalize(2)} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <SubHeading
            text={mltiLanguages("arabic").home}
            weight={"600"}
            fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("AddServicesTutorial")}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Picture
              localSource={require("../../assets/plus.png")}
              height={normalize(4)}
              width={normalize(4)}
              imgColor={colors.primary_color}
            />
            <View style={{ width: 8 }} />

            <SubHeading
              text={mltiLanguages("arabic").home}
              color={colors.primary_color}
              weight={"600"}
              fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
            />
          </TouchableOpacity>
        </View>
        <Spacer height={normalize(2)} />
      </View>
      <FlatList
        data={spList}
        renderItem={({ item, index }) => <Item item={item} index={index} />}
        keyExtractor={(item) => item.id}
        style={{ paddingBottom: 10 }}
      />
    </View>
  );
};

export default ServiceProviderList;
