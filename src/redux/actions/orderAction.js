import { ORDER, ORDER_TYPE } from "../constants";
import axios from "axios";
import { apiUrl, adminUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";

export function getOrders(typeId, callback) {
  return async (dispatch) => {
    axios.get(`${apiUrl}/user-order?userTypeId=${typeId}`).then(
      (response) => {
        // console.log("res", response.data);
        if (response?.data?.status === 200) {
          dispatch({
            type: ORDER,
            data: response?.data?.result,
          });
          // callback();
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
