import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../colors/colors';
import {Fonts} from '../../fonts/fonts';
import {Input} from '../styledComp';
import {PostType} from '../../apis/post.interface';
import {Post} from '../../apis/api';

interface Props {
  visible: boolean;
  close: () => void;
  post?: PostType[];
  setPosts?: (updatedPost: PostType[]) => void;
}
const CreatePost: React.FC<Props> = ({visible, close, post, setPosts}) => {
  const handleSubmit = () => {
    Post.createPost(value)
      .then(data => {
        setPosts([data, ...post]);
        setValue({...value, title: '', description: ''});
        close();
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const [value, setValue] = React.useState({
    title: '',
    description: '',
  });
  return (
    <Modal
      visible={visible}
      onRequestClose={close}
      animationType="fade"
      transparent>
      <View style={styles.ModalView}>
        <View style={styles.ModalInner}>
          <Input
            placeholder="Title"
            placeholderTextColor={Colors.Dblue}
            value={value.title}
            onChangeText={(title: string) => setValue({...value, title})}
          />
          <Input
            placeholder="Body"
            placeholderTextColor={Colors.Dblue}
            value={value.description}
            multiline
            style={{
              verticalAlign: 'top',
              padding: 10,
              height: 150,
            }}
            numberOfLines={6}
            onChangeText={(description: string) =>
              setValue({...value, description})
            }
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
            <Text style={styles.btntxt}>Post!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  ModalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  ModalInner: {
    width: '80%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    elevation: 7,
  },
  txt: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    textAlign: 'center',
    color: Colors.white,
  },
  btntxt: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    textAlign: 'center',
    color: Colors.white,
  },
  btn: {
    width: '50%',
    height: 50,
    backgroundColor: Colors.Lblue,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
