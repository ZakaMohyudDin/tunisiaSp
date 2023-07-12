import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {normalize} from '../../utils/helper';

export const styles = StyleSheet.create({
    btnContainer:{
        flexDirection: 'row',
        marginTop: normalize(10),
        marginBottom: normalize(4),
        justifyContent: 'space-between'
    }
});