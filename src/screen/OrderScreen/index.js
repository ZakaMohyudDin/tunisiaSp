import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import { normalize } from "../../utils/helper";
import SubHeading from "../../components/SubHeading";
import { mltiLanguages } from "../../utils/multiLanguage";
import Paragraph from "../../components/Paragraph";
import Spacer from "../../components/Spacer";
import { styles } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { multiLanguageVerify } from "../../utils/multiLanguageVerify";

const OrderScreen = ({ navigation }) => {
    const [loader, setLoader] = useState(false)
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.main_background,
        paddingHorizontal: normalize(3),
      }}
    >
      <Headers goBack={() => navigation.goBack()} />
      <SubHeading
        text={mltiLanguages("arabic").verify}
        textAlign={"center"}
        weight={"600"}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
      />
      <Spacer height={normalize(1)} />
      <Paragraph
        text={mltiLanguages("arabic").verif_desc}
        textAlign={"center"}
      />
      <Spacer height={normalize(4)} />
      <View style={styles.dateBox}>
        <Paragraph
          text={mltiLanguages("arabic").register}
          color={colors.dark_gray}
          textAlign={"left"}
        />
        <TouchableOpacity style={styles.dateStyle}>
          <Paragraph text={"29 mai 2023"} color={colors.dark_gray} />
        </TouchableOpacity>
      </View>

      <View style={styles.dateBox}>
        <Paragraph
          text={mltiLanguages("arabic").register}
          color={colors.dark_gray}
          textAlign={"left"}
        />
        <TouchableOpacity style={styles.dateStyle}>
          <Paragraph text={"29 mai 2023"} color={colors.dark_gray} />
        </TouchableOpacity>
      </View>
      <Spacer height={4} />
      <View style={styles.dateBox}>
        <Paragraph
          text={mltiLanguages("arabic").section_title_pro}
          color={colors.dark_gray}
          textAlign={"left"}
        />
        <Input alignSelf={"right"} margin={"0%"} width={normalize(52)} />
      </View>
      <Spacer height={16} />
      <Paragraph
        text={mltiLanguages("arabic").section_title_pro}
        color={colors.dark_gray}
        textAlign={"left"}
      />
      <Input alignSelf={"right"} width={normalize(95)} />

      <Spacer height={5} />
      <Paragraph
        text={mltiLanguages("arabic").section_title_pro}
        color={colors.dark_gray}
        textAlign={"left"}
      />
      <Input alignSelf={"right"} multiLine={true} numberOfLines={5} height={normalize(24)} width={normalize(95)} />

      <Spacer height={36} />

      <Button
        // onPress={() => navigation.navigate("TopTab")}
        width={loader ? 48 : normalize(70)}
        roundCorner={loader ? normalize(11) : 10}
        text={multiLanguageVerify("arabic").login}
        gradiantFirst={colors.primary_color}
        gradiantSecond={colors.primary_color}
        loader={loader}
        loaderSize={"large"}
      />
      <Spacer height={36} />
    </ScrollView>
  );
};

export default OrderScreen;
