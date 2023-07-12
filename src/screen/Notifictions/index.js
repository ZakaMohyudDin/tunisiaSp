import React, { useEffect, useState } from "react";
import { View, SectionList, FlatList } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import { colors } from "../../utils/colors";
import SubHeading from "../../components/SubHeading";
import Heading from "../../components/Heading";
import Headers from "../../components/Headers";
import Picture from "../../components/Picture";
import Paragraph from "../../components/Paragraph";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { getNotification } from "../../redux/actions/notificationAction";
import ScreenLoader from "../../components/ScreenLoader";
import { useFocusEffect } from "@react-navigation/native";

const DATA = [
  {
    title: "",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: mltiLanguages("arabic").register,
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: mltiLanguages("arabic").verify,
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: mltiLanguages("arabic").register,
    data: ["Cheese Cake", "Ice Cream"],
  },
];

var DATAList = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: [
      mltiLanguages("arabic").slide_desc,
      mltiLanguages("arabic").slide_desc,
    ],
    isLongPress: false,
    width: 85,
    padding: 2,
    heading: "",
    isShow: true,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: [
      mltiLanguages("arabic").slide_desc,
      mltiLanguages("arabic").slide_desc,
      mltiLanguages("arabic").slide_desc,
    ],
    isLongPress: false,
    width: 85,
    padding: 2,
    heading: "Earlier",
    isShow: false,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: [
      mltiLanguages("arabic").slide_desc,
      mltiLanguages("arabic").slide_desc,
    ],
    isLongPress: false,
    width: 85,
    heading: "This Week",
    padding: 2,
    isShow: true,
  },
];

const Notifictaion = ({ navigation }) => {
  const dispatch = useDispatch();
  const [policeisList, setPoliceisList] = useState(DATAList);
  const [loader, setLoader] = useState("");
  const { notifications } = useSelector(
    ({ notificationReducer }) => notificationReducer
  );
  const isShowFn = (index) => {
    var policiesData = policeisList;
    policiesData[index].isShow = !policiesData[index]?.isShow;
    setPoliceisList([...policiesData]);
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getNotification());
    }, [])
  );

  const Item = ({ item, index }) => (
    <View style={styles.itemStyle}>
      {!index == 0 ? (
        <TouchableOpacity
          onPress={() => isShowFn(index)}
          style={styles.flatHeight}
        >
          <SubHeading
            text={item.heading}
            fontSize={normalize(4.5)}
            weight={"600"}
            fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
          />
          {item.isShow ? (
            <Picture
              localSource={require("../../assets/uparro.png")}
              height={normalize(6)}
              width={normalize(6)}
            />
          ) : (
            <Picture
              localSource={require("../../assets/down_arrow.png")}
              height={normalize(6)}
              width={normalize(6)}
            />
          )}
        </TouchableOpacity>
      ) : (
        <View style={styles.HeadingBox}>
          <SubHeading
            text={"New"}
            fontSize={normalize(4.5)}
            weight={"600"}
            fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
          />
          <TouchableOpacity>
            <SubHeading
              text={"Marked as read"}
              fontSize={normalize(4.5)}
              weight={"600"}
              fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
            />
          </TouchableOpacity>
        </View>
      )}
      {item.isShow && (
        <>
          {item?.result?.map((element, index) => (
            <View style={styles.item}>
              <Picture
                localSource={require("../../assets/testimonials-5.jpg")}
                height={normalize(16)}
                width={normalize(16)}
                resizeMode={"stretch"}
                roundCorner={normalize(2)}
              />
              <View style={{ justifyContent: "center" }}>
                <View style={styles.listName}>
                  <Paragraph
                    text={element?.notificationSender?.userName || "Tunisi App"}
                    color={colors.black}
                    weight={"600"}
                  />
                  <Paragraph text={"1m ago"} fontSize={normalize(2.5)} />
                </View>
                <Spacer height={normalize(1.5)} />
                <Paragraph
                  text={element.userNotificationText}
                  textAlign={"left"}
                />
              </View>
            </View>
          ))}
        </>
      )}
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: normalize(4),
        backgroundColor: colors.main_background,
      }}
    >
      <Spacer height={normalize(1)} />
      <View style={{ alignSelf: "center" }}>
        <Headers openDrawer={() => navigation.openDrawer()} />
      </View>
      {/* <Spacer height={normalize(2)} /> */}

      <Spacer height={normalize(3)} />
      <FlatList
        // data={notifications}
        data={policeisList}
        renderItem={({ item, index }) => <Item item={item} index={index} />}
        keyExtractor={(item) => item.id}
        style={{ paddingBottom: 10 }}
      />

      {!notifications && <ScreenLoader />}
    </View>
  );
};

export default Notifictaion;
