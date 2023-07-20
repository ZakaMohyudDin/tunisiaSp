import React, { useEffect } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { normalize } from '../../utils/helper';
import Spacer from '../../components/Spacer';
import { mltiLanguages } from '../../utils/multiLanguage';
import { styles } from './styles';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import Headers from '../../components/Headers';
import { colors } from '../../utils/colors';
import Heading from '../../components/Heading';
import ButtonReciept from '../../components/ButtonReciept';
import Input from '../../components/Input';
import SubHeading from '../../components/SubHeading';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { getUserProfits } from '../../redux/actions/userProfitAction';

const Reciept = ({ navigation }) => {


  const dispatch = useDispatch();
  const { currentUser, token } = useSelector(({ authReducer }) => authReducer);


  const { user_profits } = useSelector(
    ({ userProfitReducer }) => userProfitReducer
  );




  useFocusEffect(
    React.useCallback(() => {
      console.log('requested');
      dispatch(getUserProfits(currentUser.id));
    }, [])
  );

  useEffect(() => {
    console.log('user_profits', user_profits);
  }, [user_profits]);



  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: normalize(3),
        backgroundColor: colors.main_background,
      }}>
      <Headers addService={true} openDrawer={() => navigation.openDrawer()} />
      <Spacer height={normalize(6)} />
      <SubHeading
        text={mltiLanguages('arabic').sub_header}
        fontFamily={"FontsFree-Net-URW-DIN-Arabic-1"}
        textAlign={"left"}
      />
      <Spacer height={normalize(4)} />
      <FlatList
        data={user_profits}
        renderItem={({ item, index }) => <ButtonReciept
          onPress={() => navigation.navigate('TransactionHistory')}
          // text={'500 ' + mltiLanguages('arabic').register}
          item={item}
          heading={mltiLanguages('arabic').register}
        />}
        keyExtractor={(item) => item.id}
        style={{ paddingBottom: 10 }}
      />
      {/* <ButtonReciept
        onPress={() => navigation.navigate('TransactionHistory')}
        text={'500 ' + mltiLanguages('arabic').register}
        heading={mltiLanguages('arabic').register}
      />
      <Spacer height={normalize(5)} />
      <ButtonReciept
        onPress={() => navigation.navigate('TransactionHistory')}
        text={'500 ' + mltiLanguages('arabic').register}
        heading={mltiLanguages('arabic').register}
      /> */}
      <Spacer height={normalize(8)} />
      <Paragraph
        text={
          mltiLanguages('arabic').slide_desc +
          mltiLanguages('arabic').verif_desc
        }
        // weight={'600'}
        fontSize={normalize(3.8)}
        color={colors.subHeading}
      />
      <Spacer height={normalize(6)} />
      <Input
        placeholder={mltiLanguages('arabic').verif_desc}
        bgColor={colors.white}
        width={normalize(92)}
      />
      <Spacer height={normalize(6)} />
      <Button
        onPress={() => navigation.navigate("Subscription")}
        width={normalize(70)}
        text={mltiLanguages('arabic').verify}
        gradiantFirst={colors.primary_color}
        gradiantSecond={colors.primary_color}
      />
    </ScrollView>
  );
};

export default Reciept;
