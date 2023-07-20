import React, { useEffect } from "react";
import { FlatList, ScrollView } from "react-native";
import { normalize } from "../../utils/helper";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import SubscriptionBox from "../../components/SubscriptionBox";
import { getSubscriptions } from "../../redux/actions/allSubscriptionAction";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

const Subscription = ({ navigation }) => {

  const dispatch = useDispatch();
  const { subscriptions } = useSelector(
    ({ allSubscriptionReducer }) => allSubscriptionReducer
  );




  useFocusEffect(
    React.useCallback(() => {
      console.log('requested');
      dispatch(getSubscriptions());
    }, [])
  );

  useEffect(() => {
    console.log('subscriptions', subscriptions);
  }, [subscriptions]);



  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(3),
        backgroundColor: colors.main_background,
      }}
    >
      <Headers goBack={() => navigation.goBack()} />

      <FlatList
        data={subscriptions}
        renderItem={({ item, index }) => <SubscriptionBox item={item} index={index} />}
        keyExtractor={(item) => item.id}
        style={{ paddingBottom: 10 }}
      />
      {/* <SubscriptionBox />
      <SubscriptionBox />

      <SubscriptionBox />
      <SubscriptionBox /> */}
    </ScrollView>
  );
};

export default Subscription;
