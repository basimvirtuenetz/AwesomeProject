import {Colors} from '../colors/colors';
import styled from 'styled-components/native';

export const Wrapper = styled.View({
  flex:1,
  padding: 20,
});
export const Header = styled.View({
  width:'100%',
  height:170,
  padding:10,
  justifyContent:'flex-end'
});
export const Title = styled.Text({
  fontSize: 26,
  color: Colors.Dblue,
  marginVertical: 6,
  fontWeight:'bold',
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
  fontSize: 16,
  color: Colors.Dblue,
  fontWeight: 'bold',
  textAlign:'center'
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
  paddingLeft: 20,
  elevation: '8',
  marginTop: 30,
});
export const Btn = styled.TouchableOpacity({
  width: 180,
  height: 60,
  backgroundColor: Colors.white,
  borderRadius: 40,
  elevation: '8',
  marginVertical: 20,
  alignSelf:'center',
  justifyContent:'center',
  alignItems:'center'
});
export const IconView = styled.Pressable({
  width:40,
  height:40,
  justifyContent:"center",
  alignItems:'center'
});
export const Active = styled.View({
  width:30,
  height:30,
  backgroundColor:Colors.white,
  borderRadius:30,
  justifyContent:'center',
  alignItems:'center',
  elevation:'7'
});
export const ActiveBack = styled.View({
  width:60,
  height:60,
  backgroundColor:Colors.Dblue,
  borderRadius:60,
  marginBottom:30,
  justifyContent:"center",
  alignItems:"center",
})
