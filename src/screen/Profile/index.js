import React from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import Picture from "../../components/Picture";
import Button from "../../components/Button";
import SubHeading from "../../components/SubHeading";
import Paragraph from "../../components/Paragraph";
import { useDispatch, useSelector } from "react-redux";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch()
  const { currentUser, token } = useSelector(({ authReducer }) => authReducer);
  // useEffect(()=> {
  //   dispatch()
  // },[])
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(4),
        backgroundColor: colors.main_background,
      }}
    >
      <Spacer height={normalize(1)} />
      <Headers />
      <Spacer height={normalize(10)} />
      <View>
        <Picture
          localSource={require("../../assets/testimonials-5.jpg")}
          // uriSourc={currentUser[0]?.userPicture}
          height={normalize(28)}
          width={normalize(28)}
          roundCorner={normalize(28)}
          alignSelf={"center"}
        />
        <TouchableOpacity style={styles.imagPickBox}>
          <Picture
            localSource={require("../../assets/camera.png")}
            height={normalize(6)}
            width={normalize(6)}
          />
        </TouchableOpacity>
      </View>
      <Spacer height={normalize(6)} />
      <SubHeading
        text={currentUser.userName}
        textAlign={"center"}
        fontSize={normalize(4.5)}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
      />
      <Paragraph text={currentUser.userEmail} textAlign={"center"} />
      <Spacer height={normalize(3)} />
      <Button
        onPress={() => navigation.navigate("EditProfile")}
        height={40}
        width={normalize(45)}
        text={"Edit account"}
        gradiantFirst={colors.primary_color}
        gradiantSecond={colors.primary_color}
      />
      <Spacer height={normalize(8)} />
      <View style={styles.txtStyles}>
        <View style={styles.indeViduleTxt}>
          <SubHeading text={"24"} />
          <Paragraph
            text={mltiLanguages("arabic").profile}
            color={colors.dark_gray}
            weight={"600"}
          />
        </View>
        <View style={styles.indeViduleTxt}>
          <SubHeading text={"17"} />
          <Paragraph
            text={"قیدالتنقید"}
            color={colors.dark_gray}
            weight={"600"}
          />
        </View>
        <View style={styles.indeViduleTxt}>
          <SubHeading text={"56"} />
          <Paragraph
            text={"ملغات"}
            color={colors.dark_gray}
            weight={"600"}
          />
        </View>
      </View>

      <Spacer height={normalize(8)} />
      <Paragraph
        textAlign={"left"}
        text={currentUser.userDescription}
      />
      <Spacer height={normalize(8)} />
    </ScrollView>
  );
};

export default Profile;
