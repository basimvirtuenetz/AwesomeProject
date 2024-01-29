import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '../colors/colors';
import Icons from 'react-native-vector-icons/EvilIcons';
import { Fonts } from '../fonts/fonts';
import { useNavigation } from '@react-navigation/native';
import { LogOut } from '../firebase/EmailSignin';
import { DelAcc } from '../firebase/AccDeletion';
import DelAccModal from '../components/reuseablecomps/DelAccModal';
import { useSelector } from 'react-redux';
const Details = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const navigation = useNavigation();
  const themeMode = useSelector((state: any) => state.theme.mode)
  const handleLogout = () => {
    LogOut();
  }
  const handleDelete = () => {
    DelAcc();
  }
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
    }
  ];
  return (
    <View style={{ flex: 1, backgroundColor: themeMode.background }}>
      <DelAccModal visible={isVisible} backprs={handleDelete} close={() => setIsVisible(false)} />
      <View style={styles.content}>
        {Navs.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.itemsView}
            onPress={() => navigation.navigate(item.navi)}>
            <Icons name={item.icon} size={30} color={themeMode.text} />
            <Text style={[styles.titleTxt, { color: themeMode.text }]}>{item.title}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.itemsView}
          onPress={() => setIsVisible(true)}>
          <Icons name={'trash'} size={30} color={themeMode.text} />
          <Text style={[styles.titleTxt, { color: themeMode.text }]}>Delete Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemsView}
          onPress={handleLogout}>
          <Icons name={'lock'} size={30} color={themeMode.text} />
          <Text style={[styles.titleTxt, { color: themeMode.text }]}>Log-Out</Text>
        </TouchableOpacity>
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
