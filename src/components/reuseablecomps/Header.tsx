import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../colors/colors';
import {Fonts} from '../../fonts/fonts';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import User from 'react-native-vector-icons/Entypo';
import {launchImageLibrary} from 'react-native-image-picker';
import Pfp from 'react-native-vector-icons/EvilIcons';

type Props = {
  title: boolean;
  backbtn: boolean;
  profile: boolean;
  titleTxt: string;
};

const Header = ({title, backbtn, profile, titleTxt}: Props) => {
  const route = useRoute();
  const navigation = useNavigation();
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
    <View style={styles.HeadView}>
      {title ? (
        route.name == 'Home' ? (
          <Text style={styles.WlcomTxt}>Welcome {titleTxt} !</Text>
        ) : (
          <Text style={styles.WlcomTxt}>{titleTxt}</Text>
        )
      ) : null}

      {backbtn ? (
        route.name == 'Home' ? (
          <View style={styles.bkBtn}>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => navigation.navigate('Details')}>
              <User name={'user'} size={18} color={Colors.Dblue} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.bkBtn}>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => navigation.goBack()}>
              <Icon name={'left'} size={18} color={Colors.Dblue} />
            </TouchableOpacity>
          </View>
        )
      ) : null}

      {profile ? (
        <View style={styles.ProfView}>
          <View style={styles.pfp}>
            <Image
              source={
                imageUri ? {uri: imageUri} : require('../../images/defuser.png')
              }
              style={styles.img}
              resizeMode="cover"
            />
            <TouchableOpacity style={styles.Pfpicon} onPress={handleGallery}>
              <Pfp name={'camera'} size={22} color={Colors.Dblue} />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  HeadView: {
    width: '100%',
    height: 90,
    backgroundColor: Colors.Dblue,
    padding: 20,
  },
  WlcomTxt: {
    fontFamily: Fonts.bold,
    fontSize: 28,
    marginTop: 24,
    color: Colors.gold,
  },
  bkBtn: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    bottom: 14,
    borderWidth: 1,
    borderColor: Colors.Dblue,
  },
  ProfView: {
    position: 'absolute',
    width: 360,
    height: 60,
    backgroundColor: Colors.Dblue,
    top: 90,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  pfp: {
    alignSelf: 'center',
    width: 111,
    height: 111,
    borderRadius: 111 / 2,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    borderWidth: 2,
    borderColor: Colors.Dblue,
  },
  Pfpicon: {
    position: 'absolute',
    right: 0,
    top: 75,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    elevation: 7,
    borderRadius: 30 / 2,
  },
  img: {
    width: 108,
    height: 108,
    borderRadius: 109 / 2,
  },
});
