import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Btn, BtnTxt, Title, Wrapper} from '../components/styledComp';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../colors/colors';

export type Props = {
  name: string;
  baselevl?: number;
};

const Dummy = ({name = 'Basim', baselevl = 0}) => {
  const [level, setLevel] = React.useState(baselevl);

  const onIncrement = () => {
    setLevel(level + 1);
  };

  const onDecrement = () => {
    setLevel(level > 0 ? level - 1 : 0);
  };

  return (
    <Wrapper>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Title>Hello {name}!</Title>
      <Title>Level : {level}</Title>
      <View>
        <Btn onPress={onIncrement}>
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
            <BtnTxt>Increment</BtnTxt>
          </LinearGradient>
        </Btn>
        <Btn onPress={onDecrement}>
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
            <BtnTxt>Decrement</BtnTxt>
          </LinearGradient>
        </Btn>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({});
export default Dummy;
