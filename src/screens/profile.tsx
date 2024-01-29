import { StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import { Colors } from '../colors/colors';
import { IconView, Title, Wrapper } from '../components/styledComp';
import { useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native'

const Profile = ({ navigation }: any) => {
  const themeMode = useSelector((state: any) => state.theme.mode)
  return (
    <Wrapper style={{ flexDirection: 'row', backgroundColor: themeMode.background }}>
      <Title style={{ color: themeMode.text }}>Profile</Title>
      <IconView
        onPress={() => navigation.openDrawer()}
        style={{ position: 'absolute', top: 24, right: 24 }}>
        <Icon name={'three-bars'} size={24} color={themeMode.text} />
      </IconView>
    </Wrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({});
