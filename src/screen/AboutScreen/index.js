import React, { useEffect } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getAboutUs } from "../../redux/actions/aboutUsAction";

const AboutScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const { about_us } = useSelector(
    ({ aboutUsReducer }) => aboutUsReducer
  );



  useFocusEffect(
    React.useCallback(() => {
      console.log('requested');
      dispatch(getAboutUs());
    }, [])
  );

  useEffect(() => {
    console.log('aboutUsMM', about_us);

  }, [about_us]);


  const Item = ({ item, index }) => (
    <View>
      <Paragraph
        text={item.applicationTitle}
        textAlign={"left"}
        color={colors.dark_gray}
        fontSize={normalize(4.2)}
      />
      <Spacer height={normalize(1)} />
      <Paragraph
        text={item.applicationShortText}
        textAlign={"left"}
        color={colors.dark_gray}
        fontSize={normalize(4.0)}
      />
      <Paragraph
        text={item.applicationAbout}
        textAlign={"left"}
        color={colors.dark_gray}
        fontSize={normalize(3.6)}
      />
      <Spacer height={normalize(8)} />
    </View>
  );


  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.main_background,
        paddingHorizontal: normalize(2),
      }}
    >
      <Headers addService={true} openDrawer={() => navigation.openDrawer()} />

      <View style={{ paddingHorizontal: normalize(2) }}>
        <FlatList
          data={about_us}
          renderItem={({ item, index }) => <Item item={item} index={index} />}
          keyExtractor={(item) => item.id}
          style={{ paddingBottom: 10 }}
        />

      </View>
    </ScrollView>
  );
};

export default AboutScreen;
