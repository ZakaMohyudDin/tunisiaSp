import {
  GENDER,
  USER,
  TOKEN,
  IS_BLUR,
  IS_DRAWER_OPENED,
  WELCOME_SLIDER,
  WELCOME_TEXT,
  HOME_SLIDER,
  SERVICE_TYPE_ID,
} from "../constants";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";

export function signUpUserAction(data, callback, stopLoading) {
  return async (dispatch) => {
    axios.post(`${apiUrl}/user`, data).then(
      (response) => {
        if (response?.status === 200) {
          MessageInfo("Account Created Successfully!");
          dispatch({ type: USER, data: response?.data?.result });
          dispatch({ type: TOKEN, data: response?.data?.token });
          callback();
          stopLoading();
        } else {
          MessageError("User Already Exist With Same Email");
          stopLoading();
        }
      },
      (error) => {
        MessageError("Please, Check Your Internet Connection");
        stopLoading();
      }
    );
  };
}

export function signInUserAction(data, callback, stopLoading) {
  return async (dispatch) => {
    axios.post(`${apiUrl}/auth/login`, data).then(
      (response) => {
        if (response?.data?.status === 200) {
          dispatch({ type: USER, data: response?.data?.result[0] });
          dispatch({ type: TOKEN, data: response?.data?.access_token });
          dispatch({
            type: SERVICE_TYPE_ID,
            data: response?.data?.userTypeId,
          });
          callback();
          stopLoading();
        } else {
          MessageError("Invalid Credentials!");
          stopLoading();
        }
      },
      (error) => {
        MessageError("Invalid Credentials!");
        stopLoading();
      }
    );
  };
}

export function getRolesAction(callback) {
  return async (dispatch) => {
    axios.get(`${apiUrl}/role`).then(
      (response) => {
        if (response?.data?.status === 200) {
          var roles = response?.data?.result;
          var roleId = roles
            .filter((obj) => obj.userRoleName == "serviceProvider")
            .map((obj) => obj.id);
          callback(roleId);
        }
      },
      (error) => { }
    );
  };
}

export function getSlidersAction(sliderType, callback) {
  return async (dispatch) => {
    var type = "";
    if (!sliderType) {
      type = "welcome";
    } else {
      type = sliderType;
    }
    axios
      .get(
        `${apiUrl}/slider?sliderType=serviceProvider&sliderFor=application&sliderPosition=${type}`
      )
      .then(
        (response) => {
          if (response?.data?.status === 200) {
            if (type == "welcome") {
              dispatch({ type: WELCOME_SLIDER, data: response?.data?.result });
              return;
            }
            if (type == "home") {
              dispatch({ type: HOME_SLIDER, data: response?.data?.result });
              return;
            }
          }
        },
        (error) => { }
      );
  };
}

export function getWelcomeTextAction(callback) {
  return async (dispatch) => {
    axios.get(`${apiUrl}/application?applicationType=serviceProvider`).then(
      (response) => {
        console.log("res ===> : ", response);
        if (response?.data?.status === 200) {
          dispatch({ type: WELCOME_TEXT, data: response?.data?.result[0] });
        }
      },
      (error) => {
        console.log("error ===> : ", error);
      }
    );
  };
}

export function updateUserAction(token, id, data, callback) {
  return async (dispatch) => {
    axios
      .patch(`${apiUrl}/user?id=${id}`, data, {
        headers: { access_token: `${token}` },
      })
      .then(
        (response) => {
          console.log(response?.data);
          console.log(response?.data?.status);
          if (response?.data?.status === 201) {
            callback();
          }
        },
        (error) => {
          callback();
        }
      );
  };
}

export function getOtp(data, callback) {
  return async (dispatch) => {
    axios.post(`${apiUrl}/auth/forgot-password`, data).then(
      (response) => {
        if (response?.data?.status === 200) {
          callback(response?.data?.Otp);
        }
      },
      (error) => {
        MessageError("Please, Check Your Internet Connection");
      }
    );
  };
}

export function resetPasswordAction(number, data, callback, stopLoader) {
  return async (dispatch) => {
    axios.patch(`${apiUrl}/user?userMobile=${number}`, data).then(
      (response) => {
        if (response?.data?.status === 201) {
          MessageInfo("Password Reset successfully");
          callback();
          stopLoader();
        } else {
          stopLoader();
          MessageError("Something Wrong! Please, Try Again Later");
        }
      },
      (error) => {
        MessageError("Please, Check Your Internet Connection");
        stopLoader();
      }
    );
  };
}

export function isBlurAction(val) {
  return async (dispatch) => {
    dispatch({ type: IS_BLUR, data: val });
  };
}

export function setDrawerState(val) {
  return async (dispatch) => {
    dispatch({ type: IS_DRAWER_OPENED, data: val });
  };
}
