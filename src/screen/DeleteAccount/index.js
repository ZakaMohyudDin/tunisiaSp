import React from "react";
import { ScrollView } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import Button from "../../components/Button";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { MessageError } from "../../utils/showAlerts";
import { useSelector } from "react-redux";

const DeleteAccount = ({ navigation }) => {
  const { currentUser, token } = useSelector(({ authReducer }) => authReducer);



  const _onDeletePress = () => {

    // navigation.navigate("OtpScreen")
    axios.delete(`${apiUrl}/user/${currentUser.id}`).then(

      (response) => {
        console.log(response);
        navigation.navigate("OtpScreen")
        if (response?.data?.status === 200) {
          console.log('delete_response', response);
          navigation.navigate("OtpScreen")
        }
      },
      (error) => {
        MessageError(error.response.data.message);

      }
    );

  }

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(3),
        backgroundColor: colors.main_background,
      }}
    >
      <Headers goBack={() => navigation.navigate("Setting")} />
      <Spacer height={normalize(4)} />
      <Heading text={"حذف الحساب"} fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"} textAlign={"center"} />
      <Spacer height={normalize(2)} />
      <Paragraph
        text={"هل انت متأكد انك. تريد حذف حسابك؟ لن يتمكن أي شخص قمت بمشاركة رابط حسابك معه من الحجز باستخدامه وسيتم فقد أي تفضيلات قمت بحفظها."}
        textAlign={"center"}
      />
      <Spacer height={normalize(6)} />
      {/* <Input
        placeholder={mltiLanguages("arabic").password}
        bgColor={colors.white}
        width={normalize(90)}
        textAlign={"left"}
      /> */}
      <Spacer height={normalize(8)} />
      <Button
        onPress={() => _onDeletePress()}
        // height={normalize(11)}
        width={normalize(70)}
        text={"حذف"}
        gradiantFirst={colors.primary_color}
        gradiantSecond={colors.primary_color}
      />
    </ScrollView>
  );
};

export default DeleteAccount;
