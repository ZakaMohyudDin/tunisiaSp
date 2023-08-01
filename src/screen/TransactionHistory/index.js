import React from "react";
import { ScrollView, FlatList, View } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Headers from "../../components/Headers";
import Picture from "../../components/Picture";
import { colors } from "../../utils/colors";
import SubHeading from "../../components/SubHeading";
import Paragraph from "../../components/Paragraph";
import { useDispatch, useSelector } from 'react-redux';

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

const TransactionHistory = ({ navigation, route }) => {
  const { profitHistory } = useSelector(
    ({ userProfitReducer }) => userProfitReducer
  );
  const Item = ({ item }) => (
    <View style={styles.item}>
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
          color={colors.black}
        />
        <Spacer height={normalize(1)} />
        <Paragraph
          text={mltiLanguages("arabic").verif_desc}
          fontSize={normalize(3)}
          textAlign={"left"}
        />
      </View>
      <View style={{ width: normalize(22) }}>
        <Paragraph
          text={mltiLanguages("arabic").more}
          fontSize={normalize(3)}
          textAlign={"left"}
        />
        <Spacer height={normalize(1)} />
        <Paragraph
          text={(route?.params?.confirmed ? item?.userProfitsConfirmed : item.userProfitsNoConfirmed) + " " + "دینار"}
          // fontSize={normalize(3)}
          textAlign={"center"}
          color={colors.primary_color}
        />
      </View>
    </View>
  );

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(2),
        backgroundColor: colors.main_background,
      }}
    >
      <Spacer height={normalize(1)} />

      <Headers
        goBack={() => navigation.goBack()}
        openDrawer={() => navigation.openDrawer()}
      />

      <Spacer height={normalize(1)} />
      <Spacer height={normalize(3)} />
      <View style={{ marginRight: normalize(2.5) }}>
        <SubHeading
          text={mltiLanguages("arabic").cart}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        />
      </View>
      <Spacer height={normalize(2)} />
      <FlatList
        data={profitHistory}
        // numColumns={1}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

export default TransactionHistory;
