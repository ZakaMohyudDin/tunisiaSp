import { USERS_MESSAGES, USER_CONTACTS } from "../constants";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";

export function getUsersMessages(callback) {
    return async (dispatch) => {
        axios.get(`${apiUrl}/user-message`).then(

            (response) => {
                if (response?.data?.status === 200) {
                    var usersMessages = response?.data?.result;
                    console.log('messages', response);
                    dispatch({ type: USERS_MESSAGES, data: usersMessages });
                }
            },
            (error) => {
                MessageError("Messages did not recieved");

            }
        );
    };
}
