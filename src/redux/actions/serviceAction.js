import {
  SUB_CATEGORY,
  SUB_SUB_CATEGORY,
  CATEGORY,
  IS_DARK,
  IS_DOR,
  SERVICE_TYPE_ID,
  USER_TYPE_ID,
  SERVICE_TYPES,
  USER_SERVICE_RESPONSE,
  AVAILABLE_DAYS,
  CITIES,
} from "../constants";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";

export function getCategory(token, id, subSubCat, callback, stopLoading) {
  return async (dispatch) => {
    var category = "";
    if (id) category = `/type?typeParent=${id}`;
    else if (subSubCat) category = `/type?typeParent=${id}`;
    else category = `/type?typeParent=${null}`;
    axios
      .get(`${apiUrl}${category}`, {
        headers: { access_token: `${token}` },
      })
      .then(
        (response) => {
          if (response?.data?.status === 200) {
            if (id && !subSubCat)
              dispatch({ type: SUB_CATEGORY, data: response?.data?.result });
            else if (subSubCat)
              dispatch({
                type: SUB_SUB_CATEGORY,
                data: response?.data?.result,
              });
            else dispatch({ type: CATEGORY, data: response?.data?.result });
          }
        },
        (error) => {
          if (id) {
            dispatch({ type: SUB_CATEGORY, data: null });
            MessageInfo("Sub Categories Are Not Available \n Select Other One");
          }
        }
      );
  };
}

export function setUserType(token, data, callback) {
  return async (dispatch) => {
    axios
      .post(`${apiUrl}/user-type`, data, {
        headers: { access_token: `${token}` },
      })
      .then(
        (response) => {
          console.log(
            "\n\n\n usertypeid new created ==> ",
            response?.data?.result
          );
          if (response?.data?.status === 200) {
            dispatch({
              type: USER_TYPE_ID,
              data: response?.data?.result?.id,
            });
            callback();
          }
        },
        (error) => {
          if (id) {
            MessageError("Please, Check Your Internet Connection");
          }
        }
      );
  };
}

export function getUserTypeId(token, data, callback) {
  return async (dispatch) => {
    axios
      .get(`${apiUrl}/user-type?userId=${data.userId}&typeId=${data.typeId}`)
      .then(
        (response) => {
          console.log("\n\n\n usertypeid testing ==> ", response?.data);
          if (response?.data?.status === 200) {
            if (response?.data?.result[0]?.id) {
              dispatch({
                type: USER_TYPE_ID,
                data: response?.data?.result[0]?.id,
              });
              callback();
            } else {
              console.log(
                "\n\n\n usertypeid not exist ==> ",
                response?.data?.result
              );
              dispatch(setUserType(token, data, callback));
            }
          } else {
            console.log(
              "\n\n\n usertypeid not exist out ==> ",
              response?.data?.result
            );
            dispatch(setUserType(token, data, callback));
          }
        },
        (error) => {
          if (id) {
            MessageError("Please, Check Your Internet Connection");
          }
        }
      );
  };
}

export function setDarkTheme(val) {
  return async (dispatch) => {
    dispatch({ type: IS_DARK, data: val });
  };
}

export function setRole(val) {
  return async (dispatch) => {
    dispatch({ type: IS_DOR, data: val });
  };
}

export function getServiceTypesActios(token, callback) {
  return async (dispatch) => {
    axios.get(`${apiUrl}/service-type`).then(
      (response) => {
        if (response?.data?.status === 200) {
          dispatch({
            type: SERVICE_TYPES,
            data: response?.data?.result,
          });
        }
      },
      (error) => {}
    );
  };
}

export function createServiceStep1Action(token, data, callback) {
  return async (dispatch) => {
    axios
      .post(`${apiUrl}/user-service`, data, {
        headers: { access_token: `${token}` },
      })
      .then(
        (response) => {
          console.log("\n\n res 1 : ", response?.data);
          if (response?.data?.status === 201) {
            dispatch({
              type: USER_SERVICE_RESPONSE,
              data: response?.data?.result,
            });
            callback();
          }
        },
        (error) => {}
      );
  };
}

export function createAvailableTimeActiopn(token, data, callback) {
  return async (dispatch) => {
    axios
      .post(`${apiUrl}/service-available`, data, {
        headers: { access_token: `${token}` },
      })
      .then(
        (response) => {
          if (response?.data?.status === 201) {
            callback(response?.data?.result?.id);
          }
        },
        (error) => {}
      );
  };
}

export function createAvailableDaysActiopn(token, data, callback) {
  return async (dispatch) => {
    axios
      .post(`${apiUrl}/available-days`, data, {
        headers: { access_token: `${token}` },
      })
      .then(
        (response) => {
          console.log("\n\n\n days : ", response.data.result)
          if (response?.data?.status === 201) {
            callback();
          }
        },
        (error) => {}
      );
  };
}

export function getDaysAction(token) {
  return async (dispatch) => {
    axios
      .get(`${apiUrl}/days`, {
        headers: { access_token: `${token}` },
      })
      .then(
        (response) => {
          if (response?.data?.status === 200) {
            var farmaterDays = [];
            for (let i = 0; i < response?.data?.result.length; i++) {
              var obj = {
                isSelected: false,
              };
              var finalObj = Object.assign({}, obj, response?.data?.result[i]);
              farmaterDays.push(finalObj);
            }
            dispatch({
              type: AVAILABLE_DAYS,
              data: farmaterDays,
            });
          }
        },
        (error) => {}
      );
  };
}

export function getCityAction(token) {
  return async (dispatch) => {
    axios
      .get(`${apiUrl}/address-city`, {
        headers: { access_token: `${token}` },
      })
      .then(
        (response) => {
          console.log("\n\n res city : ", response?.data?.result);
          if (response?.data?.status === 200) {
            dispatch({
              type: CITIES,
              data: response?.data?.result,
            });
          }
        },
        (error) => {}
      );
  };
}


export function updateServiceAction(token, data, id, callback) {
  return async (dispatch) => {
    axios
      .patch(`${apiUrl}/user-service/${id}`, data, {
        headers: { access_token: `${token}` },
      })
      .then(
        (response) => {
          console.log("\n\n res 133 : ", response?.data);
          if (response?.data?.status === 201) {
            callback();
          }
        },
        (error) => {}
      );
  };
}