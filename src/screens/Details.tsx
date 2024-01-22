import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../colors/colors';
import Icons from 'react-native-vector-icons/EvilIcons';
import {Fonts} from '../fonts/fonts';
import {useNavigation} from '@react-navigation/native';
const Details = () => {
  const navigation = useNavigation();
  const Navs = [
    {
      id: 1,
      title: 'Personal Info',
      icon: 'user',
      navi: 'Personal-Info',
    },
    {
      id: 2,
      title: 'About',
      icon: 'exclamation',
      navi: 'About',
    },
    {
      id: 3,
      title: 'Settings',
      icon: 'gear',
      navi: 'Settings',
    },
    {
      id: 4,
      title: 'Cart',
      icon: 'cart',
      navi: 'Cart',
    },
    {
      id: 5,
      title: 'Share',
      icon: 'share-google',
      navi: 'Home',
    },
    {
      id: 6,
      title: 'Delete',
      icon: 'trash',
      navi: 'Home',
    },
    {
      id: 7,
      title: 'Log-Out',
      icon: 'lock',
      navi: 'Home',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <View style={styles.content}>
        {Navs.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.itemsView}
            onPress={() => navigation.navigate(item.navi)}>
            <Icons name={item.icon} size={30} color={Colors.Dblue} />
            <Text style={styles.titleTxt}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  itemsView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  titleTxt: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    color: Colors.Dblue,
    letterSpacing: 0.5,
    marginLeft: 10,
  },
  content: {
    marginTop: 140,
  },
});
