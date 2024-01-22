import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../colors/colors';
import {Fonts} from '../fonts/fonts';

const Cart = () => {
  return (
    <View style={styles.Wrapper}>
      <Text style={styles.content}>User's Cart</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  content: {
    fontSize: 40,
    color: Colors.Dblue,
    fontFamily: Fonts.bold,
    textAlign: 'center',
    alignSelf: 'center',
  },
});
