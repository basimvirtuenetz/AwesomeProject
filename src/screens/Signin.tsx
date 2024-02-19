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
import {useNavigation} from '@react-navigation/native';
import {newUser} from '../firebase/EmailSignin';
import EmptyFeildModal from '../components/reuseablecomps/EmptyFeildModal';
import {useDispatch, useSelector} from 'react-redux';
import {setUSerData} from '../Redux/Slices/UserSlice';

const Signin = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [Username, setName] = React.useState<string>('');
  const dispatch = useDispatch();
  const themeMode = useSelector((state: any) => state.theme.mode);
  const handleSignin = async (data: any) => {
    if (!email || !password || !Username) {
      setIsVisible(true);
    } else {
      newUser(Username, email, password);
      dispatch(setUSerData(data));
    }
  };
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
          <Title style={{color: themeMode.text}}>Create your account!</Title>
        </Header>
        <Input
          placeholder="User-name here"
          placeholderTextColor={Colors.Dblue}
          enterKeyHint="next"
          cursorColor={Colors.Dblue}
          value={Username}
          onChangeText={text => setName(text)}
        />
        <Input
          placeholder="Email-Address here"
          placeholderTextColor={Colors.Dblue}
          enterKeyHint="next"
          cursorColor={Colors.Dblue}
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <Input
          placeholder="Password here"
          placeholderTextColor={Colors.Dblue}
          enterKeyHint="next"
          keyboardType="visible-password"
          cursorColor={Colors.Dblue}
          value={password}
          onChangeText={text => setPassword(text)}
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
            <BtnTxt>Login</BtnTxt>
          </LinearGradient>
        </Btn>
      </Wrapper>
    </KeyboardAwareScrollView>
  );
};

export default Signin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
