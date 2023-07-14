import { USER_CONTACTS } from "../constants";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";

export function getUserContact(callback) {
    return async (dispatch) => {
        axios.get(`${apiUrl}/user-contact`).then(

            (response) => {
                if (response?.data?.status === 200) {
                    var userContacts = response?.data?.result;
                    console.log('notttttt', response);
                    dispatch({ type: USER_CONTACTS, data: userContacts });
                }
            },
            (error) => {
                MessageError("Contacts did not recieved");

            }
        );
    };
}
