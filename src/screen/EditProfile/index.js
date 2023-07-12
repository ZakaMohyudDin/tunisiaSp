import React, { useState } from "react";
import { USER } from "../../redux/constants";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Button from "../../components/Button";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import Picture from "../../components/Picture";
import Input from "../../components/Input";
import { launchImageLibrary } from "react-native-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../redux/actions/authAction";
import { MessageError } from "../../utils/showAlerts";
const options = {
  maxHeight: 1024,
  maxWidth: 1024,
  mediaType: "mixed",
  videoQuality: "medium",
  durationLimit: 30,
};
const EditProfile = ({ navigation }) => {
  const [loader, setLoader] = useState("");
  const dispatch = useDispatch();
  const { currentUser, token } = useSelector(({ authReducer }) => authReducer);

  const [name, setName] = useState(currentUser?.userName);
  const [email, setEmail] = useState(currentUser?.userEmail);
  const [date, setDate] = useState(currentUser?.createdAt);
  const [addres, setAddress] = useState("ss");
  const [gender, setGender] = useState("male");
  const [desc, setDesc] = useState(currentUser.userDescription);

  const addImageMedia = async () => {
    const result = await launchImageLibrary(options);
    console.log("==>", result.assets[0].uri);
    // uploadImageToS3(result.assets[0].uri);
  };

  const updateUser = () => {
    setLoader(true);
    if (!name) {
      MessageError("Please, Enter Your Name");
      setLoader(false);
      return;
    }
    if (!email) {
      MessageError("Please, Enter Your email");
      setLoader(false);
      return;
    }
    if (!desc) {
      MessageError("Please, Enter Your Decription");
      setLoader(false);
      return;
    }
    var data = {
      userName: name,
      userEmail: email,
      userDescription: desc,
      userPicture: "",
    };
    dispatch(
      updateUserAction(token, currentUser.id, data, () => {
        var updatedUser = currentUser;
        updatedUser.userDescription = desc;
        updatedUser.userEmail = email;
        updatedUser.userName = name;
        dispatch({ type: USER, data: updatedUser });
        setLoader(false);
      })
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(4),
        backgroundColor: colors.main_background,
      }}
    >
      <Headers
        goBack={() => navigation.navigate("TopTab", { screen: "Profile" })}
      />
      <Spacer height={normalize(8)} />
      <View>
        <Picture
          localSource={require("../../assets/testimonials-5.jpg")}
          height={normalize(28)}
          width={normalize(28)}
          roundCorner={normalize(28)}
          alignSelf={"center"}
        />
        {console.log("\n\n current user", currentUser.userDescription)}
        <TouchableOpacity
          onPress={() => addImageMedia()}
          style={styles.imagPickBox}
        >
          <Picture
            localSource={require("../../assets/camera.png")}
            height={normalize(6)}
            width={normalize(6)}
          />
        </TouchableOpacity>
      </View>
      <Spacer height={normalize(3)} />
      <Input
        text={name}
        placeholder={mltiLanguages("arabic").name}
        onChangeText={(text) => setName(text)}
        width={normalize(90)}
        margin={6}
        textAlign={"left"}
        multiLine={false}
      />
      <Input
        text={email}
        placeholder={mltiLanguages("arabic").name}
        onChangeText={(text) => setEmail(text)}
        width={normalize(90)}
        margin={6}
        textAlign={"left"}
      />
      <Input
        text={desc}
        placeholder={"setDesc"}
        onChangeText={(text) => setDesc(text)}
        width={normalize(90)}
        margin={6}
        multiLine={true}
        numberOfLines={6}
        height={normalize(40)}
        textAlign={"left"}
      />
      <Spacer height={normalize(4)} />
      <Button
        onPress={() => updateUser()}
        // height={40}
        loaderSize="large"
        width={normalize(70)}
        text={"Edit Account"}
        gradiantFirst={colors.primary_color}
        gradiantSecond={colors.primary_color}
        loader={loader}
      />
      <Spacer height={normalize(4)} />
    </ScrollView>
  );
};

export default EditProfile;
