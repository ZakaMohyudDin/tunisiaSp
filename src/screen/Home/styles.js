import {StyleSheet} from 'react-native';
// import {colors} from '../../utils/colors';
import { colorsFn } from '../../utils/colors';
import {normalize} from '../../utils/helper';

export const styles = StyleSheet.create({
  item: {
    height: normalize(32),
    width: normalize(32),
    marginHorizontal: normalize(1),
    borderRadius: normalize(2),
    justifyContent:'flex-end',
  },
  itemTransaction: {
    marginVertical: normalize(1),
    width: normalize(92),
    marginHorizontal: normalize(1),
    borderRadius: normalize(2),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colorsFn().white,
    flexDirection: 'row',
    padding: normalize(2),
  },
});
