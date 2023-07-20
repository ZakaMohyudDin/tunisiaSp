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
                onPress={() => navigation.navigate("Subscription")}
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
