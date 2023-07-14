import React, { useEffect, useState } from "react";
import { ScrollView, FlatList, View, TouchableOpacity } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import Headers from "../../components/Headers";
import { colors } from "../../utils/colors";
import SPItem from "../../components/SPItem";
import SubHeading from "../../components/SubHeading";
import Picture from "../../components/Picture";
import ReviewItems from "../../components/ReviewItems";
import VideoPlayer from "../../components/VideoPlayerComponent";

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
const ServiceProviderDetail = ({ navigation, route }) => {
  const [loader, setLoader] = useState(false);
  const [serviceItem, setServiceItem] = useState(route.params.serviceItem);
  console.log('serviceItem', route.params.serviceItem);




  const Item = ({ item }) => (
    <View style={styles.flatImgStyle}>
      <Picture
        localSource={require("../../assets/add2.jpg")}
        height={normalize(20)}
        width={normalize(24)}
        roundCorner={10}
      />
    </View>
  );

  const ItemReview = ({ item }) => <ReviewItems item={item} />;
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(3),
        backgroundColor: colors.main_background,
      }}
    >
      {/* <Headers goBack={()=>navigation.goBack()}/> */}
      <Spacer height={normalize(4)} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Picture
            localSource={require("../../assets/cross.png")}
            height={normalize(6)}
            width={normalize(6)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddServicesFive")}
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
      <SPItem
        item={serviceItem}
        offer={true}
        color={colors.main_background}
      />
      <View style={{ marginLeft: normalize(4) }}>
        <SubHeading
          text={
            serviceItem?.UserService?.userServiceLongDescription
          }
          fontSize={normalize(4.2)}
          weight={"600"}
          textAlign={"left"}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        />
      </View>

      <Spacer height={normalize(6)} />
      <FlatList
        data={DATA}
        horizontal
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        style={{ paddingBottom: 10 }}
      />
      <Spacer height={normalize(2)} />
      <SubHeading
        text={
          "Demonstration video"
        }
        fontSize={normalize(4.2)}
        weight={"600"}
        textAlign={"left"}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
      />
      <Spacer height={normalize(3)} />
      <VideoPlayer height={normalize(50)} />
      <Spacer height={normalize(3)} />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ItemReview item={item} />}
        keyExtractor={(item) => item.id}
        style={{ paddingBottom: 10 }}
      />
      <Spacer height={80} />
    </ScrollView>
  );
};

export default ServiceProviderDetail;
