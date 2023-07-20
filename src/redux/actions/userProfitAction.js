import { ALL_SUBSCRIPTIONS, USER_PROFITS } from "../constants";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";

export function getUserProfits(userId) {
    console.log('userID', userId);
    return async (dispatch) => {
        axios.get(`${apiUrl}/user-profits?userId=${userId}`).then(

            (response) => {
                if (response?.data?.status === 200) {

                    dispatch({ type: USER_PROFITS, data: response?.data?.result });
                }
            },
            (error) => {
                MessageError(error.response.data.message);

            }
        );
    };
}
