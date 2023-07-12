import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {normalize} from '../../utils/helper';

export const styles = StyleSheet.create({
  splashHeading: {
    textAlign: 'center',
    fontSize: normalize(6),
    fontWeight: '600',
    color: colors.black,
    marginTop: normalize(1),
  },
  hr: {
    height: 2,
    width: normalize(28),
    backgroundColor: colors.inputBg,
    marginHorizontal: normalize(2)
  },
  boxHr: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});