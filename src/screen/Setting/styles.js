import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {normalize} from '../../utils/helper';

export const styles = StyleSheet.create({
  introBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: normalize(4),
    borderRadius: normalize(4),
    width: normalize(94)
  },
  introText: {
    width: normalize(60),
    justifyContent: 'space-evenly'
  },
});
