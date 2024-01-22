import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Feed from '../screens/feed';
import Main from '../screens/main';
import {Colors} from '../colors/colors';
import Videos from '../screens/videos';
import Content from '../screens/content';
import {Header, Prof, Title} from '../components/styledComp';
import {Fonts} from '../fonts/fonts';
import Icon from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import {launchImageLibrary} from 'react-native-image-picker';

const Top = createMaterialTopTabNavigator();
const TopNav = () => {
  const [imageUri, setImageUri] = React.useState();
  const handleGallery = async () => {
    try {
      const result: any = await launchImageLibrary({
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
      });
      result?.assets[0] ? setImageUri(result?.assets[0]?.uri) : null;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Header style={{padding: 6}}>
        <Image
          source={imageUri ? {uri: imageUri} : require('../images/defuser.png')}
          style={styles.img}
          resizeMode="cover"
        />
        <Prof onPress={handleGallery} activeOpacity={0.8}>
          <Icon name={'camera'} size={22} color={Colors.Dblue} />
        </Prof>
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
          <Icon name={'sc-pinterest'} size={120} color={Colors.grey} />
        </LinearGradient>
        <Title style={{marginHorizontal: 10}}>Welcome!</Title>
      </Header>
      <Top.Navigator
        screenOptions={{
          tabBarPressColor: Colors.trans,
          tabBarStyle: {
            width: '100%',
          },
          tabBarIndicatorStyle: {
            width: 75,
            height: 30,
            position: 'absolute',
            bottom: 10,
            left: 8,
            borderRadius: 18,
            backgroundColor: Colors.Dblue,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: Fonts.bold,
          },
          tabBarActiveTintColor: Colors.white,
          tabBarInactiveTintColor: Colors.grey,
        }}>
        <Top.Screen name="Types" component={Main} />
        <Top.Screen name="Images" component={Feed} />
        <Top.Screen name="Videos" component={Videos} />
        <Top.Screen name="Content" component={Content} />
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
    marginHorizontal: 10,
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
