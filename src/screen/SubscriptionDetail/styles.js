import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {normalize} from '../../utils/helper';

export const styles = StyleSheet.create({
    subscriptionBox: {
        backgroundColor: colors.white,
        marginTop: 12,
        padding: 16,
        borderRadius: 10
    },
    pick: {
        backgroundColor: colors.white,
        borderRadius: 10,
        marginTop: 16,
        marginBottom: normalize(6),
      },
});