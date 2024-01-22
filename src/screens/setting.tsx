import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../colors/colors';
import {Fonts} from '../fonts/fonts';

const Setting = () => {
  const Items = [
    {
      id: 1,
      title: 'Change password',
    },
    {
      id: 2,
      title: 'Notifications',
    },
    {
      id: 3,
      title: 'Dark-Mode',
    },
    {
      id: 4,
      title: 'Language',
    },
  ];
  return (
    <View style={styles.Wrapper}>
      <View>
        {Items.map(item => (
          <TouchableOpacity
            key={item.id}
            style={{justifyContent: 'center', margin: 10}}>
            <Text style={styles.context}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  context: {
    fontFamily: Fonts.bold,
    fontSize: 26,
    color: Colors.Dblue,
  },
});
