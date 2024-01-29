import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Feed from '../screens/feed';
import Main from '../screens/main';
import { Colors } from '../colors/colors';
import Videos from '../screens/videos';
import { Header, Prof, Title } from '../components/styledComp';
import { Fonts } from '../fonts/fonts';
import Icon from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

const Top = createMaterialTopTabNavigator();
const TopNav = () => {
  const userData = useSelector((state: any) => state.user.Username);
  const themeMode = useSelector((state: any) => state.theme.mode);

  return (
    <View style={[styles.container, { backgroundColor: themeMode.background }]}>
      <Header style={{ padding: 6 }}>
        <Image
          source={userData ? { uri: userData.url } : require('../images/defuser.png')}
          style={styles.img}
          resizeMode="cover"
        />
        <LinearGradient
          colors={Colors.Zinc}
          style={[
            styles.pros,
            {
              position: 'absolute',
              top: 10,
              right: 40,
            },
          ]}></LinearGradient>
        <LinearGradient
          colors={Colors.Zinc}
          style={[
            styles.pros,
            {
              position: 'absolute',
              top: 20,
              right: 30,
            },
          ]}></LinearGradient>
        <LinearGradient
          colors={Colors.Zinc}
          style={[
            styles.pros,
            {
              position: 'absolute',
              top: 30,
              right: 20,
            },
          ]}>
          <Icon name={'sc-pinterest'} size={120} color={themeMode.text} />
        </LinearGradient>
        <Title style={{ marginHorizontal: 25, color: themeMode.text }}>Welcome!</Title>
      </Header>
      <Top.Navigator
        screenOptions={{
          tabBarPressColor: Colors.trans,
          tabBarStyle: {
            backgroundColor: themeMode.background,
            width: '100%',
          },
          tabBarIndicatorStyle: {
            width: 85,
            height: 30,
            position: 'absolute',
            bottom: 10,
            left: 16,
            borderRadius: 18,
            backgroundColor: Colors.Lblue,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: Fonts.bold,
          },
          tabBarActiveTintColor: Colors.white,
          tabBarInactiveTintColor: themeMode.text,
        }}>
        <Top.Screen name="Types" component={Main} />
        <Top.Screen name="Images" component={Feed} />
        <Top.Screen name="Videos" component={Videos} />
        {/* <Top.Screen name="Content" component={Content} /> */}
      </Top.Navigator>
    </View>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'flex-start',
    borderRadius: 60,
    marginHorizontal: 20,
  },
  pros: {
    width: 130,
    height: 120,
    borderRadius: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
});
