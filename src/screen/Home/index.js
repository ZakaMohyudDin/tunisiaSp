import React, { useEffect, useState } from "react";
import { ScrollView, FlatList, TouchableOpacity, View } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Headers from "../../components/Headers";
import Picture from "../../components/Picture";
// import {colors} from '../../utils/colors';
import { colors, colorsFn } from "../../utils/colors";
import SubHeading from "../../components/SubHeading";
import LinearGradient from "react-native-linear-gradient";
import Paragraph from "../../components/Paragraph";
import Slider from "../../components/Slider";
import { getCategory, setDarkTheme } from "../../redux/actions/serviceAction";
import { useDispatch, useSelector } from "react-redux";
import ModalComponent from "../../components/ModalComponent";
import { setThemeValue } from "../../utils/colors";
import { getSlidersAction } from "../../redux/actions/authAction";
import { getOrders } from "../../redux/actions/orderAction";

const transactionList = [
  {
    id: 1,
    title: "asd",
    grad1: colorsFn().gradiant1,
    grad2: colorsFn().gradiant2,
  },
  {
    id: 2,
    title: "asd",
    grad1: "#56ACED",
    grad2: "#93C4FA",
  },
];
const DATA = [
  {
    id: 1,
    title: "Technicians",
    grad1: "#AD92D0",
    grad2: "#7445AD",
    img: require("../../assets/profesion1.png"),
  },
  {
    id: 2,
    title: "Technicians",
    grad1: "#7445AD",
    grad2: "#7445AD",
    img: require("../../assets/person2.png"),
  },
  {
    id: 3,
    title: "Technicians",
    grad1: "#AD92D0",
    grad2: "#7445AD",
    img: require("../../assets/person3.png"),
  },
  {
    id: 4,
    title: "Technicians",
    grad1: "#7445AD",
    grad2: "#7445AD",
    img: require("../../assets/profesion1.png"),
  },
];
const imagList = [
  require("../../assets/slider3.jpeg"),
  require("../../assets/slider1.jpeg"),
  require("../../assets/slider2.jpeg"),
];
const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { token, homeSlider, currentUser, serviceTypeId } = useSelector(
    ({ authReducer }) => authReducer
  );
  const { orderList } = useSelector(({ orderReducers }) => orderReducers);
  const { categoryList, subCategoryList, isDark, isDor } = useSelector(
    ({ serviceReducer }) => serviceReducer
  );
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(getCategory(token, isDor.id));
    dispatch(getOrders(serviceTypeId));
    dispatch(getSlidersAction("home"));
    // dispatch(setDarkTheme(false))
    // setThemeValue(true)
  }, []);
  const Item = ({ item, index }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("SubCategory", { categoryId: item.id })
      }
    >
      {index % 2 == 0 ? (
        <LinearGradient
          style={styles.item}
          colors={["#AD92D0", "#AD92D0", "#7445AD"]}
        >
          <Spacer height={normalize(1)} />
          {item.img ? (
            <Picture
              uriSourc={item.img}
              height={normalize(32)}
              width={normalize(32)}
              roundCorner={normalize(2)}
              alignSelf={"center"}
              resizeMode={"contain"}
            />
          ) : (
            <Picture
              localSource={require("../../assets/profesion1.png")}
              height={normalize(32)}
              width={normalize(32)}
              roundCorner={normalize(2)}
              alignSelf={"center"}
              resizeMode={"contain"}
            />
          )}
        </LinearGradient>
      ) : (
        <LinearGradient
          style={styles.item}
          colors={["#7445AD", "#7445AD", "#7445AD"]}
        >
          <Spacer height={normalize(1)} />
          <Spacer height={normalize(1)} />
          {item.img ? (
            <Picture
              uriSourc={item.img}
              height={normalize(32)}
              width={normalize(32)}
              roundCorner={normalize(2)}
              alignSelf={"center"}
              resizeMode={"contain"}
            />
          ) : (
            <Picture
              localSource={require("../../assets/profesion1.png")}
              height={normalize(32)}
              width={normalize(32)}
              roundCorner={normalize(2)}
              alignSelf={"center"}
              resizeMode={"contain"}
            />
          )}
        </LinearGradient>
      )}
      <Spacer height={normalize(1.5)} />
      <Paragraph
        text={item.typeName}
        // text={"On Line"}
        // color={colors.white}
        weight={"600"}
        textAlign={"center"}
        color={colors.dark_gray}
      />
    </TouchableOpacity>
  );

  const TransactionItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => setModalVisible(true)}
      style={styles.itemTransaction}
    >
      <Picture
        localSource={require("../../assets/testimonials-1.jpg")}
        height={normalize(16)}
        width={normalize(16)}
        roundCorner={normalize(3)}
      />
      <View style={{ width: normalize(45) }}>
        <Paragraph
          text={mltiLanguages("arabic").register}
          textAlign={"left"}
          color={colorsFn().black}
        />
        <Spacer height={normalize(1)} />
        <Paragraph
          text={mltiLanguages("arabic").verif_desc}
          fontSize={normalize(3)}
          textAlign={"left"}
        />
      </View>
      <View style={{ width: normalize(22) }}>
        <Paragraph text={"27-03-23 11:30"} fontSize={normalize(3)} />
        <Spacer height={normalize(1)} />
        <Paragraph
          text={mltiLanguages("arabic").more}
          fontSize={14}
          color={colorsFn().primary_color}
          textAlign={"center"}
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(3),
        backgroundColor: colorsFn().main_background,
      }}
    >
      <Spacer height={normalize(1)} />
      <Headers
        openDrawer={() => navigation.openDrawer()}
        goToAddService={() => navigation.navigate("AddServicesFive")}
      />
      <Spacer height={normalize(1)} />
      <View style={{ alignSelf: "center", height: 200 }}>
        <Slider list={imagList} />
      </View>
      <Spacer height={normalize(3)} />
      <SubHeading
        text={"Last Reservations"}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        textAlign={"left"}
        fontSize={normalize(4.5)}
        weight={"600"}
      />
      <Spacer height={normalize(2)} />
      <FlatList
        data={transactionList}
        renderItem={({ item, index }) => (
          <TransactionItem item={item} index={index} />
        )}
        keyExtractor={(item) => item.id}
      />
      <Spacer height={normalize(3)} />
      {subCategoryList && (
        <>
          <SubHeading
            text={"Categories"}
            fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
            textAlign={"left"}
            fontSize={normalize(4.5)}
            weight={"600"}
          />
          <Spacer height={normalize(2)} />
          <FlatList
            data={subCategoryList}
            // data={DATA}
            horizontal
            renderItem={({ item, index }) => <Item item={item} index={index} />}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
      <Spacer height={normalize(2)} />
      <ModalComponent
        modalVisible={modalVisible}
        onPress={() => setModalVisible(false)}
      />
    </ScrollView>
  );
};

export default Home;
