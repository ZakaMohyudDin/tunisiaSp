import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import SubHeading from "../../components/SubHeading";
const SelectLanguage = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(3),
        backgroundColor: colors.main_background,
      }}
    >
      <Headers openDrawer={() => navigation.openDrawer()} />
      <SubHeading
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        fontSize={normalize(4.2)}
        weight={"600"}
        textAlign={"left"}
        text={
          mltiLanguages("arabic").header + " " + mltiLanguages("arabic").header
        }
      />
      <Spacer height={normalize(4)} />
      <View style={{marginLeft: normalize(2)}}>
        <TouchableOpacity>
          <Paragraph
            text={"Arabic"}
            color={colors.subHeading}
            textAlign={"left"}
            fontSize={normalize(4)}
          />
        </TouchableOpacity>

        <Spacer height={normalize(4)} />
        <TouchableOpacity>
          <Paragraph
            text={"English"}
            color={colors.subHeading}
            textAlign={"left"}
            fontSize={normalize(4)}
          />
        </TouchableOpacity>

        <Spacer height={normalize(4)} />
        <TouchableOpacity>
          <Paragraph
            text={"French"}
            color={colors.subHeading}
            fontSize={normalize(4)}
            textAlign={"left"}
          />
        </TouchableOpacity>

        <Spacer height={normalize(4)} />
        <TouchableOpacity>
          <Paragraph
            text={"Italian"}
            color={colors.subHeading}
            textAlign={"left"}
            fontSize={normalize(4)}
          />
        </TouchableOpacity>

        <Spacer height={normalize(4)} />
        <TouchableOpacity>
          <Paragraph
            text={"Turkish"}
            color={colors.subHeading}
            textAlign={"left"}
            fontSize={normalize(4)}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SelectLanguage;
