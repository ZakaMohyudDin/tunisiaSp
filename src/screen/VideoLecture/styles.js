import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {normalize} from '../../utils/helper';

export const styles = StyleSheet.create({
  leftTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  videoListBox: {
    width: normalize(94),
    backgroundColor: colors.white,
    minHeight: normalize(20),
    marginVertical: normalize(2),
    borderRadius: normalize(2),
    alignSelf: 'center',
    paddingVertical: normalize(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(2),   
  },
});
