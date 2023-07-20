import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import SubHeading from "./SubHeading";
import Picture from "./Picture";
import { normalize } from "../utils/helper";
import Spacer from "./Spacer";
import { colors } from "../utils/colors";
import { useDispatch } from "react-redux";

const CustomDrawerContent = ({ state, descriptors, navigation }) => {

  const dispatch = useDispatch();
  const logOutUser = () => {
    // dispatch({ type: TOKEN, data: response?.data?.access_token });

  }

  return (
    <View style={styles.container}>
      <Spacer height={normalize(18)} />
      <Picture
        localSource={require("../assets/testimonials-5.jpg")}
        height={normalize(20)}
        width={normalize(20)}
        roundCorner={10}
      />
      <Spacer height={normalize(3)} />
      <SubHeading
        text={"User name here"}
        fontSize={normalize(4.2)}
        weight={"600"}
        textAlign={"left"}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
      />
      <Spacer height={normalize(4)} />

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Picture
          localSource={require("../assets/homeDrawer.png")}
          height={normalize(8)}
          width={normalize(6)}
          imgColor={colors.dark_gray}
        />
        <View style={{ width: normalize(3) }} />
        <SubHeading
          text={"Home"}
          fontSize={normalize(4.2)}
          weight={"600"}
          textAlign={"left"}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("ServiceProviderList")}
      >
        <Picture
          localSource={require("../assets/tools.png")}
          height={normalize(5.5)}
          width={normalize(5.5)}
          imgColor={colors.dark_gray}
        />
        <View style={{ width: normalize(3) }} />
        <SubHeading
          text={"Services"}
          fontSize={normalize(4.2)}
          weight={"600"}
          textAlign={"left"}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        />
      </TouchableOpacity>

      {true && (
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate("Reciept")}
        >
          <Picture
            localSource={require("../assets/receipt.png")}
            height={normalize(5.5)}
            width={normalize(5.5)}
            imgColor={colors.dark_gray}
          />
          <View style={{ width: normalize(3) }} />
          <SubHeading
            text={"Amount"}
            fontSize={normalize(4.2)}
            weight={"600"}
            textAlign={"left"}
            fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("PaymentOptions")}
      >
        <Picture
          localSource={require("../assets/icon_payment_options.png")}
          height={normalize(5.5)}
          width={normalize(5.5)}
          imgColor={null}
        />
        <View style={{ width: normalize(3) }} />
        <SubHeading
          text={"Payments"}
          fontSize={normalize(4.2)}
          weight={"600"}
          textAlign={"left"}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("AboutScreen")}
      >
        <Picture
          localSource={require("../assets/file.png")}
          height={normalize(5.5)}
          width={normalize(5.5)}
          imgColor={colors.dark_gray}
        />
        <View style={{ width: normalize(3) }} />
        <SubHeading
          text={"About"}
          fontSize={normalize(4.2)}
          weight={"600"}
          textAlign={"left"}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("Policies")}
      >
        <Picture
          localSource={require("../assets/insurance.png")}
          height={normalize(5.5)}
          width={normalize(5.5)}
          imgColor={colors.dark_gray}
        />
        <View style={{ width: normalize(3) }} />
        <SubHeading
          text={"Policy"}
          fontSize={normalize(4.2)}
          weight={"600"}
          textAlign={"left"}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("ContactUs")}
      >
        <Picture
          localSource={require("../assets/id.png")}
          height={normalize(5.5)}
          width={normalize(5.5)}
          imgColor={colors.dark_gray}
        />
        <View style={{ width: normalize(3) }} />
        <SubHeading
          text={"Contact"}
          fontSize={normalize(4.2)}
          weight={"600"}
          textAlign={"left"}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("SelectLanguage")}
      >
        <Picture
          localSource={require("../assets/language.png")}
          height={normalize(5.5)}
          width={normalize(5.5)}
          imgColor={colors.dark_gray}
          resizeMode={"contain"}
        />
        <View style={{ width: normalize(3) }} />
        <SubHeading
          text={"Language"}
          fontSize={normalize(4.2)}
          weight={"600"}
          textAlign={"left"}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        />
      </TouchableOpacity>

      {true && (
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate("SubscriptionDetail")}
        >
          <Picture
            localSource={require("../assets/language.png")}
            height={normalize(5.5)}
            width={normalize(5.5)}
            imgColor={colors.dark_gray}
            resizeMode={"contain"}
          />
          <View style={{ width: normalize(3) }} />
          <SubHeading
            text={"Subcription"}
            fontSize={normalize(4.2)}
            weight={"600"}
            textAlign={"left"}
            fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("Setting")}
      >
        <Picture
          localSource={require("../assets/setting.png")}
          height={normalize(6)}
          width={normalize(6)}
          imgColor={colors.dark_gray}
        />
        <View style={{ width: normalize(3) }} />
        <SubHeading
          text={"Settings"}
          fontSize={normalize(4.2)}
          weight={"600"}
          textAlign={"left"}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => logOutUser()}
      >
        <Picture
          localSource={require("../assets/icon_log_out.png")}
          height={normalize(6)}
          width={normalize(6)}
          imgColor={colors.dark_gray}
        />
        <View style={{ width: normalize(3) }} />
        <SubHeading
          text={"Log Out"}
          fontSize={normalize(4.2)}
          weight={"600"}
          textAlign={"left"}
          fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  drawerItem: {
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  drawerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomDrawerContent;
