import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import { colors } from "../../utils/colors";
import SubHeading from "../../components/SubHeading";
import ServiceTypeBoxEng from "../../components/ServiceTypeBoxEng";
import { setRole, setUserType } from "../../redux/actions/serviceAction";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/actions/serviceAction";
import { useFocusEffect } from "@react-navigation/native";
import ScreenLoader from "../../components/ScreenLoader";

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
];
const ServiceType = ({ navigation }) => {
  const dispatch = useDispatch();
  const { token, currentUser, serviceTypeId } = useSelector(
    ({ authReducer }) => authReducer
  );
  const { categoryList, isDark } = useSelector(
    ({ serviceReducer }) => serviceReducer
  );
  const [loader, setLoader] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getCategory(token));
    }, [])
  );

  const setRoleFN = (isRole, id) => {
    setLoader(true);
    var role = {
      role: isRole,
      id: id,
    };
    dispatch(setRole(role));
    var data = {
      userId: currentUser?.id,
      userTypeParent: null,
      typeId: id,
    };

    dispatch(
      setUserType(token, data, () => {
        setLoader(false);
        navigation.navigate("TopTab");
      })
    );
  };

  const Item = ({ item, index }) => (
    <View style={styles.item}>
      <ServiceTypeBoxEng
        onPress={() => setRoleFN(true, item.id)}
        img={require("../../assets/Rock.png")}
        text={item.typeDescription}
        title={item.typeName}
        imgHeight={normalize(24)}
        imgWidth={normalize(30)}
      />
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
      <Spacer height={normalize(16)} />
      <SubHeading
        text={"We do great services here"}
        textAlign={"center"}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
      />
      <Paragraph
        text={
          "We strive to provide reliable services in the Arab world that connect exceptional service providers with the largest number of customers"
        }
        textAlign={"center"}
      />
      <Spacer height={normalize(3)} />
      {categoryList && (
        <FlatList
          data={categoryList}
          renderItem={({ item, index }) => <Item item={item} index={index} />}
          keyExtractor={(item) => item.id}
          style={{ paddingBottom: 40 }}
        />
      )}

      {loader && <ScreenLoader />}
    </View>
  );
};

export default ServiceType;
