import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {normalize} from '../../utils/helper';

export const styles = StyleSheet.create({
  item: {
    marginVertical: normalize(1),
    height:normalize(52),
    width: normalize(44),
    marginHorizontal: normalize(1),
    borderRadius: normalize(2),
    justifyContent: 'space-between',
  },
  imagPickBox: {
    height: normalize(10),
    width: normalize(10),
    borderRadius: normalize(10),
    backgroundColor: colors.primary_color,
    justifyContent:'center',
    alignItems:'center',
    position: 'absolute',
    right: normalize(29),
    top: normalize(15)
  },
  txtStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  indeViduleTxt: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});