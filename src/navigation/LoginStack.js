import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopTab from "./TopTab";
import OtpScreen from "../screen/OtpScreen";
import EditProfile from "../screen/EditProfile";
import Reciept from "../screen/Reciept";
import TransactionHistory from "../screen/TransactionHistory";
import Policies from "../screen/Policies.js";
import ContactUs from "../screen/ContactUs";
import SelectLanguage from "../screen/SelectLanguage";
import Setting from "../screen/Setting";
import ChangePassword from "../screen/ChangePassword";
import ChangeNumber from "../screen/ChangeNumber";
import DeleteAccount from "../screen/DeleteAccount";
import LockAccount from "../screen/LockAccount";
import ServiceType from "../screen/ServiceTypes";
import Subscription from "../screen/Subscriptionn";
import VideoCallScreen from "../screen/VideoCallScreen";
import AudioCallScreen from "../screen/AudioCallScreen";
import ChatScreen from "../screen/ChatScreen";
import Tutorial from "../screen/Tutorial.js";
import ServiceProviderDetail from "../screen/ServiceProviderDetail";
import VideoLecture from "../screen/VideoLecture";
import SubCategory from "../screen/SubCategory.js";
import SendOffer from "../screen/SendOffer";
import AddServices from "../screen/AddServices";
import AddServicesFive from "../screen/AddServicesFive";
import ServiceProviderList from "../screen/ServiceProviderList";
import AboutScreen from "../screen/AboutScreen";
import AddServicesTutorial from "../screen/AddServicesTutorial";
import TutorialSP from "../screen/TutorialSP";
import OrderScreen from "../screen/OrderScreen";
import SubscriptionDetail from "../screen/SubscriptionDetail";
import PasswordRecover from "../screen/passwordRecover";
import { PaymentOptions } from "../screen/payments";

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ServiceType" component={ServiceType} />
      <Stack.Screen name="TopTab" component={TopTab} />
      <Stack.Screen name="PasswordRecover" component={PasswordRecover} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="TutorialSP" component={TutorialSP} />
      <Stack.Screen name="Tutorial" component={Tutorial} />
      <Stack.Screen name="SubCategory" component={SubCategory} />
      <Stack.Screen name="SendOffer" component={SendOffer} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen name="AddServices" component={AddServices} />
      <Stack.Screen name="AddServicesFive" component={AddServicesFive} />
      <Stack.Screen
        name="AddServicesTutorial"
        component={AddServicesTutorial}
      />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="SubscriptionDetail" component={SubscriptionDetail} />
      <Stack.Screen
        name="ServiceProviderList"
        component={ServiceProviderList}
      />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="VideoLecture" component={VideoLecture} />
      <Stack.Screen
        name="ServiceProviderDetail"
        component={ServiceProviderDetail}
      />
      <Stack.Screen name="Reciept" component={Reciept} />
      <Stack.Screen name="Policies" component={Policies} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="VideoCallScreen" component={VideoCallScreen} />
      <Stack.Screen name="ChangeNumber" component={ChangeNumber} />
      <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
      <Stack.Screen name="LockAccount" component={LockAccount} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="AudioCallScreen" component={AudioCallScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
      <Stack.Screen name="PaymentOptions" component={PaymentOptions} />
    </Stack.Navigator>
  );
};

export default LoginStack;
