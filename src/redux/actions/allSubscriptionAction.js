import { ALL_SUBSCRIPTIONS, SUBSCRIPTIONS } from "../constants";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";

export function getAllSubscriptions(callback) {
    return async (dispatch) => {
        axios.get(`${apiUrl}/user-subscription`).then(

            (response) => {
                if (response?.data?.status === 200) {

                    dispatch({ type: ALL_SUBSCRIPTIONS, data: response?.data?.result });
                }
            },
            (error) => {
                MessageError("User Subscriptons did not recieved");

            }
        );
    };
}
export function getSubscriptions(callback) {
    return async (dispatch) => {
        axios.get(`${apiUrl}/subscription`).then(

            (response) => {
                if (response?.data?.status === 200) {

                    dispatch({ type: SUBSCRIPTIONS, data: response?.data?.result });
                }
            },
            (error) => {
                MessageError("Subscriptons did not recieved");

            }
        );
    };
}
