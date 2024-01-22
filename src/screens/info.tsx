import {StyleSheet} from 'react-native';
import React from 'react';
import {Input, Title, Wrapper, Btn, BtnTxt} from '../components/styledComp';
import {Colors} from '../colors/colors';
import LinearGradient from 'react-native-linear-gradient';

const Info = () => {
  return (
    <Wrapper style={{backgroundColor: Colors.white}}>
      <Title>Name :</Title>
      <Input
        cursorColor={Colors.Dblue}
        placeholder="Change username"
        placeholderTextColor={Colors.Dblue}
        autoCapitalize="words"
      />
      <Title>New-password :</Title>
      <Input
        cursorColor={Colors.Dblue}
        placeholder="***********"
        placeholderTextColor={Colors.Dblue}
        keyboardAppearance="default"
        keyboardType="visible-password"
      />
      <Title>Confirm-password :</Title>
      <Input
        cursorColor={Colors.Dblue}
        placeholder="***********"
        placeholderTextColor={Colors.Dblue}
        keyboardAppearance="default"
        keyboardType="visible-password"
      />
      <Btn activeOpacity={0.7}>
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
          <BtnTxt>Confirm Changes</BtnTxt>
        </LinearGradient>
      </Btn>
    </Wrapper>
  );
};

export default Info;

const styles = StyleSheet.create({});
