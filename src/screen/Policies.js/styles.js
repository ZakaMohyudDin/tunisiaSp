import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {normalize} from '../../utils/helper';

export const styles = StyleSheet.create({
  flatHeight: {
    flexDirection: 'row',
    width: normalize(92),
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: normalize(2)
  },
  policiText: {
    backgroundColor: colors.white,
    padding: normalize(3),
    borderRadius: normalize(2),
    marginTop: normalize(2)
  },
  itemStyle: {
    marginVertical: normalize(2)
  }
});
