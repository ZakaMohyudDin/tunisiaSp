import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {normalize} from '../../utils/helper';

export const styles = StyleSheet.create({
  item: {
    marginVertical: normalize(1.2),
    width: normalize(92),
    marginHorizontal: normalize(1),
    borderRadius: normalize(2),
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: normalize(2),   
  },
});
