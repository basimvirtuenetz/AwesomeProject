import { Colors } from '../colors/colors';
import styled from 'styled-components/native';
import { Fonts } from '../fonts/fonts';

export const Wrapper = styled.View({
  flex: 1,
  padding: 15,
});
export const Header = styled.View({
  width: '100%',
  height: 170,
  justifyContent: 'flex-end',
});
export const Title = styled.Text({
  fontSize: 22,
  color: Colors.Dblue,
  marginBottom: 6,
  fontFamily: Fonts.bold,
  marginTop: 12,
});
export const Scroll = styled.ScrollView({
  flex: 2,
});
export const Items = styled.View({
  width: 150,
  height: 150,
  backgroundColor: Colors.white,
  borderRadius: 10,
  margin: 5,
  justifyContent: 'space-evenly',
  alignItems: 'center',
  elevation: '8',
});
export const SubTitle = styled.Text({
  fontSize: 22,
  color: Colors.Dblue,
  fontFamily: Fonts.med,
  textAlign: 'center',
});
export const Des = styled.Text({
  fontSize: 18,
  color: Colors.cyan,
  fontFamily: Fonts.reg,
  textAlign: 'center',
});
export const RowScroll = styled.FlatList({
  flex: 1,
});
export const RowItems = styled.View({
  width: 120,
  height: 140,
  backgroundColor: Colors.white,
  borderRadius: 80,
  marginHorizontal: 10,
  justifyContent: 'space-evenly',
  alignItems: 'center',
  alignSelf: 'center',
  elevation: '8',
});
export const Seperater = styled.View({
  width: 1,
  height: 70,
  backgroundColor: Colors.grey,
  alignSelf: 'center',
  borderRadius: 10,
});
export const Input = styled.TextInput({
  width: '100%',
  height: 50,
  backgroundColor: Colors.white,
  color: Colors.Dblue,
  borderRadius: 10,
  paddingHorizontal: 20,
  elevation: '8',
  fontSize: 18,
  fontFamily: Fonts.reg,
  marginVertical: 14
});
export const Btn = styled.TouchableOpacity({
  width: 180,
  height: 60,
  borderRadius: 40,
  elevation: '8',
  marginVertical: 20,
  alignSelf: 'center',
});
export const BtnTxt = styled.Text({
  fontSize: 18,
  color: Colors.white,
  fontFamily: Fonts.med,
  textAlign: 'center',
});
export const IconView = styled.Pressable({
  width: 40,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
});

export const ActiveBack = styled.View({
  width: 45,
  height: 45,
  borderRadius: 60,
  marginBottom: 52,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: '8',
});
export const Lable = styled.Text({
  fontSize: 16,
  fontFamily: Fonts.reg,
  color: Colors.white,
  position: 'absolute',
  bottom: 30,
  alignSelf: 'center',
});
export const Prof = styled.TouchableOpacity({
  width: 30,
  height: 30,
  backgroundColor: Colors.white,
  borderRadius: 40,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: '7',
  position: 'absolute',
  top: 88,
  left: 90,
});
