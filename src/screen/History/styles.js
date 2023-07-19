import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {normalize} from '../../utils/helper';

export const styles = StyleSheet.create({
  item: {
    marginVertical: normalize(1),
    width: normalize(92),
    borderRadius: normalize(2),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: normalize(2)
  },
  actionMenu: {
    backgroundColor: colors.white,
    width: normalize(55),
    padding: normalize(2),
    borderRadius: normalize(2),
    margin: normalize(2),
    opacity: 1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  optionBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: normalize(1),
    marginVertical: normalize(2),
  },
});
