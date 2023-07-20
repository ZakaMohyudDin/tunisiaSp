import { USER_PROFITS, PROFIT_HISTORY } from "../constants";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";

export function getUserProfits(userId) {
    return async (dispatch) => {
        axios.get(`${apiUrl}/user-profits?userId=${userId}`).then(
            (response) => {
                if (response?.data?.status === 200) {
                    var confirmedProfit = 0
                    var noConfirmedProfit = 0
                    for (let i = 0; i < response?.data?.result.length; i++) {
                        confirmedProfit = confirmedProfit + response?.data?.result[i]?.userProfitsConfirmed
                        noConfirmedProfit = noConfirmedProfit + response?.data?.result[i]?.userProfitsNoConfirmed
                    }
                    var userProfit = {
                        confirmedProfit: confirmedProfit,
                        noConfirmedProfit: noConfirmedProfit
                    }
                    dispatch({ type: USER_PROFITS, data: userProfit });
                    dispatch({ type: PROFIT_HISTORY, data: response?.data?.result });
                }
            },
            (error) => {
                MessageError(error.response.data.message);
            }
        );
    };
}
