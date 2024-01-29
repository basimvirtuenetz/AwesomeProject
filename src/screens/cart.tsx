import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../colors/colors';
import { Fonts } from '../fonts/fonts';
import { useSelector } from 'react-redux';

const Cart = () => {
  const themeMode = useSelector((state: any) => state.theme.mode)
  return (
    <View style={[styles.Wrapper, { backgroundColor: themeMode.background }]}>
      <Text style={[styles.content, { color: themeMode.text }]}>User's Cart</Text>
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
