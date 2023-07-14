import { USAGE_POLICY } from "../constants";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";

export function getUsagePolicy(callback) {
    return async (dispatch) => {
        axios.get(`${apiUrl}/usage-policy`).then(

            (response) => {
                if (response?.data?.status === 200) {
                    var usagePolicy = response?.data?.result;
                    // notificationFormater(totalNotification)
                    console.log('notttttt', response);

                    dispatch({ type: USAGE_POLICY, data: usagePolicy });
                }
            },
            (error) => {
                MessageError("Usage Policy did not recieved");

            }
        );
    };
}
