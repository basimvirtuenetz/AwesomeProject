import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
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
import LinearGradient from 'react-native-linear-gradient';
import {GoogleLogin} from '../firebase/GoogleSignin';
import {setUSerData} from '../Redux/Slices/UserSlice';
import {useDispatch, useSelector} from 'react-redux';

const OnBoard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const themeMode = useSelector(state => state.theme.mode);
  return (
    <KeyboardAwareScrollView
      style={[styles.container, {backgroundColor: themeMode.background}]}>
      <Wrapper>
        <Header style={{alignItems: 'center'}}>
          <Title style={{color: themeMode.text}}>Awesome Project</Title>
        </Header>

        <Btn onPress={() => navigation.navigate('Login')}>
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
            <BtnTxt>Email Login</BtnTxt>
          </LinearGradient>
        </Btn>
        <Btn onPress={() => navigation.navigate('Signin')}>
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
            <BtnTxt>Create Acc</BtnTxt>
          </LinearGradient>
        </Btn>
        <Btn onPress={() => GoogleLogin(data => dispatch(setUSerData(data)))}>
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
            <BtnTxt>Google SignUp</BtnTxt>
          </LinearGradient>
        </Btn>
        <Btn onPress={() => navigation.navigate('Phone')}>
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
            <BtnTxt>Login With Num</BtnTxt>
          </LinearGradient>
        </Btn>
      </Wrapper>
    </KeyboardAwareScrollView>
  );
};

export default OnBoard;

const styles = StyleSheet.create({});
