import {
  SUB_CATEGORY,
  SUB_SUB_CATEGORY,
  CATEGORY,
  IS_DARK,
  IS_DOR,
  SERVICE_TYPE_ID,
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
          if (response?.data?.status === 200) {
            dispatch(getUserTypeId(data.userId, data.typeId, callback));
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

export function getUserTypeId(userId, typeId, callback) {
  return async (dispatch) => {
    axios.get(`${apiUrl}/user-type?userId=${userId}&typeId=${typeId}`).then(
      (response) => {
        if (response?.data?.status === 200) {
          dispatch({
            type: SERVICE_TYPE_ID,
            data: response?.data?.result[0]?.id,
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
