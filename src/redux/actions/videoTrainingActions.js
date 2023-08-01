import { TRAINING_SERVICE } from "../constants";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";
import { notificationFormater } from "../../utils/helper";

export function getTrainingServices(callback) {
    return async (dispatch) => {
        axios.get(`${apiUrl}/user-service-training`).then(

            (response) => {
                if (response?.data?.status === 200) {
                    dispatch({ type: TRAINING_SERVICE, data: response?.data?.result });
                }
            },
            (error) => {
                MessageError("Services did not recieved");

            }
        );
    };
}
