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
      animationType="slide"
      statusBarTranslucent
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
              height: 180,
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  ModalInner: {
    width: '100%',
    backgroundColor: Colors.Dblue,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    elevation: 7,
  },
  btntxt: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    textAlign: 'center',
    color: Colors.white,
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.cyan,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    elevation: 7,
  },
});
