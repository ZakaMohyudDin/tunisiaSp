import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {normalize} from '../../utils/helper';

export const styles = StyleSheet.create({
    imagPickBox: {
        height: normalize(10),
        width: normalize(10),
        borderRadius: normalize(10),
        backgroundColor: colors.primary_color,
        justifyContent:'center',
        alignItems:'center',
        position: 'absolute',
        right: normalize(27),
        top: normalize(15)
      },
});