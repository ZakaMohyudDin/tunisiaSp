import React, { useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import Picture from "../../components/Picture";
import SubHeading from "../../components/SubHeading";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/actions/serviceAction";

const DATA = [
  {
    id: 1,
    title: "asd",
  },
  {
    id: 2,
    title: "asd",
  },
  {
    id: 1,
    title: "asd",
  },
  {
    id: 2,
    title: "asd",
  },
  {
    id: 1,
    title: "asd",
  },
  {
    id: 2,
    title: "asd",
  },
];

const SubCategory = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { token } = useSelector(({ authReducer }) => authReducer);
  const { subCategoryList, subSubCategory } = useSelector(
    ({ serviceReducer }) => serviceReducer
  );
  useEffect(() => {
    console.log("\n\n ==> route : ", subSubCategory);
    dispatch(getCategory(token, route?.params?.categoryId, true));
  }, []);
  const Item = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("AddServices")}>
      <View style={styles.item}>
        <Spacer height={normalize(1)} />
        <Picture
          localSource={require("../../assets/profesion1.png")}
          height={normalize(20)}
          width={normalize(20)}
          alignSelf={"center"}
          resizeMode={"contain"}
        />
        <SubHeading
          text={item.typeName}
          textAlign={"center"}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
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
      <Spacer height={normalize(1)} />
      <Headers
        goBack={() => navigation.navigate("TopTab", { screen: "Home" })}
        title={mltiLanguages("arabic").sub_catrgory}
      />
      <FlatList
        data={subSubCategory}
        // data={DATA}
        numColumns={3}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SubCategory;
