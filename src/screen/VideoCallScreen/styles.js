import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../utils/colors';
import {normalize} from '../../utils/helper';
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  image: {
    // flex: 1,
    width: '100%',
    height: windowHeight,
    justifyContent: 'center',
  },
  imgContainer: {
    position: 'absolute',
    bottom: windowHeight * 0.2,
    left: normalize(4)
  },
  btnContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: windowHeight * 0.1,
    justifyContent: 'space-around',
    width: normalize(50),
    alignSelf: 'center'
    // left: normalize(16)
  }
});
