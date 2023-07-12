import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { normalize } from "./helper";
import { multiThemeColor } from "./multiTheme";


export const GeneralStyles = StyleSheet.create({
    container: {
        backgroundColor : multiThemeColor().main_background,
        flex: 1,
        paddingHorizontal: normalize(2),
    }
})