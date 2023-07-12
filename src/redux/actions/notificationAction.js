import { WELCOME_TEXT, NOTIFICATION } from "../constants";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";
import { notificationFormater } from "../../utils/helper";

export function getNotification(callback) {
  return async (dispatch) => {
    axios.get(`${apiUrl}/user-notification`).then(
      (response) => {
        if (response?.data?.status === 200) {
          var totalNotification = response?.data?.result;
          notificationFormater(totalNotification)
          for (let i = 0; i < totalNotification.length; i++) {
            totalNotification[i].isShow = true;
          }
          dispatch({ type: NOTIFICATION, data: totalNotification });
        }
      },
      (error) => {}
    );
  };
}
