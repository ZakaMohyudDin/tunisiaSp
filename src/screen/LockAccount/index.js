import React from 'react';
import { ScrollView} from 'react-native';
import {normalize} from '../../utils/helper';
import Spacer from '../../components/Spacer';
import {mltiLanguages} from '../../utils/multiLanguage';
import {styles} from './styles';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import {colors} from '../../utils/colors';
import Headers from '../../components/Headers';
import Heading from '../../components/Heading';
import Input from '../../components/Input';

const LockAccount = ({navigation}) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(3),
        backgroundColor: colors.main_background,
      }}>
      <Headers goBack={() => navigation.navigate('Setting')} />
      <Spacer height={normalize(4)} />
      <Heading text={mltiLanguages('arabic').sub_header} fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"} textAlign={'center'} />
      <Spacer height={normalize(2)} />
      <Paragraph
        text={mltiLanguages('arabic').slide_desc}
        textAlign={'center'}
      />
      <Spacer height={normalize(6)} />
      <Input
        placeholder={mltiLanguages('arabic').password}
        bgColor={colors.white}
        width={normalize(90)}
        textAlign={"left"}
      />
      <Spacer height={normalize(8)} />
      <Button
        onPress={() => navigation.navigate('OtpScreen')}
        width={normalize(70)}
        text={mltiLanguages('arabic').register}
        gradiantFirst={colors.primary_color}
        gradiantSecond={colors.primary_color}
      />
    </ScrollView>
  );
};

export default LockAccount;
