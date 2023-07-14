import { CONTACT_US } from "../constants";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";

export function getContactUsInfo(callback) {
    return async (dispatch) => {
        axios.get(`${apiUrl}/contact`).then(

            (response) => {
                if (response?.data?.status === 200) {
                    var contactionUsInfo = response?.data?.result;
                    console.log('contact_us', response);
                    dispatch({ type: CONTACT_US, data: contactionUsInfo });
                }
            },
            (error) => {
                MessageError("Contact Us did not recieved");

            }
        );
    };
}
