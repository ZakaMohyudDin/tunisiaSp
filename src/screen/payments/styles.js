import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { normalize } from '../../utils/helper';

export const styles = StyleSheet.create({
    paymentOptionCard: {
        backgroundColor: colors.white,
        marginTop: 12,
        padding: 16,
        borderRadius: 10,
        justifyContent: 'center'
    },
    paymentOptionCardSelected: {
        backgroundColor: colors.gradiant2,
        marginTop: 12,
        padding: 16,
        borderRadius: 10,
        justifyContent: 'center'
    },
    pick: {
        backgroundColor: colors.white,
        borderRadius: 10,
        marginTop: 16,
        marginBottom: normalize(6),
    },
    drawerItem: {
        // marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    drawerText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});