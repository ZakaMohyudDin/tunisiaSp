import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { normalize } from "../../utils/helper";
import Spacer from "../../components/Spacer";
import { mltiLanguages } from "../../utils/multiLanguage";
import { styles } from "./styles";
import Paragraph from "../../components/Paragraph";
import Button from "../../components/Button";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import StepIndicator from "react-native-step-indicator";
import Heading from "../../components/Heading";
import StepTutorial1 from "../../components/AddServicesSteps/StepTutorial1";
import StepTutorial2 from "../../components/AddServicesSteps/StepTutorial2";
import StepTutorial3 from "../../components/AddServicesSteps/StepTutorial3";
import { MessageError, MessageInfo } from "../../utils/showAlerts";
import { useDispatch, useSelector } from "react-redux";
import {
  getServiceTypesActios,
  createServiceStep1Action,
  getDaysAction,
  getCityAction,
  createAvailableTimeActiopn,
  createAvailableDaysActiopn,
  updateServiceAction,
} from "../../redux/actions/serviceAction";

const AddServicesTutorial = ({ navigation }) => {
  const { token, currentUser } = useSelector(({ authReducer }) => authReducer);
  const {
    serviceTypesList,
    userTypeId,
    userServiceResponse,
    availableDays,
    cities,
    isDor,
  } = useSelector(({ serviceReducer }) => serviceReducer);
  const dispatch = useDispatch()
  const [screenNo, setScreenNo] = useState(0);
  const [longDesc, setLongDesc] = useState(false);
  const [shortDesc, setShortDesc] = useState(false);
  const [experiance, setExperiance] = useState(false);
  const [selectedService, setSelectedService] = useState();
  const [loader, setLoader] = useState(false)
  const [selectedDays, setSelectedDays] = useState("");
  const [selectedDaysId, setSelectedDaysId] = useState("");
  const [fromTime, setFromTime] = useState([]);
  const [toTime, setToTime] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [vedioUrl, setVideoUrl] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const labels = ["", "", ""];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: colors.gradiant1,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: colors.gradiant1,
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: colors.gradiant1,
    separatorUnFinishedColor: "#aaaaaa",
    stepIndicatorFinishedColor: colors.gradiant1,
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: "#ffffff",
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: colors.gradiant1,
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",
    labelColor: "#999999",
    labelSize: 13,
    currentStepLabelColor: colors.gradiant1,
  };


  const createServiceForFirst = () => {
    if (!shortDesc) {
      MessageError("Please Enter Short Description");
      return;
    }
    if (!longDesc) {
      MessageError("Please Enter Long Description");
      return;
    }
    if (!experiance) {
      MessageError("Please Enter Experiance");
      return;
    }
    if (!selectedService) {
      MessageError("Please Select a Service");
      return;
    }
    var data = {
      userServiceShortDescription: shortDesc,
      userServiceLongDescription: longDesc,
      userServiceExperienceNumber: experiance,
      userServiceRate: "",
      userServiceNumberReviews: "",
      serviceTypeId: selectedService,
      userId: currentUser.id,
      userTypeId: userTypeId,
      typeId: isDor.id,
      userServiceVideo: "abc",
    };
    dispatch(
      createServiceStep1Action(token, data, () => {
        setScreenNo(screenNo + 1);
        setLoader(false);
      })
    );
  };

  const createAvailableTime = () => {
    if (!selectedDaysId) {
      MessageError("Please Select Available Days");
      return;
    }
    if (!fromTime) {
      MessageError("Please Select Available Days");
      return;
    }
    if (!toTime) {
      MessageError("Please Select Available Days");
      return;
    }
    var data = {
      serviceAvailableFromTime: fromTime,
      serviceAvailableToTime: toTime,
      userServiceId: userServiceResponse?.id,
    };
    dispatch(
      createAvailableTimeActiopn(token, data, (res) => {
        var dayParam = {
          dayId: selectedDaysId[0],
          serviceAvailableId: res,
        };
        dispatch(
          createAvailableDaysActiopn(token, dayParam, () => {
            setScreenNo(screenNo + 1);
            setLoader(false);
          })
        );
      })
    );
  };

  const finalServiceUpdate = () => {
    var data = {
      userServiceVideo: vedioUrl,
      userServiceCity: selectedCity,
      userServiceImage: imgUrl,
    };
    dispatch(
      updateServiceAction(token, data, userServiceResponse.id, () => {
        navigation.navigate("ServiceProviderList")
        MessageInfo("Congratulation! \nYour Service Has Been Created");
      })
    );
  };

  const nextScreen = () => {
    if (screenNo == 0) {
      console.log("0 position is running...", screenNo)
      createServiceForFirst();
    } else if (screenNo == 1) {
      console.log("2 position is running...", screenNo)
      // setScreenNo(screenNo + 1);
      createAvailableTime();
    } else if (screenNo == 2) {
      finalServiceUpdate();
      console.log("2 position is running...", screenNo)
    }
  };
  const preScreen = () => {
    if (screenNo <= 0) return;
    setScreenNo(screenNo - 1);
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(3),
        backgroundColor: colors.main_background,
      }}
    >
      <Headers goBack={() => navigation.goBack()} />
      <Heading
        text={mltiLanguages("arabic").phone}
        textAlign={"center"}
        weight={600}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
      />
      <Spacer height={normalize(2)} />
      <Paragraph
        text={
          mltiLanguages("arabic").verif_desc + mltiLanguages("arabic").phone
        }
        textAlign={"center"}
      />
      <Spacer height={normalize(3)} />
      <StepIndicator
        customStyles={customStyles}
        currentPosition={screenNo}
        labels={labels}
        stepCount={3}
      />

      {screenNo == 0 &&
        <StepTutorial1
          text={"nnnnnnn"}
          serviceTypes={serviceTypesList}
          onNextPress={() => nextScreen()}
          onPrePress={() => preScreen()}
          setLongDesc={(text) => setLongDesc(text)}
          setShortDesc={(text) => setShortDesc(text)}
          setExperiance={(text) => setExperiance(text)}
          longDesc={longDesc}
          shortDesc={shortDesc}
          experiance={experiance}
          setSelectedService={(itemValue, itemIndex) =>
            setSelectedService(itemValue)
          }
          selectedService={selectedService}
        />}
      {screenNo == 1 &&
        <StepTutorial2
          text={"nnnnnnn"}
          days={availableDays}
          onNextPress={() => nextScreen()}
          onPrePress={() => preScreen()}
          selectedDaysToReturn={(res) => setSelectedDays(res)}
          returnSelectedDaysId={(res) => setSelectedDaysId(res)}
          setFromTimeReturn={(res) => setFromTime(res)}
          setToTimeReturn={(res) => setToTime(res)}
          setSelectedCity={(itemValue, itemIndex) => setSelectedCity(itemValue)}
          selectedCity={selectedCity}
          cities={cities}
        />}
      {screenNo == 2 &&
        <StepTutorial3
          onNextPress={() => nextScreen()}
          onPrePress={() => preScreen()}
          setVideoUrl={(res) => setVideoUrl(res)}
          text={"nnnnnnn"}
        />
      }

    
    </ScrollView>
  );
};

export default AddServicesTutorial;
