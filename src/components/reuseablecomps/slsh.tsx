import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../colors/colors';

type Props = {
  children: any;
};
const Slsh = ({children}: Props) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[Colors.Lblue, Colors.Dblue]}
      style={styles.container}>
      {children}
    </LinearGradient>
  );
};

export default Slsh;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
