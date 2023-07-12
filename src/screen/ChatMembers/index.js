import React, { useEffect, useState, useRef } from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  Pressable,
  Alert,
} from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import Heading from "../../components/Heading";
import Picture from "../../components/Picture";
import Paragraph from "../../components/Paragraph";
import { isBlurAction } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "react-native-paper";
import BlurScreen from "../../components/BlurScreen";
import SubHeading from "../../components/SubHeading";
const windowHeight = Dimensions.get("window").height;
import MemberComponent from "../../components/MemberComponent";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: mltiLanguages("arabic").login,
    isLongPress: false,
    width: 85,
    padding: 2,
    sms: 2,
    opacity: 0.99,
    isOnline: true,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: mltiLanguages("arabic").chat,
    isLongPress: false,
    width: 85,
    padding: 2,
    sms: null,
    opacity: 0.99,
    isOnline: false,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: mltiLanguages("arabic").chat,
    isLongPress: false,
    width: 85,
    padding: 2,
    sms: null,
    opacity: 0.99,
    isOnline: false,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbde41aa97f63",
    title: mltiLanguages("arabic").login,
    isLongPress: false,
    width: 85,
    padding: 2,
    sms: 1,
    opacity: 0.99,
    isOnline: true,
  },
  {
    id: "58694a0f-3da1-471f-bd96-14557qw29d72",
    title: mltiLanguages("arabic").chat,
    isLongPress: false,
    width: 85,
    padding: 2,
    sms: null,
    opacity: 0.99,
    isOnline: false,
  },
  {
    id: "58694a0f-3ee1-471f-bd96-145571e29d72",
    title: mltiLanguages("arabic").chat,
    isLongPress: false,
    width: 85,
    padding: 2,
    opacity: 0.99,
    sms: null,
    isOnline: false,
  },
  {
    id: "3ac68afc-c6ww-48d3-a4f8-fbde41aa97f63",
    title: mltiLanguages("arabic").verif,
    isLongPress: false,
    width: 85,
    padding: 2,
    sms: null,
    opacity: 0.99,
    isOnline: false,
  },
  {
    id: "58694a0f-3da1-47q2-bd96-14557qw29d72",
    title: mltiLanguages("arabic").chat,
    isLongPress: false,
    width: 85,
    padding: 2,
    sms: null,
    opacity: 0.99,
    isOnline: false,
  },
];
const ChatMembers = ({ navigation }) => {
  const { isBlur, token } = useSelector(({ authReducer }) => authReducer);
  const [widthonLP, setWidthonLP] = useState(80);
  const [paddingonLP, setPaddingonLP] = useState(2);
  const [seletedItem, setSeletedItem] = useState("");

  const fadeAnim = useRef(new Animated.Value(90)).current;
  const [memberList, setMemberList] = useState(DATA);
  const dispatch = useDispatch();

  const componentRef = useRef(null);

  const handleMeasure = () => {
    componentRef.current.measure((x, y, width, height, pageX, pageY) => {
      console.log("Component position:");
      console.log("x:", x);
      console.log("y:", y);
      console.log("width:", width);
      console.log("height:", height);
      console.log("pageX:", pageX);
      console.log("pageY:", pageY);
    });
  };

  const isLongPress = (index, item) => {
    dispatch(isBlurAction(true));
    // setSeletedItem(item);
    var updateList = memberList;
    updateList.map((obj) => (obj.opacity = 0.1));
    updateList[index].opacity = 1;
    setMemberList([...updateList]);
    // handleMeasure()
  };

  const navigateToChat = (screen) => {
    navigation.navigate(screen);
    dispatch(isBlurAction(false));
    var updateList = memberList;
    updateList.map((obj) => (obj.opacity = 0.99));
    setMemberList([...updateList]);
  };

  const resetList = () => {
    if (isBlur) {
      dispatch(isBlurAction(false));
      var updateList = memberList;
      updateList.map((obj) => (obj.opacity = 0.99));
      setMemberList([...updateList]);
    }
  };

  const Item = ({ title }) => (
    <TouchableOpacity
      disabled={isBlur ? true : false}
      style={[styles.item, { opacity: isBlur ? 0.1 : 1 }]}
    >
      <Picture
        localSource={require("../../assets/testimonials-2.jpg")}
        height={normalize(14)}
        width={normalize(14)}
        roundCorner={normalize(16)}
      />
      <Spacer height={normalize(1)} />
      <Paragraph
        text={title}
        color={colors.dark_gray}
        fontSize={normalize(3.2)}
      />
      <View style={styles.onLine} />
    </TouchableOpacity>
  );

  const ItemMember = ({ title, item, index }) => (
    <TouchableOpacity
      disabled={item.opacity !== 0.99 ? true : false}
      onPress={() => navigation.navigate("ChatScreen")}
      onLongPress={() => isLongPress(index, item)}
      // ref={componentRef}
    >
      <View
        style={[
          item.opacity == 1 ? styles.shadowByCondition : styles.itemMembers,
          {
            width: normalize(92),
            opacity: item.opacity,
            backgroundColor: "white",
            // backgroundColor: item.opacity == 0.1 ? 'rgba(255, 0, 0, 0.1);' : colors.white
            // zIndex: -1,
            // position: 'absolute'
          },
        ]}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: item.opacity == "1" ? normalize(3) : 0,
          }}
        >
          <Picture
            localSource={require("../../assets/testimonials-5.jpg")}
            height={item.opacity == "1" ? normalize(10) : normalize(14)}
            width={item.opacity == "1" ? normalize(10) : normalize(14)}
            resizeMode={"stretch"}
            roundCorner={normalize(2)}
          />
          {item.isOnline && <View style={styles.onLineList} />}
        </View>
        <View style={{ justifyContent: "center" }}>
          <View style={styles.listName}>
            <Paragraph
              text={mltiLanguages("arabic").register}
              color={colors.black}
              weight={"600"}
            />
            <Paragraph text={"1m ago"} fontSize={normalize(2.5)} />
          </View>
          <Spacer height={normalize(1.5)} />
          <View style={{ flexDirection: "row" }}>
            <Paragraph
              text={mltiLanguages("arabic").login_subtitle}
              textAlign={"left"}
              fontSize={12}
            />
            {item.sms && (
              <View style={styles.unreadSms}>
                <Text style={styles.unreadSmsCount}>3</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      {item.opacity == 1 && (
        <View style={styles.customPopDown}>
          <TouchableOpacity
            onPress={() => navigateToChat("AudioCallScreen")}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: normalize(3),
              paddingTop: normalize(2),
              paddingBottom: normalize(1),
            }}
          >
            <Paragraph
              text={"voice call"}
              color={colors.dark_gray}
              weight={"600"}
              fontSize={normalize(3.8)}
            />
            <Picture
              localSource={require("../../assets/call.png")}
              height={normalize(5)}
              width={normalize(5)}
            />
          </TouchableOpacity>
          <View style={styles.hr} />
          <TouchableOpacity
            onPress={() => navigateToChat("VideoCallScreen")}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: normalize(3),
              paddingTop: normalize(2),
              paddingBottom: normalize(1),
            }}
          >
            <Paragraph
              text={"video call"}
              color={colors.dark_gray}
              weight={"600"}
              fontSize={normalize(3.8)}
            />
            <Picture
              localSource={require("../../assets/videoOutlin.png")}
              height={normalize(3.5)}
              width={normalize(5)}
            />
          </TouchableOpacity>
          <View style={styles.hr} />
          <TouchableOpacity
            onPress={() => navigateToChat("ChatMember")}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: normalize(3),
              paddingTop: normalize(2),
              paddingBottom: normalize(1),
            }}
          >
            <Paragraph
              text={"delete conversation"}
              weight={"600"}
              fontSize={normalize(3.8)}
              color={colors.red}
            />
            <Picture
              localSource={require("../../assets/delete.png")}
              height={normalize(5)}
              width={normalize(5)}
              imgColor={colors.red}
            />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
        // paddingHorizontal: normalize(4),
        backgroundColor: colors.main_background,
        alignItems: "center",
      }}
    >
      <Pressable
        onPress={() => resetList()}
        disabled={isBlur ? false : true}
        style={{ alignItems: "center" }}
      >
        <View
          style={{ opacity: isBlur ? 0.1 : 1, paddingHorizontal: normalize(4) }}
        >
          <Spacer height={normalize(1)} />
          <Headers openDrawer={() => navigation.openDrawer()} />
          <Spacer height={normalize(1)} />
          <SubHeading
            text={"Online friend"}
            fontSize={normalize(4.5)}
            weight={"600"}
            textAlign={"left"}
            fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
          />
          <Spacer height={normalize(1)} />
        </View>
        <FlatList
          data={DATA}
          horizontal
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
        <FlatList
          data={memberList}
          ref={componentRef}
          renderItem={({ item, index }) => (
            <ItemMember title={item.title} item={item} index={index} />
          )}
          keyExtractor={(item) => item.id}
          style={{ maxHeight: "66%", paddingBottom: 10 }}
        />
        {false && (
          <View style={{position:'absolute', top:0, bottom: 0, left: 0, right: 0}}>
            <BlurScreen>
              {/* <MemberComponent item={seletedItem} /> */}
            </BlurScreen>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default ChatMembers;
