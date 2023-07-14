import { SERVICES } from "../constants";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";
import { notificationFormater } from "../../utils/helper";

export function getAllServices(callback) {
    return async (dispatch) => {
        axios.get(`${apiUrl}/service-available`).then(

            (response) => {
                if (response?.data?.status === 200) {

                    dispatch({ type: SERVICES, data: response?.data?.result });
                }
            },
            (error) => {
                MessageError("Services did not recieved");

            }
        );
    };
}
