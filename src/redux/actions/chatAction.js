import { CONTACTS_LIST, CHAT_MEMBERS, MY_CHAT } from "../constants";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";
import { notificationFarmater } from "../../utils/helper";

export function getContactListAction(token) {
  return async (dispatch) => {
    axios
      .get(`${apiUrl}/user-contact`, {
        headers: { access_token: `${token}` },
      })
      .then(
        (response) => {
          if (response?.data?.status === 200) {
            dispatch({ type: CONTACTS_LIST, data: response?.data?.result });
          }
        },
        (error) => {}
      );
  };
}

export function getChatMembersAction(token) {
  return async (dispatch) => {
    axios
      .get(`${apiUrl}/user-message`, {
        headers: { access_token: `${token}` },
      })
      .then(
        (response) => {
          console.log("\n\n\n ===>> res members ", response.data.result);
          if (response?.data?.status === 200) {
            dispatch({ type: CHAT_MEMBERS, data: response?.data?.result });
          }
        },
        (error) => {}
      );
  };
}

export function sendMessageAction(token, data, callBack) {
  return async (dispatch) => {
    axios
      .post(`${apiUrl}/message-conversation`, data, {
        headers: { access_token: `${token}` },
      })
      .then(
        (response) => {
          console.log("\n\n\n res final...", response.data);
          callBack();
        },
        (error) => {}
      );
  };
}

export function sendUserMessageAction(token, data, callBack) {
  return async (dispatch) => {
    axios
      .post(`${apiUrl}/user-message`, data, {
        headers: { access_token: `${token}` },
      })
      .then(
        (response) => {
          callBack(response?.data?.result?.id);
        },
        (error) => {}
      );
  };
}

export function getConversationAction(token, id) {
  return async (dispatch) => {
    axios
      .get(`${apiUrl}/message-conversation?userMessageId=${id}`, {
        headers: { access_token: `${token}` },
      })
      .then(
        (response) => {
          console.log("\n\n\n ==>> chat res :  ", response?.data);
          if (response?.data?.status === 200) {
            dispatch({ type: MY_CHAT, data: response?.data?.result });
          }
        },
        (error) => {}
      );
  };
}