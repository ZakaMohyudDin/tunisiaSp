import React, { useState, useEffect } from "react";
import { ScrollView, FlatList, View, TouchableOpacity } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Headers from "../../components/Headers";
import Picture from "../../components/Picture";
import { colors } from "../../utils/colors";
import SubHeading from "../../components/SubHeading";
import Paragraph from "../../components/Paragraph";
import { Picker } from "@react-native-picker/picker";
import ModalComponent from "../../components/ModalComponent";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/actions/serviceAction";
import { useFocusEffect } from "@react-navigation/native";
import { getOrdersType, getOrders } from "../../redux/actions/orderAction";
import moment from "moment";

const Data = [
  {
    id: 1,
    title: "asd",
    grad1: colors.gradiant1,
    grad2: colors.gradiant2,
  },
  {
    id: 2,
    title: "asd",
    grad1: "#56ACED",
    grad2: "#93C4FA",
  },
  {
    id: 3,
    title: "asd",
    grad1: "#56ACED",
    grad2: "#93C4FA",
  },
  {
    id: 4,
    title: "asd",
    grad1: colors.gradiant1,
    grad2: colors.gradiant2,
  },
];

const History = ({ navigation }) => {
  const dispatch = useDispatch();
  const { orderTypeList, orderList } = useSelector(
    ({ orderReducers }) => orderReducers
  );
  const { serviceTypeId } = useSelector(({ authReducer }) => authReducer);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [orderStatus, setOrderStatus] = useState("All Services");

  useFocusEffect(
    React.useCallback(() => {
      // console.log("\n\n ==>running......", serviceTypeId);
      dispatch(getOrdersType());
      dispatch(getOrders(serviceTypeId));
    }, [])
  );
  const Item = ({ item }) => (
    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.item}>
      <Picture
        localSource={require("../../assets/testimonials-1.jpg")}
        height={normalize(16)}
        width={normalize(16)}
        roundCorner={normalize(3)}
      />
      <View style={{ width: normalize(45) }}>
        <Paragraph
          text={item.userOrderTitle}
          textAlign={"left"}
          color={colors.black}
        />
        <Spacer height={normalize(1)} />
        <Paragraph
          text={item.userOrderDescription}
          fontSize={normalize(3)}
          textAlign={"left"}
        />
      </View>
      <View style={{ width: normalize(22) }}>
        <Paragraph
          text={moment(item.userOrderDate).format("DD-MM-YY hh:mm")}
          fontSize={normalize(3)}
        />

        <Spacer height={normalize(1)} />
        <Paragraph
          text={mltiLanguages("arabic").more}
          fontSize={14}
          color={colors.primary_color}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(4),
        backgroundColor: colors.main_background,
      }}
    >
      <Spacer height={normalize(1)} />
      <Headers />
      {console.log("\n\n orderTypeList ", orderTypeList)}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SubHeading
          text={"My bookings"}
          fontSize={normalize(4.5)}
          weight={"600"}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        />
        <Picker
          style={{ width: "38%", color: colors.light1_gray }}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="Freelance" value="Freelance" />
          <Picker.Item label="Distance" value="Distance" />
          <Picker.Item label="Medical" value="Medical" />
          <Picker.Item label="Training" value="Training" />
        </Picker>

        {orderTypeList && (
          <Picker
            style={{ width: "36%", color: colors.light1_gray }}
            selectedValue={orderStatus}
            onValueChange={(itemValue, itemIndex) => setOrderStatus(itemValue)}
          >
            {orderTypeList.map((obj) => (
              <Picker.Item label={obj.orderTypeName} value={obj.id} />
            ))}
          </Picker>
        )}
      </View>

      <Spacer height={normalize(2)} />
      <FlatList
        data={orderList}
        // numColumns={1}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
      <ModalComponent
        modalVisible={modalVisible}
        onPress={() => setModalVisible(false)}
      />
    </ScrollView>
  );
};

export default History;
