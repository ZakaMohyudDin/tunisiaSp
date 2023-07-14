import React, { useEffect, useState } from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { normalize, policiesFarmater } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import Picture from "../../components/Picture";
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getUsagePolicy } from "../../redux/actions/usagePolicyAction";

var DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: [
      mltiLanguages("arabic").slide_desc,
      // mltiLanguages("arabic").slide_desc,
    ],
    isLongPress: false,
    width: 85,
    padding: 2,
    isShow: true,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: [mltiLanguages("arabic").slide_desc],
    isLongPress: false,
    width: 85,
    padding: 2,
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
    padding: 2,
    isShow: true,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbde41aa97f63",
    title: [mltiLanguages("arabic").slide_desc],
    isLongPress: false,
    width: 85,
    padding: 2,
    isShow: true,
  },
  {
    id: "58694a0f-3da1-471f-bd96-14557qw29d72",
    title: [mltiLanguages("arabic").slide_desc],
    isLongPress: false,
    width: 85,
    padding: 2,
    isShow: true,
  },
  {
    id: "58694a0f-3ee1-471f-bd96-145571e29d72",
    title: [mltiLanguages("arabic").slide_desc],
    isLongPress: false,
    width: 85,
    padding: 2,
    isShow: true,
  },
  {
    id: "3ac68afc-c6ww-48d3-a4f8-fbde41aa97f63",
    title: [mltiLanguages("arabic").slide_desc],
    isLongPress: false,
    width: 85,
    padding: 2,
    isShow: true,
  },
  {
    id: "58694a0f-3da1-47q2-bd96-14557qw29d72",
    title: [mltiLanguages("arabic").slide_desc],
    isLongPress: false,
    width: 85,
    padding: 2,
    isShow: true,
  },
];
const Policies = ({ navigation }) => {

  const dispatch = useDispatch();
  const [policeisList, setPoliceisList] = useState(DATA);
  const { usage_policy } = useSelector(
    ({ usagePolicyReducer }) => usagePolicyReducer
  );


  const isShowFn = (index) => {
    var policiesData = policeisList;
    policiesData[index].isShow = !policiesData[index]?.isShow;
    setPoliceisList([...policiesData]);
  };

  useEffect(() => {
    console.log('usagePlocy', usage_policy);
    if (usage_policy?.length) {
      let finalPolicies = policiesFarmater(usage_policy);
      setPoliceisList(finalPolicies);
      console.log('policies_reducer', finalPolicies);
    }
  }, [usage_policy]);


  useFocusEffect(
    React.useCallback(() => {
      console.log('requested');
      dispatch(getUsagePolicy());
    }, [])
  );

  const Item = ({ item, index }) => (
    <View style={styles.itemStyle}>
      <TouchableOpacity
        onPress={() => isShowFn(index)}
        style={styles.flatHeight}
      >
        <Paragraph text={item.ques} fontSize={normalize(3.7)} weight={'600'} color={colors.dark_gray} />

        {item.isShow ? (
          <Picture
            localSource={require("../../assets/uparro.png")}
            height={normalize(4)}
            width={normalize(4)}
          />
        ) : (
          <Picture
            localSource={require("../../assets/down_arrow.png")}
            height={normalize(4)}
            width={normalize(4)}
          />
        )}
      </TouchableOpacity>
      {item.isShow && (
        <>
          {item?.ans?.map((element, index) => (
            <View style={styles.policiText}>
              <Paragraph text={element} textAlign={"left"} />
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
        paddingHorizontal: normalize(3),
        backgroundColor: colors.main_background,
      }}
    >
      <Spacer height={normalize(1)} />
      <Headers addService={true} openDrawer={() => navigation.openDrawer()} />
      <FlatList
        data={policeisList}
        renderItem={({ item, index }) => <Item item={item} index={index} />}
        keyExtractor={(item) => item.id}
        style={{ paddingBottom: 10 }}
      />
    </View>
  );
};

export default Policies;
