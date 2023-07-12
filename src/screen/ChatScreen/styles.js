import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {normalize} from '../../utils/helper';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
    userMessage: {
      backgroundColor: '#DCF8C6',
      alignSelf: 'flex-end',
      padding: 8,
      margin: 8,
      borderRadius: 8,
    },
    otherMessage: {
      backgroundColor: '#FFFFFF',
      alignSelf: 'flex-start',
      padding: 8,
      margin: 8,
      borderRadius: 8,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderTopWidth: 1,
      borderTopColor: '#CCCCCC',
    },
    input: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    sendButton: {
      marginLeft: 8,
      backgroundColor: '#2ECC71',
      borderRadius: 20,
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    sendButtonText: {
      color: '#FFFFFF',
    },
  });
  