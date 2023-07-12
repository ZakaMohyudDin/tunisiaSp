import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {normalize} from '../../utils/helper';

export const styles = StyleSheet.create({
  item: {
    marginVertical: normalize(1),
    width: normalize(93),
    // marginHorizontal: normalize(1),
    borderRadius: normalize(2),
    justifyContent: 'space-between',
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: normalize(2),
    alignSelf: 'center',
  },
  HeadingBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sectionHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: normalize(2)
  },
  listName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: normalize(68)
  },
  flatHeight: {
    flexDirection: 'row',
    width: normalize(92),
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: normalize(2),
    marginTop: normalize(2)
  },
});