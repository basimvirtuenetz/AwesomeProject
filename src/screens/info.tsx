import { StyleSheet } from 'react-native';
import React from 'react';
import { Input, Title, Wrapper, Btn, BtnTxt } from '../components/styledComp';
import { Colors } from '../colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import { UpdateInfo } from '../firebase/UpdateProf';
import EmptyFeildModal from '../components/reuseablecomps/EmptyFeildModal';
import { useSelector } from 'react-redux';

const Info = () => {
  const [Username, setUsername] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  const themeMode = useSelector((state: any) => state.theme.mode)
  const handlUpdate = () => {
    if (!Username) {
      setIsVisible(true)
    } else {
      UpdateInfo(Username);
    }
  };
  return (
    <Wrapper style={{ backgroundColor: themeMode.background }}>
      <EmptyFeildModal visible={isVisible} backprs={() => setIsVisible(false)} close={() => setIsVisible(false)} />
      <Title style={{ color: themeMode.text }}>Name :</Title>
      <Input
        cursorColor={Colors.Dblue}
        placeholder="Change username"
        placeholderTextColor={Colors.Dblue}
        autoCapitalize="words"
        value={Username}
        onChangeText={(text) => setUsername(text)}
      />
      <Title style={{ color: themeMode.text }}>Current-password :</Title>
      <Input
        cursorColor={Colors.Dblue}
        placeholder="***********"
        placeholderTextColor={Colors.Dblue}
        keyboardAppearance="default"
        keyboardType="visible-password"
      />
      <Title style={{ color: themeMode.text }}>New-password :</Title>
      <Input
        cursorColor={Colors.Dblue}
        placeholder="***********"
        placeholderTextColor={Colors.Dblue}
        keyboardAppearance="default"
        keyboardType="visible-password"
      />
      <Btn activeOpacity={0.7} onPress={handlUpdate}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[Colors.Lblue, Colors.Dblue]}
          style={{
            width: 180,
            height: 60,
            borderRadius: 40,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <BtnTxt>Confirm Changes</BtnTxt>
        </LinearGradient>
      </Btn>
    </Wrapper>
  );
};

export default Info;

const styles = StyleSheet.create({});
