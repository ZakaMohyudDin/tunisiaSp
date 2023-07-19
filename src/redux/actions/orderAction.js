import { ORDER, ORDER_TYPE } from "../constants";
import axios from "axios";
import { apiUrl, adminUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";
import { orderFarmater } from "../../utils/helper";

export function getOrders(typeId, callback) {
  return async (dispatch) => {
    let tempUrl = "/user-order?userTypeId=${typeId}";
    axios.get(`${apiUrl}/user-order`).then(
      (response) => {
        if (response?.data?.status === 200) {
          orderFarmater(response?.data?.result);
          dispatch({
            type: ORDER,
            data: response?.data?.result,
          });
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

export function updateOrders(token, orderId, data, callback) {
  return async (dispatch) => {
    axios
      .patch(`${apiUrl}/user-order/${orderId}`, data, {
        headers: { access_token: `${token}` },
      })
      .then(
        (response) => {
          console.log("\n\n\n\n == >> res status : ", response.data);
          if (response?.data?.status === 201) {
            dispatch(getOrders())
            callback()
          }
        },
        (error) => {
          MessageError("Please, Check Your Internet Connection");
        }
      );
  };
}

export function getOrdersType() {
  return async (dispatch) => {
    axios.get(`${adminUrl}/order-type`).then(
      (response) => {
        if (response?.status === 200) {
          dispatch({
            type: ORDER_TYPE,
            data: response?.data?.result,
          });
        }
      },
      (error) => {}
    );
  };
}
