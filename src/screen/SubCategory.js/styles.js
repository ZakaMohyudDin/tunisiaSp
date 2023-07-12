import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {normalize} from '../../utils/helper';

export const styles = StyleSheet.create({
  item: {
    marginVertical: normalize(1),
    height: normalize(36),
    width: normalize(30),
    marginHorizontal: normalize(1),
    borderRadius: normalize(2.5),
    justifyContent: 'space-evenly',
    backgroundColor: colors.white,
    paddingHorizontal: normalize(2),
  },
});
