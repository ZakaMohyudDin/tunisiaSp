import { USER_CONTACTS } from "../constants";
import axios from "axios";
import { apiUrl } from "../../utils/config";
import { MessageError, MessageInfo } from "../../utils/showAlerts";

export function sendOtpAction(token, data, callback) {
    return async (dispatch) => {
        axios.post(`${apiUrl}/auth/sent-otp`, data, {
            headers: { access_token: `${token}` },
        }).then(
            (response) => {
                console.log("\n\n res ", response?.data)
                if (response?.data?.status === 200) {
                    callback()
                    MessageInfo("Check You Email! \n OTP has been sent to your email address")
                }
            },
            (error) => {
                MessageError("Contacts did not recieved");

            }
        );
    };
}


export function verifyOtpAction(token, data, callback) {
    return async (dispatch) => {
        axios.post(`${apiUrl}/auth/users/verify-otp`, data, {
            headers: { access_token: `${token}` },
        }).then(
            (response) => {
                console.log("\n\n res otp verify ", response?.data)
                if (response?.data?.status === 200) {
                    callback()
                    MessageInfo("OTP Verified successfully! \n Please Reset Your Password")
                }
            },
            (error) => {
                console.log(error)
                MessageError("You Entered Invalid OTP!");

            }
        );
    };
}


export function resetPasswordAction(token, data, callback) {
    return async (dispatch) => {
        axios.post(`${apiUrl}/auth/reset-password`, data, {
            headers: { access_token: `${token}` },
        }).then(
            (response) => {
                console.log("\n\n reset password ", response?.data)
                if (response?.data?.status === 200) {
                    callback()
                    MessageInfo("Congratulation! \nYour Password Has Been Reset Successfully")
                }
            },
            (error) => {
                MessageError("Please! Check Your Internet Connection");
            }
        );
    };
}
