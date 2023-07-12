import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import { normalize } from "../../utils/helper";
import { colors } from "../../utils/colors";
import Paragraph from "../../components/Paragraph";
import { mltiLanguages } from "../../utils/multiLanguage";
import Picture from "../../components/Picture";
import { TouchableOpacity } from "react-native-gesture-handler";
import ButtonSqure from "../../components/ButtonSqure";
import ModalRecording from "../../components/ModalRecording";
import ImagePicker from "react-native-image-crop-picker";
import { launchCamera } from "react-native-image-picker";
import ModalImage from "../../components/ModalImage";
import VideoPlayer from "react-native-video-player";
import { useSelector } from "react-redux";

let options = {
  mediaType: "video",
  durationLimit: 3,
  videoQuality: "high",
};
let optionsPick = {
  mediaType: "picture",
  durationLimit: 3,
  videoQuality: "high",
};
const ChatScreen = ({ navigation }) => {
  const { isDor } = useSelector(({ serviceReducer }) => serviceReducer);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showAction, setShowAction] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [imgModal, setImgModal] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const handleSend = (val, url) => {
    if (val == "img") {
      setImgModal(false);
      var newMessage;
      if (messages.length % 2 == 0) {
        newMessage = {
          id: Math.random().toString(),
          sender: true,
          img: true,
          imgUri: url,
          text: message,
        };
      } else {
        newMessage = {
          id: Math.random().toString(),
          sender: false,
          img: true,
          imgUri: url,
          text: message,
        };
      }
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");
    } else {
      if (message.trim() !== "") {
        var newMessage;
        if (messages.length % 2 == 0) {
          newMessage = {
            id: Math.random().toString(),
            sender: true,
            img: false,
            imgUri: "",
            text: message,
          };
        } else {
          newMessage = {
            id: Math.random().toString(),
            sender: false,
            img: false,
            imgUri: "",
            text: message,
          };
        }
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setMessage("");
      }
    }
  };

  const pickImage = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then((images) => {
      setImgUrl(images[0].path);
      handleSend("img", images[0].path);
    });
  };

  const pickVideo = () => {
    ImagePicker.openPicker({
      mediaType: "video",
    }).then((video) => {
      setVideo(video.path);
    });
  };

  const recordVideo = async () => {
    const result = await launchCamera(options);
    console.log(result);
  };

  const takePic = async () => {
    const result = await launchCamera(optionsPick);
    console.log(result?.assets[0]?.uri);
    handleSend("img", result?.assets[0]?.uri);
  };
  const reverseMessage = () => {
    var sms = messages;
    return sms;
  };

  const renderMessage = ({ item, index }) => {
    return (
      <>
        <View
          style={{
            marginLeft: item.sender ? 0 : 40,
            marginRight: item.sender ? 50 : 0,
          }}
        >
          <Paragraph
            text={"Sun, 14:34"}
            fontSize={normalize(2)}
            textAlign={item.sender ? "right" : "left"}
            // color={colors.dark_gray}
          />
        </View>
        {item.img && (
          <View
            style={{
              alignSelf: item.sender ? "flex-end" : "flex-start",
              marginLeft: item.sender ? 0 : normalize(6),
              marginRight: item.sender ? normalize(6) : 0,
            }}
          >
            <Picture
              uriSourc={item.imgUri}
              height={normalize(40)}
              width={normalize(62)}
              roundCorner={normalize(4)}
            />
            {item.sender ? (
              <View style={styles.imgContainer}>
                <Picture
                  localSource={require("../../assets/testimonials-5.jpg")}
                  height={normalize(6)}
                  width={normalize(6)}
                  roundCorner={normalize(8)}
                />
              </View>
            ) : (
              <View style={styles.imgBox}>
                <Picture
                  localSource={require("../../assets/testimonials-5.jpg")}
                  height={normalize(6)}
                  width={normalize(6)}
                  roundCorner={normalize(8)}
                />
              </View>
            )}
          </View>
        )}
        {item?.text && (
          <View
            style={[
              styles.messageContainer,
              {
                backgroundColor: item.sender
                  ? colors.primary_color
                  : colors.white,
                alignSelf: item.sender ? "flex-end" : "flex-start",
                marginLeft: item.sender ? 0 : normalize(6),
                marginRight: item.sender ? normalize(6) : 0,
              },
            ]}
          >
            <Text
              style={[
                styles.messageText,
                { color: item.sender && colors.white },
              ]}
            >
              {item.text}
            </Text>
            {!item.img && (
              <>
                {item.sender ? (
                  <View style={styles.imgContainer}>
                    <Picture
                      localSource={require("../../assets/testimonials-5.jpg")}
                      height={normalize(6)}
                      width={normalize(6)}
                      roundCorner={normalize(8)}
                    />
                  </View>
                ) : (
                  <View style={styles.imgBox}>
                    <Picture
                      localSource={require("../../assets/testimonials-5.jpg")}
                      height={normalize(6)}
                      width={normalize(6)}
                      roundCorner={normalize(8)}
                    />
                  </View>
                )}
              </>
            )}
          </View>
        )}

        {index == 0 && (
          <View
            style={{
              width: normalize(70),
              borderRadius: 10,
              backgroundColor: colors.black,
              padding: 5,
              marginLeft: item.sender ? 0 : 20,
              marginRight: item.sender ? 20 : 0,
              alignSelf: item.sender ? "flex-end" : "flex-start",
            }}
          >
            <VideoPlayer
              video={require("../../assets/SplashScreenVideo.mp4")}
              videoWidth={500}
              videoHeight={300}
              thumbnail={require("../../assets/add1.png")}
              // Other video player props
            />
          </View>
        )}

        <View
          style={{
            marginLeft: item.sender ? 0 : normalize(6),
            marginRight: item.sender ? normalize(6) : 0,
          }}
        >
          <Paragraph
            text={mltiLanguages("arabic").register}
            fontSize={normalize(2.3)}
            textAlign={item.sender ? "right" : "left"}
            color={colors.dark_gray}
          />
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header Start */}
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            width: normalize(44),
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Picture
              localSource={require("../../assets/backArrow.png")}
              height={normalize(5)}
              width={normalize(5)}
              roundCorner={normalize(8)}
            />
          </TouchableOpacity>

          <View style={{ marginLeft: 2 }}>
            <TouchableOpacity>
              <Picture
                localSource={require("../../assets/testimonials-5.jpg")}
                height={normalize(8)}
                width={normalize(8)}
                roundCorner={normalize(8)}
              />
            </TouchableOpacity>
            <View style={styles.isOnline} />
          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TopTab", { screen: "ChatMember" })
            }
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Paragraph
                text={mltiLanguages("arabic").cart}
                color={colors.dark_gray}
              />
              <View style={{ width: 4 }} />
              <Paragraph text={"(online)"} fontSize={normalize(3)} />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: normalize(30),
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("OrderScreen")}>
            <Picture
              localSource={require("../../assets/handshake.png")}
              height={normalize(5)}
              width={normalize(5)}
              imgColor={colors.subHeading}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("VideoCallScreen")}
          >
            <Picture
              localSource={require("../../assets/videoOutlin.png")}
              height={normalize(5.5)}
              width={normalize(5.5)}
              imgColor={colors.subHeading}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("AudioCallScreen")}
          >
            <Picture
              localSource={require("../../assets/phone.png")}
              height={normalize(5)}
              width={normalize(5)}
              imgColor={colors.subHeading}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Header End */}
      <View style={styles.chatContainer}>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.messagesList}
          inverted
        />
      </View>

      {/* Text Input Area */}
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => setShowAction(!showAction)}>
          <Picture
            localSource={require("../../assets/cat3.png")}
            height={normalize(5.5)}
            width={normalize(6)}
            resizeMode={"stretch"}
            imgColor={showAction ? colors.primary_color : colors.light1_gray}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={message}
          textAlign={"left"}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={() => handleSend("text", "")}>
          <Text style={{ color: colors.light1_gray }}>Send</Text>
        </TouchableOpacity>
      </View>

      {/* action show from bottom using colaps */}
      {showAction && (
        <View style={styles.callActions}>
          <ButtonSqure
            onPress={() => setVideoModal(true)}
            img={require("../../assets/video.png")}
            text={mltiLanguages("arabic").verify}
          />
          <ButtonSqure
            img={require("../../assets/imgPick.png")}
            text={mltiLanguages("arabic").verify}
            onPress={() => setImgModal(true)}
            imgHeight={normalize(7)}
            imgWidth={normalize(7)}
          />
          {isDor ? (
            <ButtonSqure
              img={require("../../assets/location.png")}
              text={mltiLanguages("arabic").verify}
              onPress={() => console.log("hhhhh")}
              imgHeight={normalize(16)}
              imgWidth={normalize(15)}
            />
          ) : (
            <ButtonSqure
              img={require("../../assets/fileFolder.png")}
              text={mltiLanguages("arabic").verify}
              onPress={() => console.log("hhhhh")}
              imgHeight={normalize(16)}
              imgWidth={normalize(15)}
            />
          )}
          <ButtonSqure
            img={require("../../assets/radio.png")}
            text={mltiLanguages("arabic").verify}
            onPress={() => setModalVisible(true)}
          />
        </View>
      )}

      <ModalRecording
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <ModalImage
        visible={imgModal}
        onClose={() => setImgModal(false)}
        cameraRoll={() => takePic()}
        launchLibrary={() => pickImage()}
      />
      <ModalImage
        visible={videoModal}
        onClose={() => setVideoModal(false)}
        cameraRoll={() => recordVideo()}
        launchLibrary={() => pickVideo()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main_background,
  },
  chatContainer: {
    flex: 1,
  },
  messagesList: {
    paddingTop: 16,
    paddingBottom: 26,
    flexDirection: "column-reverse",
  },
  messageContainer: {
    paddingVertical: normalize(2),
    paddingHorizontal: normalize(4),
    maxWidth: normalize(60),
    borderRadius: normalize(3.5),
    marginBottom: 8,

    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 6,
    width: normalize(94),
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: normalize(4),
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    marginHorizontal: 8,
    backgroundColor: "#FFFFFF",
    marginRight: 8,
    borderRadius: 8,
    textAlign: "right",
  },
  imgBox: {
    position: "absolute",
    bottom: -normalize(2.5),
    left: -normalize(3),
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 70,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  imgContainer: {
    position: "absolute",
    bottom: -normalize(2.5),
    right: -normalize(3),
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 70,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  header: {
    width: "100%",
    minHeight: 24,
    flexDirection: "row",
    // backgroundColor: 'pink',
    justifyContent: "space-between",
    paddingHorizontal: normalize(3),
    paddingVertical: normalize(4),
    alignItems: "center",
  },
  isOnline: {
    backgroundColor: colors.red,
    height: normalize(2),
    width: normalize(2),
    borderRadius: normalize(2),
    position: "absolute",
    right: -2,
    bottom: 4,
  },
  callActions: {
    width: normalize(96),
    minHeight: normalize(10),
    // backgroundColor: 'pink',
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: normalize(3),
    justifyContent: "space-evenly",
  },
});

export default ChatScreen;
