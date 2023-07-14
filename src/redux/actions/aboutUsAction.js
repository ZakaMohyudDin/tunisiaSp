import { ABOUT_US } from "../constants";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";

export function getAboutUs(callback) {
    return async (dispatch) => {
        axios.post(`${apiUrl}/application`).then(

            (response) => {
                if (response?.data?.status === 200) {
                    var aboutUs = response?.data?.result;
                    console.log('aboutUs', response);

                    dispatch({ type: ABOUT_US, data: aboutUs });
                }
            },
            (error) => {
                MessageError("About Us did not recieved");

            }
        );
    };
}
