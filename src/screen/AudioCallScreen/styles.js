import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {normalize} from '../../utils/helper';

export const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: normalize(64),
    alignSelf: 'center',
    marginTop: normalize(20),
  },
  endCallBtn: {
    alignSelf: 'center',
    marginTop: normalize(8)
  },
  btnTxt: {
    alignItems: 'center'
  }
});
