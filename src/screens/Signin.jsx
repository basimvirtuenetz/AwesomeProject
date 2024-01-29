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
import {Alert, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {LoginUser, newUser} from '../firebase/EmailSignin';
import EmptyFeildModal from '../components/reuseablecomps/EmptyFeildModal';
import {addUsertoFirestore} from '../firebase/Firestore';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {setUSerData} from '../Redux/Slices/UserSlice';

const Signin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  const [Username, setName] = React.useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const themeMode = useSelector(state => state.theme.mode);
  const handleSignin = async data => {
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
