import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Btn, Input, Title, BtnTxt} from '../components/styledComp';
import {Colors} from '../colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import {PostItem} from '../firebase/postItem';
import EmptyFeildModal from '../components/reuseablecomps/EmptyFeildModal';
import DoneModal from '../components/reuseablecomps/DoneModal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector} from 'react-redux';

const Post = () => {
  const [title, setTitle] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [descr, setDescr] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  const [isVisible1, setIsVisible1] = React.useState(false);
  const themeMode = useSelector(state => state.theme.mode);

  const handlePost = () => {
    if (!title || !price || !descr) {
      setIsVisible(true);
    } else {
      PostItem(title, price, descr);
      setDescr('');
      setPrice('');
      setTitle('');
      setIsVisible1(true);
    }
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[
        styles.wrapper,
        {backgroundColor: themeMode.background},
      ]}>
      <DoneModal
        visible={isVisible1}
        backprs={() => setIsVisible1(false)}
        close={() => setIsVisible1(false)}
      />
      <EmptyFeildModal
        visible={isVisible}
        backprs={() => setIsVisible(false)}
        close={() => setIsVisible(false)}
      />
      <Title style={{alignSelf: 'center', color: themeMode.text}}>Post</Title>
      <Input
        placeholder="Title"
        placeholderTextColor={Colors.Dblue}
        value={title}
        cursorColor={Colors.Dblue}
        onChangeText={text => setTitle(text)}
      />
      <Input
        placeholder="Price"
        placeholderTextColor={Colors.Dblue}
        cursorColor={Colors.Dblue}
        value={price}
        onChangeText={text => setPrice(text)}
      />
      <Input
        placeholder="Description"
        placeholderTextColor={Colors.Dblue}
        value={descr}
        cursorColor={Colors.Dblue}
        onChangeText={text => setDescr(text)}
        multiline
        numberOfLines={20}
        style={styles.destext}
      />
      <Btn onPress={handlePost}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[Colors.Lblue, Colors.Dblue]}
          style={{
            width: 300,
            height: 60,
            borderRadius: 40,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <BtnTxt>Post</BtnTxt>
        </LinearGradient>
      </Btn>
    </KeyboardAwareScrollView>
  );
};

export default Post;

const styles = StyleSheet.create({
  destext: {
    height: 240,
    verticalAlign: 'top',
  },
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
});
