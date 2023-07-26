import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import Headers from "../../components/Headers";
import { normalize } from "../../utils/helper";
import SubHeading from "../../components/SubHeading";
import { mltiLanguages } from "../../utils/multiLanguage";
import Paragraph from "../../components/Paragraph";
import { styles } from "./styles";
import Spacer from "../../components/Spacer";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/Button";
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubscriptions } from "../../redux/actions/allSubscriptionAction";
import Picture from "../../components/Picture";
import { MessageError } from "../../utils/showAlerts";
// import InAppUtils from 'react-native-in-app-utils';
import GooglePay, { GooglePayRequestData } from 'react-native-google-pay';
import PayPal from 'react-native-paypal-wrapper';

const PaymentOptions = ({ navigation }) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [loader, setLoader] = useState();
    const dispatch = useDispatch();
    const [paymentSelected, setPaymentSelected] = useState("");

    const { subscriptions } = useSelector(
        ({ allSubscriptionReducer }) => allSubscriptionReducer
    );




    useFocusEffect(
        React.useCallback(() => {
            console.log('requested');
            dispatch(getAllSubscriptions());
        }, [])
    );

    useEffect(() => {
        console.log('subscriptions', subscriptions);
    }, [subscriptions]);



    const payYourPayment = () => {

        if (!paymentSelected) {
            MessageError("Please Select Payment Method")
            return;
        }

        if (paymentSelected == "paypal") payWIthPayPal()
        else payWIthGPay()
    }

   
    const payWIthPayPal = async () => {
        try {
          const payment = {
            // Required: Payment intent 'sale' for immediate payment
            intent: PayPal.SANDBOX, // or PayPal.LIVE for production
            price: '10.00',
            currency: 'USD',
            description: 'Payment for your service/product',
          };
    
          const paymentResponse = await PayPal.paymentRequest(payment);
    
          console.log('Payment response:', paymentResponse);
          // Payment response will contain details like response.id, response.nonce, response.payerID, etc.
    
          if (paymentResponse.response.state === 'approved') {
            // Payment successful; process the payment on your server
            // You might want to redirect the user to a success page or show a success message.
          } else {
            // Payment canceled or failed
            // Handle the failure scenario
          }
        } catch (error) {
          console.log('Payment error:', error);
          // Handle error scenarios
        }
      };


    const payWIthGPay = async () => {
        const requestData: GooglePayRequestData = {
            cardPaymentMethod: {
                tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    gateway: 'your_payment_gateway', // Replace with your payment gateway
                    gatewayMerchantId: 'your_gateway_merchant_id', // Replace with your gateway merchant ID
                },
                allowedCardNetworks: ['VISA', 'MASTERCARD'],
                allowedCardAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            },
            transaction: {
                totalPrice: '10.00',
                totalPriceStatus: 'FINAL',
                currencyCode: 'USD',
            },
            merchantName: 'Your Merchant',
        };

        try {
            const token = await GooglePay.showPaymentForm(requestData);
            // Handle the payment token received
            console.log('Google Pay token:', token);
        } catch (error) {
            console.error('Google Pay error:', error);
        }
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.main_background,
                paddingHorizontal: normalize(3),
            }}
        >
            <Headers addService={true} openDrawer={() => navigation.openDrawer()} />

            <Spacer height={12} />
            <SubHeading
                text={"Payment Options"}
                color={colors.dark_gray}
                textAlign={"left"}
                weight={"600"}
                fontSize={normalize(4.3)}
                fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
            />

            <Paragraph
                text={"Please select your payment method"}
                color={colors.dark_gray}
                textAlign={"left"}
                weight={"600"}
                fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
            />

            <View style={paymentSelected == "paypal" ? styles.paymentOptionCardSelected : styles.paymentOptionCard}>


                <TouchableOpacity
                    style={[styles.drawerItem, {}]}
                    onPress={() => setPaymentSelected("paypal")}
                >
                    <Picture
                        localSource={require("../../assets/icon_paypal.png")}
                        height={normalize(5.5)}
                        width={normalize(5.5)}
                        imgColor={null}
                    />
                    <View style={{ width: normalize(3) }} />
                    <SubHeading
                        text={"Paypal"}
                        fontSize={normalize(4.2)}
                        weight={"620"}
                        textAlign={"left"}
                        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
                    />
                </TouchableOpacity>


            </View>
            <Spacer height={10} />

            <View style={paymentSelected == "gpay" ? styles.paymentOptionCardSelected : styles.paymentOptionCard}>


                <TouchableOpacity
                    style={[styles.drawerItem, {}]}
                    onPress={() => setPaymentSelected("gpay")}
                >
                    <Picture
                        localSource={require("../../assets/icon_g_pay.png")}
                        height={normalize(5.5)}
                        width={normalize(5.5)}
                        imgColor={null}
                    />
                    <View style={{ width: normalize(3) }} />
                    <SubHeading
                        text={"GooglePay"}
                        fontSize={normalize(4.2)}
                        weight={"620"}
                        textAlign={"left"}
                        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
                    />
                </TouchableOpacity>


            </View>



            <Spacer height={226} />
            {/* <Paragraph text={mltiLanguages("arabic").verif_desc} textAlign={"left"} />
            <Spacer height={12} />
            <Paragraph
                text={"10 " + mltiLanguages("arabic").register}
                color={colors.dark_gray}
                textAlign={"left"}
                weight={"600"}
                fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
            /> */}



            <Spacer height={2} />

            <Button
                // onPress={() => signInUser()}
                // onPress={() => loginFn()}
                onPress={() => payYourPayment()}
                width={loader ? 48 : normalize(70)}
                roundCorner={loader ? normalize(11) : 10}
                text={mltiLanguages("arabic").login}
                gradiantFirst={colors.primary_color}
                gradiantSecond={colors.primary_color}
                loader={loader}
                loaderSize={"large"}
            />
        </View>
    );
};

export default PaymentOptions;
