import React, { useState } from "react";
import { View } from "react-native";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import { normalize } from "../../utils/helper";
import SubHeading from "../../components/SubHeading";
import { mltiLanguages } from "../../utils/multiLanguage";
import Paragraph from "../../components/Paragraph";
import { styles } from "./styles";
import Spacer from "../../components/Spacer";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/Button";

const SubscriptionDetail = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [loader, setLoader] = useState();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.main_background,
        paddingHorizontal: normalize(3),
      }}
    >
      <Headers addService={true} openDrawer={() => navigation.openDrawer()} />

      <Spacer height={12} />
      <SubHeading
        text={mltiLanguages("arabic").verif_desc}
        color={colors.dark_gray}
        textAlign={"left"}
        weight={"600"}
        fontSize={normalize(4.3)}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
      />

      <View style={styles.subscriptionBox}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Paragraph
            text={mltiLanguages("arabic").register}
            color={colors.dark_gray}
            textAlign={"left"}
            weight={"600"}
            fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
          />
          <Paragraph text={mltiLanguages("arabic").login} />
        </View>
        <Spacer height={12} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Paragraph text={mltiLanguages("arabic").register} />
          <Paragraph
            text={"10 " + mltiLanguages("arabic").day}
            color={colors.dark_gray}
            textAlign={"left"}
            weight={"600"}
            fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
          />
        </View>
      </View>

      <View style={styles.subscriptionBox}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Paragraph
            text={mltiLanguages("arabic").register}
            color={colors.dark_gray}
            textAlign={"left"}
            weight={"600"}
            fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
          />
          <Paragraph text={mltiLanguages("arabic").login} />
        </View>
        <Spacer height={12} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Paragraph text={mltiLanguages("arabic").register} />
          <Paragraph
            text={"30 " + mltiLanguages("arabic").day}
            color={colors.dark_gray}
            textAlign={"left"}
            weight={"600"}
            fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
          />
        </View>
      </View>

      <Spacer height={16} />
      <Paragraph text={mltiLanguages("arabic").verif_desc} textAlign={"left"} />
      <Spacer height={12} />
      <Paragraph
        text={"10 " + mltiLanguages("arabic").register}
        color={colors.dark_gray}
        textAlign={"left"}
        weight={"600"}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
      />

      <View style={styles.pick}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item
            label={mltiLanguages("arabic").phone}
            value={mltiLanguages("arabic").phone}
          />
          <Picker.Item
            label={mltiLanguages("arabic").register}
            value={mltiLanguages("arabic").register}
          />
        </Picker>
      </View>

      <Spacer height={2} />

      <Button
        // onPress={() => signInUser()}
        // onPress={() => loginFn()}
        onPress={() => navigation.navigate("Subscription")}
        width={loader ? 48 : normalize(70)}
        roundCorner={loader ? normalize(11) : 10}
        text={mltiLanguages("arabic").login}
        gradiantFirst={colors.primary_color}
        gradiantSecond={colors.primary_color}
        loader={loader}
        loaderSize={"large"}
      />
    </View>
  );
};

export default SubscriptionDetail;
