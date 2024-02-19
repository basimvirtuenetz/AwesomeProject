import React from 'react';
import {
  Input,
  Title,
  Btn,
  Wrapper,
  Header,
  BtnTxt,
} from '../components/styledComp';
import {Colors} from '../colors/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {PhoneLogin, VerPhoneLogin} from '../firebase/PhoneLogin';
import EmptyFeildModal from '../components/reuseablecomps/EmptyFeildModal';
import {useSelector} from 'react-redux';

const Phone = () => {
  const [number, setNumber] = React.useState<string>('');
  const [confirm, setConfirm] = React.useState<boolean>(false);
  const [code, setCode] = React.useState<string>('');
  const [isVisible, setIsVisible] = React.useState(false);
  const themeMode = useSelector((state: any) => state.theme.mode);

  const handleSignin = async () => {
    if (!number) {
      setIsVisible(true);
    } else {
      PhoneLogin(number);
      setConfirm(true);
    }
  };
  const ConfrimCode = () => {
    if (!code) {
      setIsVisible(true);
    } else {
      VerPhoneLogin(code);
    }
  };
  if (!confirm) {
    return (
      <KeyboardAwareScrollView
        style={[styles.container, {backgroundColor: themeMode.background}]}>
        <EmptyFeildModal
          visible={isVisible}
          backprs={() => setIsVisible(false)}
          close={() => setIsVisible(false)}
        />
        <Wrapper>
          <Header>
            <Title style={{color: themeMode.text}}>SignUp with Number!</Title>
          </Header>
          <Input
            placeholder="Phone-Number"
            placeholderTextColor={Colors.Dblue}
            enterKeyHint="next"
            cursorColor={Colors.Dblue}
            value={number}
            onChangeText={(text: string) => setNumber(text)}
          />
          <Btn onPress={handleSignin}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={[Colors.Lblue, Colors.Dblue]}
              style={{
                width: 180,
                height: 60,
                borderRadius: 40,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <BtnTxt>Send</BtnTxt>
            </LinearGradient>
          </Btn>
        </Wrapper>
      </KeyboardAwareScrollView>
    );
  }

  return (
    <>
      <KeyboardAwareScrollView style={styles.container}>
        <EmptyFeildModal
          visible={isVisible}
          backprs={() => setIsVisible(false)}
          close={() => setIsVisible(false)}
        />
        <Wrapper>
          <Header>
            <Title>Verification!</Title>
          </Header>
          <Input
            placeholder="Enter-Code"
            placeholderTextColor={Colors.Dblue}
            enterKeyHint="next"
            keyboardType="numeric"
            cursorColor={Colors.Dblue}
            value={code}
            onChangeText={(text: any) => setCode(text)}
          />

          <Btn onPress={ConfrimCode}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={[Colors.Lblue, Colors.Dblue]}
              style={{
                width: 180,
                height: 60,
                borderRadius: 40,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <BtnTxt>Confirm</BtnTxt>
            </LinearGradient>
          </Btn>
        </Wrapper>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Phone;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
