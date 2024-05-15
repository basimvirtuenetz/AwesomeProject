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
import AsyncStorage from '@react-native-async-storage/async-storage';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {AuthConfiguration, authorize} from 'react-native-app-auth';

const OnBoard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const themeMode = useSelector((state: any) => state.theme.mode);

  const config: AuthConfiguration = {
    issuer: 'https://accounts.google.com',
    clientId:
      '896614962578-j2314ci65bacagr2ra0ujlejve6brpjn.apps.googleusercontent.com',
    redirectUrl: 'https://myproject.com/oauth',
    scopes: ['openid'],
  };
  const handleGoogle = async () => {
    try {
      const result = await authorize(config);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    // // the client id from GCP
    // const client_id =
    //   '896614962578-j2314ci65bacagr2ra0ujlejve6brpjn.apps.googleusercontent.com';
    // // create a CSRF token and store it locally
    // // const state = crypto.randomBytes(16).toString('hex');
    // // AsyncStorage.setItem('latestCSRFToken', state);
    // const url = `https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/cloud-platform&response_type=code&access_type=offline&redirect_uri=https://awesome-project-1e031.firebaseapp.com/__/auth/handler&client_id=${client_id}`;
    // const result = InAppBrowser.open(url);
    // // redirect the user to Google
    // // const link = `https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/cloud-platform&response_type=code&access_type=offline&state&redirect_uri=${window.location.origin}/integrations/google/oauth2/callback&client_id=${client_id}`;
    // // window.location.assign(url);
  };

  const handleGit = () => {
    const url = 'https://github.com';
    const result = InAppBrowser.open(url);
  };
  return (
    <KeyboardAwareScrollView
      style={{flex: 1, backgroundColor: themeMode.background}}>
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
        <Btn onPress={() => handleGoogle()}>
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
        <Btn onPress={() => handleGit()}>
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
            <BtnTxt>Github Signin</BtnTxt>
          </LinearGradient>
        </Btn>
      </Wrapper>
    </KeyboardAwareScrollView>
  );
};

export default OnBoard;

const styles = StyleSheet.create({});
