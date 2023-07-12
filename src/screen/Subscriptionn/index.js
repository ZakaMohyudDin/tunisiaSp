import React from "react";
import { ScrollView } from "react-native";
import { normalize } from "../../utils/helper";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import SubscriptionBox from "../../components/SubscriptionBox";

const Subscription = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(3),
        backgroundColor: colors.main_background,
      }}
    >
      <Headers goBack={() => navigation.navigate("Reciept")} />
      <SubscriptionBox />
      <SubscriptionBox />

      <SubscriptionBox />
      <SubscriptionBox />
    </ScrollView>
  );
};

export default Subscription;
